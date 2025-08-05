import Head from 'next/head';
import { useEffect } from 'react';
import {
  User, Rocket, Zap, Database, Lock,
  Microscope, PenTool, Layers, Code,
  CheckCircle, CloudRain
} from 'lucide-react';

export default function PythonDeveloperPage() {
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
    { title: "الاستشارة", desc: "تحليل أهدافك التقنية ونطاق مشروع بايثون.", icon: <PenTool className="h-8 w-8 text-blue-500" /> },
    { title: "التخطيط", desc: "وضع مخطط الوحدات، الهيكلية، والتكاملات.", icon: <Layers className="h-8 w-8 text-green-500" /> },
    { title: "التطوير", desc: "نكتب كود بايثون نظيف وقابل للتوسع بأداء عالي.", icon: <Code className="h-8 w-8 text-yellow-500" /> },
    { title: "الاختبار", desc: "اختبارات الوحدة، التكامل، والنظام لضمان الموثوقية.", icon: <CheckCircle className="h-8 w-8 text-red-500" /> },
    { title: "الإطلاق", desc: "النشر والمراقبة مع تحسين ودعم مستمر.", icon: <CloudRain className="h-8 w-8 text-purple-500" /> }
  ];

  const testimonials = [
    {
      quote: "قدم مطورو بايثون لدينا واجهة خلفية قوية لتطبيقنا المالي.",
      name: "مايكل تان",
      role: "المدير التقني، Bankzy"
    },
    {
      quote: "من Django إلى سكربتات الأتمتة – تعاملوا مع كل شيء ببراعة.",
      name: "كلارا جنسن",
      role: "مديرة المنتج، AutoPulse"
    },
    {
      quote: "موثوقون، مهرة وسريعون. العمل الذي قاموا به وفر علينا أسابيع.",
      name: "ديف باتيل",
      role: "المؤسس، SmartBotics"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" style={{ textAlign: 'right' }}>
      <Head>
        <title>توظيف مطوري بايثون | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مطوري بايثون</span></h1>
          <p>أفضل 1% من المهندسين لبناء حلول بايثون قوية، معتمدة على البيانات وقابلة للتوسع.</p>
          <a href="/contact" className="hero-btn">
            <Rocket className="h-5 w-5 text-white ml-2" /> ابدأ الآن
          </a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار بايثون لمشروعك؟</h2>
          <p>
            بايثون هي واحدة من أكثر لغات البرمجة تنوعًا — مثالية للذكاء الاصطناعي، تطبيقات الويب، خطوط البيانات، والأتمتة. تدعم كل شيء من الشركات الناشئة إلى منصات المؤسسات.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-12 w-12 text-blue-500" />
              </div>
              <h3>تطوير سريع</h3>
              <p>بساطة بايثون تسمح بالنماذج الأولية السريعة وتقليل وقت الوصول للسوق.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Database className="h-12 w-12 text-green-500" />
              </div>
              <h3>واجهة خلفية قابلة للتوسع</h3>
              <p>أطر العمل مثل Django وFastAPI تساعدنا على بناء واجهات خلفية قوية بسهولة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock className="h-12 w-12 text-red-500" />
              </div>
              <h3>آمن ومستقر</h3>
              <p>تمكن بايثون من تطوير آمن وهندسة متينة مع بنية نظيفة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Microscope className="h-12 w-12 text-purple-500" />
              </div>
              <h3>جاهز للذكاء الاصطناعي والأتمتة</h3>
              <p>مثالي لنماذج التعلم الآلي، تحليلات البيانات، وأتمتة المهام باستخدام مكتبات مثل Pandas وNumPy وأكثر.</p>
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
