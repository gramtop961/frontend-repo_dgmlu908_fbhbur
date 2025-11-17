import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function QuickCreate() {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('draft')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setMessage('')
    try {
      const res = await fetch(`${BACKEND_URL}/api/content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, status, body: '', author: 'You', tags: [] })
      })
      if (!res.ok) throw new Error('Failed to create content')
      setTitle('')
      setStatus('draft')
      setMessage('Created! Refresh the table below to see it.')
    } catch (e) {
      setMessage(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <section id="quick-create" className="mx-auto max-w-7xl px-6">
      <form onSubmit={handleSubmit} className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_160px_120px_auto]">
        <input
          className="rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-900 focus:outline-none"
          placeholder="Quick title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-900 focus:outline-none"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-slate-900 px-4 py-2 text-white shadow-sm transition hover:bg-slate-800 disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Create'}
        </button>
        {message && <div className="self-center text-sm text-slate-600">{message}</div>}
      </form>
    </section>
  )
}
