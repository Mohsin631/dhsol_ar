import Head from 'next/head';
import { useEffect } from 'react';
import { User, Clipboard, Code, CheckCircle, Rocket, Zap, ArrowUpCircle, Lock, Monitor } from 'lucide-react';

export default function NodejsDeveloperPage() {
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
    { title: "الاستشارة", desc: "فهم أهداف تطبيقك، احتياجات الواجهة الخلفية، وتحديات التوسع.", icon: <User className="h-8 w-8 text-gray-500" /> },
    { title: "التخطيط", desc: "تخطيط الهيكلية باستخدام أفضل ممارسات Node.js.", icon: <Clipboard className="h-8 w-8 text-gray-500" /> },
    { title: "التطوير", desc: "نقوم ببناء APIs، خدمات دقيقة، وتطبيقات في الوقت الحقيقي باستخدام Node.js.", icon: <Code className="h-8 w-8 text-gray-500" /> },
    { title: "الاختبار", desc: "اختبارات الأداء والتحميل لضمان متانة الواجهة الخلفية.", icon: <CheckCircle className="h-8 w-8 text-gray-500" /> },
    { title: "الإطلاق", desc: "نشر مع خطوط CI/CD وتقديم دعم طويل الأمد.", icon: <Rocket className="h-8 w-8 text-gray-500" /> }
  ];

  const testimonials = [
    {
      quote: "بناة Node.js لديهم أنشأوا واجهة خلفية سريعة للغاية لسوقنا. عمل رائع!",
      name: "ليام توريس",
      role: "الرئيس التنفيذي، MarketGo"
    },
    {
      quote: "خبراء Node موثوقون. تطبيق الدردشة لدينا يعمل بشكل ممتاز في الوقت الحقيقي!",
      name: "تينا روي",
      role: "المؤسسة المشاركة، Chatly"
    },
    {
      quote: "كود نظيف، منطق قابل للتوسع، واتصال مذهل. أوصي بهم بشدة!",
      name: "آرون كيم",
      role: "مدير التقنية، SwiftRide"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" style={{ textAlign: 'right' }}>
      <Head>
        <title>توظيف مطوري Node.js | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري Node.js</span></h1>
          <p>أفضل 1% من المهندسين لبناء أنظمة خلفية سريعة، قابلة للتوسع وفي الوقت الحقيقي.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار Node.js لمشروعك؟</h2>
          <p>
            Node.js بيئة جافاسكريبت قوية مناسبة لتطبيقات الويب عالية الأداء، واجهات API، وأنظمة الوقت الحقيقي. تتعامل بكفاءة مع الاتصالات المتزامنة عبر مدخلات ومخرجات غير محجوبة.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-8 w-8 text-gray-500" />
              </div>
              <h3>سرعة عالية</h3>
              <p>مدعوم بمحرك V8 من جوجل، يضمن Node.js تنفيذ جافاسكريبت بسرعة فائقة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ArrowUpCircle className="h-8 w-8 text-gray-500" />
              </div>
              <h3>هيكلية قابلة للتوسع</h3>
              <p>الهندسة المعتمدة على الأحداث والمدخلات والمخرجات غير المحجوبة تتيح توسيع التطبيقات بسهولة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock className="h-8 w-8 text-gray-500" />
              </div>
              <h3>واجهات API آمنة</h3>
              <p>مصادقة قوية، Middleware، والتحقق من الطلبات تحافظ على بياناتك بأمان.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Monitor className="h-8 w-8 text-gray-500" />
              </div>
              <h3>جاهز للوقت الحقيقي</h3>
              <p>بناء تطبيقات الدردشة، خدمات البث، وأدوات التعاون مع ميزات الوقت الحقيقي.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>عملية العمل لدينا</h2>
          <p className="subtitle">منظمة للسرعة، الدقة، وجودة التسليم.</p>
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

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info">
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
