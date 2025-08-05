import Head from 'next/head';
import { useEffect } from 'react';

export default function PHPDeveloperPage() {
  // Animation logic for Process + Testimonials
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
    { title: "الاستشارة", desc: "فهم أهدافك، احتياجات التقنية وديناميكيات الفريق.", icon: "fas fa-comments" },
    { title: "التخطيط", desc: "تصميم خارطة طريق متوافقة مع الجدول الزمني الخاص بك.", icon: "fas fa-calendar-check" },
    { title: "التطوير", desc: "بناء حلول قوية، قابلة للتوسع، ونظيفة.", icon: "fas fa-cogs" },
    { title: "الاختبار", desc: "ضمان جودة صارمة لضمان الأداء والثبات.", icon: "fas fa-check-circle" },
    { title: "الإطلاق", desc: "نشر ودعم لضمان نجاح طويل الأمد.", icon: "fas fa-rocket" }
  ];

  const testimonials = [
    { quote: "العمل مع فريق PHP الخاص بهم كان نقطة تحول. قدموا كل شيء أسرع من المتوقع!", name: "سارة ميتشل", role: "المدير التقني، Finify Inc.", image: "/images/client1.jpg" },
    { quote: "محترفون وماهرون وسريعون جداً في الرد. اندمج مطوروهم بسلاسة مع فريقنا.", name: "جيمس لي", role: "قائد تقني، NovaSoft", image: "/images/client2.jpg" },
    { quote: "أنا معجبة حقًا بالجودة والتفاني. سأوظفهم مرة أخرى بالتأكيد!", name: "إلينا هارت", role: "المؤسسة، LaunchBright", image: "/images/client3.jpg" }
  ];

  return (
    <div className="expert-page" dir="rtl" style={{ textAlign: 'right' }}>
      <Head>
        <title>توظيف مطوري PHP | DH Solution</title>
        {/* Font Awesome CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري PHP الخبراء</span></h1>
          <p>أفضل 1% من المهندسين لبناء تطبيقات ويب قابلة للتوسع وآمنة بسرعة.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار PHP لمشروعك؟</h2>
          <p>
            تظل PHP واحدة من أكثر اللغات شعبية لبناء المواقع والتطبيقات الديناميكية. سواء كان مشروع صغير أو كبير، توفر PHP السرعة، المرونة، والقابلية للتوسع.
          </p>

          <div className="tech-features">
            {[
              { icon: <i className="fas fa-bolt"></i>, title: "تطوير سريع", desc: "أطر PHP مثل Laravel تمكن من تطوير سريع مع نتائج عالية الجودة في وقت قياسي." },
              { icon: <i className="fas fa-layer-group"></i>, title: "قابلية توسع عالية", desc: "حلول PHP مصممة للنمو مع عملك، وتعامل مع ارتفاعات حركة المرور بسهولة." },
              { icon: <i className="fas fa-shield-alt"></i>, title: "آمن", desc: "ميزات الأمان المدمجة تجعل PHP خيارًا موثوقًا لبناء تطبيقات ويب آمنة بسهولة." },
              { icon: <i className="fas fa-cogs"></i>, title: "متعدد الاستخدامات", desc: "PHP تعمل بسلاسة مع جميع قواعد البيانات الرئيسية ومنصات CMS مثل WordPress وتتوافق مع مختلف واجهات برمجة التطبيقات." }
            ].map((feature, idx) => (
              <div className="feature" key={idx}>
                <div className="icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>خطوات العمل لدينا</h2>
          <p className="subtitle">منظمة من أجل السرعة والدقة وجودة التسليم.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">
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
      <section className="testimonials">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info">
                  <div className="client-icon">
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
