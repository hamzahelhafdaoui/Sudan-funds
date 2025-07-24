import { db } from './db'

const GQL_URL = 'https://graphql.gofundme.com/graphql'

// pull campaign and donations
export async function syncGoFundMe(slugOrUrl: string) {
  const slug = parseSlug(slugOrUrl)
  if (!slug) throw new Error('bad url')

  const fundraiserData = await fetchFundraiser(slug)
  upsertFundraiser(slug, fundraiserData)

  // donations pagination
  let endCursor: string | null = null
  while (true) {
    const data = await fetchDonations(slug, 50, endCursor)
    const donations = data.fundraiser.donations.edges
    if (!donations.length) break
    for (const edge of donations) {
      const d = edge.node
      insertDonation(slug, d)
    }
    if (!data.fundraiser.donations.pageInfo.hasNextPage) break
    endCursor = data.fundraiser.donations.pageInfo.endCursor
  }
}

function parseSlug(url: string) {
  if (url.includes('/f/')) {
    const parts = url.split('/f/')
    return parts[1].split(/[?#]/)[0]
  }
  if (/^[a-zA-Z0-9-]+$/.test(url)) return url
  return null
}

async function gql(body: any) {
  const res = await fetch(GQL_URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0'
    }
  })
  const json = await res.json()
  if ((json as any).errors) throw new Error(JSON.stringify(json.errors))
  return json.data
}

async function fetchFundraiser(slug: string) {
  const query = `
  query GetFundraiser($slug: ID!) {
    fundraiser(slug:$slug){
      slug
      name
      description
      donationCount
      currentAmount { amount currencyCode }
      goalAmount { amount currencyCode }
      deactivated
      donationsEnabled
    }
  }`
  const data = await gql({ operationName: 'GetFundraiser', variables: { slug }, query })
  return data.fundraiser
}

async function fetchDonations(slug: string, first = 50, after?: string | null) {
  const query = `
  query GetFundraiserDonations($slug: ID!, $first:Int, $after:String){
    fundraiser(slug:$slug){
      donations(first:$first, after:$after){
        edges{
          node{
            id
            createdAt
            amount{ amount currencyCode }
            name
            isRecurring
          }
        }
        pageInfo{ hasNextPage endCursor }
      }
    donationCount
    currentAmount{ amount currencyCode }
    goalAmount{ amount currencyCode }
    deactivated
    donationsEnabled
    name
    slug
    description
    }
  }`
  return await gql({ operationName: 'GetFundraiserDonations', variables: { slug, first, after }, query })
}

function upsertFundraiser(slug: string, f: any) {
  const stmt = db.prepare(`
    insert into fundraiser(slug,name,description,url,platform,currency,raised,goal,contributions,isActivated,isAccepting)
    values(@slug,@name,@description,@url,'GoFundMe',@currency,@raised,@goal,@contributions,@isActivated,@isAccepting)
    on conflict(slug) do update set
      name=excluded.name,
      description=excluded.description,
      currency=excluded.currency,
      raised=excluded.raised,
      goal=excluded.goal,
      contributions=excluded.contributions,
      isActivated=excluded.isActivated,
      isAccepting=excluded.isAccepting
  `)
  stmt.run({
    slug,
    name: f.name,
    description: f.description || '',
    url: `https://www.gofundme.com/f/${slug}`,
    currency: f.goalAmount.currencyCode,
    raised: f.currentAmount.amount,
    goal: f.goalAmount.amount,
    contributions: f.donationCount,
    isActivated: f.deactivated ? 0 : 1,
    isAccepting: f.donationsEnabled ? 1 : 0
  })
}

function insertDonation(slug: string, d: any) {
  const fundraiserId = db.prepare('select id from fundraiser where slug=?').get(slug)?.id
  if (!fundraiserId) return
  const stmt = db.prepare(`
    insert or replace into donation
    (key,fundraiser,date,isRecurring,contributor,currency,amount,amount_local,data)
    values(@key,@fundraiser,@date,@isRecurring,@contributor,@currency,@amount,@amount_local,@data)
  `)
  stmt.run({
    key: parseInt(d.id),
    fundraiser: fundraiserId,
    date: Math.floor(new Date(d.createdAt).getTime() / 1000),
    isRecurring: d.isRecurring ? 1 : 0,
    contributor: d.name || 'Anonymous',
    currency: d.amount.currencyCode,
    amount: d.amount.amount,
    amount_local: d.amount.amount,
    data: JSON.stringify(d)
  })
}
