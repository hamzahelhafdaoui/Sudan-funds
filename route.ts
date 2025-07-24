import { NextRequest, NextResponse } from 'next/server'
import { syncGoFundMe } from '@/lib/gofundme'

export const runtime = 'nodejs'

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')
  if (!url) return NextResponse.json({ error: 'missing url' }, { status: 400 })
  try {
    await syncGoFundMe(url)
    return NextResponse.json({ ok: true })
  } catch (e:any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
