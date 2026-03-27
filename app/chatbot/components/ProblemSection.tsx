'use client';

import React from 'react';
import { Clock, UserX, Banknote, AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from './Button';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Clock size={24} />,
      title: "الرد المتأخر يساوي عميل ضائع",
      description: "أنت الآن تحصل على رسالة من عميل حقيقي يسأل عن منتجك. لكنك مشغول. الموظف مشغول. بعد ساعة أو اثنين تجيب ترد عليه. الدقائق هذي كفيلة انك تخسره."
    },
    {
      icon: <UserX size={24} />,
      title: "الموظفين عندهم حدود",
      description: "الموظف البشري له حياة. يمرض. يطلب إجازة. ينسى يرد على رسائل معينة. أنت ما فيك تراقبه طول الوقت وسمعتك بتنهار شوي شوي."
    },
    {
      icon: <Banknote size={24} />,
      title: "تكلفة الموظفين تاكل أرباحك",
      description: "كل موظف خدمة عملاء راتبه بحد أدنى 3000 ريال شهرياً. وهذا بدون إجازات مرضية أو سنوية. بدون استقالات مفاجئة."
    },
    {
      icon: <AlertCircle size={24} />,
      title: "القلق المستمر يحرمك من النوم",
      description: "كل ما تطلع من الشغل تقول: يا رب ما حصلت مشكلة؟ لو ما رد الموظف؟ ما تقدر تاخذ إجازة بهدوء. دايم بذهنك الشغل."
    }
  ];

  return (
    <section id="problems" className="py-24 relative">

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-charcoal text-xs font-bold tracking-widest uppercase bg-lime/15 px-3 py-1 rounded-full border border-lime/30">المشاكل الشائعة</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-relaxed">
            المشكلة البسيطة اللي <span className="text-red-500">تخسرك فلوس</span> كل يوم
          </h2>
        </div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl shadow-charcoal/5 hover:shadow-charcoal/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon Header */}
              <div className="mb-6 flex justify-start">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-lime/15 to-white border border-lime/30 flex items-center justify-center text-charcoal shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-right space-y-4">
                <h3 className="text-xl font-bold text-slate-900 leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-loose text-sm font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <a href="https://wa.me/15558517999" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="group text-charcoal hover:text-charcoal-light text-lg font-bold gap-2 px-8 py-6 rounded-full bg-white/50 hover:bg-white transition-all border border-transparent hover:border-lime/30">
              تواصل معنا الان
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};
