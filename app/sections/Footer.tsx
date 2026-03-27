"use client";

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/app/lib/animations';

const footerLinks = {
  products: [
    { label: 'مجتمع المؤسسين', href: '#community' },
    { label: 'أداة "تلميح"', href: '#talmeeh' },
    { label: 'أداة "وكلني"', href: '#wakilni' },
  ],
  services: [
    { label: 'بناء نظام تشغيلي', href: '#systems' },
    { label: 'شات بوت AI', href: '#chatbot' },
    { label: 'صفحات هبوط', href: '#landing' },
  ],
  company: [
    { label: 'من نحن', href: '#about' },
    { label: 'المدونة', href: '#blog' },
    { label: 'التحديثات', href: '#updates' },
  ],
  support: [
    { label: 'تواصل معنا', href: '#contact' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'سياسة الخصوصية', href: '#privacy' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 bg-charcoal border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Footer Content */}
          <motion.div 
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12"
          >
            {/* Logo & Description */}
            <div className="col-span-2">
              <a href="#" className="text-2xl font-bold tracking-tight text-white mb-4 block">
                OTO<span className="text-lime">Reach</span>
              </a>
              <p className="text-gray-muted text-sm leading-relaxed mb-6">
                نضاعف إنتاجية الشركات عبر الأتمتة والذكاء الاصطناعي والأنظمة التشغيلية
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-muted hover:text-white hover:border-lime/50 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-white mb-4">المنتجات</h4>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-muted hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">الخدمات</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-muted hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">الشركة</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-muted hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-white mb-4">الدعم</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-muted hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-6 py-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-gray-muted text-sm">
              <Mail className="w-4 h-4" />
              <span>hello@otoreach.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-muted text-sm">
              <Phone className="w-4 h-4" />
              <span>+966 50 000 0000</span>
            </div>
            <div className="flex items-center gap-2 text-gray-muted text-sm">
              <MapPin className="w-4 h-4" />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            variants={staggerItem}
            className="pt-8 text-center border-t border-white/10"
          >
            <p className="text-gray-muted text-sm">
              © {new Date().getFullYear()} OTO Reach. جميع الحقوق محفوظة.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
