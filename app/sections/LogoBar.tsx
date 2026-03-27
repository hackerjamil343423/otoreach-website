"use client";

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/app/lib/animations';

const logos = [
  { name: 'HYPERFURY', style: 'font-bold tracking-wider' },
  { name: 'Taplio', style: 'font-semibold' },
  { name: 'Seamless.AI', style: 'font-medium' },
  { name: 'PRAY.COM', style: 'font-bold tracking-wide' },
  { name: 'foreplay', style: 'font-semibold italic' },
  { name: 'Teleport', style: 'font-medium' },
  { name: 'FIGURE', style: 'font-bold tracking-widest' },
];

export function LogoBar() {
  return (
    <section className="py-8 border-y border-border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
        >
          {logos.map((logo) => (
            <motion.span
              key={logo.name}
              variants={staggerItem}
              className={`text-text-muted text-sm lg:text-base opacity-60 hover:opacity-100 transition-opacity cursor-default ${logo.style}`}
            >
              {logo.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
