"use client";

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';

const testimonials = [
  { name: 'Tonya', image: '/assets/asset_13.jpg' },
  { name: 'Jordan', image: '/assets/asset_13.jpg' },
  { name: 'Zach Murray', image: '/assets/asset_13.jpg' },
  { name: 'Natasha', image: '/assets/asset_13.jpg' },
  { name: 'Christine', image: '/assets/asset_13.jpg' },
];

export function VideoTestimonialsSection() {
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
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center leading-tight mb-12"
          >
            What founders are saying.
          </motion.h2>

          {/* Video Carousel */}
          <motion.div 
            variants={staggerItem}
            className="relative"
          >
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  className="flex-shrink-0 w-48 sm:w-56 snap-start"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="w-5 h-5 text-text-primary ml-0.5" fill="currentColor" />
                      </motion.div>
                    </div>
                    
                    {/* Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
