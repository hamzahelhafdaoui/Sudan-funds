import { db } from './db'

function sumSince(fundraiserId: number, since: number) {
  const row = db.prepare('select coalesce(sum(amount_local),0) as total from donation where fundraiser=? and date>=?')
    .get(fundraiserId, since)
  return row.total as number
}

export function buildStats() {
  const now = Math.floor(Date.now()/1000)
  const dayAgo = now - 86400
  const weekAgo = now - 86400*7
  const monthAgo = now - 86400*30
  const yearAgo = now - 86400*365

  const campaigns = db.prepare('select * from fundraiser').all()
  const result = campaigns.map((c: any) => {
    return {
      id: c.id,
      name: c.name,
      url: c.url,
      platform: c.platform,
      currency: c.currency,
      goal: c.goal,
      raised: c.raised,
      percent: c.goal ? Math.round((c.raised/c.goal)*10000)/100 : null,
      contributions: c.contributions,
      momentum: {
        today: sumSince(c.id, dayAgo),
        week: sumSince(c.id, weekAgo),
        month: sumSince(c.id, monthAgo),
        year: sumSince(c.id, yearAgo)
      }
    }
  })
  const top = [...result].sort((a,b)=> b.momentum.week - a.momentum.week).slice(0,10)
  return { generated_at: new Date().toISOString(), campaigns: result, top_rising_week: top }
}
