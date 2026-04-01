'use client';

import React from 'react';
import { PhoneCall, Hammer, Rocket, ArrowLeft, XCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const JourneySection: React.FC = () => {
  const steps = [
    {
      icon: <PhoneCall size={28} />,
      duration: "1 يوم",
      title: "المكالمة التعريفية",
      description: "نجلس مع بعض. نفهم شغلك بالضبط. وين الألم؟ كم عميل بتخسر؟ كيف بتبيع؟ كل هذا عشان نبني لك حل مخصص."
    },
    {
      icon: <Hammer size={28} />,
      duration: "2-5 أيام",
      title: "البناء والتدريب",
      description: "نبني الروبوت ونعلمه كل شيء عن شغلك. المنتجات، الأسعار، طريقة كلامك، المشاكل الشائعة والحلول."
    },
    {
      icon: <Rocket size={28} />,
      duration: "5-7 أيام",
      title: "الاختبار والتحسين",
      description: "نختبر البوت مع حالات حقيقية. نشوف ايش بيتحسن. ايش ما زال بيحتاج تطوير. نعدل. نحسن. لين ما يكون 100% جاهز."
    }
  ];

  return (
    <section id="journey" className="relative overflow-hidden">

      {/* PART 1: The Journey Timeline */}
      <div className="py-24 container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-3 block">كيف نبدأ؟</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            هذه رحلة بناء البوت الخاص بك
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-lime/20 to-slate-200 -z-10 translate-y-0 w-[80%] mx-auto rounded-full"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center bg-white/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-3xl shadow-lg md:shadow-none border md:border-0 border-white/50">
              {/* Step Number Badge */}
              <div className="h-20 w-20 rounded-3xl bg-white border border-slate-100 text-charcoal flex items-center justify-center shadow-xl shadow-charcoal/5 mb-8 relative z-10">
                {step.icon}
                <div className="absolute -top-3 -right-3 h-8 w-8 bg-lime text-charcoal rounded-full flex items-center justify-center font-bold border-[3px] border-white shadow-sm">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <span className="inline-block px-3 py-1 bg-lime/15 text-charcoal text-xs font-bold rounded-full mb-4 border border-lime/30">
                {step.duration}
              </span>
              <p className="text-slate-600 leading-relaxed text-sm max-w-xs mx-auto font-medium">
                {step.description}
              </p>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-6 text-slate-300">
                  <ArrowLeft className="rotate-[-90deg]" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PART 2: The Crossroads */}
      <div className="py-32 bg-white/50 backdrop-blur-lg border-t border-white/60">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
               قف هنا للحظة..
             </h2>
             <p className="text-xl text-slate-500 font-medium">أنت الآن في مفترق طرق مصيري لعملك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-stretch">

            {/* Path 1: The Bad Path */}
            <div className="bg-slate-100/50 border border-slate-200/60 rounded-[2rem] p-8 md:p-12 flex flex-col opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                   <XCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-600">الطريق الأول</h3>
              </div>
              <div className="space-y-6 flex-1">
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  تقول <span className="font-bold text-slate-800 border-b-2 border-slate-300">"فكرة حلوة، بس ما في وقت"</span> وتطلع من هنا تروح لشغلك العادي.
                </p>
                <ul className="space-y-4 text-slate-500 mt-4">
                  <li className="flex gap-3 text-sm items-center"><span className="text-lg">😔</span> يستمر حالك تخسر عملاء كل يوم.</li>
                  <li className="flex gap-3 text-sm items-center"><span className="text-lg">📉</span> تدفع رواتب موظفين ما يركزون.</li>
                  <li className="flex gap-3 text-sm items-center"><span className="text-lg">🥱</span> تنام بقلق وتعب مستمر.</li>
                </ul>
              </div>
            </div>

            {/* Path 2: The Right Path */}
            <div className="bg-gradient-to-br from-charcoal to-charcoal-light text-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-charcoal/25 transform md:-translate-y-6 border border-white/10 flex flex-col relative overflow-hidden ring-4 ring-lime/20">
              {/* Shine Effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="h-12 w-12 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-lg">
                   <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">الطريق الثاني (الصحيح)</h3>
              </div>
              <div className="space-y-6 flex-1 relative z-10">
                <p className="text-white/80 leading-relaxed text-lg font-medium">
                  تقول <span className="font-bold text-white border-b-2 border-brand-orange">"بجرب هذا الحل"</span> وتاخذ ساعة من وقتك نتناقش في مكالمة مجانية.
                </p>
                <ul className="space-y-4 text-white/70 mt-4">
                  <li className="flex gap-3 text-sm items-center"><span className="text-lg">🚀</span> تشوف الفرق بنفسك في التجربة.</li>
                  <li className="flex gap-3 text-sm items-center"><span className="text-lg">💰</span> بعد شهر تشوف مبيعات أكثر.</li>
                  <li className="flex gap-3 text-sm items-center"><span className="text-lg">😌</span> عملاء أسعد وضغط عمل أقل بكثير.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
             <a href="/chatbot/apply">
               <Button size="lg" className="text-xl h-16 px-16 rounded-2xl shadow-2xl shadow-brand-orange/30 bg-brand-orange hover:bg-brand-orangeHover animate-pulse transition-all hover:scale-105">
                 تواصل معنا الان
               </Button>
             </a>
             <p className="mt-6 text-slate-500 text-sm font-medium">لا يوجد أي التزام مالي في المكالمة الأولى</p>
          </div>

        </div>
      </div>

    </section>
  );
};
