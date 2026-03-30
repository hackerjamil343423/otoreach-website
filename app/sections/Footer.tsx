"use client";

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/app/lib/animations';

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-charcoal border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Contact Info */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pb-8"
          >
            <div className="flex items-center gap-2 text-gray-muted text-sm">
              <Mail className="w-4 h-4" />
              <span>jamil@otoreach.com</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2 text-gray-muted text-sm">
              <Phone className="w-4 h-4" />
              <span>+905300200843</span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={staggerItem}
            className="pt-8 text-center border-t border-white/10"
          >
            <p className="text-gray-muted text-sm">
              © OTO REACH LLC
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
