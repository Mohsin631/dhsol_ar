import Head from 'next/head';
import { useEffect } from 'react';
import { GitBranch, Lock, CheckCircle, User } from 'lucide-react';

export default function GitHubExpertPage() {
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
    { title: "الاستشارة", desc: "تقييم احتياجات التحكم في الإصدارات وتدفقات عمل المشروع.", icon: <GitBranch size={32} /> },
    { title: "التخطيط", desc: "تصميم هيكل مستودعات GitHub مخصص لفريقك.", icon: <GitBranch size={32} /> },
    { title: "الدمج", desc: "إعداد مستودعات GitHub، الصلاحيات، والدمج مع أدوات CI/CD الخاصة بك.", icon: <Lock size={32} /> },
    { title: "الاختبار", desc: "اختبار الدمج والتأكد من سلاسة تدفقات العمل.", icon: <CheckCircle size={32} /> },
    { title: "التدريب والدعم", desc: "تقديم تدريب على أفضل الممارسات ودعم مستمر لاستخدام GitHub.", icon: <GitBranch size={32} /> }
  ];

  const testimonials = [
    {
      quote: "ساعدنا دمج GitHub في تحسين عمليات التطوير لدينا. أصبحنا أكثر كفاءة من أي وقت مضى!",
      name: "ماركوس أوكونور",
      role: "المطور الرئيسي، DevCore Solutions",
      image: <User size={40} />
    },
    {
      quote: "غيروا طريقة استخدامنا لـ GitHub في مؤسستنا. أصبح التحكم في الإصدارات والتعاون بين الفريق أكثر سلاسة.",
      name: "ليندا جرين",
      role: "مديرة الهندسة، CodeWorks",
      image: <User size={40} />
    },
    {
      quote: "كان إعداد مستودعات GitHub وهيكل الصلاحيات مميزًا. تجربة رائعة مع فريقهم.",
      name: "كريس هوارد",
      role: "الرئيس التنفيذي للتقنية، BrightTech",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف خبراء GitHub | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>خبراء GitHub</span></h1>
          <p>تحسين نظام التحكم في الإصدارات والتعاون بين الفريق باستخدام GitHub.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار خدمات دمج GitHub لدينا؟</h2>
          <p>
            يساعدك خبراؤنا في GitHub على تحسين عمليات التحكم في الإصدارات، التعاون بكفاءة مع فريقك، وإعداد تدفقات عمل مخصصة تناسب احتياجات مشروعك.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <GitBranch size={32} />
              </div>
              <h3>دمج سلس</h3>
              <p>نساعدك في دمج GitHub ضمن تدفقات عمل المشروع وأدوات CI/CD والمزيد.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <CheckCircle size={32} />
              </div>
              <h3>تدفقات عمل مؤتمتة</h3>
              <p>أتمتة عمليات مثل الاختبار، النشر، والإشعارات باستخدام إجراءات GitHub.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={32} />
              </div>
              <h3>أمان قوي</h3>
              <p>نقوم بتكوين ميزات أمان GitHub لضمان حماية الكود ومستودعاتك.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <CheckCircle size={32} />
              </div>
              <h3>تعزيز التعاون</h3>
              <p>تحسين التعاون مع طلبات السحب، مراجعة الكود، والتحديثات الفورية مباشرة على GitHub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">تضمن عملية دمج GitHub الخبيرة لدينا تحكمًا سلسًا في الإصدارات لفريقك.</p>
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
