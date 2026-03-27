"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Matt is more than a successful founder. He is a next-level operator who understands the tools to succeed in business and life. He doesn't accept that good business and good life should be mutually exclusive.",
    author: "Alex Lieberman",
    role: "Co-Founder Morning Brew",
    avatar: "AL",
  },
  {
    quote: "Matt is AWESOME. I love his energy. I love his mindset. Learn from Matt, someone who's done it.",
    author: "Harry Dry",
    role: "Founder Marketing Examples",
    avatar: "HD",
  },
  {
    quote: "Matt is an absolute beast when it comes to audience and community growth. He has one of the fastest growing brands online and an incredible teacher. He goes above and beyond to help founders - you can tell he genuinely cares. Would highly recommend working with him.",
    author: "Brett Adcock",
    role: "Founder Figure",
    avatar: "BA",
  },
  {
    quote: "Matt's frameworks and systems have been transformational for my growth. I've 3x'd my business over the past few years, and the strategies I've learned have helped me build a successful podcast, and scaled my online business to new heights.",
    author: "Steve Gatena",
    role: "Founder of Pray.com",
    avatar: "SG",
  },
  {
    quote: "The key to the future of commerce is community and Matt is one of the most brilliant minds in the space. His philosophy and practices helped grow Herb to 14 million people and is changing the way people think about cannabis. He also has one of the fastest-growing personal brands on the internet.",
    author: "Harley Finkelstein",
    role: "President, Shopify",
    avatar: "HF",
  },
  {
    quote: "I want to give a special shoutout to my man Matt, he has been such an incredible friend. I watched him grow Herb into becoming the leader that it is in the media space and now just taking all the systems on how he did that with his media company and now doing it for personal brands. He is so generous, I've got on call with Matt and he has given me so many systems that have just blown me away. He is the real deal, so if you're thinking about leveraging Matt and his proven systems, don't even hesitate.",
    author: "Gerard Adams",
    role: "Founder, Leaders Create Leaders",
    avatar: "GA",
  },
];

export function TextTestimonialsSection() {
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
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center leading-tight mb-16"
          >
            What are other founders saying about my systems?
          </motion.h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 border border-border-custom shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-lime mb-4" />
                  
                  {/* Quote Text */}
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center text-sm font-semibold text-text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">{testimonial.author}</p>
                      <p className="text-text-muted text-xs">{testimonial.role}</p>
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
