import Head from 'next/head';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faClipboardList,
  faCode,
  faClipboardCheck,
  faRocket,
  faBolt,
  faShieldAlt,
  faSlidersH,
  faUser
} from '@fortawesome/free-solid-svg-icons';

export default function AngularDeveloperPage() {
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
    { title: "الاستشارة", desc: "فهم متطلبات تطوير Angular واحتياجات عملك.", icon: faHandshake },
    { title: "التخطيط", desc: "إنشاء خارطة طريق للتطوير متوافقة مع أهدافك.", icon: faClipboardList },
    { title: "التطوير", desc: "تطوير تطبيقات Angular قوية وقابلة للتوسع بهيكلية معيارية.", icon: faCode },
    { title: "الاختبار", desc: "إجراء اختبارات صارمة لضمان أداء واستقرار تطبيق Angular الخاص بك.", icon: faClipboardCheck },
    { title: "الإطلاق", desc: "النشر وضمان الأداء الأمثل بعد الإطلاق.", icon: faRocket }
  ];

  const testimonials = [
    {
      quote: "كانت تجربة العمل مع فريق Angular في DH Solution سلسة للغاية. خبرتهم أدت إلى إطلاق سريع وفعال.",
      name: "ليزا ستيفنز",
      role: "المطورة الرئيسية، ShopCircle",
      image: "/images/client1.jpg"
    },
    {
      quote: "كنا بحاجة إلى حل Angular قابل للتوسع وعالي الأداء. DH Solution قدمت الحل المثالي.",
      name: "مايكل براون",
      role: "المدير التقني، FinSmart",
      image: "/images/client2.jpg"
    },
    {
      quote: "مطوروا Angular في DH Solution بذلوا جهداً يفوق التوقعات. المنتج النهائي تجاوز توقعاتنا!",
      name: "جيمس باركر",
      role: "الرئيس التنفيذي، GreenTech Innovations",
      image: "/images/client3.jpg"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar" style={{ textAlign: 'right', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Head>
        <title>توظيف مطوري Angular | DH Solution</title>
      </Head>

      {/* قسم البداية */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري Angular خبراء</span></h1>
          <p>أفضل 1% من المهندسين لبناء تطبيقات قوية وقابلة للتوسع باستخدام Angular.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار Angular لتطبيقك؟</h2>
          <p>
            يوفر Angular إطار عمل قوي لبناء تطبيقات ويب ديناميكية ذات صفحة واحدة بأداء عالي وقابلية توسع ممتازة. مناسب للمشاريع المعقدة وعلى مستوى المؤسسات.
          </p>

          <div className="tech-features" style={{ display: 'flex', flexDirection: 'row-reverse', gap: '20px', flexWrap: 'wrap' }}>
            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3>تطوير سريع</h3>
              <p>ربط البيانات ذو الاتجاهين وأدوات Angular المتقدمة تسهل تطوير سريع وقابلية توسع.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <h3>قابلية توسع عالية</h3>
              <p>الهندسة المعيارية لـ Angular تمكنك من بناء تطبيقات تتوسع مع نمو عملك.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>آمن</h3>
              <p>يأتي Angular مزودًا بميزات أمان مدمجة مثل حماية XSS وتنقية البيانات.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <h3>مرن</h3>
              <p>يتمتع Angular بالمرونة لتلبية احتياجات الصناعات المختلفة مع ميزات ووظائف مخصصة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عملية العمل لدينا</h2>
          <p className="subtitle">من الفكرة إلى الإطلاق، نضمن نجاح مشروع Angular الخاص بك.</p>
          <div className="steps-row" style={{ display: 'flex', flexDirection: 'row-reverse', gap: '20px', flexWrap: 'wrap' }}>
            {processSteps.map((step, index) => (
              <div className="process-step" key={index} style={{ flex: '1 1 200px' }}>
                <div className="icon-circle">
                  <FontAwesomeIcon icon={step.icon} />
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
                  <div className="client-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
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
