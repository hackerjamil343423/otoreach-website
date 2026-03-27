import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: "وكالة الأتمتة",
    slug: "automation-agency",
    categories: ["منتج تعليمي", "علامة تجارية شخصية", "استشارات"],
    image: "/landing-page/images/Automation Agency-portfolio.png",
    fullImage: "https://i.postimg.cc/QhVjYwBb/image.png",
    description: "وكالة متخصصة في بناء الأتمتة الرقمية وتطوير الحلول التقنية المتقدمة للشركات والمؤسسات",
    detailedDescription: `
      مشروع وكالة الأتمتة يهدف إلى تقديم حلول تقنية متقدمة للشركات والمؤسسات الرقمية.
      يتضمن المشروع تطوير منصة شاملة للأتمتة الرقمية مع واجهة مستخدم متطورة وتجربة مستخدم استثنائية.

      تم تصميم الموقع ليعكس الطابع التقني المتقدم للوكالة مع التركيز على الوضوح والسهولة في التنقل.
      يحتوي على أقسام متعددة تشمل الخدمات، المشاريع، الفريق، وطرق التواصل.
    `,
    features: [
      "تصميم متجاوب يعمل على جميع الأجهزة",
      "واجهة مستخدم حديثة وسهلة الاستخدام",
      "تحسين محركات البحث (SEO)",
      "سرعة تحميل عالية",
      "تكامل مع أنظمة الدفع",
      "لوحة تحكم إدارية"
    ]
  },
  {
    id: 2,
    title: "منصة المجتمع",
    slug: "community-platform",
    categories: ["منتج تعليمي", "تدريب", "روحانيات"],
    image: "/landing-page/images/community-protfolio.png",
    fullImage: "https://i.postimg.cc/wq6pXG8D/community-otoreach-com.png",
    description: "منصة تفاعلية للمجتمع تهدف إلى ربط الأفراد وتقديم المحتوى التعليمي والتدريبي المتميز",
    detailedDescription: `
      منصة المجتمع هي مساحة رقمية متكاملة تجمع بين التعليم والتفاعل المجتمعي.
      تم تطوير المنصة لتوفر تجربة تعليمية فريدة تجمع بين المحتوى عالي الجودة والتفاعل المجتمعي النشط.

      تتميز المنصة بواجهة مستخدم بديهية وسهلة الاستخدام، مع إمكانيات متقدمة للتفاعل والمشاركة.
      تحتوي على أدوات متنوعة للتعلم والتدريب مع نظام متقدم لإدارة المحتوى والمستخدمين.
    `,
    features: [
      "نظام إدارة المحتوى التعليمي",
      "منتدى تفاعلي للمجتمع",
      "غرف دردشة مباشرة",
      "نظام نقاط ومكافآت",
      "تتبع التقدم والإنجازات",
      "واجهة متعددة اللغات"
    ]
  },
  {
    id: 3,
    title: "خدمة اعلانات",
    slug: "advertising-service",
    categories: ["صفحة مقصودة", "تسويق رقمي", "خدمات"],
    image: "/landing-page/images/khidmat-ahlanat.png",
    fullImage: "https://i.postimg.cc/YpN7mwVp/image.png",
    description: "خدمة متخصصة في إدارة الحملات الإعلانية الرقمية وتحسين الأداء التسويقي للعلامات التجارية",
    detailedDescription: `
      خدمة الإعلانات تقدم حلولاً شاملة للتسويق الرقمي وإدارة الحملات الإعلانية.
      تم تطوير الموقع ليعكس الاحترافية والخبرة في مجال التسويق الرقمي مع التركيز على النتائج والأداء.

      يتضمن الموقع عرضاً شاملاً للخدمات المقدمة مع أمثلة على الحملات الناجحة ونتائج العملاء.
      تم تصميمه ليحول الزوار إلى عملاء من خلال استراتيجية تسويقية محكمة.
    `,
    features: [
      "صفحات مقصودة عالية التحويل",
      "تحليل شامل للجمهور المستهدف",
      "تتبع وقياس النتائج",
      "تحسين الحملات الإعلانية",
      "تقارير مفصلة للأداء",
      "استراتيجيات تسويقية مخصصة"
    ]
  },
  {
    id: 4,
    title: "سيستم طباعة الأموال",
    slug: "money-printing-system",
    categories: ["بناء فانل", "تسويق", "استشارات"],
    image: "/landing-page/images/funnel-service.png",
    fullImage: "https://i.postimg.cc/zqg88hFH/12-3.png",
    description: "نظام متقدم لبناء القمع التسويقي وتحقيق النتائج المالية المتميزة من خلال استراتيجيات مبتكرة",
    detailedDescription: `
      سيستم طباعة الأموال هو نظام تسويقي متقدم يهدف إلى تحقيق نتائج مالية استثنائية.
      تم تطوير النظام بناءً على استراتيجيات مثبتة في التسويق الرقمي وبناء الأقماع التسويقية.

      يتضمن النظام مجموعة من الأدوات والتقنيات المتطورة لبناء وإدارة الأقماع التسويقية بكفاءة عالية.
      حقق النظام نتائج متميزة مع عملائنا، حيث تمكن أحد العملاء من تحقيق 12 ألف دولار خلال 3 أشهر فقط.
    `,
    features: [
      "قمع تسويقي محكم البناء",
      "صفحات بيع عالية التحويل",
      "نظام متابعة تلقائية",
      "تحليل متقدم للعملاء",
      "أتمتة العمليات التسويقية",
      "تقارير مالية مفصلة"
    ]
  }
]

const getCategoryColor = (index: number) => {
  const colors = [
    "bg-accent-lime/20 text-accent-lime border-accent-lime/30",
    "bg-accent-lime-hover/20 text-accent-lime-hover border-accent-lime-hover/30",
    "bg-accent-lime-subtle/50 text-accent-lime border-accent-lime/30",
    "bg-main-gray/20 text-accent-lime border-accent-lime/30"
  ]
  return colors[index % colors.length]
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = portfolioItems.find(item => item.slug === slug)

  if (!work) {
    notFound()
  }


  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Link
            href="/landing-page#portfolio"
            className="inline-flex items-center text-accent-lime hover:text-accent-lime-hover transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            العودة إلى الأعمال
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Title and Categories */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading mb-6 leading-tight">
              {work.title}
            </h1>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {work.categories.map((category, index) => (
                <span
                  key={index}
                  className={`px-6 py-3 rounded-full text-lg font-medium border transition-all duration-300 hover:scale-105 ${getCategoryColor(index)}`}
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-xl text-text-body-dark max-w-4xl mx-auto leading-relaxed">
              {work.description}
            </p>
          </div>

          {/* Main Work Image */}
          <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={work.fullImage}
                alt={work.title}
                className="w-full h-auto object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent"></div>
            </div>

            {/* Browser mockup bar */}
            <div className="absolute top-6 right-6 flex space-x-reverse space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <Link href="/landing-page/apply">
            <button className="bg-accent-lime hover:bg-accent-lime-hover text-main-background px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-full font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-lime/40 inline-flex items-center">
              احجز استشارة مجانية الآن
              <ArrowLeft className="mr-4 w-8 h-8 group-hover:-translate-x-2 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }))
}
