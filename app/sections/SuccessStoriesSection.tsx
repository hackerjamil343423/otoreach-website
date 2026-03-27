"use client";

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';

const stories = [
  {
    name: 'Ali Abdaal',
    title: 'Doctor, Entrepreneur, YouTuber',
    description: 'Taking Matt\'s course changed my life for the better.',
    image: '/assets/asset_14.jpg',
    featured: true,
  },
  {
    name: 'Nicole Murphy',
    title: 'Founder & CEO',
    description: 'The Community Matt Has Built is Special and The Weekly Q&A Calls Have Been Invaluable.',
    image: '/assets/asset_15.jpg',
    featured: false,
  },
  {
    name: 'Success Story',
    title: 'Founder',
    description: 'How I scaled my business to 7 figures with Velocity.',
    image: '/assets/asset_16.jpg',
    featured: false,
  },
];

export function SuccessStoriesSection() {
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
            Here are a few more success stories.
          </motion.h2>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <motion.div
                key={story.name}
                variants={staggerItem}
                className={`group ${story.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <motion.div
                  className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-6 h-6 text-text-primary ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-xs mb-1">{story.title}</p>
                    <p className="text-white font-semibold">{story.name}</p>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2">{story.description}</p>
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
