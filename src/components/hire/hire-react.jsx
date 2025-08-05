import Head from 'next/head';
import { useEffect } from 'react';
import { User, Clock, Layers, Shield, Search } from 'lucide-react';

export default function ReactDeveloperPage() {
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
    { title: "الاستشارة", desc: "نفهم رؤيتك للواجهة، الجدول الزمني، والأهداف.", icon: <Clock size={32} /> },
    { title: "التخطيط", desc: "تحليل UI/UX، مكونات قابلة لإعادة الاستخدام، وتعريف هيكل الـ API.", icon: <Layers size={32} /> },
    { title: "التطوير", desc: "نبني تطبيقات React سريعة وقابلة للتوسع باستخدام أحدث الممارسات.", icon: <Search size={32} /> },
    { title: "الاختبار", desc: "اختبار عبر المتصفحات والاستجابة لأداء سلس.", icon: <Shield size={32} /> },
    { title: "الإطلاق", desc: "جاهز للإطلاق مع صيانة مستمرة وتحكم بالإصدارات.", icon: <Search size={32} /> }
  ];

  const testimonials = [
    {
      quote: "مطوروا React ساعدونا على توسيع واجهة التطبيق بسرعة وبشكل رائع.",
      name: "ليام واتسون",
      role: "رئيس المنتج، Syncly",
      icon: <User size={40} />
    },
    {
      quote: "كود نظيف، إعادة استخدام للمكونات، وتحسين الأداء - لقد أتقنوا العمل.",
      name: "إيزابيلا مور",
      role: "قائد الواجهة الأمامية، QuickCart",
      icon: <User size={40} />
    },
    {
      quote: "عملنا مع فرق كثيرة، لكن فريق React هذا كان الأفضل بلا منازع.",
      name: "رافي كابور",
      role: "المؤسس المشارك، BuildGrow",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" style={{ textAlign: 'right' }}>
      <Head>
        <title>توظيف مطوري React | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري React</span></h1>
          <p>أفضل 1% من المهندسين لبناء واجهات أمامية سريعة وقابلة للتوسع.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار React للواجهة الأمامية؟</h2>
          <p>
            React هو المعيار الصناعي لواجهات المستخدم الديناميكية وتطبيقات الصفحة الواحدة. مع مكونات قابلة لإعادة الاستخدام وDOM افتراضي سريع، هو مثالي لتطبيقات الويب القابلة للتوسع.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Clock size={32} />
              </div>
              <h3>أداء عالي</h3>
              <p>يضمن DOM الافتراضي في React تجارب مستخدم سريعة وتحديثات فورية.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} />
              </div>
              <h3>مبني على المكونات</h3>
              <p>مكونات واجهة المستخدم القابلة لإعادة الاستخدام تتيح تطويرًا فعالًا ومتسقًا.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />
              </div>
              <h3>صديق للسيو</h3>
              <p>عند الدمج مع Next.js، يمكن تحسين تطبيقات React للسيو والأداء.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Search size={32} />
              </div>
              <h3>هيكل قابل للتوسع</h3>
              <p>يسهل React نمو تطبيقك من MVP إلى منصة كاملة.</p>
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
                  <div className="client-icon">{t.icon}</div>
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
