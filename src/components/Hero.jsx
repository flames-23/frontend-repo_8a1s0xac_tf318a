import { Play, Info } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <img
          src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2000&auto=format&fit=crop"
          alt="Featured backdrop"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Discover. Watch. Repeat.
          </h1>
          <p className="mt-4 text-lg text-gray-200/90">
            Binge the best movies and series tailored to your taste. Clean design, fast browsing, and endless entertainment.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-md hover:bg-gray-100 transition">
              <Play size={18} /> Play
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-5 py-3 rounded-md hover:bg-white/20 transition">
              <Info size={18} /> More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
