'use client';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { IneffectiveSolutions } from './components/IneffectiveSolutions';
import { SolutionSection } from './components/SolutionSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { ChannelsSection } from './components/ChannelsSection';
import { JourneySection } from './components/JourneySection';
import { Footer } from '@/app/sections/Footer';

export default function ChatbotPage() {
  return (
    <div
      className="chatbot-page min-h-screen flex flex-col w-full overflow-x-hidden bg-slate-50/50 relative selection:bg-brand-orange selection:text-white"
      dir="rtl"
    >
      {/* Global Ambient Orbs */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-charcoal/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-lime/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0" />

      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <ProblemSection />
        <IneffectiveSolutions />
        <SolutionSection />
        <DeliverablesSection />
        <ChannelsSection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
}
