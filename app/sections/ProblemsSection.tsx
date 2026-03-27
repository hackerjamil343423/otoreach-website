"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';

const problems = [
  {
    title: 'أنت غارق في التشغيل اليومي',
    description: 'وقتك يضيع بين إدارة العملاء والفريق والرد على الأسئلة المتكررة، بينما النمو متوقف.',
    image: '/assets/problem-daily.jpg',
  },
  {
    title: 'تعمل كثيرًا لكن تتقدم ببطء',
    description: 'ساعات طويلة في مهام يمكن تفويضها أو أتمتتها، تنتهي بإرهاق واحتراق وضياع فرص.',
    image: '/assets/problem-slow.png',
  },
  {
    title: 'لا تستطيع التفويض بثقة',
    description: 'تراقب كل شيء بنفسك لأن السيستم غير موجود، والفريق غير مستغل بالكامل.',
    image: '/assets/problem-delegate.png',
  },
  {
    title: 'مشتت بين عشرات أدوات الذكاء الاصطناعي',
    description: 'تجرب أدوات كثيرة بدون نتيجة حقيقية، أو لا تعرف أين ومتى تستخدم الـ AI داخل بزنسك.',
    image: '/assets/problem-ai.png',
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-500 text-sm font-medium mb-4">
              المشاكل
            </span>
            <h2 className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              المشاكل التي تواجهك اليوم
            </h2>
          </motion.div>

          {/* Problems Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden h-full transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 20px rgba(212, 246, 87, 0.15)',
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 8px 40px rgba(212, 246, 87, 0.35)',
                  }}
                >
                  {/* Image - White background to blend */}
                  <div className="h-56 overflow-hidden bg-white">
                    <img
                      src={problem.image}
                      alt={problem.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-arabic text-xl font-bold text-charcoal mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-gray-body text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
