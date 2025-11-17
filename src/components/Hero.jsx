import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-white/10">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Live CMS Dashboard
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
          A modern dashboard for content management
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
          Organize, publish, and analyze content across your channels with a beautiful, fast experience.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#quick-create" className="rounded-lg bg-slate-900 px-5 py-3 text-white shadow-md transition hover:bg-slate-800">Quick create</a>
          <a href="#content" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50">Browse content</a>
        </div>
      </div>
    </section>
  );
}
