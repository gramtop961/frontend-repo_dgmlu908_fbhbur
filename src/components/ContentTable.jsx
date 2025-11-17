import { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function ContentTable() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/content`)
        if (!res.ok) throw new Error('Failed to fetch content')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="px-6">Loading content…</div>
  if (error) return <div className="px-6 text-red-600">{error}</div>

  return (
    <section id="content" className="mx-auto max-w-7xl px-6">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full table-auto text-left">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-sm font-medium">Title</th>
              <th className="px-4 py-3 text-sm font-medium">Status</th>
              <th className="px-4 py-3 text-sm font-medium">Author</th>
              <th className="px-4 py-3 text-sm font-medium">Tags</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((it) => (
              <tr key={it.id} className="hover:bg-slate-50/60">
                <td className="px-4 py-3">{it.title}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1 text-xs text-white">
                    {it.status}
                  </span>
                </td>
                <td className="px-4 py-3">{it.author || '—'}</td>
                <td className="px-4 py-3 text-slate-500">{(it.tags || []).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
