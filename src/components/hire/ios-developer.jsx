import Head from 'next/head';
import { useEffect } from 'react';
import { User, Smartphone, Shield, ArrowUpCircle, Cloud, Code, Laptop } from 'lucide-react';

export default function IOSDeveloperPage() {
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
    { title: "الاستشارة", desc: "تحليل متطلبات تطبيق iOS والجمهور المستهدف.", icon: <Smartphone size={32} /> },
    { title: "التخطيط", desc: "إنشاء خارطة طريق لتطبيق iOS مع التركيز على واجهة مستخدم وتجربة مستخدم بديهية.", icon: <Laptop size={32} /> },
    { title: "التطوير", desc: "بناء تطبيق iOS باستخدام Swift أو Objective-C، مع التركيز على الأداء وتجربة المستخدم.", icon: <Code size={32} /> },
    { title: "الاختبار", desc: "إجراء اختبارات شاملة عبر أجهزة وأحجام شاشة مختلفة.", icon: <Shield size={32} /> },
    { title: "الإطلاق", desc: "نشر التطبيق على متجر Apple App Store وتقديم التحديثات والدعم المستمر.", icon: <ArrowUpCircle size={32} /> }
  ];

  const testimonials = [
    {
      quote: "التطبيق الذي أنشأوه لنا على iOS لا تشوبه شائبة. يعمل بسلاسة على جميع الأجهزة ويحبه مستخدمونا.",
      name: "صوفيا جونسون",
      role: "مدير المنتج، TechX Inc.",
      image: <User size={40} />
    },
    {
      quote: "قدم الفريق تطبيق iOS ممتازًا بتصميم بديهي. نحن سعداء جدًا بالنتائج!",
      name: "مايكل هاريس",
      role: "شريك مؤسس، AppCraft",
      image: <User size={40} />
    },
    {
      quote: "أدهشنا سرعة وكفاءة تطوير تطبيقات iOS لديهم. لقد فهموا احتياجاتنا حقًا.",
      name: "لوكاس وايت",
      role: "مؤسس، Creative Solutions",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl">
      <Head>
        <title>توظيف مطوري iOS | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section" dir="rtl">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف خبراء <span>مطوري iOS</span></h1>
          <p>إنشاء تطبيقات iOS قوية وسهلة الاستخدام مع أفضل 1% من المهندسين.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview" dir="rtl">
        <div className="container">
          <h2>لماذا تختار iOS لتطبيقك؟</h2>
          <p>
            توفر تطبيقات iOS تجربة أنيقة وموثوقة ومتسقة على جميع أجهزة آبل. ميزات الأداء والأمان تجعلها الخيار الأول للأعمال التي تحتاج إلى منتج متقن.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Smartphone size={32} />
              </div>
              <h3>تطوير سريع</h3>
              <p>تمكن أطر العمل مثل SwiftUI من تطوير التطبيقات بسرعة وتقليل وقت الوصول للسوق.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Laptop size={32} />
              </div>
              <h3>قابلية توسع عالية</h3>
              <p>تطبيقات iOS محسّنة للأداء العالي، مما يضمن توسعًا سلسًا مع نمو قاعدة المستخدمين.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />
              </div>
              <h3>آمن</h3>
              <p>يقدم iOS ميزات أمان قوية تحمي التطبيق والمستخدمين من الاختراقات.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Cloud size={32} />
              </div>
              <h3>مرن</h3>
              <p>تتكامل تطبيقات iOS بسلاسة مع iCloud وSiri وغيرها من الخدمات الأصلية، مما يزيد من وظائفها.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" dir="rtl">
        <div className="container">
          <h2>خطوات عملنا</h2>
          <p className="subtitle">نتبع عملية مبسطة لتقديم تطبيقات iOS بلا أخطاء.</p>
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
