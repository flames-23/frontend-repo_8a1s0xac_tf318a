export default function CardRow({ items = [] }) {
  return (
    <div className="grid grid-flow-col auto-cols-[55%] xs:auto-cols-[45%] sm:auto-cols-[30%] md:auto-cols-[22%] lg:auto-cols-[18%] gap-4 overflow-x-auto scrollbar-thin pb-2">
      {items.map((item, idx) => (
        <a key={idx} href="#" className="group relative aspect-[2/3] rounded-md overflow-hidden">
          <img
            src={item.poster}
            alt={item.title}
            className="w-full h-full object-cover transition group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition">
            <p className="text-white font-semibold text-sm truncate">{item.title}</p>
            <p className="text-gray-300 text-xs">{item.year} • {item.rating}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
