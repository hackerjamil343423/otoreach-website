'use client'

import { ArrowUpLeft } from 'lucide-react'
import Link from 'next/link'

export default function Portfolio() {

  const portfolioItems = [
    {
      id: 1,
      title: "وكالة الأتمتة",
      slug: "automation-agency",
      categories: ["منتج تعليمي", "علامة تجارية شخصية", "استشارات"],
      image: "/landing-page/images/Automation Agency-portfolio.png",
      fullImage: "/landing-page/images/portfolio/أوتو ريتش - بناء وكالات رقمية تعمل بالأتمتة.png",
      description: "وكالة متخصصة في بناء الأتمتة الرقمية وتطوير الحلول التقنية المتقدمة للشركات والمؤسسات"
    },
    {
      id: 2,
      title: "منصة المجتمع",
      slug: "community-platform",
      categories: ["منتج تعليمي", "تدريب", "روحانيات"],
      image: "/landing-page/images/community-protfolio.png",
      fullImage: "/landing-page/images/portfolio/[community.otoreach.com].png",
      description: "منصة تفاعلية للمجتمع تهدف إلى ربط الأفراد وتقديم المحتوى التعليمي والتدريبي المتميز"
    },
    {
      id: 3,
      title: "خدمة اعلانات",
      slug: "advertising-service",
      categories: ["صفحة مقصودة", "تسويق رقمي", "خدمات"],
      image: "/landing-page/images/khidmat-ahlanat.png",
      fullImage: "/landing-page/images/portfolio/خدمة اعلانات.png",
      description: "خدمة متخصصة في إدارة الحملات الإعلانية الرقمية وتحسين الأداء التسويقي للعلامات التجارية"
    },
    {
      id: 4,
      title: "سيستم طباعة الأموال",
      slug: "money-printing-system",
      categories: ["بناء فانل", "تسويق", "استشارات"],
      image: "/landing-page/images/funnel-service.png",
      fullImage: "/landing-page/images/portfolio/سيستم طباعة الأموال - تحقيق 12 ألف دولار خلال 3 أشهر.png",
      description: "نظام متقدم لبناء القمع التسويقي وتحقيق النتائج المالية المتميزة من خلال استراتيجيات مبتكرة"
    }
  ]

  const getCategoryColor = (index: number) => {
    const colors = [
      "bg-gray-100 text-charcoal border-gray-light",
      "bg-accent-lime/10 text-charcoal border-accent-lime/30",
      "bg-cream-dark text-charcoal border-gray-light",
      "bg-gray-50 text-charcoal border-gray-light"
    ]
    return colors[index % colors.length]
  }


  return (
    <section
      id="portfolio"
      className="py-28 lg:py-36 bg-cream relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-accent-lime/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 bg-accent-lime/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading mb-4 sm:mb-6 tracking-tight animate-fade-in-up"
            style={{ lineHeight: '1.2' }}
          >
            أعمالنا
          </h2>
          <p
            className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ lineHeight: '1.8' }}
          >
            عرض لأحدث أعمالنا وحلولنا الإبداعية في مجال الصفحات المقصودة والتسويق الرقمي
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          {portfolioItems.map((item, index) => (
            <Link
              key={item.id}
              href={`/landing-page/work/${item.slug}`}
              className="portfolio-card group bg-white backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-accent-lime/20 transition-all duration-700 border border-gray-light hover:border-accent-lime/40 cursor-pointer animate-fade-in-up transform-gpu"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Apple-style window controls with RTL positioning */}
                <div className="absolute top-6 right-6 flex space-x-reverse space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                </div>

                {/* Animated Hover Arrow */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <div className="w-12 h-12 bg-accent-lime/20 backdrop-blur-md rounded-full flex items-center justify-center border border-accent-lime/40 shadow-lg">
                    <ArrowUpLeft className="w-6 h-6 text-accent-lime" />
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-heading mb-6 group-hover:text-accent-lime transition-colors duration-300 text-right leading-relaxed">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-3 justify-end">
                  {item.categories.map((category, catIndex) => (
                    <span
                      key={catIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${getCategoryColor(catIndex)}`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-lime/5 to-accent-lime-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center animate-fade-in-up">
          <button className="group bg-accent-lime/10 hover:bg-accent-lime/20 backdrop-blur-sm border border-accent-lime/30 hover:border-accent-lime/50 text-text-heading px-10 py-5 rounded-full font-semibold text-xl transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-accent-lime/20 inline-flex items-center">
            عرض جميع الأعمال
            <ArrowUpLeft className="ml-4 w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating background shapes */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent-lime rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent-lime/50 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
    </section>
  )
}
