import Head from 'next/head';
import { useEffect } from 'react';
import { User, Code, Shield, Server, Activity, Grid } from 'lucide-react';

export default function JavaScriptExpertPage() {
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
    { title: "الاستشارة", desc: "تحديد متطلبات جافاسكريبت الخاصة بك لتطوير الواجهة الأمامية أو التطوير الشامل.", icon: <Activity size={32} /> },
    { title: "التخطيط", desc: "إنشاء خارطة طريق للمشروع مصممة خصيصًا لاحتياجات عملك والجدول الزمني.", icon: <Grid size={32} /> },
    { title: "التطوير", desc: "كتابة كود جافاسكريبت فعال وقابل لإعادة الاستخدام يضمن الأداء والوظائف.", icon: <Code size={32} /> },
    { title: "الاختبار", desc: "ضمان اختبار شامل للوظائف وسهولة الاستخدام والأداء عبر المنصات.", icon: <Shield size={32} /> },
    { title: "الإطلاق", desc: "نشر الكود مع جافاسكريبت نظيفة ومحسّنة في الإنتاج وتوفير الدعم طويل الأمد.", icon: <Server size={32} /> }
  ];

  const testimonials = [
    {
      quote: "بنى فريق جافاسكريبت لدينا تطبيق ويب قوي بوظائف سلسة. كانت عملية التطوير سلسة وسريعة!",
      name: "مارك توماس",
      role: "مدير المنتج، WebCraft",
      image: <User size={40} />
    },
    {
      quote: "خبرة استثنائية في جافاسكريبت! الحل الذي قدموه ساعدنا في توسيع منصتنا بسهولة.",
      name: "آنا جونسون",
      role: "الرئيس التقني، CodeHub",
      image: <User size={40} />
    },
    {
      quote: "أنا مندهش من اهتمامهم بالتفاصيل والكود النظيف. يعمل التطبيق بشكل مثالي على جميع الأجهزة.",
      name: "روبرت وايت",
      role: "المؤسس، DigitalWave",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar" style={{ textAlign: 'right' }}>
      <Head>
        <title>توظيف مطوري جافاسكريبت | DH Solution</title>
      </Head>

      {/* قسم البداية */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري جافاسكريبت خبراء</span></h1>
          <p>أفضل 1% من المهندسين لبناء تطبيقات ويب سريعة وقابلة للتوسع باستخدام جافاسكريبت.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار جافاسكريبت لمشروعك؟</h2>
          <p>
            جافاسكريبت هي أقوى وأكثر لغات البرمجة مرونة لبناء تطبيقات ويب تفاعلية وديناميكية.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Activity size={32} />
              </div>
              <h3>تطوير سريع</h3>
              <p>أُطر عمل جافاسكريبت مثل React و Node.js تمكّن من تطوير تطبيقات ويب حديثة بسرعة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={32} />
              </div>
              <h3>قابلة للتوسع بسهولة</h3>
              <p>تسمح جافاسكريبت بتوسيع التطبيقات بسهولة لتحمل حركة مرور وطلب متزايد.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />
              </div>
              <h3>آمنة</h3>
              <p>تقدم جافاسكريبت ميزات أمان قوية لبناء تطبيقات موثوقة وآمنة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Grid size={32} />
              </div>
              <h3>مرنة</h3>
              <p>توفر جافاسكريبت مرونة مع أطر ومكتبات متعددة لإنشاء حلول مخصصة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">من التخطيط إلى النشر، نضمن تطوير جافاسكريبت نظيف ومحسّن.</p>
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
                  {t.image}
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
