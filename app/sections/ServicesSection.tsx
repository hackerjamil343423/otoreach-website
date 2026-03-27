"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';
import { ArrowLeft } from 'lucide-react';

const services = [
  {
    title: 'مجتمع المؤسسين',
    description: 'شبكة حصرية للمؤسسين لتبادل الخبرات، الموارد، والدعم في بناء أنظمة تشغيل قوية ونمو مستدام.',
    image: '/assets/service-community-new.png',
    cta: 'انضم للمجتمع',
    href: '#',
  },
  {
    title: 'خدمة بناء نظام تشغيلي وأتمتة العمليات',
    description: 'نحوّل عملك اليومي إلى سيستم واضح يعمل تلقائيًا، ويدمج الذكاء الاصطناعي لتسريع النمو ورفع إنتاجية الفريق.',
    image: '/assets/service-system.png',
    cta: 'ابدأ الآن',
    href: '#',
  },
  {
    title: 'خدمة بناء شات بوت AI',
    description: 'روبوتات ذكية تتواصل مع العملاء، تجيب على الاستفسارات، وتحرر وقت فريقك للمهام الأهم.',
    image: '/assets/service-chatbot-new.png',
    cta: 'اطلب بوتك',
    href: '/chatbot',
  },
  {
    title: 'أداة "تلميح" لتحسين الأوامر',
    description: 'تحوّل أي تعليمات إلى أوامر دقيقة وفعّالة، لتستفيد من أدوات الذكاء الاصطناعي بأقصى قوة.',
    image: '/assets/service-telmeeh.png',
    cta: 'جرب الأداة',
    href: '#',
  },
  {
    title: 'أداة "وكلني"',
    description: 'ربط منصاتك الإعلانية بمكان واحد مع ذكاء اصطناعي يحسّن أداء حملاتك الإعلانية ويزيد كفاءتها.',
    image: '/assets/service-wakilni.png',
    cta: 'اكتشف المزيد',
    href: '#',
  },
  {
    title: 'خدمة بناء صفحات هبوط',
    description: 'صفحات مصممة لتحويل الزوار إلى عملاء، متكاملة مع أنظمتك التشغيلية وأدوات التسويق.',
    image: '/assets/service-landing-new.png',
    cta: 'اطلب صفحتك',
    href: '/landing-page',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
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
            <h2 className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              خدماتنا ومنتجاتنا
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300"
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
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-arabic text-lg font-bold text-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-body text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    <motion.a
                      href={service.href}
                      className="inline-flex items-center gap-2 mt-4 text-charcoal text-sm font-medium hover:text-lime transition-colors"
                      whileHover={{ x: -4 }}
                    >
                      {service.cta}
                      <ArrowLeft className="w-4 h-4" />
                    </motion.a>
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
