export default function Section({ title, children }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition">See all</a>
      </div>
      {children}
    </section>
  )
}
