import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('home')

  const Nav = () => (
    <div className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-green-700 text-white font-bold px-3 py-2 rounded-full">PK</div>
        <div>
          <div className="font-bold">Pakistan AI</div>
          <div className="text-xs text-gray-500">EXPLORER</div>
        </div>
      </div>
      <button className="bg-green-700 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-800">Plan a trip</button>
    </div>
  )

  const Menu = () => (
    <div className="bg-gray-100 p-3 flex gap-2 md:gap-6 justify-center text-sm overflow-x-auto">
      {['home','explore','ai','calculator','hidden','stats','profile'].map(p => (
        <button key={p} onClick={() => setPage(p)} 
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${page===p ? 'bg-white font-bold shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
          {p==='home' && 'Home'}
          {p==='explore' && 'Explore'}
          {p==='ai' && 'AI Planner'}
          {p==='calculator' && 'Calculator'}
          {p==='hidden' && 'Hidden Gems'}
          {p==='stats' && 'Stats'}
          {p==='profile' && 'Profile'}
        </button>
      ))}
    </div>
  )

  if (page === 'home') return (
    <div className="min-h-screen bg-gray-50">
      <Nav /><Menu />
      <div className="relative text-center p-20 bg-gradient-to-b from-black to-gray-800 text-white">
        <h1 className="text-5xl font-bold">Pakistan <span className="text-teal-400">AI Explorer</span></h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Discover 100+ Cities, Tourist Attractions, Travel Costs and AI-Powered Travel Plans Across Pakistan</p>
        <button onClick={() => setPage('explore')} className="mt-8 bg-teal-400 text-black font-bold px-10 py-4 rounded-full text-xl hover:bg-teal-300">
          Start Exploring →
        </button>
        <p onClick={() => setPage('ai')} className="mt-4 underline cursor-pointer">or plan a trip with AI →</p>
        <input placeholder="Search cities, valleys, forts, provinces..." className="mt-8 w-full max-w-2xl p-4 rounded-lg text-black"/>
      </div>
    </div>
  )

  if (page === 'explore') return (
    <div className="min-h-screen bg-gray-50">
      <Nav /><Menu />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Explore 100+ Cities</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 shadow bg-white"><h2 className="font-bold text-xl">Hunza Valley</h2><p className="text-sm text-gray-600">Gilgit-Baltistan • Mountains</p><p className="text-green-600 font-bold mt-2">PKR 8,000/day</p></div>
          <div className="border rounded-lg p-4 shadow bg-white"><h2 className="font-bold text-xl">Lahore</h2><p className="text-sm text-gray-600">Punjab • Culture</p><p className="text-green-600 font-bold mt-2">PKR 5,000/day</p></div>
          <div className="border rounded-lg p-4 shadow bg-white"><h2 className="font-bold text-xl">Islamabad</h2><p className="text-sm text-gray-600">Capital • Modern</p><p className="text-green-600 font-bold mt-2">PKR 6,000/day</p></div>
          <div className="border rounded-lg p-4 shadow bg-white"><h2 className="font-bold text-xl">Karachi</h2><p className="text-sm text-gray-600">Sindh • Beach</p><p className="text-green-600 font-bold mt-2">PKR 4,500/day</p></div>
          <div className="border rounded-lg p-4 shadow bg-white"><h2 className="font-bold text-xl">Swat</h2><p className="text-sm text-gray-600">KPK • Valley</p><p className="text-green-600 font-bold mt-2">PKR 5,500/day</p></div>
          <div className="border rounded-lg p-4 shadow bg-white"><h2 className="font-bold text-xl">Gwadar</h2><p className="text-sm text-gray-600">Balochistan • Coast</p><p className="text-green-600 font-bold mt-2">PKR 7,000/day</p></div>
        </div>
      </div>
    </div>
  )

  if (page === 'ai') return (
    <div className="min-h-screen bg-gray-50">
      <Nav /><Menu />
      <div className="p-10 max-w-2xl mx-auto">
        <p className="text-sm text-gray-500">AI PLANNER</p>
        <h1 className="text-3xl font-bold">Plan your Pakistan trip</h1>
        <p className="text-gray-600">Answer a few questions — we'll draft a day-wise itinerary with hotels, food and costs.</p>
        <div className="mt-6 space-y-4">
          <div><label className="text-sm">STARTING CITY</label><input defaultValue="Islamabad" className="border p-3 w-full rounded mt-1"/></div>
          <div><label className="text-sm">DESTINATION</label><select className="border p-3 w-full rounded mt-1"><option>Hunza Valley — Gilgit Baltistan</option></select></div>
          <div><label className="text-sm">BUDGET (PKR)</label><input defaultValue="60000" className="border p-3 w-full rounded mt-1"/></div>
          <div><label className="text-sm">NUMBER OF DAYS</label><input defaultValue="4" className="border p-3 w-full rounded mt-1"/></div>
        </div>
      </div>
    </div>
  )

  if (page === 'calculator') return (
    <div className="min-h-screen bg-gray-50">
      <Nav /><Menu />
      <div className="p-10 max-w-2xl mx-auto">
        <p className="text-sm text-gray-500">CALCULATOR</p>
        <h1 className="text-3xl font-bold">Trip Cost Calculator</h1>
        <div className="flex gap-2 mt-4">
          <button className="border px-6 py-2 rounded">Budget</button>
          <button className="bg-green-700 text-white px-6 py-2 rounded">Standard</button>
          <button className="border px-6 py-2 rounded">Luxury</button>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg mt-6">
          <p className="text-sm">TOTAL ESTIMATE (~269 KM)</p>
          <p className="text-4xl font-bold">PKR 27,228</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white/20 p-3 rounded"><p className="text-xs">TRANSPORT</p><p className="font-bold">PKR 3,228</p></div>
            <div className="bg-white/20 p-3 rounded"><p className="text-xs">HOTEL</p><p className="font-bold">PKR 13,200</p></div>
            <div className="bg-white/20 p-3 rounded"><p className="text-xs">FOOD</p><p className="font-bold">PKR 6,000</p></div>
            <div className="bg-white/20 p-3 rounded"><p className="text-xs">MISC</p><p className="font-bold">PKR 4,800</p></div>
          </div>
        </div>
      </div>
    </div
