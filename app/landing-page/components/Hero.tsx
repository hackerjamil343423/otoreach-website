'use client'

import { ArrowLeft } from 'lucide-react'
import VideoSection from './VideoSection'

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cream pt-20 pb-24"
    >
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,246,87,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,246,87,0.12) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(212,246,87,0.08) 0%, transparent 50%)
            `,
            backgroundSize: '50px 50px, 50px 50px, 800px 800px'
          }}
        />
      </div>

      {/* Additional Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,246,87,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,246,87,0.25) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="hero-content text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 rounded-full bg-accent-lime/10 border border-accent-lime/30 text-accent-lime text-sm sm:text-base font-medium mb-8 sm:mb-12 mt-4 sm:mt-6 shadow-2xl shadow-accent-lime/20 animate-fade-in"
          >
            <span className="w-3 h-3 bg-accent-lime rounded-full ml-4 animate-pulse"></span>
            عندك إطلاق منتج قريب محتاج ترفع المبيعات عندك؟
          </div>

          {/* Main Heading with proper RTL spacing */}
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading mb-8 sm:mb-10 leading-tight tracking-tight animate-fade-in-up"
            style={{ lineHeight: '1.2' }}
          >
            <span className="text-text-heading">
              توقف عن خسارة العملاء المحتملين و
              <span className="bg-gradient-to-r from-accent-lime to-accent-lime-hover bg-clip-text text-transparent">احصل على صفحة هبوط
              </span> أو Funnel يطبع أرباح ويفوق أداء صفحاتك الحالية خلال
              <span className="bg-gradient-to-r from-accent-lime to-accent-lime-hover bg-clip-text text-transparent">٧ أيام فقط
              </span>
            </span>
          </h1>

          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center gap-8 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <a href="/landing-page/apply">
                <button className="bg-accent-lime hover:bg-accent-lime-hover text-main-background px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-accent-lime/40 inline-flex items-center group w-full sm:w-auto">
                  احجز استشارة مجانية
                  <ArrowLeft className="mr-4 w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                </button>
              </a>

            </div>

            {/* Video Section */}
            <VideoSection />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-accent-lime/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 left-10 w-6 h-6 bg-accent-lime/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent-lime/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
    </section>
  )
}
