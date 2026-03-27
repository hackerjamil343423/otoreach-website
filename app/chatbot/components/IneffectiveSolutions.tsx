'use client';

import React from 'react';
import { Users, Bot, AlertTriangle, XCircle } from 'lucide-react';

export const IneffectiveSolutions: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Background Glows using brand colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          {/* Warning Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(212,246,87,0.2)] cursor-default">
            <AlertTriangle size={14} />
            <span>تحذير هام لمصلحة عملك</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-brand-blue tracking-tight leading-relaxed">
            انتبه تضيع وقتك في <span className="text-brand-orange">حلول غير مفيدة</span>
          </h2>
          <p className="text-slate-600 text-lg">
            السوق مليء بالحلول الرخيصة التي تضر سمعتك أكثر مما تفيدك.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1: The Hiring Trap */}
          <div className="relative bg-slate-50 border border-brand-blue/20 rounded-3xl p-8 md:p-12 hover:border-brand-orange/40 hover:shadow-[0_0_40px_-10px_rgba(212,246,87,0.15)] transition-all duration-500 group">
             {/* Icon */}
             <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-orange mb-8 shadow-inner group-hover:text-brand-orange transition-colors">
                <Users size={32} className="drop-shadow-[0_0_15px_rgba(212,246,87,0.3)]" />
             </div>

             <h3 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-orange transition-colors">
               توظيف موظفين أكثر
             </h3>

             <p className="text-slate-600 text-lg leading-loose">
               موظف ثاني معناه 3000 ريال أضافي. موظف ثالث؟ 9000 ريال كل شهر. بس المشكلة ما خلصت. الموظفين بيختلفون في الجودة. بعضهم بينسى يرد. بعضهم بيطرد العملاء بنبرته.
             </p>
          </div>

          {/* Card 2: The Dumb Bot Trap */}
          <div className="relative bg-slate-50 border border-brand-blue/20 rounded-3xl p-8 md:p-12 hover:border-brand-orange/40 hover:shadow-[0_0_40px_-10px_rgba(212,246,87,0.15)] transition-all duration-500 group">
             {/* Icon */}
             <div className="relative h-16 w-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-orange mb-8 shadow-inner group-hover:text-brand-orange transition-colors">
                <Bot size={32} className="drop-shadow-[0_0_15px_rgba(212,246,87,0.3)]" />
                <div className="absolute -top-2 -left-2 bg-white rounded-full p-0.5 border border-brand-orange/30">
                  <XCircle size={20} className="text-brand-orange" />
                </div>
             </div>

             <h3 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-orange transition-colors">
               روبوت بأزرار وخيارات محدودة
             </h3>

             <p className="text-slate-600 text-lg leading-loose">
               روبوت رخيص يقول: ( اختر 1 أو 2 أو 3 ). العميل بيختار. الروبوت يرد جملة واحدة جافة وخلاص. للأسف العميل ما يحس بالاهتمام وما في فهم حقيقي لسؤاله.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};
