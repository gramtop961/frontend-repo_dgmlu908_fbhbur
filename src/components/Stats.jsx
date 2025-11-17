export default function Stats({ stats = [] }) {
  const items = stats.length ? stats : [
    { label: 'Published', value: 128 },
    { label: 'Drafts', value: 42 },
    { label: 'Review', value: 9 },
    { label: 'Views (30d)', value: '24.1k' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((s, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-2xl font-semibold text-slate-900">{s.value}</div>
            <div className="mt-1 text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
