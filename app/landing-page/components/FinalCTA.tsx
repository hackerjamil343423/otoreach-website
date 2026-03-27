'use client'

import { ArrowLeft, Check } from 'lucide-react'

export default function FinalCTA() {
  const benefits: string[] = [
    "استشارة مجانية لمدة 30 دقيقة",
    "تحليل شامل لموقعك الحالي",
    "خطة مخصصة لتحسين التحويلات",
    "تقدير دقيق للتكلفة والوقت"
  ]

  return (
    <section className="py-20 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            جاهز لصفحة هبوط تحوّل الزوار
            <span className="block bg-gradient-to-r from-lime to-lime-hover bg-clip-text text-transparent">
              إلى عملاء؟
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            احجز استشارة مجانية لمناقشة مشروعك والحصول على خطة مخصصة—خلال 7 أيام فقط.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-right">
                <div className="flex items-center justify-start">
                  <span className="text-white text-lg font-medium">{benefit}</span>
                  <Check className="w-6 h-6 text-lime mr-4 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Urgency */}
          <div className="bg-lime/10 rounded-3xl p-8 border border-lime/30 mb-12">
            <p className="text-lime text-xl font-bold mb-2">
              مشاريع محدودة شهريًا
            </p>
            <p className="text-gray-300 text-lg">
              نقبل 5 مشاريع شهريًا فقط لضمان الجودة والسرعة.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
            <a href="/landing-page/apply">
              <button className="bg-lime hover:bg-lime-hover text-charcoal px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-full font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-lime/40 inline-flex items-center w-full sm:w-auto">
                احجز استشارة مجانية الآن
                <ArrowLeft className="mr-4 w-8 h-8 group-hover:-translate-x-2 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
