import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import CardRow from './components/CardRow'

const trending = [
  { title: 'Neon Nights', year: 2024, rating: 'PG-13', poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Eclipse', year: 2023, rating: 'R', poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Golden Hour', year: 2022, rating: 'PG', poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Midnight Run', year: 2021, rating: 'PG-13', poster: 'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Analog Dreams', year: 2020, rating: 'PG-13', poster: 'https://images.unsplash.com/photo-1526313199968-70e399ffe598?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Frequency', year: 2019, rating: 'PG', poster: 'https://images.unsplash.com/photo-1519160558534-579f51050f19?q=80&w=1200&auto=format&fit=crop' },
]

const newReleases = [
  { title: 'Silver Lining', year: 2024, rating: 'PG-13', poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Cascade', year: 2024, rating: 'PG', poster: 'https://images.unsplash.com/photo-1526313199968-70e399ffe598?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Afterlight', year: 2023, rating: 'PG-13', poster: 'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Glass City', year: 2023, rating: 'R', poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Voyager', year: 2022, rating: 'PG', poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Polaris', year: 2021, rating: 'PG-13', poster: 'https://images.unsplash.com/photo-1519160558534-579f51050f19?q=80&w=1200&auto=format&fit=crop' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />

        <Section title="Trending Now">
          <CardRow items={trending} />
        </Section>

        <Section title="New Releases">
          <CardRow items={newReleases} />
        </Section>

        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-400 text-sm">
          <div className="h-px bg-white/10 mb-6" />
          <p>© {new Date().getFullYear()} Streamly. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
