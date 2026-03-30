import { Footer } from '@/app/sections/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-right">سياسة الخصوصية</h1>
        <p className="text-sm text-charcoal/50 mb-12 text-right">آخر تحديث: مارس 2026</p>

        <div className="space-y-8 text-charcoal/80 leading-relaxed text-right">
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">1. مقدمة</h2>
            <p>نحن في OTO REACH LLC نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات التي نحصل عليها منك عند استخدام موقعنا أو خدماتنا.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">2. المعلومات التي نجمعها</h2>
            <p>قد نجمع المعلومات التالية:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>الاسم وعنوان البريد الإلكتروني ورقم الهاتف عند التسجيل أو حجز استشارة</li>
              <li>معلومات حول شركتك وموقعك الإلكتروني لتقديم خدماتنا</li>
              <li>بيانات الاستخدام مثل الصفحات التي تزورها والوقت الذي تقضيه على الموقع</li>
              <li>معلومات الجهاز والمتصفح لتحسين تجربة المستخدم</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">3. كيف نستخدم معلوماتك</h2>
            <p>نستخدم المعلومات المجمعة للأغراض التالية:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>تقديم خدماتنا وتحسينها</li>
              <li>التواصل معك بخصوص مشاريعك واستفساراتك</li>
              <li>إرسال تحديثات وعروض relevant (مع إمكانية إلغاء الاشتراك)</li>
              <li>تحليل استخدام الموقع لتحسين التجربة</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">4. حماية البيانات</h2>
            <p>نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير. نستخدم تقنيات التشفير ونحد من الوصول إلى بياناتك.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">5. مشاركة البيانات مع أطراف ثالثة</h2>
            <p>لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك بياناتك مع:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>مقدمي الخدمات الذين يساعدوننا في تشغيل أعمالنا (استضافة، تحليلات)</li>
              <li>الجهات القانونية عند الطلب وفقاً للقانون</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">6. ملفات تعريف الارتباط (Cookies)</h2>
            <p>نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور على الموقع. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">7. حقوقك</h2>
            <p>لديك الحق في:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>الوصول إلى بياناتك الشخصية</li>
              <li>طلب تصحيح أو حذف بياناتك</li>
              <li>الاعتراض على معالجة بياناتك</li>
              <li>إلغاء الاشتراك من Communications التسويقية</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">8. التواصل</h2>
            <p>لأي استفسارات حول سياسة الخصوصية، يمكنك التواصل معنا عبر:</p>
            <p className="mt-2 font-medium">البريد الإلكتروني: jamil@otoreach.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
