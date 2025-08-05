import Head from 'next/head';
import { useEffect } from 'react';
import { Edit, Search, GitCommit, Monitor, RefreshCw, User } from 'lucide-react';

export default function UIUXDesignerPage() {
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
    { title: "الاستشارة", desc: "فهم احتياجات المستخدم وتحديد متطلبات التصميم.", icon: <Edit size={40} /> },
    { title: "البحث", desc: "إجراء أبحاث المستخدم لفهم الجمهور المستهدف وسلوك المستخدم.", icon: <Search size={40} /> },
    { title: "رسم الإطارات", desc: "إنشاء إطارات تصميم لتصور تخطيط ووظائف التصميم.", icon: <GitCommit size={40} /> },
    { title: "التصميم", desc: "تصميم نماذج أولية عالية الدقة وواجهات المستخدم بناءً على الإطارات.", icon: <Monitor size={40} /> },
    { title: "الاختبار", desc: "اختبار التصاميم مع المستخدمين وتحسينها بناءً على الملاحظات.", icon: <RefreshCw size={40} /> }
  ];

  const testimonials = [
    {
      quote: "فريق تصميم UI/UX في DH Solution حول تجربة استخدام تطبيقنا، مما زاد من رضا المستخدمين بشكل كبير.",
      name: "صوفيا ويليامز",
      role: "مديرة المنتج، TechTonic",
      icon: <User size={40} />
    },
    {
      quote: "اهتمامهم بالتفاصيل ونهج التصميم المتمركز حول المستخدم كان له دور أساسي في نجاح تطبيقنا.",
      name: "دانيال بلاك",
      role: "المؤسس، InnovateX",
      icon: <User size={40} />
    },
    {
      quote: "شهدنا تحسنًا فوريًا في تفاعل المستخدمين بعد التعاون مع فريق UI/UX الخاص بهم.",
      name: "راشيل جرين",
      role: "مصممة رئيسية، AppWorks",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف مصممي UI/UX | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مصممي UI/UX</span> الخبراء</h1>
          <p>إنشاء تصاميم سهلة الاستخدام تزيد من التفاعل ورضا المستخدمين.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار مصممي UI/UX لدينا؟</h2>
          <p>
            يركز مصممونا على إنشاء تصاميم متمركزة حول المستخدم تقدم تجربة سلسة وبديهية. سواء كانت تطبيقات موبايل، منصات ويب، أو تصميم منتجات، نحن نضع احتياجات المستخدم في قلب كل قرار تصميم.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Edit size={40} />
              </div>
              <h3>تصميم إبداعي</h3>
              <p>يقدم مصممونا تصاميم مبتكرة وجذابة تتماشى مع علامتك التجارية واحتياجات المستخدم.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Search size={40} />
              </div>
              <h3>نهج متمركز حول المستخدم</h3>
              <p>نركز على رحلة المستخدم، ونصمم تجارب سهلة الاستخدام وسلسة التنقل.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Monitor size={40} />
              </div>
              <h3>تصميم للجوال أولاً</h3>
              <p>نضمن أن تصميمك مُحسن للجوال ليقدم تجربة سلسة عبر جميع الأجهزة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <RefreshCw size={40} />
              </div>
              <h3>عملية تكرارية</h3>
              <p>نستخدم أسلوب تصميم تكراري، نحسن المنتج باستمرار بناءً على الملاحظات والاختبارات لتحقيق أفضل النتائج.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">تصميم مع وضع المستخدم في الاعتبار لإنشاء تجارب عملية وجذابة وجميلة.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
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

      {/* قسم شهادات العملاء */}
      <section className="testimonials">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info" style={{display:'flex', alignItems:'center', gap:'10px'}}>
                  {t.icon}
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
