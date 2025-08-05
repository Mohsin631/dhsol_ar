import Head from 'next/head';
import { useEffect } from 'react';
import { CheckCircle, GitMerge, Target, Zap, User } from 'lucide-react';

export default function QAEngineerPage() {
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
    { title: "الاستشارة", desc: "تحليل مشروعك لفهم متطلبات وأهداف الاختبار.", icon: <CheckCircle className="h-8 w-8 text-blue-500" /> },
    { title: "خطة الاختبار", desc: "تصميم خطة اختبار واستراتيجية شاملة تناسب احتياجاتك.", icon: <GitMerge className="h-8 w-8 text-green-500" /> },
    { title: "تنفيذ الاختبار", desc: "تنفيذ الاختبارات عبر مراحل مختلفة لاكتشاف وحل المشكلات.", icon: <Zap className="h-8 w-8 text-yellow-500" /> },
    { title: "تقرير الأخطاء", desc: "توثيق الأخطاء وإعداد تقارير مفصلة لتسريع عملية الإصلاح.", icon: <Target className="h-8 w-8 text-red-500" /> },
    { title: "الاختبار النهائي", desc: "إجراء الاختبارات النهائية لضمان جاهزية المنتج للنشر.", icon: <CheckCircle className="h-8 w-8 text-purple-500" /> }
  ];

  const testimonials = [
    {
      quote: "كان مهندسو ضمان الجودة دقيقين وضمانوا عدم وجود أخطاء حرجة. تحسنت جودة تطبيقنا بشكل كبير.",
      name: "إيما روبرتس",
      role: "مالك المنتج، FinTech Solutions"
    },
    {
      quote: "تعاون ممتاز مع فريق ضمان الجودة الخاص بهم. كانوا مجتهدين واستباقيين في العثور على المشكلات وإصلاحها.",
      name: "مارك جونسون",
      role: "المطور الرئيسي، BrightTech"
    },
    {
      quote: "عمل رائع من فريق ضمان الجودة! ساعدونا في تسليم منتج خالٍ من العيوب في الوقت المحدد. أوصي بهم بشدة!",
      name: "أليس ووكر",
      role: "مدير المشروع، WebVenture"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف مهندسي ضمان الجودة | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مهندسي ضمان الجودة</span></h1>
          <p>ضمان جودة عالية وتطبيقات خالية من الأخطاء مع أفضل خبراء QA.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة تقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار مهندسي ضمان الجودة لمشروعك؟</h2>
          <p>
            ضمان الجودة ضروري لنجاح أي منتج برمجي. يضمن المنتج خالٍ من الأخطاء، ويلبي توقعات المستخدمين، ويعمل بكفاءة تحت جميع الظروف.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-12 w-12 text-blue-500" />
              </div>
              <h3>اختبارات مؤتمتة</h3>
              <p>توفر الاختبارات المؤتمتة الوقت، وتقلل الأخطاء، وتضمن إصدارات أسرع مع التكامل المستمر.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h3>كشف دقيق للأخطاء</h3>
              <p>يستخدم مهندسو QA مزيجًا من التقنيات اليدوية والمؤتمتة لاكتشاف حتى أصعب الأخطاء.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Target className="h-12 w-12 text-red-500" />
              </div>
              <h3>اختبارات قابلة للتوسع</h3>
              <p>تتكيف حلول اختبار QA مع مشروعك لضمان تغطية شاملة حتى في البيئات المعقدة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <GitMerge className="h-12 w-12 text-yellow-500" />
              </div>
              <h3>تعاون سلس</h3>
              <p>يتعاون مهندسو QA بسلاسة مع المطورين لتوفير ردود سريعة وضمان تسليم جودة مستمرة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عملية العمل لدينا</h2>
          <p className="subtitle">ضمان أعلى معايير الجودة من خلال اختبار منظم وموثوق.</p>
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

      {/* شهادات العملاء */}
      <section className="testimonials">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
