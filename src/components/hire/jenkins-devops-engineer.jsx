import Head from 'next/head';
import { useEffect } from 'react';
import { User, Settings, Plug, Code, Server, RotateCw } from 'lucide-react';

export default function JenkinsDevOpsEngineerPage() {
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
    { title: "الاستشارة", desc: "تقييم متطلبات DevOps وممارسات CI/CD الحالية لديك.", icon: <Settings size={32} /> },
    { title: "التخطيط", desc: "تصميم خط أنابيب Jenkins فعال لتحسين سير العمل.", icon: <Plug size={32} /> },
    { title: "الإعداد", desc: "إعداد Jenkins، دمج الإضافات الضرورية، وتكوين خطوط الأنابيب للأتمتة.", icon: <Code size={32} /> },
    { title: "الأتمتة", desc: "أتمتة عمليات البناء، الاختبار، والنشر لضمان CI/CD سلس.", icon: <RotateCw size={32} /> },
    { title: "الدعم المستمر", desc: "تقديم دعم وصيانة مستمرة لإعداد Jenkins وخطوط الأنابيب الخاصة بك.", icon: <Server size={32} /> }
  ];

  const testimonials = [
    {
      quote: "ساعدنا فريق Jenkins DevOps في تبسيط عملية التطوير ودمج خطوط أنابيب CI/CD بسلاسة.",
      name: "راشيل غرين",
      role: "قائدة DevOps، CloudifyTech",
      image: <User size={40} />
    },
    {
      quote: "رفعوا إعداد Jenkins الخاص بنا إلى مستوى جديد، مما جعله أكثر كفاءة وقابلية للتوسع. عمل رائع!",
      name: "لوكاس كينج",
      role: "الرئيس التقني، TechSage",
      image: <User size={40} />
    },
    {
      quote: "مع خبرتهم في Jenkins، قمنا بأتمتة كل جانب من جوانب خط النشر وقللنا الأخطاء بشكل كبير.",
      name: "إيما رايت",
      role: "مهندسة DevOps، DigitalFlow",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف مهندسي Jenkins DevOps | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مهندسي Jenkins DevOps</span></h1>
          <p>أتمتة عمليات البناء والاختبار والنشر مع أفضل مهندسي Jenkins DevOps.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار Jenkins لسير عمل DevOps الخاص بك؟</h2>
          <p>
            Jenkins هو خادم أتمتة مفتوح المصدر مثالي لتنفيذ التكامل والتسليم المستمر (CI/CD) في مشاريع البرمجيات. يدعم مجموعة واسعة من الإضافات لبناء المشاريع ونشرها وأتمتتها.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <RotateCw size={32} />
              </div>
              <h3>أتمتة سير العمل</h3>
              <p>يتيح لك Jenkins أتمتة دورة حياة تطوير البرمجيات بالكامل، مما يقلل الأخطاء ويزيد الكفاءة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Plug size={32} />
              </div>
              <h3>تكامل سلس</h3>
              <p>يتكامل بسهولة مع جميع أنظمة التحكم في الإصدارات وأدوات الاختبار ومنصات النشر الرئيسية.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={32} />
              </div>
              <h3>قابلية التوسع</h3>
              <p>يتوسع Jenkins بسهولة مع احتياجات فريقك، ويتعامل مع كل شيء من المشاريع الصغيرة إلى تطبيقات المؤسسات الكبيرة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Settings size={32} />
              </div>
              <h3>المرونة</h3>
              <p>يدعم Jenkins مجموعة واسعة من الإضافات التي تتيح لك تخصيص خطوط CI/CD الخاصة بك لتلبية متطلباتك الفريدة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">تبسيط سير عمل DevOps الخاص بك باستخدام Jenkins.</p>
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
                <div className="client-info" style={{display:'flex', alignItems:'center', gap:'10px'}}>
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
