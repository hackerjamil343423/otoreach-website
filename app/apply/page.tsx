'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Clock, Sparkles } from 'lucide-react'

const consultationPoints = [
  'تحليل شامل لعملياتك التشغيلية الحالية وتحديد نقاط الضعف والفرص',
  'خارطة طريق واضحة لدمج الذكاء الاصطناعي في أعمالك بشكل عملي',
  'تحديد العمليات اليدوية التي يمكن أتمتتها لتوفير وقت فريقك',
  'مراجعة الأدوات والأنظمة المستخدمة حالياً واقتراح بدائل أذكى',
  'حساب العائد المتوقع على الاستثمار في الأتمتة والذكاء الاصطناعي',
  'خطة تنفيذية مرحلية مخصصة لحجم شركتك ومجالك',
  'إجابة مباشرة على جميع أسئلتك واستفساراتك حول التحول الرقمي',
]

export default function ApplyPage() {
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <main className="min-h-screen bg-cream" dir="rtl">
      <AnimatePresence mode="wait">
        {!showCalendar ? (
          <motion.div
            key="info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-sm mb-6">
                <Clock className="w-4 h-4 text-charcoal/50" />
                <span className="text-sm font-semibold text-charcoal">45 دقيقة &bull; استشارة مدفوعة</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
                استشارة دمج الذكاء الاصطناعي في شركتك
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                جلسة مكثفة نحلل فيها وضعك الحالي ونضع لك خطة عملية لمضاعفة إنتاجية فريقك
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Consultation Points */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <h2 className="text-xl font-bold text-charcoal mb-6">ماذا ستحصل عليه في هذه الاستشارة؟</h2>
                <div className="space-y-4">
                  {consultationPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-4 items-start"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-lime/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-charcoal" />
                      </span>
                      <p className="text-base text-charcoal/80 leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-10"
                >
                  <button
                    onClick={() => setShowCalendar(true)}
                    className="inline-flex items-center gap-3 rounded-full bg-charcoal hover:bg-charcoal/90 text-white px-8 py-4 text-base font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    احجز موعدك الآن
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>

              {/* Consultant Card */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl border border-charcoal/5 p-6 shadow-sm text-center sticky top-8"
                >
                  <div className="mb-5">
                    <img
                      src="https://pbs.twimg.com/profile_images/2010807296595574784/AhvK-9zc_400x400.jpg"
                      alt="جميل علي باشا"
                      className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-lime/30"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-1">جميل علي باشا</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    خبير دمج الذكاء الاصطناعي في الشركات
                  </p>
                  <div className="border-t border-charcoal/5 pt-5 space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
                      <Clock className="w-4 h-4" />
                      <span>45 دقيقة</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
                      <Sparkles className="w-4 h-4" />
                      <span>استشارة مدفوعة</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="calendar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
          >
            {/* Back to info */}
            <button
              onClick={() => setShowCalendar(false)}
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-charcoal transition-colors mb-8"
            >
              <ArrowRight className="w-4 h-4" />
              العودة لتفاصيل الاستشارة
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">اختر الموعد المناسب لك</h2>
              <p className="text-gray-500">اختر اليوم والوقت الذي يناسبك للاستشارة</p>
            </div>

            {/* Calendar Embed */}
            <div className="bg-white rounded-2xl border border-charcoal/5 shadow-sm overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/4c8a679QtbklNiMJk0un"
                style={{ width: '100%', border: 'none', overflow: 'auto', minHeight: '700px' }}
                scrolling="yes"
                id="4c8a679QtbklNiMJk0un_1775010394536"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
