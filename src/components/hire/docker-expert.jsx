import Head from 'next/head';
import { useEffect } from 'react';
import { Rocket, Layers, ShieldCheck, RefreshCw, LifeBuoy, SearchCheck, Hammer, Gauge, User } from 'lucide-react';

export default function DockerExpertPage() {
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
    { title: "الاستشارة", desc: "فهم أهداف الحاويات الخاصة بك وتحديد استخدام Docker.", icon: <SearchCheck size={32} /> },
    { title: "التخطيط", desc: "تصميم بنية Docker لتوسيع التطبيقات وقابليتها للنقل.", icon: <Layers size={32} /> },
    { title: "التنفيذ", desc: "إعداد حاويات Docker وتنظيمها باستخدام Docker Compose أو Kubernetes.", icon: <Hammer size={32} /> },
    { title: "التحسين", desc: "تحسين إعدادات Docker للأداء، الأمان، والتكلفة.", icon: <Gauge size={32} /> },
    { title: "الدعم", desc: "تقديم الدعم والمراقبة المستمرة لحلول Docker.", icon: <LifeBuoy size={32} /> }
  ];

  const testimonials = [
    {
      quote: "ساعدنا خبراء Docker في DH Solution على تحسين سير نشر التطبيقات وتقليل وقت التوقف بشكل كبير.",
      name: "شارلوت سيمونز",
      role: "المدير التقني، NextGen Solutions",
      icon: <User size={40} />
    },
    {
      quote: "خبرتهم في الحاويات و Docker جعلت بنيتنا التحتية أكثر مرونة وقابلة للتوسع.",
      name: "بنيامين ووكر",
      role: "مهندس رئيسي، CloudX",
      icon: <User size={40} />
    },
    {
      quote: "من تحضير التطبيقات على Docker إلى إعداد خطوط CI/CD، كان فريق DH Solution محترفًا وواسع المعرفة.",
      name: "آيسلا مورغان",
      role: "مهندس DevOps، WebTech Solutions",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف خبراء Docker | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مهندسي Docker</span> الخبراء</h1>
          <p>زيادة الكفاءة، الأمان، وقابلية التوسع مع حاويات Docker لتطبيقاتك.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار Docker لعملك؟</h2>
          <p>
            Docker هو منصة مفتوحة المصدر تقوم بأتمتة نشر التطبيقات وتوسيعها وإدارتها داخل الحاويات. يسمح ببيئات متسقة عبر التطوير والاختبار والإنتاج، وهو مثالي للفرق التي تسعى لتوسيع التطبيقات وتحسين الكفاءة.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Rocket size={32} />
              </div>
              <h3>نشر سريع</h3>
              <p>تمكن حاويات Docker من إعداد التطبيقات بسرعة، التوسع، والتحديث، مما يحسن سير عملك بشكل كبير.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <RefreshCw size={32} />
              </div>
              <h3>قابلية توسع عالية</h3>
              <p>يساعد Docker في توسيع التطبيقات بسهولة، مما يتيح إدارة مئات الحاويات بسلاسة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ShieldCheck size={32} />
              </div>
              <h3>آمن</h3>
              <p>توفر حاويات Docker عزلاً يقلل من الثغرات الأمنية ويضمن بيئة إنتاج آمنة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} />
              </div>
              <h3>مرن</h3>
              <p>يعمل Docker عبر منصات متعددة، من الأجهزة المحلية إلى البنى التحتية السحابية مثل AWS و Azure و Google Cloud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">من الاستشارة إلى النشر، نضمن لك دمجًا سلسًا لحلول Docker.</p>
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

      {/* قسم الشهادات */}
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
