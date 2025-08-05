import Head from 'next/head';
import { useEffect } from 'react';
import { Server, ShieldCheck, Database, Network, Settings, User } from 'lucide-react';

export default function BackendDeveloperPage() {
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
    { title: "الاستشارة", desc: "تحليل متطلبات مشروعك، منطق الأعمال، والأهداف.", icon: <Settings size={32} /> },
    { title: "الهندسة المعمارية", desc: "تصميم بنية خلفية قابلة للتوسع وفعالة لتحمل حركة المرور.", icon: <Network size={32} /> },
    { title: "التطوير", desc: "بناء واجهات برمجة التطبيقات، قواعد البيانات، وأنظمة الخادم لنظام خلفي قوي.", icon: <Server size={32} /> },
    { title: "الاختبار", desc: "إجراء اختبارات شاملة لضمان الأمان والموثوقية والأداء.", icon: <ShieldCheck size={32} /> },
    { title: "الإطلاق", desc: "نشر خدمات الخلفية وضمان التكامل السلس مع أنظمة الواجهة الأمامية.", icon: <Database size={32} /> }
  ];

  const testimonials = [
    {
      quote: "قدّم فريق الخلفية لديهم بنية صلبة قابلة للتوسع بسهولة مع نمو عملنا.",
      name: "آفا جونسون",
      role: "الرئيس التقني، FastTech Solutions"
    },
    {
      quote: "مهندسو الخلفية لديهم من الطراز الأول. عملوا بانسجام مع فريق الواجهة الأمامية لتسليم منتج مثالي.",
      name: "ليام سميث",
      role: "المطور الرئيسي، WebFlow"
    },
    {
      quote: "البنية التحتية الخلفية التي بنوها لمنصتنا مستقرة، سريعة، وآمنة. أوصي بهم بشدة!",
      name: "إيثان ديفيس",
      role: "المؤسس، DataSmart"
    }
  ];

  return (
    <div className="expert-page" dir="rtl">
      <Head>
        <title>توظيف مطوري خلفية | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري خلفية</span> خبراء</h1>
          <p>حلول خلفية قابلة للتوسع، آمنة، وفعالة لدعم نمو عملك.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار تطوير الخلفية لمشروعك؟</h2>
          <p>
            الخلفية القوية ضرورية لضمان أداء تطبيقك بشكل مثالي، قابلية التوسع بسهولة، وبقاءه آمناً. يستخدم مطورونا أحدث التقنيات لبناء أنظمة قوية وفعالة.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Network size={36} />
              </div>
              <h3>حلول قابلة للتوسع</h3>
              <p>نصمم أنظمة خلفية تنمو مع عملك، تتعامل مع حركة مرور عالية وقواعد مستخدمين متزايدة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ShieldCheck size={36} />
              </div>
              <h3>الأمان أولاً</h3>
              <p>يطبق مطورونا بروتوكولات أمان قوية لحماية بياناتك وخصوصية المستخدمين.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={36} />
              </div>
              <h3>واجهات برمجة تطبيقات فعالة</h3>
              <p>نبني واجهات برمجة تطبيقات موثقة جيداً وعالية الأداء تتكامل بسلاسة مع أنظمة الواجهة الأمامية.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Database size={36} />
              </div>
              <h3>إدارة قواعد البيانات</h3>
              <p>نضمن تكامل الخلفية مع حلول قواعد بيانات قوية لتخزين ومعالجة البيانات بكفاءة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">تقديم حلول خلفية قابلة للتوسع، آمنة، وفعالة بدقة عالية.</p>
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
                  <User size={32} />
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
