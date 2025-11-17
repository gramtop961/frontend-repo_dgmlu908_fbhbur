import Hero from './components/Hero'
import Stats from './components/Stats'
import QuickCreate from './components/QuickCreate'
import ContentTable from './components/ContentTable'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <div className="space-y-10 pb-20">
        <Stats />
        <QuickCreate />
        <ContentTable />
      </div>
    </div>
  )
}

export default App
