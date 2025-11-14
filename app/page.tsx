import Navigation from '@/components/navigation'
import ComingSoonHero from '@/components/coming-soon-hero'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <ComingSoonHero />
      <Footer />
    </main>
  )
}
