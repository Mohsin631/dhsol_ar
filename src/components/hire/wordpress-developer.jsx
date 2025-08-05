import Head from 'next/head';
import { useEffect } from 'react';
import { Edit, GitCommit, Lock, Search, User } from 'lucide-react';

export default function WordPressDeveloperPage() {
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
    { title: "الاستشارة", desc: "فهم رؤيتك، أهداف الموقع وهيكل المحتوى.", icon: <Edit size={40} /> },
    { title: "التخطيط", desc: "تخطيط هيكل الموقع، الميزات، وتدفق نظام إدارة المحتوى.", icon: <GitCommit size={40} /> },
    { title: "التطوير", desc: "تطوير ثيمات وملحقات ووردبريس مخصصة.", icon: <Edit size={40} /> },
    { title: "الاختبار", desc: "ضمان السرعة، تحسين محركات البحث، الاستجابة على الجوال، والأمان.", icon: <Lock size={40} /> },
    { title: "الإطلاق", desc: "نشر وصيانة موقعك مع دعم مستمر.", icon: <Search size={40} /> }
  ];

  const testimonials = [
    {
      quote: "أنشأوا لنا موقع ووردبريس سريع ونظيف وصديق لمحركات البحث.",
      name: "إميلي تشين",
      role: "مديرة التسويق، GreenEdge",
      icon: <User size={40} />
    },
    {
      quote: "تجربة رائعة! خبراء ووردبريس نفذوا تماماً ما تخيلناه.",
      name: "ديفيد مارتينيز",
      role: "المؤسس، PixelHaus",
      icon: <User size={40} />
    },
    {
      quote: "تواصل سلس ومهارات ووردبريس على مستوى عالٍ. أوصي بهم بشدة!",
      name: "نينا تايلور",
      role: "المدير التنفيذي، SmartSaaS",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" style={{ textAlign: 'right' }}>
      <Head>
        <title>توظيف مطوري ووردبريس | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري ووردبريس</span></h1>
          <p>أفضل 1% من المهندسين لبناء مواقع ووردبريس سريعة، آمنة ومخصصة.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار ووردبريس لموقعك؟</h2>
          <p>
            ووردبريس يشغل أكثر من 40% من الويب لسبب وجيه — قوي، قابل للتخصيص، ومثالي لكل شيء من المدونات إلى مواقع الشركات الكبرى.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Edit size={40} />
              </div>
              <h3>إطلاق سريع</h3>
              <p>مع آلاف الثيمات والإضافات، يمكن لموقعك أن يعمل في وقت قياسي.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <GitCommit size={40} />
              </div>
              <h3>نظام إدارة محتوى مرن</h3>
              <p>أدر محتواك بسهولة مع لوحة تحكم قوية وسهلة الاستخدام.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={40} />
              </div>
              <h3>آمن</h3>
              <p>التحديثات المنتظمة ونظام الإضافات القوي يضمن بقاء موقعك محمياً.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Search size={40} />
              </div>
              <h3>جاهز للسيو</h3>
              <p>أدوات تحسين محركات البحث المدمجة والتكاملات تساعد في رفع ترتيبك في البحث.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>عملية العمل لدينا</h2>
          <p className="subtitle">منظمة للسرعة والدقة وجودة التسليم.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">{step.icon}</div>
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
                  {t.icon}
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
