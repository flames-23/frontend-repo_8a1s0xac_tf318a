import { Menu, Search, Bell, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <a href="/" className="text-xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">Streamly</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200/80">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Movies</a>
            <a href="#" className="hover:text-white transition">Series</a>
            <a href="#" className="hover:text-white transition">My List</a>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-white/10 text-white" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 text-white" aria-label="Notifications">
            <Bell size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500 grid place-items-center text-white">
            <User size={18} />
          </div>
          <button className="md:hidden p-2 rounded-full hover:bg-white/10 text-white" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
