"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';

const logos = [
  { name: 'HYPERFURY', style: 'font-bold tracking-wider' },
  { name: 'Taplio', style: 'font-semibold' },
  { name: 'Seamless.AI', style: 'font-medium' },
  { name: 'PRAY.COM', style: 'font-bold tracking-wide' },
  { name: 'foreplay', style: 'font-semibold italic' },
  { name: 'Teleport', style: 'font-medium' },
  { name: 'FIGURE', style: 'font-bold tracking-widest' },
  { name: 'CourseAI', style: 'font-semibold' },
  { name: 'Classy', style: 'font-medium italic' },
  { name: 'THE FAMILY FUND', style: 'font-bold tracking-wide text-xs' },
  { name: 'BRAIN APES', style: 'font-bold' },
];

export function LogoBar2() {
  return (
    <section className="py-16 border-y border-border-custom">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.h3 
            variants={fadeInUp}
            className="font-serif text-2xl sm:text-3xl font-bold text-text-primary mb-10"
          >
            Join thousands of ambitious founders.
          </motion.h3>
          
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-10"
          >
            {logos.map((logo) => (
              <span
                key={logo.name}
                className={`text-text-muted text-sm lg:text-base opacity-50 hover:opacity-100 transition-opacity cursor-default ${logo.style}`}
              >
                {logo.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
