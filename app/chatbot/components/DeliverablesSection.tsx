'use client';

import React from 'react';
import { Zap, Brain, Mic, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const DeliverablesSection: React.FC = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center space-y-4">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">
            هذا اللي نبنيه لك بالضبط
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-lime to-lime-hover rounded-full opacity-90"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Smart Reply (Wide) */}
          <div className="md:col-span-2 group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-charcoal/5 hover:border-charcoal/30 hover:shadow-charcoal/10 transition-all duration-500 overflow-hidden">
             <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Content */}
                <div className="flex-1 space-y-4 order-2 md:order-1">
                   <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                     نظام الرد الفوري الذكي
                   </h3>
                   <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                     روبوت يرد على عملائك قبل ما تشوف الرسالة أصلا. يفهم السؤال بذكاء يرد برد طبيعي تماماً ما يحس العميل انه يكلم آلة. رد فوري، دقيق، ومخصص.
                   </p>
                </div>
                {/* Image */}
                <div className="order-1 md:order-2 flex-shrink-0 w-full md:w-auto">
                   <img
                     src="/chatbot/ai-bot-chat-image.png"
                     alt="نظام الرد الفوري الذكي"
                     className="h-auto w-full md:w-80 rounded-2xl object-cover shadow-lg group-hover:shadow-charcoal/20 transition-shadow"
                   />
                </div>
             </div>
             {/* Background Texture Icon */}
             <Zap size={300} className="absolute -bottom-10 -left-10 text-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-12 pointer-events-none" />
          </div>

          {/* Card 2: Memory (Square) */}
          <div className="group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-10 shadow-xl shadow-charcoal/5 hover:border-charcoal/30 hover:shadow-charcoal/10 transition-all duration-500 overflow-hidden">
              <div className="h-16 w-16 rounded-2xl bg-lime/15 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform">
                 <Brain size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                ذاكرة ذكية
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                الروبوت بيتذكر كل محادثة حتى لو كانت قبل 3 شهور. يعرف العميل بالاسم ويتذكر احتياجه.
              </p>
              <Brain size={200} className="absolute -bottom-8 -left-8 text-lime/10 opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
          </div>

          {/* Card 3: Dialect (Square) */}
          <div className="group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-10 shadow-xl shadow-charcoal/5 hover:border-charcoal/30 hover:shadow-charcoal/10 transition-all duration-500 overflow-hidden">
              <div className="h-16 w-16 rounded-2xl bg-lime/15 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform">
                 <Mic size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                يتكلم بلهجتك
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                الروبوت بيتكلم بنفس أسلوبك ولهجتك. يشتغل حسب احتياجاتك: خدمة عملاء، مبيعات، أو الاثنين.
              </p>
              <Mic size={200} className="absolute -bottom-8 -left-8 text-lime/10 opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
          </div>

          {/* Card 4: Support (Wide) */}
          <div className="md:col-span-2 group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-charcoal/5 hover:border-charcoal/30 hover:shadow-charcoal/10 transition-all duration-500 overflow-hidden">
             <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                <div className="flex-1 space-y-4 order-2 md:order-1">
                   <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                     دعم وصيانة مستمرة
                   </h3>
                   <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                     ما بنتركك لوحدك. كل شهر نفحص النظام، نحسن الردود، ونضيف ميزات جديدة. أنت ركز على البزنس ونحن نركز على تطوير الروبوت.
                   </p>
                </div>
                <div className="order-1 md:order-2 h-20 w-20 md:h-24 md:w-24 rounded-3xl bg-lime/15 flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-white transition-all duration-500 shadow-sm">
                   <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
             </div>
             <ShieldCheck size={300} className="absolute -bottom-10 -left-10 text-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-12 pointer-events-none" />
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center flex flex-col items-center gap-6">
          <a href="/chatbot/apply">
            <Button className="bg-lime hover:bg-lime-hover text-charcoal shadow-xl shadow-lime/20 text-xl py-7 px-14 rounded-2xl transition-transform hover:-translate-y-1">
              تواصل معنا الان
            </Button>
          </a>

          <div className="flex items-center gap-2 text-slate-500 text-sm font-bold bg-white/60 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/50">
            <CheckCircle2 size={18} className="text-green-500" />
            <span>ضمان الجودة والأداء 100%</span>
          </div>
        </div>

      </div>
    </section>
  );
};
