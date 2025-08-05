import Head from 'next/head';
import { useEffect } from 'react';
import { User, SearchCheck, PenTool, Code, CheckCircle, Rocket, Layers, Smartphone } from 'lucide-react';

export default function FrontendDeveloperPage() {
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
    { title: "الاستشارة", desc: "فهم متطلباتك وتفضيلاتك والجمهور المستهدف.", icon: <SearchCheck size={32} /> },
    { title: "التصميم", desc: "إنشاء تصميمات محورية للمستخدم وإطارات سلكية لتجربة مستخدم مثالية.", icon: <PenTool size={32} /> },
    { title: "التطوير", desc: "تطوير مكونات الواجهة الأمامية التفاعلية والمتجاوبة باستخدام أحدث الأُطُر.", icon: <Code size={32} /> },
    { title: "الاختبار", desc: "اختبار عبر أجهزة ومتصفحات متعددة لضمان أداء مثالي.", icon: <CheckCircle size={32} /> },
    { title: "الإطلاق", desc: "ضمان إطلاق سلس ودعم مستمر بعد الإطلاق.", icon: <Rocket size={32} /> }
  ];

  const testimonials = [
    {
      quote: "حوّل مطورو الواجهة الأمامية موقعنا إلى منصة حديثة وتفاعلية يحبها المستخدمون!",
      name: "راشيل جرين",
      role: "مدير إبداعي، BrightMedia",
      icon: <User size={40} />
    },
    {
      quote: "فريق العمل أنجز المشروع في الوقت المحدد بجودة استثنائية واهتمام بأدق التفاصيل. أنصح بهم بشدة.",
      name: "كريس ووكر",
      role: "المطور الرئيسي، CodeWorks",
      icon: <User size={40} />
    },
    {
      quote: "راضون جدًا عن النتائج. التصميم وتجربة المستخدم الجديدة حسنت تفاعل عملائنا بشكل ملحوظ.",
      name: "أوليفيا مارتن",
      role: "مدير المنتج، SoftSolutions",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl">
      <Head>
        <title>توظيف مطوري واجهة أمامية | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري واجهة أمامية</span> خبراء</h1>
          <p>بناء واجهات مستخدم سريعة ومتجاوبة وجذابة مع أفضل مطوري الواجهة الأمامية.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار تطوير الواجهة الأمامية لمشروعك؟</h2>
          <p>
            تطوير الواجهة الأمامية هو المفتاح لإنشاء واجهات مستخدم جذابة وعملية. يستخدم مطورونا أحدث الأُطُر والأدوات لجعل موقعك أو تطبيقك ينبض بالحياة.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Smartphone size={32} />
              </div>
              <h3>تصميم متجاوب</h3>
              <p>نضمن أن يبدو موقعك رائعًا على جميع الأجهزة، من الهواتف المحمولة إلى أجهزة سطح المكتب.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <PenTool size={32} />
              </div>
              <h3>واجهة مستخدم تفاعلية</h3>
              <p>نجذب المستخدمين من خلال واجهات مستخدم سهلة الاستخدام وتفاعلية مع حركات سلسة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <CheckCircle size={32} />
              </div>
              <h3>تحسين الأداء</h3>
              <p>يركز تطوير الواجهة الأمامية على أوقات تحميل سريعة، وأداء مثالي، وتجارب مستخدم عالية الجودة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} />
              </div>
              <h3>تقنيات حديثة</h3>
              <p>نستخدم أحدث تقنيات الواجهة الأمامية مثل React و Angular و Vue.js لبناء تطبيقات ويب حديثة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">مُنظمة لتقديم تجارب ويب عالية الجودة وسهلة الاستخدام.</p>
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
                  <div className="client-icon">
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
