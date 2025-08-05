import Head from 'next/head';
import { useEffect } from 'react';

export default function AndroidDeveloperPage() {
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
    { title: "الاستشارة", desc: "فهم متطلبات وأهداف مشروع الأندرويد الخاص بك.", icon: "fas fa-comments" },
    { title: "التخطيط", desc: "تصميم خارطة طريق لتطبيق الأندرويد مع التركيز على تجربة المستخدم.", icon: "fas fa-calendar-check" },
    { title: "التطوير", desc: "كتابة كود أندرويد نظيف، فعال وقابل للتوسع باستخدام Java أو Kotlin.", icon: "fas fa-code" },
    { title: "الاختبار", desc: "إجراء اختبارات شاملة عبر أجهزة متعددة لضمان أداء سلس.", icon: "fas fa-mobile-alt" },
    { title: "الإطلاق", desc: "نشر التطبيق على متجر جوجل بلاي وتقديم الدعم والتحديثات طويلة الأمد.", icon: "fas fa-rocket" }
  ];

  const testimonials = [
    {
      quote: "تطبيق الأندرويد الذي طوروه فاق توقعاتنا! كان فريقهم ماهرًا ومتجاوبًا للغاية.",
      name: "راشيل جرين",
      role: "مؤسسة، GreenTech Solutions",
      image: "/images/client1.jpg"
    },
    {
      quote: "ساعدونا في إنشاء تطبيق أندرويد سهل الاستخدام وموثوق به يحبه عملاؤنا. عمل ممتاز!",
      name: "ديفيد سميث",
      role: "الرئيس التنفيذي، Appify",
      image: "/images/client2.jpg"
    },
    {
      quote: "كان من دواعي سرورنا العمل معهم! فريق تطوير الأندرويد لديهم تمكن من تنفيذ جميع ميزاتنا المعقدة بسلاسة.",
      name: "إميلي براون",
      role: "قائدة المنتجات، PixelTech",
      image: "/images/client3.jpg"
    }
  ];

  return (
    <div className="expert-page" dir="rtl">
      <Head>
        <title>توظيف مطوري أندرويد | DH Solution</title>
        {/* Font Awesome CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section" dir="rtl">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف خبراء <span>مطوري أندرويد</span></h1>
          <p>بناء تطبيقات أندرويد مبتكرة، متجاوبة وعالية الأداء مع أفضل المطورين.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview" dir="rtl">
        <div className="container">
          <h2>لماذا تختار أندرويد لتطبيقك؟</h2>
          <p>يعد أندرويد أحد أكثر المنصات استخدامًا لتطبيقات الهواتف المحمولة. مع نطاقه الواسع ومرونته، يوفر فرصًا لا حصر لها للمطورين لإنشاء تطبيقات قوية وقابلة للتوسع.</p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>تطوير سريع</h3>
              <p>تمكن أدوات مثل Android Studio من تطوير التطبيقات بسرعة وتقليل وقت الوصول للسوق.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <i className="fas fa-expand-alt"></i>
              </div>
              <h3>قابلية توسع عالية</h3>
              <p>يمكن لتطبيقات أندرويد التعامل مع كميات كبيرة من الحركة، مما يتيح لنشاطك التجاري التوسع بسلاسة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <i className="fas fa-lock"></i>
              </div>
              <h3>آمن</h3>
              <p>تأتي تطبيقات أندرويد مع إجراءات أمنية قوية لحماية بيانات وخصوصية المستخدم.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <i className="fas fa-plug"></i>
              </div>
              <h3>مرن</h3>
              <p>تطبيقات أندرويد قابلة للتخصيص بشكل كبير ويمكن دمجها بسلاسة مع خدمات الطرف الثالث.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" dir="rtl">
        <div className="container">
          <h2>خطوات عملنا</h2>
          <p className="subtitle">من الفكرة إلى النشر، نركز على إنشاء تطبيقات أندرويد عالية الأداء.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle" aria-label={`أيقونة ${step.title}`}>
                  <i className={step.icon}></i>
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
                    <i className="fas fa-user"></i>
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
