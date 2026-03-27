import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Features from './components/Features'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Comparison from './components/Comparison'
import FinalCTA from './components/FinalCTA'

export default function LandingPageHome() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <Hero />
      <Portfolio />
      <Features />
      <Process />
      <Pricing />
      <Testimonials />
      <Comparison />
      <FinalCTA />
    </main>
  )
}
