'use client'

import { Check, BarChart3, Globe, Palette, Search, FileText, Settings } from 'lucide-react'

export default function Pricing() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      text: "بحث وتحليل سوق ومنافسين"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "كتابة إعلانية عالية التحويل (Copy)"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      text: "تصميم احترافي مخصص لعلامتك التجارية"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      text: "تحسين شامل للتحويل CRO"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      text: "دعم وتعديلات بلا حدود حتى الرضا التام"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      text: "ربط الصفحة بـ Google Analytics لمتابعة الأداء والتحويلات"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "ربط الصفحة بدومينك الخاص (Domain)"
    }
  ]

  return (
    <section id="pricing" className="py-28 lg:py-36 bg-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-accent-lime/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 bg-accent-lime/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading mb-4 sm:mb-6 tracking-tight"
            style={{ lineHeight: '1.2' }}
          >
            كم يكلفك كل هذا؟
          </h2>
          <p
            className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed"
            style={{ lineHeight: '1.8' }}
          >
            بدون لف ودوران السعر ثابت وواضح:
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-light hover:border-accent-lime/40 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-accent-lime/20">

            {/* Price */}
            <div className="text-center mb-8">
              {/* Previous Price - Crossed Out */}
              <div className="mb-2">
                <span className="text-2xl text-text-muted line-through">كان 500$</span>
              </div>

              <div className="flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-accent-lime ml-4" />
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent-lime">
                  78$
                </span>
                <span className="text-2xl text-text-heading mr-4">فقط</span>
              </div>

              {/* Savings Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full text-green-400 text-lg font-semibold mb-4">
                وفر 422$ الآن!
              </div>
              <p className="text-xl text-text-body-dark leading-relaxed">
                مقابل صفحة هبوط كاملة تُبنى خصيصًا لعلامتك، تُسلم خلال
                <span className="text-accent-lime font-bold"> 7 أيام</span>، وتشمل:
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-cream-dark rounded-xl border border-gray-light hover:border-accent-lime/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-accent-lime/20 rounded-xl ml-4 flex-shrink-0">
                    <div className="text-accent-lime">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-text-heading font-medium leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-accent-lime/10 to-accent-lime-hover/10 rounded-2xl p-6 sm:p-8 border border-accent-lime/20 mb-8">
              <p className="text-text-body-dark text-lg leading-relaxed text-center">
                <span className="font-bold text-accent-lime">لو تحسبها بالأرقام:</span> مجرد حملة إعلانات متوسطة ممكن تكلفك أكثر من 500$ في أسبوع واحد لكن الصفحة هذه الغير المحسّنة ممكن تضيّع 70% من هالميزانية بدون مبيعات بينما صفحة احترافية منا إن شاء الله تسترد قيمتها من أول حملة.
              </p>
            </div>

            {/* Final Value Statement */}
            <div className="text-center">
              <p className="text-2xl font-bold text-text-heading mb-2">
                استثمار واحد - أداة بيع تشتغل معك للأبد
              </p>
              <p className="text-xl text-accent-lime mb-8">
                ابدأ الآن وخلال 7 أيام تكون صفحتك شغالة وتجيب لك مبيعات
              </p>

              {/* CTA Button */}
              <a href="/landing-page/apply">
                <button className="group bg-gradient-to-r from-accent-lime to-accent-lime-hover hover:from-accent-lime-hover hover:to-accent-lime text-main-background px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-lime/40">
                  احجز صفحتك الآن - 78$ فقط
                  <span className="inline-block mr-2 group-hover:translate-x-1 transition-transform duration-300">←</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background shapes */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent-lime rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent-lime/50 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
    </section>
  )
}
