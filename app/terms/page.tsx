import { Footer } from '@/app/sections/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-right">شروط الاستخدام</h1>
        <p className="text-sm text-charcoal/50 mb-12 text-right">آخر تحديث: مارس 2026</p>

        <div className="space-y-8 text-charcoal/80 leading-relaxed text-right">
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">1. مقدمة</h2>
            <p>مرحباً بك في OTO REACH LLC. باستخدامك لموقعنا وخدماتك، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام خدماتنا.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">2. التعريفات</h2>
            <p>"الشركة" تعني OTO REACH LLC. "الخدمات" تشمل جميع الخدمات والمنتجات التي نقدمها بما في ذلك بناء صفحات الهبوط، روبوتات الدردشة الذكية، أنظمة الأتمتة، وأدوات الذكاء الاصطناعي. "العميل" يعني الشخص أو الشركة التي تستخدم خدماتنا.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">3. نطاق الخدمات</h2>
            <p>نقدم الخدمات التالية وفقاً للشروط المتفق عليها:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>تصميم وتطوير صفحات الهبوط</li>
              <li>بناء وتخصيص روبوتات الدردشة الذكية</li>
              <li>بناء أنظمة تشغيلية وأتمتة العمليات</li>
              <li>أدوات تحسين الأوامر والذكاء الاصطناعي</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">4. المدفوعات والتسعير</h2>
            <p>جميع الأسعار معروضة بوضوح قبل بدء المشروع. يلتزم العميل بدفع المبلغ المتفق عليه وفقاً للجدول الزمني المحدد. جميع المدفوعات غير قابلة للاسترداد بعد بدء العمل على المشروع.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">5. الملكية الفكرية</h2>
            <p>جميع حقوق الملكية الفكرية للمحتوى والتصاميم والأكواد التي ننشئها تنتقل إلى العميل بعد اكتمال الدفع. نحتفظ بالحق في عرض المشروع في معرض أعمالنا ما لم يتم الاتفاق على خلاف ذلك.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">6. التعديلات والمراجعات</h2>
            <p>نقدم جولات تعديل محددة وفقاً لكل خدمة. أي تعديلات إضافية خارج النطاق المتفق عليه قد تتطلب رسوماً إضافية.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">7. حدود المسؤولية</h2>
            <p>لن نكون مسؤولين عن أي أضرار غير مباشرة أو تبعية ناتجة عن استخدام خدماتنا. مسؤوليتنا القصوى لا تتجاوز المبلغ المدفوع مقابل الخدمة المحددة.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">8. سرية المعلومات</h2>
            <p>نلتزم بالحفاظ على سرية جميع المعلومات التي يشاركها العميل معنا. لا نكشف عن أي معلومات حساسة لأطراف ثالثة دون إذن كتابي.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">9. إنهاء الخدمة</h2>
            <p>يحق لأي من الطرفين إنهاء الاتفاق مع إشعار كتابي مسبق. في حالة الإنهاء، سيتم تسليم جميع المواد المنجزة وفق مستوى الإنجاز الحالي.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">10. التعديلات على الشروط</h2>
            <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار العملاء بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">11. القانون الحاكم</h2>
            <p>تخضع هذه الشروط وتفسر وفقاً لقوانين الولايات المتحدة. أي نزاع ينشأ سيتم حله عن طريق التحكيم.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4">12. التواصل</h2>
            <p>لأي استفسارات حول شروط الاستخدام، يمكنك التواصل معنا عبر:</p>
            <p className="mt-2 font-medium">البريد الإلكتروني: jamil@otoreach.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
