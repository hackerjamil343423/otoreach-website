"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';
import { ArrowLeft } from 'lucide-react';

const services = [
  {
    title: 'بناء شات بوت AI',
    description: 'روبوتات ذكية تتواصل مع العملاء، تجيب على الاستفسارات، وتحرر وقت فريقك للمهام الأهم.',
    cta: 'اطلب بوتك',
    href: '/chatbot',
    image: '/assets/service-chatbot-3d.png',
  },
  {
    title: 'أداة "تلميح" لتحسين الأوامر',
    description: 'تحوّل أي تعليمات إلى أوامر دقيقة وفعّالة، لتستفيد من أدوات الذكاء الاصطناعي بأقصى قوة.',
    cta: 'جرب الأداة',
    href: '#',
    image: '/assets/service-telmeeh-3d.png',
  },
  {
    title: 'بناء صفحات هبوط',
    description: 'صفحات مصممة لتحويل الزوار إلى عملاء، متكاملة مع أنظمتك التشغيلية وأدوات التسويق.',
    cta: 'اطلب صفحتك',
    href: '/landing-page',
    image: '/assets/service-landing-3d.png',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream-dark">
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
              خدماتنا
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              خدماتنا ومنتجاتنا
            </h2>
          </motion.div>

          {/* Services Grid - 2 columns, zigzag layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.a
                key={service.title}
                href={service.href}
                variants={staggerItem}
                className="group block"
              >
                <div className={`bg-white border border-gray-light rounded-2xl p-8 h-full flex flex-col sm:flex-row items-center gap-8 transition-all duration-300 hover:border-lime/40 hover:shadow-lg ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="w-full sm:w-[45%] flex items-center justify-center flex-shrink-0">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full max-h-48 object-contain"
                      />
                    ) : (
                      <span className="text-charcoal/10 text-7xl font-mono font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="w-full sm:w-[55%] flex flex-col text-center sm:text-right">
                    <h3 className="text-xl font-bold text-charcoal mb-3 leading-relaxed">
                      {service.title}
                    </h3>
                    <p className="text-gray-body leading-relaxed flex-1 text-sm">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-charcoal/70 transition-all duration-300 group-hover:text-lime group-hover:gap-3">
                      {service.cta}
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
