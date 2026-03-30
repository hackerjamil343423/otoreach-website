import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Features from './components/Features'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Comparison from './components/Comparison'
import FinalCTA from './components/FinalCTA'
import { Footer } from '@/app/sections/Footer'

export default function LandingPageHome() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <Hero />
      <Portfolio />
      <Features />
      <Process />
      <Pricing />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  )
}
