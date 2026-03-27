'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "أحمد الخالدي",
      title: "مؤسس شركة تقنية",
      text: "خدمة استثنائية! صفحة الهبوط التي صمموها لنا زادت التحويلات بنسبة 300% في أول شهر. الفريق محترف ومتفاني.",
      avatar: "أخ"
    },
    {
      name: "سارة المحمدي",
      title: "مديرة التسويق الرقمي",
      text: "التعامل معهم كان سهل ومريح. سلموا الصفحة في الوقت المحدد وبجودة تفوق التوقعات. أنصح بهم بشدة.",
      avatar: "سم"
    },
    {
      name: "محمد العلي",
      title: "صاحب متجر إلكتروني",
      text: "بعد تطبيق صفحة الهبوط الجديدة، شهدنا زيادة ملحوظة في المبيعات. التصميم احترافي والنتائج مبهرة.",
      avatar: "مع"
    },
    {
      name: "نورا الزهراني",
      title: "مؤسسة استوديو تصميم",
      text: "فريق متميز يفهم احتياجات العملاء. الصفحة التي صمموها عكست هوية علامتنا التجارية بشكل مثالي.",
      avatar: "نز"
    },
    {
      name: "عبدالله الشمري",
      title: "مدير مبيعات",
      text: "النتائج تتحدث عن نفسها. حققنا أفضل معدلات تحويل في تاريخ شركتنا بفضل صفحة الهبوط الجديدة.",
      avatar: "عش"
    },
    {
      name: "فاطمة الراشد",
      title: "رائدة أعمال",
      text: "خدمة عملاء ممتازة ونتائج مذهلة. تعاملهم احترافي وسرعتهم في التنفيذ لا مثيل لها في السوق.",
      avatar: "فر"
    }
  ]

  const getAvatarColor = (index: number) => {
    const colors = [
      "from-blue-400 to-cyan-500",
      "from-purple-400 to-pink-500",
      "from-green-400 to-teal-500",
      "from-orange-400 to-red-500",
      "from-indigo-400 to-blue-500",
      "from-pink-400 to-rose-500"
    ]
    return colors[index % colors.length]
  }

  const StarRating = () => (
    <div className="flex text-accent-lime">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3 w-3" fill="currentColor" />
      ))}
    </div>
  )

  return (
    <section className="py-20 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading mb-6 leading-tight">
            محبوبون من قبل العقول المبدعة
          </h2>
          <p className="text-xl text-text-body-dark max-w-3xl mx-auto leading-relaxed">
            انضم إلى المئات من رواد الأعمال والمبدعين الذين غيروا مسار أعمالهم معنا.
          </p>
        </div>

        {/* Testimonials Container with Gradient Overlays */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream via-cream/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream via-cream/80 to-transparent z-10 pointer-events-none"></div>

          {/* First Row - Right to Left Animation */}
          <div className="testimonial-row-right-to-left mb-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`row1-${index}`} className="p-6 rounded-3xl bg-white border border-gray-light backdrop-blur-sm shrink-0 max-w-sm shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${getAvatarColor(index)} flex items-center justify-center text-white font-semibold text-sm`}>
                    {testimonial.avatar}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-text-heading text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-muted">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-text-body-dark leading-relaxed mb-4 text-sm text-right">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <StarRating />
              </div>
            ))}
          </div>

          {/* Second Row - Left to Right Animation */}
          <div className="testimonial-row-left-to-right">
            {[...testimonials.slice(3), ...testimonials.slice(3)].map((testimonial, index) => (
              <div key={`row2-${index}`} className="p-6 rounded-3xl bg-white border border-gray-light backdrop-blur-sm shrink-0 max-w-sm shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${getAvatarColor(index + 3)} flex items-center justify-center text-white font-semibold text-sm`}>
                    {testimonial.avatar}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-text-heading text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-muted">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-text-body-dark leading-relaxed mb-4 text-sm text-right">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <StarRating />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slideLeftToRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .testimonial-row-right-to-left {
          display: flex;
          width: fit-content;
          gap: 1.5rem;
          animation: slideRightToLeft 60s linear infinite;
        }

        .testimonial-row-left-to-right {
          display: flex;
          width: fit-content;
          gap: 1.5rem;
          animation: slideLeftToRight 70s linear infinite;
        }

        .testimonial-row-right-to-left:hover,
        .testimonial-row-left-to-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
