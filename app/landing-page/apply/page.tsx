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
    id: 'type',
    title: 'ما نوع صفحة الهبوط التي تحتاجها؟',
    type: 'select',
    required: true,
    options: [
      { label: 'صفحة منتج أو خدمة', value: 'product' },
      { label: 'صفحة حجز أو استشارة', value: 'booking' },
      { label: 'صفحة تطبيق او منتج SaaS', value: 'saas' },
      { label: 'غير متأكد', value: 'unsure' },
    ],
  },
  {
    id: 'website',
    title: 'هل لديك موقع إلكتروني حالي؟',
    type: 'select',
    required: true,
    options: [
      { label: 'نعم، لدي موقع', value: 'yes' },
      { label: 'لا، هذا مشروعي الأول', value: 'no' },
      { label: 'لدي حسابات سوشال ميديا فقط', value: 'social-only' },
    ],
  },
  {
    id: 'existing-url',
    title: 'ما رابط موقعك الحالي؟',
    type: 'text',
    placeholder: 'مثال: www.example.com',
    required: true,
    showWhen: { questionId: 'website', value: 'yes' },
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

export default function ApplyPage() {
  const handleSubmit = async (answers: Record<string, string | string[]>) => {
    const webhook = process.env.NEXT_PUBLIC_LANDING_PAGE_WEBHOOK
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            form: 'landing-page',
            name: answers.name,
            type: answers.type,
            website: answers.website,
            existingUrl: answers['existing-url'] || null,
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
      thankYouTitle="شكراً لك! 🎉"
      thankYouSubtitle="تم استلام طلبك بنجاح. سنتواصل معك عبر الواتساب خلال 24 ساعة لمناقشة مشروعك."
      submitLabel="إرسال الطلب"
    />
  )
}
