import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('home')

  const Nav = () => (
    <div className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-green-700 text-white font-bold px-3 py-2 rounded-full">PK</div>
        <div><div className="font-bold">Pakistan AI</div><div className="text-xs text-gray-500">EXPLORER</div></div>
      </div>
      <button className="bg-green-700 text-white px-4 py-2 rounded-lg font-bold">Plan a trip</button>
    </div>
  )

  const Menu = () => (
    <div className="bg-gray-100 p-3 flex gap-2 md:gap-6 justify-center text-sm overflow-x-auto">
      {['home','explore','ai','calculator','hidden','stats','profile'].map(p => (
        <button key={p} onClick={() => setPage(p)} className={`px-4 py-2 rounded-lg ${page===p ? 'bg-white font-bold shadow' : 'text-gray-600'}`}>
          {p==='home' && 'Home'}{p==='explore' && 'Explore'}{p==='ai' && 'AI Planner'}{p==='calculator' && 'Calculator'}{p==='hidden' && 'Hidden Gems'}{p==='stats' && 'Stats'}{p==='profile' && 'Profile'}
        </button>
      ))}
    </div>
  )

  if (page === 'home') return (
    <div className="min-h-screen bg-gray-50">
      <Nav /><Menu />
      <div className="text-center p-20 bg-gradient-to-b from-black to-gray-800 text-white">
        <h1 className="text-5xl font-bold">Pakistan <span className="text-teal-400">AI Explorer</span></h1>
        <p className="mt-4">Discover 100+ Cities, Tourist Attractions, Travel Costs and AI-Powered Travel Plans Across Pakistan</p>
        <button onClick={() => setPage('explore')} className="mt-8 bg-teal-400 text-black font-bold px-10 py-4 rounded-full text-xl">
          Start Exploring →
        </button>
      </div>
    </div>
  )

  if (page === 'explore') return (<div className="min-h-screen bg-gray-50"><Nav /><Menu /><div className="p-10"><h1 className="text-3xl font-bold">Explore 100+ Cities</h1></div></div>)
  if (page === 'ai') return (<div className="min-h-screen bg-gray-50"><Nav /><Menu /><div className="p-10"><h1 className="text-3xl font-bold">AI Planner</h1></div></div>)
  if (page === 'calculator') return (<div className="min-h-screen bg-gray-50"><Nav /><Menu /><div className="p-10"><h1 className="text-3xl font-bold">Calculator</h1></div></div>)
  if (page === 'hidden') return (<div className="min-h-screen bg-gray-50"><Nav /><Menu /><div className="p-10"><h1 className="text-3xl font-bold">Hidden Gems</h1></div></div>)
  if (page === 'stats') return (<div className="min-h-screen bg-gray-50"><Nav /><Menu /><div className="p-10"><h1 className="text-3xl font-bold">Stats</h1></div></div>)
  if (page === 'profile') return (<div className="min-h-screen bg-gray-50"><Nav /><Menu /><div className="p-10"><h1 className="text-3xl font-bold">Profile</h1></div></div>)
}
