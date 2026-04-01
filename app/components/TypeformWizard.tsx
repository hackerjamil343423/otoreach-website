'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, ChevronDown } from 'lucide-react'

export type Question = {
  id: string
  title: string
  subtitle?: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'multiselect'
  options?: { label: string; value: string; icon?: string }[]
  placeholder?: string
  required?: boolean
  validation?: (value: string | string[]) => string | null
  showWhen?: { questionId: string; value: string }
}

type TypeformWizardProps = {
  questions: Question[]
  onSubmit: (answers: Record<string, string | string[]>) => void
  brandName?: string
  accentColor?: string
  thankYouTitle?: string
  thankYouSubtitle?: string
  submitLabel?: string
}

export default function TypeformWizard({
  questions,
  onSubmit,
  brandName = 'OTOReach',
  thankYouTitle = 'شكراً لك!',
  thankYouSubtitle = 'سنتواصل معك قريباً',
  submitLabel = 'إرسال',
}: TypeformWizardProps) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [error, setError] = useState<string | null>(null)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = back
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  // Filter questions based on showWhen conditions
  const visibleQuestions = questions.filter((q) => {
    if (!q.showWhen) return true
    return answers[q.showWhen.questionId] === q.showWhen.value
  })

  const question = visibleQuestions[current]
  const progress = ((current + 1) / visibleQuestions.length) * 100
  const isLast = current === visibleQuestions.length - 1

  // Focus input on question change
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus()
    }, 400)
    return () => clearTimeout(timer)
  }, [current])

  const getValue = useCallback(() => {
    return answers[question?.id] ?? (question?.type === 'multiselect' ? [] : '')
  }, [answers, question])

  const validate = useCallback(() => {
    if (!question) return null
    const val = getValue()
    if (question.required) {
      if (Array.isArray(val) && val.length === 0) return 'يرجى اختيار خيار واحد على الأقل'
      if (!val || (typeof val === 'string' && val.trim() === '')) return 'هذا الحقل مطلوب'
    }
    if (question.validation) {
      return question.validation(val)
    }
    if (question.type === 'tel' && typeof val === 'string' && val.trim()) {
      const cleaned = val.replace(/[\s\-\(\)]/g, '')
      if (!/^\+?\d{8,15}$/.test(cleaned)) return 'يرجى إدخال رقم هاتف صحيح'
    }
    return null
  }, [question, getValue])

  const goNext = useCallback(() => {
    const err = validate()
    if (err) {
      setError(err)
      return
    }
    setError(null)

    if (isLast) {
      setSubmitted(true)
      onSubmit(answers)
      return
    }

    setDirection(1)
    setCurrent((c) => c + 1)
  }, [validate, isLast, answers, onSubmit])

  const goBack = useCallback(() => {
    if (current === 0) return
    setError(null)
    setDirection(-1)
    setCurrent((c) => c - 1)
  }, [current])

  // Keyboard: Enter to advance
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (submitted) return
      if (e.key === 'Enter' && !e.shiftKey) {
        if (question?.type === 'textarea') return // allow multiline
        e.preventDefault()
        goNext()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, submitted, question?.type])

  const setAnswer = (val: string | string[]) => {
    setError(null)
    setAnswers((prev) => ({ ...prev, [question.id]: val }))
  }

  const toggleMultiselect = (optionValue: string) => {
    const current = (answers[question.id] as string[]) || []
    if (current.includes(optionValue)) {
      setAnswer(current.filter((v) => v !== optionValue))
    } else {
      setAnswer([...current, optionValue])
    }
  }

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  }

  // Thank you screen
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4" dir="rtl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-charcoal" strokeWidth={3} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">{thankYouTitle}</h2>
          <p className="text-lg text-gray-500 leading-relaxed">{thankYouSubtitle}</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white" dir="rtl">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        {/* Progress Bar */}
        <div className="h-1 bg-gray-100">
          <motion.div
            className="h-full bg-charcoal"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4">
          <span className="text-sm font-bold tracking-tight text-charcoal">
            {brandName.split('Reach')[0]}<span className="text-charcoal/40">Reach</span>
          </span>
          <span className="text-xs text-gray-400 font-medium tabular-nums">
            {current + 1} / {visibleQuestions.length}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-5 sm:px-8 pt-20 pb-32">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={question.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Question Number */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-bold text-charcoal/30">{current + 1}</span>
                <ArrowLeft className="w-3 h-3 text-charcoal/30" />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-3 leading-tight">
                {question.title}
              </h2>

              {/* Subtitle */}
              {question.subtitle && (
                <p className="text-base sm:text-lg text-gray-400 mb-8">{question.subtitle}</p>
              )}
              {!question.subtitle && <div className="mb-8" />}

              {/* Input */}
              {(question.type === 'text' || question.type === 'email' || question.type === 'tel') && (
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type={question.type === 'tel' ? 'tel' : 'text'}
                  dir={question.type === 'tel' ? 'ltr' : 'rtl'}
                  value={(getValue() as string) || ''}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder={question.placeholder || 'اكتب إجابتك هنا...'}
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-charcoal text-xl sm:text-2xl py-3 outline-none transition-colors duration-300 text-charcoal placeholder:text-gray-300"
                />
              )}

              {question.type === 'textarea' && (
                <textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  value={(getValue() as string) || ''}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder={question.placeholder || 'اكتب إجابتك هنا...'}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-charcoal text-lg sm:text-xl py-3 outline-none transition-colors duration-300 text-charcoal placeholder:text-gray-300 resize-none"
                />
              )}

              {question.type === 'select' && question.options && (
                <div className="space-y-3">
                  {question.options.map((opt, i) => {
                    const isSelected = getValue() === opt.value
                    return (
                      <motion.button
                        key={opt.value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        onClick={() => {
                          setAnswer(opt.value)
                          // Auto-advance on select after brief delay
                          setTimeout(() => {
                            setError(null)
                            if (!isLast) {
                              setDirection(1)
                              setCurrent((c) => c + 1)
                            }
                          }, 300)
                        }}
                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all duration-200 text-right group ${
                          isSelected
                            ? 'border-charcoal bg-charcoal/5'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <span className={`flex-shrink-0 w-7 h-7 rounded-md border-2 flex items-center justify-center text-xs font-bold transition-all ${
                          isSelected
                            ? 'border-charcoal bg-charcoal text-white'
                            : 'border-gray-300 text-gray-400 group-hover:border-gray-500'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt.icon && <span className="text-xl">{opt.icon}</span>}
                        <span className={`text-base sm:text-lg font-medium ${isSelected ? 'text-charcoal' : 'text-gray-600'}`}>
                          {opt.label}
                        </span>
                        {isSelected && (
                          <Check className="w-5 h-5 text-charcoal mr-auto" />
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              )}

              {question.type === 'multiselect' && question.options && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-400 mb-4">يمكنك اختيار أكثر من خيار</p>
                  {question.options.map((opt, i) => {
                    const selected = ((getValue() as string[]) || []).includes(opt.value)
                    return (
                      <motion.button
                        key={opt.value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        onClick={() => toggleMultiselect(opt.value)}
                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all duration-200 text-right group ${
                          selected
                            ? 'border-charcoal bg-charcoal/5'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <span className={`flex-shrink-0 w-7 h-7 rounded-md border-2 flex items-center justify-center transition-all ${
                          selected
                            ? 'border-charcoal bg-charcoal text-white'
                            : 'border-gray-300 group-hover:border-gray-500'
                        }`}>
                          {selected ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold text-gray-400">{String.fromCharCode(65 + i)}</span>}
                        </span>
                        {opt.icon && <span className="text-xl">{opt.icon}</span>}
                        <span className={`text-base sm:text-lg font-medium ${selected ? 'text-charcoal' : 'text-gray-600'}`}>
                          {opt.label}
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              )}

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm mt-4"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between" dir="rtl">
          {/* Back */}
          <button
            onClick={goBack}
            disabled={current === 0}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              current === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-500 hover:text-charcoal hover:bg-gray-100'
            }`}
          >
            <ArrowRight className="w-4 h-4" />
            رجوع
          </button>

          {/* Next / Submit */}
          <button
            onClick={goNext}
            className="flex items-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-md"
          >
            {isLast ? submitLabel : 'التالي'}
            {!isLast && <ArrowLeft className="w-4 h-4" />}
            {isLast && <Check className="w-4 h-4" />}
          </button>
        </div>

        {/* Enter hint */}
        <div className="max-w-xl mx-auto px-5 sm:px-8 pb-3 hidden sm:block">
          <p className="text-[11px] text-gray-300 text-center">
            اضغط <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-400 font-mono text-[10px]">Enter ↵</kbd> للمتابعة
          </p>
        </div>
      </div>
    </div>
  )
}
