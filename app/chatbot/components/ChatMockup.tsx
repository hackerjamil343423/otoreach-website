'use client';

import React, { useEffect, useState } from 'react';
import { Send, MoreHorizontal, Bot, Smile } from 'lucide-react';

interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
  delay: number;
}

export const ChatMockup: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  const messages: Message[] = [
    { id: 1, role: 'user', text: "اهلا، ابي استفسر عن نظام الرد الآلي؟", delay: 500 },
    { id: 2, role: 'bot', text: "أهلاً بك! أنا موظفك الرقمي. أقدر أرد على عملائك وأجدول مواعيدك ٢٤ ساعة بدون توقف.", delay: 1800 },
    { id: 3, role: 'user', text: "ممتاز، طيب هل يدعم اللهجات العربية؟", delay: 3500 },
    { id: 4, role: 'bot', text: "أكيد! أنا مدرب على فهم اللهجة السعودية، المصرية، والخليجية بطلاقة تامة.", delay: 5000 }
  ];

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // Reset sequence on mount
    setVisibleMessages([]);
    setIsTyping(false);

    // Initial delay before start
    timeouts.push(setTimeout(() => setIsTyping(false), 0));

    // Sequence logic
    let currentTime = 0;
    messages.forEach((msg) => {
      // User "types" (instant for this demo effect)
      if (msg.role === 'user') {
        timeouts.push(setTimeout(() => {
          setVisibleMessages(prev => [...prev, msg.id]);
          setIsTyping(true); // Bot starts "thinking"
        }, currentTime + msg.delay));
        currentTime += msg.delay;
      }
      // Bot types (simulated delay)
      else {
        // Typing indicator duration
        const typingDuration = 1000;
        timeouts.push(setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(prev => [...prev, msg.id]);
        }, currentTime + typingDuration)); // Show message after typing
        currentTime += typingDuration;
      }
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-[360px] mx-auto perspective-1000">
      {/* Decorative background blobs - purely CSS */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-charcoal/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

      {/* Main Chat Card - Mobile Phone Shape */}
      <div className="relative bg-white rounded-[2.5rem] border-[6px] border-slate-100 shadow-2xl overflow-hidden flex flex-col h-[620px]">

        {/* Notch / Status Bar */}
        <div className="bg-brand-blue text-white p-5 pt-8 pb-4 rounded-t-[2rem] relative z-10">
           <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                   <Bot size={22} className="text-white" />
                </div>
                <div>
                   <h3 className="font-bold text-sm leading-relaxed">AI Chatbot</h3>
                   <div className="flex items-center gap-1.5">
                     <span className="block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                     <span className="text-[10px] opacity-90">متصل الآن</span>
                   </div>
                </div>
             </div>
             <MoreHorizontal size={20} className="opacity-80" />
           </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 scrollbar-hide">
          <div className="flex justify-center my-4">
            <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-1 rounded-full">اليوم</span>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'} ${visibleMessages.includes(msg.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'} transition-all duration-300 ease-out`}
            >
              <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Bubble */}
                <div className={`p-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-brand-blue text-white rounded-2xl rounded-tr-none'
                    : 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
             <div className="flex w-full justify-start animate-in fade-in duration-300">
                 <div className="p-4 bg-white border border-slate-100 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5 h-10">
                   <span className="block h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                   <span className="block h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                   <span className="block h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                 </div>
             </div>
          )}

          {/* Simulated Action Button in Chat */}
          {visibleMessages.length >= 2 && (
            <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500">
               <button className="bg-charcoal text-white text-xs py-2 px-4 rounded-xl shadow-lg shadow-charcoal/20 hover:bg-charcoal-light transition-colors">
                 احجز اجتماع تجريبي 📅
               </button>
            </div>
          )}

        </div>

        {/* Input Area (Visual only) */}
        <div className="p-3 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
            <Smile size={20} className="text-slate-400" />
            <div className="flex-1 text-xs text-slate-400 font-medium text-right" dir="rtl">أكتب رسالتك...</div>
            <div className="h-8 w-8 bg-brand-blue rounded-full flex items-center justify-center shadow-md">
              <Send size={14} className="text-white -mr-0.5" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
