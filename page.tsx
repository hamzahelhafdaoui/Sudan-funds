'use client'
import React,{useEffect,useState} from 'react'

type Campaign = {
  id:number,name:string,url:string,platform:string,currency:string,goal:number,raised:number,percent:number|null,contributions:number,
  momentum:{today:number,week:number,month:number,year:number}
}
type StatsResponse = { generated_at:string, campaigns:Campaign[], top_rising_week:Campaign[] }

export default function DashboardPage(){
  const[data,setData]=useState<StatsResponse|null>(null)
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    fetch('/api/stats',{cache:'no-store'})
      .then(r=>r.json()).then(setData).finally(()=>setLoading(false))
  },[])
  if(loading) return <div className="p-6">Loading...</div>
  if(!data) return <div className="p-6">Failed</div>
  return (
    <div className="p-6 space-y-8">
      <section>
        <h1 className="text-3xl font-semibold mb-2">Daily Momentum</h1>
        <p className="text-sm text-gray-500 mb-4">Updated {new Date(data.generated_at).toLocaleString()}</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead><tr className="bg-gray-100">
              <th className="p-2 text-left">Campaign</th>
              <th className="p-2 text-right">Raised</th>
              <th className="p-2 text-right">Goal</th>
              <th className="p-2 text-right">% Funded</th>
              <th className="p-2 text-right">Today</th>
              <th className="p-2 text-right">Week</th>
              <th className="p-2 text-right">Month</th>
              <th className="p-2 text-right">Year</th>
            </tr></thead>
            <tbody>
              {data.campaigns.map(c=>(
                <tr key={c.id} className="border-t">
                  <td className="p-2"><a href={c.url} target="_blank" className="text-blue-600 hover:underline">{c.name}</a></td>
                  <td className="p-2 text-right">{c.currency} {c.raised.toLocaleString()}</td>
                  <td className="p-2 text-right">{c.currency} {c.goal.toLocaleString()}</td>
                  <td className="p-2 text-right">{c.percent ?? '-'}</td>
                  <td className="p-2 text-right">{c.currency} {c.momentum.today.toLocaleString()}</td>
                  <td className="p-2 text-right">{c.currency} {c.momentum.week.toLocaleString()}</td>
                  <td className="p-2 text-right">{c.currency} {c.momentum.month.toLocaleString()}</td>
                  <td className="p-2 text-right">{c.currency} {c.momentum.year.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Top Rising Campaigns This Week</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {data.top_rising_week.map(c=>(
            <div key={c.id} className="border rounded p-4 shadow-sm">
              <div className="font-semibold"><a href={c.url} target="_blank" className="hover:underline">{c.name}</a></div>
              <div className="text-xs text-gray-500 mb-2">{c.platform}</div>
              <div className="text-sm"><span className="font-medium">Weekly Growth: </span>{c.currency} {c.momentum.week.toLocaleString()}</div>
              <div className="text-sm">Total Raised: {c.currency} {c.raised.toLocaleString()} / {c.currency} {c.goal.toLocaleString()} ({c.percent ?? 0}%)</div>
              <div className="text-xs text-gray-400 mt-1">Today: {c.currency} {c.momentum.today.toLocaleString()} | Month: {c.currency} {c.momentum.month.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
