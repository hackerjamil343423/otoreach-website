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
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading mb-6 leading-tight">
            نحن
            <span className="block bg-gradient-to-r from-accent-lime to-accent-lime-hover bg-clip-text text-transparent">
              مقابل الوكالات الأخرى
            </span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white backdrop-blur-sm rounded-3xl border border-gray-light overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 border-b border-gray-light">
              <div className="text-right">
                <h3 className="text-xl font-bold text-text-heading mb-2">الميزة</h3>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-accent-lime to-accent-lime-hover rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-main-background">نحن</h3>
                  <p className="text-main-background mt-2">الخيار المحترف</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-cream-dark rounded-2xl p-6 border border-gray-light">
                  <h3 className="text-2xl font-bold text-text-heading">وكالات أخرى</h3>
                  <p className="text-text-muted mt-2">خيارات عادية</p>
                </div>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center py-4 border-b border-gray-light last:border-b-0">
                    {/* Feature Name */}
                    <div className="text-text-heading font-medium text-lg text-right">
                      {feature}
                    </div>

                    {/* نحن */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-accent-lime/20 rounded-full">
                        <Check className="w-6 h-6 text-accent-lime" />
                      </div>
                    </div>

                    {/* Other Agencies */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-red-600/20 rounded-full">
                        <X className="w-6 h-6 text-red-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-8 bg-gradient-to-r from-accent-lime/10 to-accent-lime-hover/10 border-t border-gray-light">
              <div className="text-center">
                <a href="/landing-page/apply">
                  <button className="group bg-accent-lime hover:bg-accent-lime-hover text-main-background px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-lime/40 inline-flex items-center">
                    أختاركم
                    <ArrowRight className="mr-4 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
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
