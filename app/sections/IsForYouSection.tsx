"use client";

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from '@/app/lib/animations';

const forYouItems = [
  "You're a founder aiming to scale beyond your current growth ceiling.",
  "You're ready to invest in high-level systems and frameworks.",
  "You're committed to consistent implementation and execution.",
  "You value personalized guidance from experienced strategists.",
];

const notForYouItems = [
  "You're looking for basic business advice or general tips.",
  "You're not prepared to invest time and resources in your growth.",
  "You prefer a one-size-fits-all approach to business scaling.",
  "You'd rather do all the work yourself than rely on proven experts.",
];

export function IsForYouSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-tertiary/50">
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
            Wondering if Founder OS Velocity is right for you?
          </motion.h2>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* For You Column */}
            <motion.div
              variants={slideInLeft}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-border-custom shadow-card"
            >
              <h3 className="font-sans text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                <span className="text-lime">Velocity</span> is for you if...
              </h3>
              <ul className="space-y-4">
                {forYouItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Not For You Column */}
            <motion.div
              variants={slideInRight}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-border-custom shadow-card"
            >
              <h3 className="font-sans text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                <span className="text-text-muted">Velocity</span> is not for you if...
              </h3>
              <ul className="space-y-4">
                {notForYouItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-red-500" />
                    </span>
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
