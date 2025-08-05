import Head from 'next/head';
import { useEffect } from 'react';
import { User, List, Code, CheckSquare, Rocket, Clock, Layers, Phone, Sliders } from 'lucide-react';

export default function HTMLCSSExpertPage() {
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
    { title: "الاستشارة", desc: "تحديد متطلباتك لتصميم وتخطيط HTML و CSS.", icon: <User size={32} /> },
    { title: "التخطيط", desc: "إنشاء خارطة طريق تصميم واضحة وقابلة للتوسع بناءً على أهدافك.", icon: <List size={32} /> },
    { title: "التطوير", desc: "تطوير كود HTML و CSS نظيف، دلالي، ومتجاوب.", icon: <Code size={32} /> },
    { title: "الاختبار", desc: "التأكد من عمل كود HTML و CSS على جميع الأجهزة والمتصفحات.", icon: <CheckSquare size={32} /> },
    { title: "الإطلاق", desc: "نشر التصميم على الإنتاج وضمان إطلاق سلس.", icon: <Rocket size={32} /> }
  ];

  const testimonials = [
    {
      quote: "ساعدنا فريق HTML/CSS في DH Solution على بناء موقع إلكتروني مذهل بصريًا. يبدو رائعًا على جميع الأجهزة!",
      name: "جيسيكا آدامز",
      role: "مصممة ويب، CreativeHub",
      icon: <User size={40} color="#FF5733" />
    },
    {
      quote: "عمل رائع على HTML و CSS الخاص بنا. لدينا الآن موقع سريع وسلس ومتجاوب.",
      name: "ديفيد كوبر",
      role: "الرئيس التنفيذي، Techify",
      icon: <User size={40} color="#33C1FF" />
    },
    {
      quote: "مطورون مهرة للغاية! فهموا رؤيتنا وقدموا تصميمات HTML و CSS استثنائية.",
      name: "سامانثا ريد",
      role: "مديرة المنتجات، FlexWeb",
      icon: <User size={40} color="#33FF57" />
    }
  ];

  return (
    <div className="expert-page" dir="rtl">
      <Head>
        <title>توظيف خبراء HTML/CSS | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section" dir="rtl">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف خبراء <span>HTML/CSS</span></h1>
          <p>أفضل 1% من المهندسين لإنشاء مواقع متجاوبة وجذابة بصريًا باستخدام HTML و CSS نظيف.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview" dir="rtl">
        <div className="container">
          <h2>لماذا تختار HTML و CSS لموقعك؟</h2>
          <p>
            يشكل HTML و CSS العمود الفقري لتصميم الويب الحديث، مما يتيح لك بناء مواقع جذابة، متجاوبة وسهلة الاستخدام.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Clock size={32} /> {/* أيقونة "تطوير سريع" */}
              </div>
              <h3>تطوير سريع</h3>
              <p>يوفر HTML و CSS طريقة فعالة لتطوير موقع سريع الاستجابة وسريع التحميل.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} /> {/* أيقونة "قابلية توسع عالية" */}
              </div>
              <h3>قابلية توسع عالية</h3>
              <p>تصاميم HTML/CSS لدينا مرنة وقابلة للتوسع لتلبية احتياجات عملك المتغيرة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Phone size={32} /> {/* أيقونة "متجاوب" */}
              </div>
              <h3>متجاوب</h3>
              <p>يتم استخدام HTML و CSS لضمان تجربة مشاهدة مثالية على جميع الأجهزة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Sliders size={32} /> {/* أيقونة "مرن" */}
              </div>
              <h3>مرن</h3>
              <p>HTML و CSS مرنان للغاية، مما يسمح لنا بتنفيذ تصاميم مخصصة تناسب هوية علامتك التجارية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" dir="rtl">
        <div className="container">
          <h2>خطوات عملنا</h2>
          <p className="subtitle">من التصميم حتى الإطلاق، نضمن أن يكون كود HTML و CSS نظيفًا ومحسنًا.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle" aria-label={`أيقونة ${step.title}`}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" dir="rtl">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info">
                  <div className="client-icon" aria-label={`أيقونة العميل ${t.name}`}>
                    {t.icon}
                  </div>
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
