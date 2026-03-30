'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const SolutionSection: React.FC = () => {
  const features = [
    "يرد بطريقة طبيعية (ما يحس انه روبوت)",
    "يتعلم من بيانات شغلك",
    "يحاول يبيع بذكاء - مو بس معلومة جافة",
    "يشتغل 24/7 بدون إجازات أو استقالات"
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        <div className="flex flex-col items-center text-center space-y-10">
            {/* Header */}
            <div className="space-y-6 max-w-3xl">
              <span className="font-bold text-brand-orange tracking-wide text-sm uppercase inline-block">
                الحل الأمثل
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-blue leading-relaxed">
                الحل الحقيقي هو موظف ذكي يفهم العميل
              </h2>
              <p className="text-xl text-slate-600 leading-loose font-medium">
                بدل موظفين بشر أو روبوت جامد تحتاج موظف ذكي يفهم شغلك، يحلل نية العميل، ويقفل البيعة نيابة عنك.
              </p>
            </div>

            {/* Centered Feature Grid - Right Aligned Items for RTL */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/50 transition-colors">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-lime/20 flex items-center justify-center text-charcoal">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-bold text-lg text-right flex-1">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a href="https://wa.me/15558517999" target="_blank" rel="noopener noreferrer">
                <Button className="bg-charcoal hover:bg-charcoal-light text-white shadow-xl shadow-charcoal/10 w-full sm:w-auto text-lg py-6 rounded-xl px-12">
                  تواصل معنا الان
                </Button>
              </a>
            </div>
          </div>

      </div>
    </section>
  );
};
