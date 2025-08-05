import Head from 'next/head';
import { useEffect } from 'react';
import {
  User,
  Clock,
  Shield,
  Layers,
  ShoppingCart,
} from 'lucide-react';

export default function ShopifyExpertPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active', 'visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.process-step, .testimonial-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      title: 'الاستشارة',
      desc: 'فهم أهدافك، احتياجات Shopify ونموذج عملك.',
      icon: <Clock size={32} />,
    },
    {
      title: 'التخطيط',
      desc: 'إنشاء استراتيجية Shopify تتماشى مع علامتك التجارية.',
      icon: <Layers size={32} />,
    },
    {
      title: 'التطوير',
      desc: 'تصميم وتطوير متجر Shopify عالي التحويل.',
      icon: <ShoppingCart size={32} />,
    },
    {
      title: 'الاختبار',
      desc: 'اختبار ضمان الجودة لضمان تجربة تسوق سلسة.',
      icon: <Shield size={32} />,
    },
    {
      title: 'الإطلاق',
      desc: 'الانطلاق والمراقبة لضمان نجاح مستمر.',
      icon: <ShoppingCart size={32} />,
    },
  ];

  const testimonials = [
    {
      quote: 'ساعدنا خبراء Shopify في مضاعفة معدلات التحويل خلال أسابيع!',
      name: 'مايا طومسون',
      role: 'مديرة التجارة الإلكترونية، GlowBoutique',
      icon: <User size={40} />,
    },
    {
      quote: 'عمل استثنائي! متجر Shopify الجديد لدينا يبدو مذهلاً ويعمل بدون مشاكل.',
      name: 'لوكاس جرانت',
      role: 'المؤسس، CraftNest',
      icon: <User size={40} />,
    },
    {
      quote: 'من التصميم إلى التطوير، أتقنوا كل جزء من العملية.',
      name: 'رافي باتيل',
      role: 'المدير التنفيذي، UrbanFit',
      icon: <User size={40} />,
    },
  ];

  return (
    <div className="expert-page" dir="rtl" style={{ textAlign: 'right' }}>
      <Head>
        <title>توظيف خبراء Shopify | DH Solution</title>
        <meta
          name="description"
          content="تعاون مع أفضل مطوري Shopify في DH Solution. من التخطيط إلى الإطلاق، نبني تجارب تجارة إلكترونية قابلة للتوسع وعالية الأداء."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>
            توظيف <span>خبراء Shopify</span>
          </h1>
          <p>
            أفضل 1% من المهندسين لبناء متاجر Shopify مذهلة وعالية التحويل بسرعة.
          </p>
          <a href="/contact" className="hero-btn">
            ابدأ الآن
          </a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار Shopify لمتجرك؟</h2>
          <p>
            Shopify هو المنصة المثالية لإطلاق وتوسيع وإدارة العلامات التجارية الحديثة في التجارة الإلكترونية. إنه آمن، مرن، ومصمم للنمو.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Clock size={32} />
              </div>
              <h3>إعداد سريع</h3>
              <p>
                أطلق متجرك في أيام مع منصة مصممة للسرعة والسهولة.
              </p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ShoppingCart size={32} />
              </div>
              <h3>قابلية توسع عالية</h3>
              <p>
                من 10 إلى 10,000 منتج، Shopify يتوسع مع عملك بدون تنازلات.
              </p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />
              </div>
              <h3>آمن وموثوق</h3>
              <p>
                يوفر Shopify أماناً من الدرجة الأولى وتوافر 24/7 للمبيعات بدون انقطاع.
              </p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} />
              </div>
              <h3>قابل للتخصيص</h3>
              <p>
                خصص متجرك بالثيمات المخصصة والتكاملات والميزات المتقدمة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>عملية العمل لدينا</h2>
          <p className="subtitle">
            منظمة للسرعة والدقة وجودة التسليم.
          </p>
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
