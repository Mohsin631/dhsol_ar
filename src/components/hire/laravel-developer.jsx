import Head from 'next/head';
import { useEffect } from 'react';
import { User, Zap, Layers, Lock, Grid } from 'lucide-react';

export default function LaravelDeveloperPage() {
  useEffect(() => {
    const steps = document.querySelectorAll('.process-step');
    const cards = document.querySelectorAll('.testimonial-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    steps.forEach(step => observer.observe(step));
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    { title: "الاستشارة", desc: "مناقشة أهدافك وكيف يتناسب Laravel مع بنية تطبيقك.", icon: <Zap className="h-8 w-8 text-gray-500" /> },
    { title: "التخطيط", desc: "تحديد مجموعة الميزات، الجداول الزمنية، واختيار حزم Laravel.", icon: <Grid className="h-8 w-8 text-gray-500" /> },
    { title: "التطوير", desc: "حلول Laravel مخصصة باستخدام أفضل الممارسات وكود نظيف.", icon: <Layers className="h-8 w-8 text-gray-500" /> },
    { title: "الاختبار", desc: "اختبارات يدوية وآلية لضمان الأداء.", icon: <Lock className="h-8 w-8 text-gray-500" /> },
    { title: "الإطلاق", desc: "نشر آمن وقابل للتوسع مع دعم مستمر.", icon: <Zap className="h-8 w-8 text-gray-500" /> }
  ];

  const testimonials = [
    {
      quote: "تم تسليم تطبيق Laravel الخاص بنا بسرعة وجودة ممتازة تفوق التوقعات.",
      name: "نينا براون",
      role: "قائدة المشروع، WebFlux"
    },
    {
      quote: "مطورو Laravel مهرة للغاية جعلوا نظامنا الخلفي فعالًا للغاية.",
      name: "ليو كارتر",
      role: "الرئيس التقني، BrickChain"
    },
    {
      quote: "كان لدينا موعد نهائي ضيق وفريق Laravel في DH Solution قام بعمل مذهل.",
      name: "آفا مارتينيز",
      role: "المؤسسة، DevLaunch"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar" style={{ textAlign: 'right' }}>
      <Head>
        <title>توظيف مطوري Laravel | DH Solution</title>
      </Head>

      {/* قسم البداية */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري Laravel خبراء</span></h1>
          <p>أفضل 1% من المهندسين لبناء تطبيقات ويب حديثة، قابلة للصيانة والتوسع بسرعة.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار Laravel لمشروعك؟</h2>
          <p>
            Laravel هو أحد أكثر أُطر عمل PHP أناقة لتطوير الويب الحديث — مثالي من الشركات الناشئة إلى المؤسسات التي تبحث عن تطبيقات آمنة وقابلة للصيانة.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-8 w-8 text-gray-500" />
              </div>
              <h3>تطوير سريع</h3>
              <p>أدوات Laravel المدمجة مثل التوجيه، القوالب، و Eloquent ORM تسرع عملية التطوير.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Grid className="h-8 w-8 text-gray-500" />
              </div>
              <h3>بنية قابلة للتوسع</h3>
              <p>مصمم ليتوسع، Laravel مثالي لكل من MVP وأنظمة المؤسسات الكبيرة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock className="h-8 w-8 text-gray-500" />
              </div>
              <h3>الأمان مدمج</h3>
              <p>يوفر Laravel حماية CSRF، التشفير، التوثيق، وغيرها من ميزات الأمان المتقدمة افتراضيًا.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers className="h-8 w-8 text-gray-500" />
              </div>
              <h3>نظام بيئي غني</h3>
              <p>يشمل Laravel أدوات مثل Forge وNova وVapor للاستضافة، لوحات الإدارة، والنشر بدون خوادم.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">مهيكلة للسرعة والدقة وجودة التنفيذ.</p>
          <div className="steps-row" style={{ display: 'flex', flexDirection: 'row-reverse', gap: '20px' }}>
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* آراء العملاء */}
      <section className="testimonials">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid" style={{ direction: 'rtl' }}>
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info" style={{ display: 'flex', gap: '12px', alignItems: 'center', flexDirection: 'row-reverse' }}>
                  <User className="h-8 w-8 text-gray-500" />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
