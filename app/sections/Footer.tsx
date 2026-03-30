"use client";

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'بناء شات بوت AI', href: '/chatbot' },
    { label: 'صفحات هبوط', href: '/landing-page' },
    { label: 'أداة "تلميح"', href: 'https://telmeeh.com' },
  ],
  company: [
    { label: 'من نحن', href: '#' },
    { label: 'تواصل معنا', href: '#' },
  ],
  legal: [
    { label: 'سياسة الخصوصية', href: '/privacy' },
    { label: 'شروط الاستخدام', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left - Logo & Contact */}
            <div className="max-w-sm">
              <Link href="/" className="text-2xl font-bold tracking-tight text-charcoal mb-4 block">
                OTO<span className="text-charcoal/40">Reach</span>
              </Link>
              <p className="text-charcoal/50 text-sm leading-relaxed mb-6">
                نضاعف إنتاجية الشركات عبر الأتمتة والذكاء الاصطناعي والأنظمة التشغيلية
              </p>
              <div className="space-y-3">
                <a href="mailto:jamil@otoreach.com" className="flex items-center gap-2 text-charcoal/60 text-sm hover:text-charcoal transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>jamil@otoreach.com</span>
                </a>
                <a href="https://wa.me/905300200843" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-charcoal/60 text-sm hover:text-charcoal transition-colors">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">+905300200843</span>
                </a>
              </div>
            </div>

            {/* Right - Link Columns */}
            <div className="flex gap-16 sm:gap-20">
              {/* Services */}
              <div>
                <h4 className="font-semibold text-charcoal mb-4 text-sm">الخدمات</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-charcoal/50 text-sm hover:text-charcoal transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-charcoal mb-4 text-sm">الشركة</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-charcoal/50 text-sm hover:text-charcoal transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-charcoal mb-4 text-sm">قانوني</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-charcoal/50 text-sm hover:text-charcoal transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-charcoal/40 text-sm">
            © OTO REACH LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
