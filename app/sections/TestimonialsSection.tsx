"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'بفضل OTO Reach، تمكنا من أتمتة 70% من عملياتنا اليومية ورفع إنتاجية الفريق بشكل ملحوظ.',
    author: 'أحمد محمد',
    role: 'مؤسس شركة تقنية',
    rating: 5,
    avatar: 'أم',
  },
  {
    quote: 'الشات بوت الذي بنوه لنا غيّر طريقة تعاملنا مع العملاء. نجيب على استفساراتهم 24/7 بدون مجهود.',
    author: 'سارة العلي',
    role: 'مديرة تسويق',
    rating: 5,
    avatar: 'سع',
  },
  {
    quote: 'أخيرًا استطعت التفويض بثقة للفريق. الأنظمة التي بنوها واضحة وفعالة.',
    author: 'خالد الراشد',
    role: 'صاحب متجر إلكتروني',
    rating: 5,
    avatar: 'خر',
  },
  {
    quote: 'وفّرنا أكثر من 20 ساعة أسبوعيًا بفضل الأتمتة. الاستثمار يستحق كل قرش.',
    author: 'نورة الفهد',
    role: 'مؤسسة وكالة إعلانية',
    rating: 5,
    avatar: 'نف',
  },
  {
    quote: 'مجتمع المؤسسين كان نقطة تحول في بزنسي. تعلمت كثيرًا من خبرات الآخرين.',
    author: 'فهد السالم',
    role: 'رائد أعمال',
    rating: 5,
    avatar: 'فس',
  },
  {
    quote: 'أداة "وكلني" سهّلت علينا إدارة الحملات الإعلانية ورفعت ROI بنسبة 40%.',
    author: 'ليلى الحسن',
    role: 'مديرة نمو',
    rating: 5,
    avatar: 'لح',
  },
];

export function TestimonialsSection() {
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
              آراء العملاء
            </span>
            <h2 className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              ماذا يقول عملاؤنا
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className="bg-white border border-gray-light rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-lime mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-lime fill-lime" />
                    ))}
                  </div>
                  
                  {/* Quote Text */}
                  <p className="text-gray-body text-sm leading-relaxed flex-1 mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center text-sm font-bold text-charcoal">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">{testimonial.author}</p>
                      <p className="text-gray-muted text-xs">{testimonial.role}</p>
                    </div>
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
