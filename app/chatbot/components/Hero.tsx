'use client';

import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17, 17, 17, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 17, 17, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[50rem] w-[50rem] rounded-full bg-charcoal/5 opacity-60 mix-blend-multiply blur-[100px] filter animate-blob" />
        <div className="absolute right-1/4 bottom-0 h-[45rem] w-[45rem] rounded-full bg-lime/10 opacity-60 mix-blend-multiply blur-[100px] filter animate-blob [animation-delay:2000ms]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-10 text-center">
          <div className="inline-flex cursor-default items-center rounded-full border border-red-200/60 bg-red-50/50 px-4 py-1.5 text-xs font-bold tracking-wide text-red-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-red-100/50 sm:text-sm animate-in fade-in zoom-in duration-700">
            <span className="mr-2 ml-2 flex h-2 w-2 animate-pulse rounded-full bg-red-500" />
            هل تخسر عملاء يوميًا بسبب عدم وجود من يرد عليهم؟
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-black leading-[1.4] tracking-tight text-slate-900 md:text-6xl lg:text-7xl lg:leading-[1.35]">
              نبني لك{' '}
              <span className="bg-gradient-to-r from-charcoal to-charcoal-light bg-clip-text text-transparent">
                موظف ذكاء اصطناعي
              </span>{' '}
              يرد على عملائك <span className="text-charcoal">24 ساعة</span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-slate-600 md:text-2xl">
              يحول كل استفسار لبيعة فعلية بينما توفر آلاف الريالات من رواتب الموظفين كل شهر
            </p>
          </div>

          <div className="flex w-full flex-col justify-center gap-5 pt-4 sm:w-auto sm:flex-row">
            <a
              href="https://wa.me/15558517999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="h-16 w-full rounded-2xl px-12 text-xl font-bold shadow-xl shadow-lime/20 transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-lime/30 sm:w-auto" size="lg">
                تواصل معنا الآن
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
