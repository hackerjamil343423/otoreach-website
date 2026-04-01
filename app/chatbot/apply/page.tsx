'use client'

import TypeformWizard, { Question } from '../../components/TypeformWizard'

const questions: Question[] = [
  {
    id: 'name',
    title: 'ما اسمك؟',
    subtitle: 'يسعدنا التعرف عليك',
    type: 'text',
    placeholder: 'اكتب اسمك الكامل',
    required: true,
  },
  {
    id: 'url',
    title: 'ما رابط موقع شركتك؟',
    subtitle: 'موقع إلكتروني أو حساب سوشال ميديا',
    type: 'text',
    placeholder: 'مثال: www.example.com',
    required: true,
  },
  {
    id: 'volume',
    title: 'كم عدد الاستفسارات اليومية تقريباً؟',
    subtitle: 'من العملاء أو المتابعين',
    type: 'select',
    required: true,
    options: [
      { label: 'أقل من 20 رسالة يومياً', value: 'under-20' },
      { label: '20 - 100 رسالة يومياً', value: '20-100' },
      { label: '100 - 500 رسالة يومياً', value: '100-500' },
      { label: 'أكثر من 500 رسالة يومياً', value: 'above-500' },
    ],
  },
  {
    id: 'whatsapp',
    title: 'ما رقم الواتساب الخاص بك؟',
    subtitle: 'سنتواصل معك خلال 24 ساعة',
    type: 'tel',
    placeholder: '+966 5XX XXX XXXX',
    required: true,
  },
]

export default function ChatbotApplyPage() {
  const handleSubmit = async (answers: Record<string, string | string[]>) => {
    const webhook = process.env.NEXT_PUBLIC_CHATBOT_WEBHOOK
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            form: 'chatbot',
            name: answers.name,
            url: answers.url,
            volume: answers.volume,
            whatsapp: answers.whatsapp,
          }),
        })
      } catch (e) {
        // silently fail - don't block the user
      }
    }
  }

  return (
    <TypeformWizard
      questions={questions}
      onSubmit={handleSubmit}
      brandName="OTOReach"
      thankYouTitle="شكراً لك! 🤖"
      thankYouSubtitle="تم استلام طلبك بنجاح. سنتواصل معك عبر الواتساب خلال 24 ساعة لمناقشة مشروع الشات بوت."
      submitLabel="إرسال الطلب"
    />
  )
}
