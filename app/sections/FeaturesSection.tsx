"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';

const features = [
  {
    title: "Access Matt's C-Suite",
    description: "Weekly sessions with Matt's COO, CMO, CFO.",
    image: "/assets/asset_2.png",
  },
  {
    title: "Optimized personal brand",
    description: "Turn your content into an always-on growth engine that compounds trust.",
    image: "/assets/asset_3.png",
  },
  {
    title: "Talent OS access",
    description: "Hire world-class operators, writers, and editors already vetted by Matt.",
    image: "/assets/asset_4.png",
  },
  {
    title: "Advanced founder blueprint",
    description: "Access 100+ battle-tested systems to build your company's operating rhythm.",
    image: "/assets/asset_5.png",
  },
  {
    title: "Group calls with Matt",
    description: "Weekly live strategy and feedback directly from Matt and his C-suite.",
    image: "/assets/asset_6.png",
  },
  {
    title: "Exclusive founder experiences",
    description: "Private retreats with 7- & 8-figure founders.",
    image: "/assets/asset_7.png",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center max-w-3xl mx-auto leading-tight mb-16"
          >
            Everything you need to scale with clarity, speed, and leverage.
          </motion.h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 border border-border-custom shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="font-sans text-lg font-semibold text-text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <div className="w-32 h-24 relative overflow-hidden rounded-lg">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
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
