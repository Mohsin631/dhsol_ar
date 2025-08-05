import Head from 'next/head';
import { useEffect } from 'react';
import { User, GitBranch, Lock, Share2 } from 'lucide-react';

export default function GitSpecialistPage() {
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
    { title: "الاستشارة", desc: "تقييم تحديات التحكم في الإصدارات واحتياجات فريقك الخاصة.", icon: <GitBranch size={32} /> },
    { title: "التخطيط", desc: "تطوير استراتيجية مفصلة لتدفق العمل وفرع Git.", icon: <GitBranch size={32} /> },
    { title: "الإعداد", desc: "إعداد المستودعات، تكوين الصلاحيات، والدمج مع أدوات التطوير الخاصة بك.", icon: <Lock size={32} /> },
    { title: "التدريب", desc: "تقديم تدريب Git لفريقك لتحسين التعاون وأفضل ممارسات التحكم في الإصدارات.", icon: <Share2 size={32} /> },
    { title: "الدعم المستمر", desc: "تقديم دعم مستمر لإدارة المستودعات، استكشاف المشكلات، وتوسيع عمليات Git.", icon: <GitBranch size={32} /> }
  ];

  const testimonials = [
    {
      quote: "ساعدنا خبراء Git في إعداد عملية تحكم بالإصدارات نظيفة وفعالة، مما زاد من إنتاجية فريقنا.",
      name: "ناتالي سيمز",
      role: "مديرة المنتج، CodeLabs",
      image: <User size={40} />
    },
    {
      quote: "معرفتهم العميقة بـ Git وتدفقات العمل ساعدتنا في الحفاظ على عملية تطوير أكثر سلاسة مع تقليل النزاعات.",
      name: "أوليفر كروز",
      role: "المطور الرئيسي، Innovatech",
      image: <User size={40} />
    },
    {
      quote: "فريق رائع! استشاراتهم ودعمهم في Git ساعد فريقنا على العمل بكفاءة وبدون مشاكل.",
      name: "صموئيل بلاك",
      role: "الرئيس التنفيذي للتقنية، TechVibe",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف خبراء Git | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>خبراء Git</span></h1>
          <p>تحسين سير عمل Git، التحكم في الإصدارات، وإدارة المستودعات لتعاون فريق سلس.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار خبراء Git لدينا؟</h2>
          <p>
            خبراؤنا في Git هنا لمساعدتك في بناء تدفقات عمل تحكم بالإصدارات فعالة، ضمان تعاون سلس، ودمج Git بسلاسة في عمليات التطوير الخاصة بك.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <GitBranch size={32} />
              </div>
              <h3>دمج Git</h3>
              <p>نقوم بدمج Git مع أدوات التطوير الخاصة بك لتوفير تجربة سلسة لفريقك.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <GitBranch size={32} />
              </div>
              <h3>تدفقات عمل Git فعالة</h3>
              <p>نصمم وننفذ تدفقات عمل Git لتحسين التعاون ومنع النزاعات.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={32} />
              </div>
              <h3>أمان التحكم في الإصدارات</h3>
              <p>نضمن تأمين مستودعاتك مع التحكم المناسب في الصلاحيات واستراتيجيات النسخ الاحتياطي.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Share2 size={32} />
              </div>
              <h3>تحسين التعاون</h3>
              <p>تحسين تعاون الفريق من خلال إدارة الفروع، طلبات السحب، والمراجعات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">نتبع عملية منظمة لضمان دمج Git بسلاسة وتعاون فريق فعال.</p>
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
