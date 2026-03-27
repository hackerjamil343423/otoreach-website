"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';

const solutions = [
  {
    title: 'تشغيلك اليومي بدون إرهاق',
    description: 'نحوّل كل العمليات المتكررة إلى سيستم واضح يعمل بدون اعتمادك على كل قرار صغير.',
    image: '/assets/solution-operations.png',
  },
  {
    title: 'إنتاجية فريقك القصوى',
    description: 'نوزع الأدوار والمسؤوليات بوضوح، وندمج الأتمتة والـ AI لرفع كفاءة الموظفين.',
    image: '/assets/solution-team.png',
  },
  {
    title: 'عمليات ثابتة وواضحة',
    description: 'كل مهمة لها خطوات محددة، كل مشروع يسير بسلاسة، كل فريق يعرف دوره بدون متابعة مستمرة.',
    image: '/assets/solution-operations.png',
  },
  {
    title: 'تسويق ونمو مستقر',
    description: 'ننشئ نظام لجذب العملاء باستمرار، ونقلل الاعتماد على الحملات العشوائية أو الحظ.',
    image: '/assets/solution-marketing.png',
  },
  {
    title: 'استغلال أدوات الـ AI بشكل صحيح',
    description: 'نحدد أين ومتى تستخدم الذكاء الاصطناعي داخل شركتك لتوفير الوقت وزيادة الإنتاجية.',
    image: '/assets/solution-ai.png',
  },
  {
    title: 'حرية وقتك وحياتك الشخصية',
    description: 'أنت تتحكم بالبزنس، لا البزنس يتحكم بك. تركز على الاستراتيجية والنمو بدل التشغيل اليومي.',
    image: '/assets/solution-freedom-new.png',
  },
];

export function SolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 border border-lime/30 text-charcoal text-sm font-medium mb-4">
              الحلول
            </span>
            <h2 className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              ما الذي نصلحه لك
            </h2>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
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
                  <div className="h-48 overflow-hidden bg-white">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-arabic text-lg font-bold text-charcoal mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-body text-sm leading-relaxed">
                      {solution.description}
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
