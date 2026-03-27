"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';
import { Users, Calendar, Phone, Briefcase, Sparkles, Mail, FileText, MessageCircle } from 'lucide-react';

const features = [
  {
    title: "Access Matt's C-Suite",
    description: "Your business gets the minds behind multiple 8-figure brands.",
    icon: Briefcase,
    image: "/assets/asset_10.jpg",
  },
  {
    title: "Sessions with Matt",
    description: "Real-time strategy - know exactly what to do next.",
    icon: Calendar,
    image: "/assets/asset_11.jpg",
  },
  {
    title: "1:1 Onboarding Call",
    description: "Tailored roadmap from day one.",
    icon: Phone,
    image: "/assets/asset_12.jpg",
  },
  {
    title: "Talent OS Access",
    description: "Plug into a vetted bench of A+ players.",
    icon: Users,
    image: "/assets/asset_13.jpg",
  },
  {
    title: "AI Tools",
    description: "Think less. Build faster. Create smarter.",
    icon: Sparkles,
    image: "/assets/asset_14.jpg",
  },
  {
    title: "Exclusive Invites",
    description: "High-level rooms, real relationships, strategic leverage.",
    icon: Mail,
    image: "/assets/asset_15.jpg",
  },
  {
    title: "License Our Systems",
    description: "Instantly install the architecture of scale.",
    icon: FileText,
    image: "/assets/asset_16.jpg",
  },
  {
    title: "Tight-Knit Community",
    description: "No fluff. Just founders who actually build.",
    icon: MessageCircle,
    image: "/assets/asset_1.png",
  },
];

export function FeaturesGridSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-tertiary/30">
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
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center leading-tight mb-16"
          >
            Build a business that works for you,<br />not the other way around.
          </motion.h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="group"
                >
                  <motion.div
                    className="bg-white rounded-2xl overflow-hidden border border-border-custom shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
                    whileHover={{ y: -4 }}
                  >
                    {/* Image */}
                    <div className="h-32 bg-bg-tertiary/50 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-lime" />
                        <h3 className="font-sans text-sm font-semibold text-text-primary">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-text-muted text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
