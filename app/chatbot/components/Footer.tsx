'use client';

import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2" dir="ltr">
              <span className="rounded-full" style={{ width: '34px', height: '34px', backgroundColor: '#D4F657' }} />
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#111111', whiteSpace: 'nowrap' }}>
                OTO<span style={{ color: '#555555', fontWeight: 500 }}>Reach</span>
              </span>
            </div>
            <p className="text-slate-500 text-base leading-relaxed max-w-xs">
              نساعد الشركات في السعودية والشرق الأوسط على أتمتة المحادثات، زيادة المبيعات، وتحسين رضا العملاء باستخدام الذكاء الاصطناعي.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://x.com/HasanSamarin" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"><FontAwesomeIcon icon={faXTwitter} size="lg" /></a>
              <a href="https://tiktok.com/@HasanSamarin" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"><FontAwesomeIcon icon={faTiktok} size="lg" /></a>
              <a href="https://instagram.com/HasanSamarin" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
              <a href="https://youtube.com/HasanSamarin" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">تواصل معنا</h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-brand-orange mt-0.5" />
                <a href="https://wa.me/15558517999" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 cursor-pointer hover:text-brand-orange transition-colors" dir="ltr">+1 (555) 851-7999</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-orange mt-0.5" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Legal / Meta */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">معلومات قانونية</h4>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li><a href="/privacy" className="hover:text-brand-blue transition-colors">سياسة الخصوصية</a></li>
              <li><a href="/terms" className="hover:text-brand-blue transition-colors">شروط الاستخدام</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2025 OTO Reach. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
