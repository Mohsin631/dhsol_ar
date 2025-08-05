import Head from 'next/head';
import { useEffect } from 'react';
import { CheckCircle, Zap, GitMerge, User, Package, Users } from 'lucide-react'; // Importing icons from Lucide

export default function SlackIntegratorPage() {
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
    { title: "الاستشارة", desc: "تقييم احتياجات فريقك ومتطلبات دمج Slack.", icon: <CheckCircle className="h-8 w-8 text-blue-500" /> },
    { title: "التخطيط", desc: "تصميم خطة دمج مخصصة بناءً على أهدافك.", icon: <Zap className="h-8 w-8 text-green-500" /> },
    { title: "الدمج", desc: "إعداد ودمج Slack مع أدواتك لتواصل سلس.", icon: <GitMerge className="h-8 w-8 text-yellow-500" /> },
    { title: "الاختبار", desc: "اختبار وضمان سير العمل بسلاسة مع ملاحظات في الوقت الحقيقي.", icon: <Package className="h-8 w-8 text-red-500" /> },
    { title: "التدريب والدعم", desc: "توفير التدريب والدعم المستمر لتعظيم استخدام Slack.", icon: <Users className="h-8 w-8 text-purple-500" /> }
  ];

  const testimonials = [
    {
      quote: "كان الدمج مع Slack سلسًا تمامًا. أصبح فريقنا يتعاون بكفاءة أكبر!",
      name: "سامانثا بروكس",
      role: "مديرة العمليات، TechFusion"
    },
    {
      quote: "حسّنت روبوتات Slack المخصصة إنتاجيتنا بشكل كبير. نوصي بشدة بخدماتهم.",
      name: "ديفيد هاريس",
      role: "المؤسس، Innovate Solutions"
    },
    {
      quote: "ساعدونا في تبسيط أدوات التواصل لدينا. لم يكن سير العمل أسهل من قبل.",
      name: "إميلي وايت",
      role: "مديرة المشاريع، WebSynergy"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف خبراء دمج Slack | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>خبراء دمج Slack</span></h1>
          <p>عزز تعاون فريقك بدمج Slack مع أدوات وأنظمة عملك.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار خدمات دمج Slack لدينا؟</h2>
          <p>
            يساعدك خبراؤنا في دمج Slack مع جميع أدوات عملك الحيوية، مما يمكّن سير عمل سلس ويعزز الإنتاجية في فريقك.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <GitMerge className="h-12 w-12 text-blue-500" />
              </div>
              <h3>دمج سلس</h3>
              <p>نقوم بدمج Slack مع أنظمة إدارة العملاء وأدوات إدارة المشاريع وغيرها لتسهيل سير العمل.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Zap className="h-12 w-12 text-green-500" />
              </div>
              <h3>أتمتة</h3>
              <p>أتمتة المهام الروتينية باستخدام روبوتات مخصصة وسير عمل داخل Slack.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Users className="h-12 w-12 text-red-500" />
              </div>
              <h3>تعزيز التعاون</h3>
              <p>تحسين تواصل الفريق مع دمج أفضل عبر الأدوات، لضمان اتخاذ قرارات أسرع.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Package className="h-12 w-12 text-yellow-500" />
              </div>
              <h3>المراقبة والدعم المستمر</h3>
              <p>نوفر مراقبة ودعم مستمرين لضمان سير عمل دمج Slack بسلاسة في جميع الأوقات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">نتبع نهجًا منظمًا لدمج Slack مع أدوات عملك لتحقيق أقصى تأثير.</p>
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
                  <User className="h-12 w-12 text-gray-500" />
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
