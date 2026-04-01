"use client";

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/app/lib/animations';

export function VideoIntroSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Video Thumbnail */}
          <motion.div variants={staggerItem} className="relative inline-block">
            <motion.div
              className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/assets/asset_8.png"
                alt="Matt Gray"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="w-6 h-6 text-text-primary ml-1" fill="currentColor" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Caption Bubble */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-text-primary text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
              Hey there, I'm Matt.
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={staggerItem} className="space-y-4 pt-6">
            <p className="text-text-secondary leading-relaxed">
              In Founder OS Velocity, I share the systems I've developed through 10+ years of building businesses.
            </p>
            <p className="font-serif text-xl sm:text-2xl font-semibold text-text-primary">
              You don't need more effort. You need better leverage.
            </p>
            <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
              In Velocity, you don't get a course - you get my C-suite and our operating systems inside your business. We'll find your bottlenecks, fix them fast, and free you to scale like a CEO.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem}>
            <motion.a
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-lime rounded-full font-semibold text-sm hover:bg-lime-hover transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply for Velocity
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
