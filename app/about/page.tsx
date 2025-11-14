import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">About ACMT Campus</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-4">
            This page is under development. Check back soon for more information about ACMT Campus.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
