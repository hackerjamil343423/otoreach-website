"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';

const companies = [
  { name: 'Microsoft', style: 'font-bold' },
  { name: 'Google', style: 'font-medium' },
  { name: 'Amazon', style: 'font-bold' },
  { name: 'Meta', style: 'font-semibold' },
  { name: 'Apple', style: 'font-light' },
  { name: 'Tesla', style: 'font-bold' },
  { name: 'Netflix', style: 'font-bold' },
  { name: 'Spotify', style: 'font-medium' },
];

export function CompaniesSection() {
  return (
    <section className="py-12 border-y border-gray-light bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-gray-muted text-sm mb-8"
          >
            تثق بنا شركات رائدة في الصناعة
          </motion.p>
          
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
          >
            {companies.map((company) => (
              <span
                key={company.name}
                className={`text-gray-muted text-lg lg:text-xl opacity-60 hover:opacity-100 transition-opacity cursor-default ${company.style}`}
              >
                {company.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
