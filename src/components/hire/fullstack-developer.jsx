import Head from 'next/head';
import { useEffect } from 'react';
import {
  Code2, Gauge, Link2, Cloud, Users
} from 'lucide-react';

export default function FullstackDeveloperPage() {
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
    { title: "الاستشارة", desc: "فهم متطلبات مشروعك وأهدافه.", icon: <Users size={40} /> },
    { title: "التخطيط", desc: "تصميم خارطة طريق لأنظمة الواجهة الأمامية والخلفية.", icon: <Code2 size={40} /> },
    { title: "التطوير", desc: "تطوير ودمج وظائف الواجهة الأمامية والخلفية.", icon: <Gauge size={40} /> },
    { title: "الاختبار", desc: "ضمان عمل كلا الجزئين من التطبيق بشكل كامل وموثوق.", icon: <Link2 size={40} /> },
    { title: "الإطلاق", desc: "نشر ومراقبة تطبيق الفول ستاك لتجربة مستخدم سلسة.", icon: <Cloud size={40} /> }
  ];

  const testimonials = [
    {
      quote: "كان فريق الفول ستاك لديهم مذهلاً. تعاملوا مع كل شيء من التصميم إلى وظائف الخلفية بدقة متناهية!",
      name: "أوليفيا رينولدز",
      role: "المديرة التنفيذية، GreenTech"
    },
    {
      quote: "تمكن مطورو الفول ستاك من بناء نظام متكامل تمامًا يعمل بسلاسة عبر الواجهة الأمامية والخلفية.",
      name: "ليام سكوت",
      role: "المؤسس، SkyDrive"
    },
    {
      quote: "تجربة رائعة مع فريقهم. فهموا نطاق المشروع وقدموا شفرة عالية الجودة.",
      name: "ميا كارتر",
      role: "مديرة المنتج، CloudWorks"
    }
  ];

  return (
    <div className="expert-page" dir="rtl">
      <Head>
        <title>توظيف مطوري فول ستاك | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري فول ستاك</span> خبراء</h1>
          <p>دمج سلس بين الواجهة الأمامية والخلفية لتطبيقات ويب قوية.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار تطوير الفول ستاك لمشروعك؟</h2>
          <p>
            تطوير الفول ستاك يمكّن المطورين من العمل على كل من الواجهة الأمامية والخلفية لتطبيقك. مع مطورينا الخبراء، نضمن نهجًا متكاملاً لبناء حلول ويب سلسة وعالية الأداء.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Code2 size={40} />
              </div>
              <h3>التطوير الشامل</h3>
              <p>يتولى مطورو الفول ستاك لدينا كل شيء، من تصميم واجهة المستخدم وتجربة المستخدم إلى منطق الخادم الخلفي.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Gauge size={40} />
              </div>
              <h3>حلول محسنة</h3>
              <p>نقدم تطبيقات محسّنة من حيث الأداء وقابلية التوسع والكفاءة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Link2 size={40} />
              </div>
              <h3>تكامل سلس</h3>
              <p>نضمن تكاملًا سلسًا بين الواجهة الأمامية والخلفية لتوفير تجربة مستخدم خالية من العيوب.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Cloud size={40} />
              </div>
              <h3>جاهزية للسحابة</h3>
              <p>حلولنا جاهزة للسحابة، مما يضمن قابلية التوسع وسهولة النشر على منصات السحابة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">هيكلة لتقديم الواجهة الأمامية والخلفية بجودة وكفاءة عالية.</p>
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
                <div className="client-info">
                  <Users size={36} className="client-icon" />
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
