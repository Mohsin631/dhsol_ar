import Head from 'next/head';
import { useEffect } from 'react';
import { User, ServerCog, Repeat, Settings, UploadCloud, MonitorSmartphone, HardDrive } from 'lucide-react';

export default function DevOpsEngineerPage() {
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
    { title: "الاستشارة", desc: "تقييم البنية التحتية واحتياجات DevOps لتعريف أفضل الممارسات.", icon: <ServerCog size={36} /> },
    { title: "التخطيط", desc: "تصميم وتخطيط خطوط CI/CD وفقاً لمتطلبات مشروعك.", icon: <Settings size={36} /> },
    { title: "الإعداد", desc: "إعداد بنيتك التحتية باستخدام أدوات مثل Jenkins و Kubernetes و Docker و AWS.", icon: <UploadCloud size={36} /> },
    { title: "الأتمتة", desc: "أتمتة عمليات البناء والاختبار والنشر لضمان التكامل المستمر.", icon: <Repeat size={36} /> },
    { title: "الدعم المستمر", desc: "تقديم المراقبة المستمرة والدعم لضمان الأداء الأمثل.", icon: <MonitorSmartphone size={36} /> }
  ];

  const testimonials = [
    {
      quote: "حول فريق DevOps البنية التحتية لدينا. لدينا الآن عمليات آلية توفر الوقت وتقلل الأخطاء.",
      name: "جون دو",
      role: "الرئيس التقني، InnovateTech"
    },
    {
      quote: "محترفون وذوو خبرة، ساعدونا في بناء بنية تحتية قابلة للتوسع ونمت مع عملنا.",
      name: "صوفيا هول",
      role: "مديرة المنتج، Softworks"
    },
    {
      quote: "كنا نواجه مشاكل في عمليات النشر حتى قام مهندسو DevOps بتحسين خطوط CI/CD الخاصة بنا. الأمور الآن تسير بسلاسة!",
      name: "مايك طومسون",
      role: "المطور الرئيسي، AlphaSystems"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف مهندسي DevOps | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مهندسي DevOps</span></h1>
          <p>قم بتبسيط تطوير البرمجيات والنشر مع أفضل خبراء DevOps.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار DevOps لمشروعك؟</h2>
          <p>
            DevOps هو مجموعة من الممارسات التي تؤتمت وتدمج العمليات بين تطوير البرمجيات وعمليات تقنية المعلومات. تُمكّن المؤسسات من تقديم التطبيقات والخدمات بسرعة عالية.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Repeat size={36} />
              </div>
              <h3>الأتمتة</h3>
              <p>أتمتة المهام المتكررة مثل البناء والاختبار والنشر لضمان الاتساق وتسريع التسليم.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <HardDrive size={36} />
              </div>
              <h3>بنية تحتية قابلة للتوسع</h3>
              <p>تمكن DevOps من إنشاء بنية تحتية قابلة للتوسع تتعامل بكفاءة مع زيادة حركة المرور والأحمال.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ServerCog size={36} />
              </div>
              <h3>تحسين التعاون</h3>
              <p>يكسر الحواجز بين فرق التطوير والعمليات، مما يعزز التعاون والتواصل الأفضل.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <MonitorSmartphone size={36} />
              </div>
              <h3>المراقبة المستمرة</h3>
              <p>مراقبة البنية التحتية والتطبيقات في الوقت الحقيقي لضمان التشغيل المستمر وتحسين الأداء.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">حلول DevOps شاملة للتكامل والنشر والمراقبة بسلاسة.</p>
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

      {/* شهادات العملاء */}
      <section className="testimonials">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info" style={{display:'flex', alignItems:'center', gap:'10px'}}>
                  <User size={36} />
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
