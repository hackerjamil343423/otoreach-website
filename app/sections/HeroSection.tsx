"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/app/lib/animations';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17, 17, 17, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 17, 17, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-64"
        style={{
          background:
            'radial-gradient(circle at top, rgba(212, 246, 87, 0.12), rgba(250, 249, 246, 0) 60%)',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative space-y-8"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/85 px-4 py-2 shadow-card backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-lime/70" />
              <span className="text-sm font-semibold tracking-wide text-charcoal">للشركات التي تريد التطور</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={staggerItem}
            className="font-arabic text-3xl sm:text-4xl lg:text-6xl font-bold text-charcoal leading-[1.25] lg:leading-[1.3] tracking-tight"
          >
            نضاعف إنتاجية الشركات <span className="text-charcoal/75">10x</span> عبر الأتمتة والذكاء الاصطناعي والأنظمة التشغيلية
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={staggerItem}
            className="text-lg sm:text-xl text-gray-body max-w-3xl mx-auto leading-relaxed"
          >
            نساعدك على تشغيل بزنسك بدون الحاجة للعمل 10 ساعات يوميًا، عبر بناء نظام تشغيلي واضح ودمج الذكاء الاصطناعي وأتمتة العمليات، لرفع إنتاجية فريقك وتسريع نمو شركتك
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={staggerItem} className="flex justify-center pt-4">
            <motion.a
              href="#consultation"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-charcoal px-8 py-4 text-sm font-semibold text-cream transition-all shadow-[0_14px_30px_rgba(17,17,17,0.12)] hover:bg-charcoal-light"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              احجز استشارة الان
              <ArrowLeft className="w-4 h-4" />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
