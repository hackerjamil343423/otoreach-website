'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const ChannelsSection: React.FC = () => {
  const channels = [
    {
      name: 'واتساب',
      icon: <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />,
      color: 'text-green-500'
    },
    {
      name: 'إنستغرام',
      icon: <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />,
      color: 'text-pink-500'
    },
    {
      name: 'الموقع الإلكتروني',
      icon: <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />,
      color: 'text-blue-500'
    },
    {
      name: 'البريد الإلكتروني',
      icon: <FontAwesomeIcon icon={faEnvelope} className="text-red-500" />,
      color: 'text-red-500'
    },
    {
      name: 'تلغرام',
      icon: <FontAwesomeIcon icon={faTelegram} className="text-sky-400" />,
      color: 'text-sky-400'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            القنوات التي ندعمها
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl">
            الموظف يعمل على أغلب قنوات المحادثة التي يستخدمها عملاؤك
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-charcoal hover:bg-lime/5 transition-all duration-300 group cursor-default"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-5xl">
                {channel.icon}
              </div>
              <h3 className="text-center font-bold text-slate-900 text-sm md:text-base">
                {channel.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
