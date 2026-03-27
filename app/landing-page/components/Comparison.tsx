'use client'

import { Check, X, ArrowRight } from 'lucide-react'

export default function Comparison() {
  const features = [
    "تسليم خلال 7 أيام بضمان",
    "فريق محترف مخصص",
    "خبرة إطلاقات 7 أرقام",
    "تعديلات غير محدودة",
    "تحسين تحويل شامل CRO",
    "دعم بعد الإطلاق 30 يوم",
    "تصميم مخصّص بعلامتك"
  ]

  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
            نحن
            <span className="block bg-gradient-to-r from-lime to-lime-hover bg-clip-text text-transparent">
              مقابل الوكالات الأخرى
            </span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-light overflow-hidden shadow-sm">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-3 gap-4 p-4 sm:p-6 lg:p-8 border-b border-gray-light">
              <div className="text-right">
                <span className="text-sm font-medium text-gray-body">الميزة</span>
              </div>
              <div className="text-center">
                <div className="bg-lime rounded-2xl p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal">نحن</h3>
                  <p className="text-charcoal/70 mt-1 text-sm">الخيار المحترف</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-cream-dark rounded-2xl p-4 sm:p-6 border border-gray-light">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal">وكالات أخرى</h3>
                  <p className="text-gray-muted mt-1 text-sm">خيارات عادية</p>
                </div>
              </div>
            </div>

            {/* Mobile Header - Stacked */}
            <div className="sm:hidden p-4 border-b border-gray-light flex items-center justify-between gap-4">
              <div className="flex-1 text-center bg-lime rounded-xl py-3">
                <span className="font-bold text-charcoal">نحن</span>
              </div>
              <div className="flex-1 text-center bg-cream-dark rounded-xl py-3 border border-gray-light">
                <span className="font-bold text-charcoal">وكالات أخرى</span>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-0">
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-3 gap-2 sm:gap-4 items-center py-4 border-b border-gray-light last:border-b-0">
                    {/* Feature Name */}
                    <div className="text-charcoal font-medium text-sm sm:text-lg text-right">
                      {feature}
                    </div>

                    {/* نحن */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-lime/20 rounded-full">
                        <Check className="w-4 h-4 sm:w-6 sm:h-6 text-charcoal" />
                      </div>
                    </div>

                    {/* Other Agencies */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full">
                        <X className="w-4 h-4 sm:w-6 sm:h-6 text-red-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-6 sm:p-8 bg-lime/5 border-t border-gray-light">
              <div className="text-center">
                <a href="/landing-page/apply">
                  <button className="group bg-lime hover:bg-lime-hover text-charcoal px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-lime/40 inline-flex items-center">
                    أختاركم
                    <ArrowRight className="mr-4 w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
