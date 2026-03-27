"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from '@/app/lib/animations';

const chaosItems = [
  "Hustling every month.",
  "No calendar space, always in Slack.",
  "Team is reactive and bloated.",
  "Offers seem confusing or inconsistent.",
  "Content is chaotic or ad-hoc.",
  "Every client adds more work.",
  "Hiring is painful, slow and uncertain.",
  "Growth is tied to how hard you can work.",
  "Building backwards, revenue ≠ freedom.",
];

const velocityItems = [
  "Scaling a calm brand-led company.",
  "Business grows while you're offline.",
  "Strategic, clear, and time-rich.",
  "Team is lean, high-output, and aligned.",
  "Offers are clear, premium, and scalable.",
  "Content is systematized and multiplying reach.",
  "Every system installed adds more freedom.",
  "Talent OS gives you top-tier operators fast.",
  "Growing more by doing less, better.",
  "Scaling with leverage, clarity, and intention.",
];

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center leading-tight mb-16"
          >
            The future belongs to founders with velocity.
          </motion.h2>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Chaos Column */}
            <motion.div
              variants={slideInLeft}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-border-custom shadow-card"
            >
              <h3 className="font-sans text-lg font-semibold text-red-500 mb-6">
                Chaos Founder
              </h3>
              <ul className="space-y-3">
                {chaosItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Velocity Column */}
            <motion.div
              variants={slideInRight}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-border-custom shadow-card"
            >
              <h3 className="font-sans text-lg font-semibold text-lime mb-6">
                Velocity Founder
              </h3>
              <ul className="space-y-3">
                {velocityItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lime mt-2" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
