"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/app/lib/animations';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={staggerItem} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Sparkles className="w-4 h-4 text-lime" />
              <span className="text-sm font-semibold text-white">ابدأ رحلتك الآن</span>
            </div>
          </motion.div>

          <motion.h2 
            variants={staggerItem}
            className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            جاهز لتضاعف إنتاجية شركتك <span className="text-lime">10x</span>؟
          </motion.h2>

          <motion.p 
            variants={staggerItem}
            className="text-lg text-gray-muted max-w-2xl mx-auto leading-relaxed"
          >
            احجز استشارة مجانية مع فريقنا واكتشف كيف يمكننا مساعدتك في بناء أنظمة تشغيلية قوية
          </motion.p>

          <motion.div variants={staggerItem} className="flex justify-center pt-4">
            <motion.a
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-charcoal rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              احجز استشارة مجانية
              <ArrowLeft className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
