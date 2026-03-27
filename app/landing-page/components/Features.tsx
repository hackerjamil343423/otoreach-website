'use client'

export default function Features() {

  return (
    <section id="features" className="py-32 lg:py-40 bg-cream relative overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #D4F657 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* First Row - Single Column Problems Section */}
        <div className="mb-24 lg:mb-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-right mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading mb-6 sm:mb-8 leading-tight animate-fade-in-up">
                لماذا تحتاج صفحة هبوط احترافية الآن؟
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
              {/* Right Side - Image Box */}
              <div className="order-1 lg:order-2">
                <div className="bg-white backdrop-blur-sm rounded-3xl p-10 border border-gray-light overflow-hidden shadow-2xl animate-fade-in">
                  <img
                    src="/landing-page/images/problem-1.png"
                    alt="تحليل المنافسة"
                    className="w-full h-auto object-contain brightness-0 contrast-150"
                  />
                </div>
              </div>

              {/* Left Side - Content */}
              <div className="order-2 lg:order-1 space-y-8 text-right">
                <div className="space-y-8 text-text-body-dark leading-relaxed text-xl animate-fade-in" style={{ lineHeight: '2' }}>
                  <p className="text-text-heading text-2xl">
                    المنافسة اليوم في أعلى مستوياتها أي شخص ممكن يبني كورس أو صفحة عادية ويكتب لها محتوى لكن العملاء صاروا أذكى وانحرقوا كثير من منتجات ضعيفة
                  </p>

                  <p className="text-text-heading text-2xl">
                    حتى لو سمعتك ممتازة أي خطأ صغير أو لمسة غير احترافية ممكن تفشل بالبيع
                  </p>

                  <p className="text-text-heading text-2xl">
                    تكلفة الحصول على العميل اليوم صارت أعلى من أي وقت مضى كل نقرة وزائر وعميل محتمل مهم جدًا
                  </p>

                  <p className="text-text-heading text-2xl">
                    لما تطلب من شخص يحجز مكالمة أو يشتري منتج بسعر عالي لازم تعطيه الثقة وتخليه يشوفك كخيار وحيد في السوق
                  </p>

                  <div className="bg-cream-dark rounded-2xl p-8 mt-12">
                    <p className="font-bold text-accent-lime text-2xl mb-4">
                      نحن نحقق ذلك عبر:
                    </p>
                    <p className="text-text-heading text-xl">
                      محتوى تسويقي يلمس عقل وقلب العميل، تصميم احترافي مميز وضمان جودة يمنع أي غلطة صغيرة تضيّع عليك الصفقة
                    </p>
                  </div>
                </div>

                <div className="pt-8 animate-fade-in-up">
                  <a href="/landing-page/apply">
                    <button className="bg-accent-lime hover:bg-accent-lime-hover text-main-background px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-lime/40 inline-flex items-center">
                      اخرج من المنافسة خلال 7 أيام
                      <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Problem Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto mb-24 lg:mb-32">

          {/* Right Column - Launch Problems */}
          <div className="problem-card bg-white backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-2xl hover:shadow-accent-lime/20 animate-fade-in-up">
            {/* Image */}
            <div className="mb-10 bg-cream-dark rounded-3xl p-6 overflow-hidden">
              <img
                src="/landing-page/images/problem-2.png"
                alt="مشاكل الإطلاق"
                className="w-full h-auto object-contain brightness-0 contrast-150"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-heading mb-6 sm:mb-8 text-right leading-tight">
              الإطلاقات: إما نجاح ساحق أو فشل كامل
            </h3>

            <div className="space-y-6 text-text-body-dark leading-relaxed text-lg mb-10 text-right" style={{ lineHeight: '1.9' }}>
              <p className="text-text-heading text-xl">
                الإطلاق هو اللحظة الفاصلة بين شهور ضاعت بلا مقابل أو أيام تحقق فيها أرباح كبيرة
              </p>
              <p className="text-text-heading text-xl">
                لو المنتج ممتاز والإعلانات قوية لكن صفحة الهبوط فيها سيئة كل الإطلاق سيفشل
              </p>
            </div>

            <a href="/landing-page/apply">
              <button className="bg-accent-lime hover:bg-accent-lime-hover text-main-background px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-accent-lime/30 w-full">
                أطلق صفحتك خلال 7 أيام
              </button>
            </a>
          </div>

          {/* Left Column - Conversion Optimization */}
          <div className="problem-card bg-white backdrop-blur-sm rounded-3xl p-10 lg:p-12 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-2xl hover:shadow-accent-lime/20 animate-fade-in-up">
            {/* Image */}
            <div className="mb-10 bg-cream-dark rounded-3xl p-6 overflow-hidden">
              <img
                src="/landing-page/images/problem-3.png"
                alt="تحسين التحويلات"
                className="w-full h-auto object-contain brightness-0 contrast-150"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-heading mb-6 sm:mb-8 text-right leading-tight">
              كل يوم يمر بدون تحسين = خسارة أموال
            </h3>

            <div className="space-y-6 text-text-body-dark leading-relaxed text-lg mb-10 text-right" style={{ lineHeight: '1.9' }}>
              <p className="text-text-heading text-xl">
                كل يوم صفحتك غير محسنة، أنت تخسر عملاء ومبيعات.
              </p>
              <p className="text-text-heading text-xl">
                مجرد تعديل ذكي في صفحة الهبوط رفع أرباح عملائنا أكثر من 44%.
              </p>
              <p className="text-accent-lime text-xl font-bold">
                بدل ما تحبس نفسك شهور وتكتب وتبني لوحدك نحن نسلّم لك صفحة احترافية خلال 7 أيام فقط تجلب لك: مكالمات – مبيعات – عملاء.
              </p>
            </div>

            <a href="/landing-page/apply">
              <button className="bg-accent-lime hover:bg-accent-lime-hover text-main-background px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-accent-lime/30 w-full">
                احصل على صفحتك الآن
              </button>
            </a>
          </div>
        </div>

        {/* Four Elements Section */}
        <div className="mb-24 lg:mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-heading mb-8 leading-tight animate-fade-in-up">
                نحن نحقق نتائج لعملائنا من خلال التركيز على أربعة عناصر
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Element 1 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                <div className="w-20 h-20 bg-accent-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-heading mb-4">البحث والتحليل</h3>
                <p className="text-text-body-dark leading-relaxed">نغوص عميقًا في السوق، ندرس منافسيك والإطلاقات ناجحة ونحدد محفزات الشراء المخفية.</p>
              </div>

              {/* Element 2 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                <div className="w-20 h-20 bg-accent-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-heading mb-4">المحتوى (Copy)</h3>
                <p className="text-text-body-dark leading-relaxed">نكتب كلمات تعكس رغبات ومخاوف جمهورك، بصوت علامتك التجارية، بدون مبالغة أو ضغط، بل بنص واضح و مقنع</p>
              </div>

              {/* Element 3 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                <div className="w-20 h-20 bg-accent-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-heading mb-4">التصميم</h3>
                <p className="text-text-body-dark leading-relaxed">تصميم مميز + سرعة تحميل + مناسب للموبايل أولًا، كل عنصر يوضع استراتيجيًا لبناء الثقة ودفع العميل للشراء</p>
              </div>

              {/* Element 4 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                <div className="w-20 h-20 bg-accent-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-heading mb-4">السرعة</h3>
                <p className="text-text-body-dark leading-relaxed">خلال 7 يوم فقط تحصل على صفحتك كاملة بدون مماطلة ولا أعذار</p>
              </div>
            </div>

            <div className="text-center mt-16">
              <a href="/landing-page/apply">
                <button className="bg-accent-lime hover:bg-accent-lime-hover text-main-background px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-lime/40">
                  احصل على صفحتك خلال 7 أيام
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Why Us Section */}
        <div className="mb-24 lg:mb-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-heading mb-8 leading-tight animate-fade-in-up">
                لماذا تختار صفحاتنا؟
              </h2>
            </div>

            {/* New 2-3-3 Grid Layout */}
            <div className="space-y-8 mb-12 sm:mb-16">

              {/* First Row - 2 boxes (1 big, 1 normal) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Large box spanning 2 columns */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-12 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up">
                  <div className="mb-8 flex justify-center">
                    <img
                      src="/landing-page/images/1.png"
                      alt="سجل حافل بالنجاحات"
                      className="w-32 h-32 object-contain brightness-0 contrast-125"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal mb-6 text-center">سجل حافل بالنجاحات</h3>
                  <p className="text-text-body-dark leading-relaxed text-right text-lg">على مدار سنوات، قدمنا نتائج استثنائية لعدد من أكبر الشركات في مجال الأعمال الرقمية. لا يهم حجم المشروع أو ضيق الوقت نحن دائمًا نفي بالوعد.</p>
                </div>

                {/* Normal box */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                  <div className="mb-6 flex justify-center">
                    <img
                      src="/landing-page/images/2.png"
                      alt="مهووسون بالنتائج"
                      className="w-32 h-32 object-contain brightness-0 contrast-125"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4 sm:mb-6">مهووسون بالنتائج</h3>
                  <p className="text-text-body-dark leading-relaxed text-right text-lg">على عكس معظم وكالات تصميم الصفحات نحن لا نهتم فقط ببناء صفحة "جميلة" أو "مثالية". نحن مهووسون بالنتائج. كل قرار وكل خطوة نأخذها تكون بحساب ودقة بهدف زيادة المبيعات</p>
                </div>
              </div>

              {/* Second Row - 3 normal boxes */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                  <div className="mb-6 flex justify-center">
                    <img
                      src="/landing-page/images/3.png"
                      alt="السرعة"
                      className="w-32 h-32 object-contain brightness-0"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-6">السرعة</h3>
                  <p className="text-text-body-dark leading-relaxed text-right text-lg">السرعة هي أكبر قيمة لدينا. في البزنس إذا لم تتحرك بسرعة ستخسر نحن ندرك ذلك، ولهذا نسلم صفحتك خلال 7 أيام كحد أقصى بدون نقاش</p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                  <div className="mb-6 flex justify-center">
                    <img
                      src="/landing-page/images/4.png"
                      alt="تواصل عالي المستوى"
                      className="w-32 h-32 object-contain brightness-0"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-6">تواصل عالي المستوى</h3>
                  <p className="text-text-body-dark leading-relaxed text-right text-lg">تواصل مستمر على مدار الساعة. نرد غالبًا خلال 30 دقيقة فقط، حتى نقلل وقت الانتظار ونبقيك دائمًا على اطلاع كل قرار يتم أخذه يكون بالتنسيق معك وبما يتماشى مع رؤيتك</p>
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                  <div className="mb-6 flex justify-center">
                    <img
                      src="/landing-page/images/5.png"
                      alt="كتابة إعلانية عالية التحويل"
                      className="w-32 h-32 object-contain brightness-0"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-4">كتابة إعلانية عالية التحويل</h3>
                  <p className="text-text-body-dark leading-relaxed text-right">سواء احتجت صفحة مبيعات طويلة أو صفحة تسجيل بسيطة نحن نكتب لك نصوصًا مقنعة ومحسّنة للتحويل بأعلى مستوى نصوص تتماشى مع هوية علامتك التجارية وفي نفس الوقت تحقق نتائج مذهلة</p>
                </div>
              </div>

              {/* Third Row - 3 normal boxes */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                  <div className="mb-6 flex justify-center">
                    <img
                      src="/landing-page/images/6.png"
                      alt="تعديلات بلا حدود"
                      className="w-32 h-32 object-contain brightness-0"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-4">تعديلات بلا حدود</h3>
                  <p className="text-text-body-dark leading-relaxed text-right">على عكس وكالات اخرى تضع قيود ورسوم إضافية للتعديلات نحن نعمل معك حتى تصل للرضا التام لا حدود ولا تكاليف إضافية رؤيتك تستحق أن تُنفذ بدقة، وسنستمر بالعمل حتى نحققها معك</p>
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                  <div className="mb-6 flex justify-center">
                    <img
                      src="/landing-page/images/7.png"
                      alt="تصاميم راقية"
                      className="w-32 h-32 object-contain brightness-0"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-4">تصاميم راقية</h3>
                  <p className="text-text-body-dark leading-relaxed text-right">نمزج بين الجماليات المميزة والتصميمات المبنية على استراتيجيات التحويل. صفحاتنا لا تبدو محترفة فقط، بل تُبنى بعناية لتقود الزائر خطوة بخطوة نحو عرضك، وتبني ثقة فورية مع علامتك. كل عنصر يوضع في مكانه بدقة ليزيد التفاعل والثقة</p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-light hover:border-accent-lime/40 transition-all duration-700 shadow-sm hover:shadow-accent-lime/20 animate-fade-in-up text-center">
                  <div className="mb-6 flex justify-center">
                    <img
                      src="/landing-page/images/8.png"
                      alt="صفحات محسّنة للتحويل"
                      className="w-32 h-32 object-contain brightness-0"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-4">صفحات محسّنة للتحويل (CRO Optimized)</h3>
                  <p className="text-text-body-dark leading-relaxed text-right">كل صفحة تُبنى على مبادئ مجربة من خلال تحليل أكثر من 100 إطلاق ناجح. نعمل على التفاصيل الصغيرة التي تبني الثقة نضبط كل شيء ليحوّل الزائر إلى عميل. نحن لا نخمن نحن نطبق تكتيكات مجربة تحقق نتائج دائما مع عملائنا</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="/landing-page/apply">
                <button className="bg-accent-lime hover:bg-accent-lime-hover text-main-background px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-lime/40">
                  احجز استشارة مجانية
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
