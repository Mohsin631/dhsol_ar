import Head from 'next/head';
import { useEffect } from 'react';
import {
  User, Clipboard, Code, CheckCircle, Rocket,
  Zap, ArrowUpCircle, Lock, Layers
} from 'lucide-react';

export default function MagentoDeveloperPage() {
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
    { title: "الاستشارة", desc: "فهم متطلبات Magento وأهداف عملك.", icon: <User className="h-8 w-8 text-gray-500" /> },
    { title: "التخطيط", desc: "تخصيص ميزات Magento لتناسب نموذج عملك والتوسع.", icon: <Clipboard className="h-8 w-8 text-gray-500" /> },
    { title: "التطوير", desc: "تطوير قوالب، إضافات، ووحدات Magento مخصصة.", icon: <Code className="h-8 w-8 text-gray-500" /> },
    { title: "الاختبار", desc: "ضمان تشغيل موقع Magento بسلاسة وخلوه من الأخطاء.", icon: <CheckCircle className="h-8 w-8 text-gray-500" /> },
    { title: "الإطلاق", desc: "نشر متجرك على Magento بأعلى درجات التوفر والأمان.", icon: <Rocket className="h-8 w-8 text-gray-500" /> }
  ];

  const testimonials = [
    {
      quote: "كان فريق Magento في DH Solution رائعًا، قدموا متجرًا غنيًا بالميزات بسرعة وكفاءة.",
      name: "جيمس واتسون",
      role: "المؤسس، ShopNow"
    },
    {
      quote: "ساعدتنا DH Solution في تحسين متجر Magento الخاص بنا، وشهدنا زيادة فورية في المبيعات.",
      name: "راشيل لي",
      role: "رئيس التسويق، TechCart"
    },
    {
      quote: "فريق محترف وماهر للغاية. يعمل موقع Magento الخاص بنا بدون مشاكل بفضلهم.",
      name: "بول ريتشاردز",
      role: "مدير التجارة الإلكترونية، FurnitureX"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar" style={{ textAlign: 'right', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Head>
        <title>توظيف مطوري Magento | DH Solution</title>
      </Head>

      {/* قسم البداية */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري Magento خبراء</span></h1>
          <p>أفضل 1% من المهندسين لبناء متاجر إلكترونية قوية وقابلة للتوسع باستخدام Magento.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار Magento لمشروع التجارة الإلكترونية الخاص بك؟</h2>
          <p>
            يوفر Magento المرونة، القابلية للتوسع، والتخصيص لأعمال التجارة الإلكترونية بمختلف الأحجام. سواء كنت تطلق متجرًا جديدًا أو توسع المتجر الحالي، Magento يلبي احتياجات عملك.
          </p>

          <div className="tech-features" style={{ display: 'flex', flexDirection: 'row-reverse', gap: '20px', flexWrap: 'wrap' }}>
            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">{processSteps[0].icon}</div>
              <h3>إعداد سريع</h3>
              <p>إعداد وإطلاق سريع باستخدام القوالب والإضافات الجاهزة المخصصة للتجارة الإلكترونية.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">{processSteps[1].icon}</div>
              <h3>قابلية توسع عالية</h3>
              <p>يتعامل Magento بسهولة مع نمو الأعمال ويتوسع ليشمل آلاف المنتجات والعملاء.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">{processSteps[3].icon}</div>
              <h3>آمن</h3>
              <p>يوفر Magento ميزات أمان على مستوى المؤسسات لحماية المعاملات وبيانات العملاء.</p>
            </div>

            <div className="feature" style={{ flex: '1 1 200px' }}>
              <div className="icon-container">{processSteps[2].icon}</div>
              <h3>قابل للتخصيص</h3>
              <p>بناء ميزات مخصصة، تكاملات، وحلول لأعمالك بفضل مرونة Magento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عملية العمل لدينا</h2>
          <p className="subtitle">تطوير Magento من البداية للنهاية مع التركيز على نتائج الأعمال.</p>
          <div className="steps-row" style={{ display: 'flex', flexDirection: 'row-reverse', gap: '20px', flexWrap: 'wrap' }}>
            {processSteps.map((step, index) => (
              <div className="process-step" key={index} style={{ flex: '1 1 200px' }}>
                <div className="icon-circle">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* آراء العملاء */}
      <section className="testimonials">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid" style={{ direction: 'rtl', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                <p className="quote" style={{ fontStyle: 'italic', marginBottom: '10px' }}>“{t.quote}”</p>
                <div className="client-info" style={{ display: 'flex', gap: '12px', alignItems: 'center', flexDirection: 'row-reverse' }}>
                  <User className="h-8 w-8 text-gray-500" />
                  <div>
                    <h4 style={{ margin: 0 }}>{t.name}</h4>
                    <span style={{ color: '#555' }}>{t.role}</span>
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
