export default function App() {
  return (
    <div className="relative min-h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.postimg.cc/TPjScfTJ/Whats-App-Image-2026-07-23-at-6-36-21-AM.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center text-center px-6">
        <div className="p-10 max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl border-white/20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Pakistan AI Explorer</h1>
          <p className="text-lg md:text-xl text-green-100 mb-8">
            Discover 100+ Cities, Tourist Attractions, Travel Costs and AI-Powered Travel Plans Across Pakistan
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-full text-xl">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  )
}
