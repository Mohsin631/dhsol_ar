import Head from 'next/head';
import { useEffect } from 'react';
import { Edit, GitCommit, Lock, Monitor, User } from 'lucide-react';

export default function VueJSDeveloperPage() {
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
    { title: "الاستشارة", desc: "فهم متطلبات تطوير Vue.js واحتياجات عملك.", icon: <Edit size={40} /> },
    { title: "التخطيط", desc: "إنشاء خارطة طريق للتطوير متوافقة مع أهدافك.", icon: <GitCommit size={40} /> },
    { title: "التطوير", desc: "تطوير تطبيقات Vue.js نظيفة وفعالة وقابلة للتوسع.", icon: <Monitor size={40} /> },
    { title: "الاختبار", desc: "إجراء اختبارات لضمان أداء تطبيقك في جميع السيناريوهات.", icon: <Lock size={40} /> },
    { title: "الإطلاق", desc: "نشر تطبيق Vue.js الخاص بك وضمان إطلاق سلس.", icon: <Monitor size={40} /> }
  ];

  const testimonials = [
    {
      quote: "كان فريق Vue.js في DH Solution مذهلًا. قدموا تطبيقًا رائعًا بسرعة وأداء عالي.",
      name: "كاثرين آدامز",
      role: "مديرة المنتج، ShopFlare",
      icon: <User size={40} />
    },
    {
      quote: "خبرة الفريق في Vue.js ساعدتنا في إنشاء تطبيق ويب سريع ومتجاوب. ننصح بهم بشدة!",
      name: "مارك سبنسر",
      role: "المدير التقني، Finverse",
      icon: <User size={40} />
    },
    {
      quote: "نحن سعداء جدًا بالنتيجة. قدمت DH Solution تطوير Vue.js من الطراز الأول وسلمت المشروع في الوقت المحدد.",
      name: "سارة تومسون",
      role: "المؤسسة، WebPros",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar" style={{ textAlign: 'right', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Head>
        <title>توظيف مطوري Vue.js | DH Solution</title>
      </Head>

      {/* قسم البداية */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري Vue.js خبراء</span></h1>
          <p>أفضل 1% من المهندسين لبناء تطبيقات ويب سريعة وقابلة للتوسع باستخدام Vue.js.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار Vue.js لتطبيقك؟</h2>
          <p>
            Vue.js هو إطار عمل جافاسكريبت مفتوح المصدر يمكّن المطورين من بناء تطبيقات ويب عالية الأداء وفعالة. مصمم للتكامل السهل وقابلية التوسع.
          </p>

          <div className="tech-features" style={{ display: 'flex', flexDirection: 'row-reverse', gap: '20px', flexWrap: 'wrap' }}>
            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">
                <Edit size={40} />
              </div>
              <h3>تطوير سريع</h3>
              <p>يتيح Vue.js تطويرًا سريعًا مع هيكلية مرنة وقابلة للتجزئة لتناسب أي حجم مشروع.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">
                <Monitor size={40} />
              </div>
              <h3>قابلية توسع عالية</h3>
              <p>يوفر Vue.js قابلية التوسع، مما يسمح للنظام بالنمو مع عملك مع الحفاظ على أداء عالي.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">
                <Lock size={40} />
              </div>
              <h3>آمن</h3>
              <p>يوفر Vue.js ميزات أمان تضمن حماية التطبيق من الثغرات الشائعة وأداء مستقر.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">
                <GitCommit size={40} />
              </div>
              <h3>مرن</h3>
              <p>يمكن استخدام Vue.js لتطبيقات الصفحة الواحدة أو دمجه في مشاريع أكبر لتعزيز الأداء وقابلية الاستخدام.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عملية العمل لدينا</h2>
          <p className="subtitle">من التخطيط إلى الإطلاق، نضمن نجاح تطبيق Vue.js الخاص بك.</p>
          <div className="steps-row" style={{ display: 'flex', flexDirection: 'row-reverse', gap: '20px', flexWrap: 'wrap' }}>
            {processSteps.map((step, index) => (
              <div className="process-step" key={index} style={{ flex: '1 1 200px' }}>
                <div className="icon-circle">
                  {step.icon}
                </div>
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
          <div className="testimonial-grid" style={{ direction: 'rtl', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                <p className="quote" style={{ fontStyle: 'italic', marginBottom: '10px' }}>“{t.quote}”</p>
                <div className="client-info" style={{ display: 'flex', gap: '12px', alignItems: 'center', flexDirection: 'row-reverse' }}>
                  {t.icon}
                  <div>
                    <h4 style={{ margin: 0 }}>{t.name}</h4>
                    <span style={{ color: '#555' }}>{t.role}</span>
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
