import Head from 'next/head';
import { useEffect } from 'react';
import { User, Rocket, Layers, Shield, DollarSign, Settings, ClipboardList, UploadCloud, TrendingUp, Headset } from 'lucide-react';

export default function CloudEngineerPage() {
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
    { title: "الاستشارة", desc: "تحليل احتياجات البنية التحتية السحابية ومتطلبات النمو الخاصة بك.", icon: <ClipboardList size={36} /> },
    { title: "التخطيط", desc: "تصميم هندسة سحابية مخصصة لعملك وقابلة للتوسع مستقبلاً.", icon: <Settings size={36} /> },
    { title: "التنفيذ", desc: "تنفيذ حلول السحابة باستخدام AWS أو Azure أو Google Cloud لتحسين الأداء.", icon: <UploadCloud size={36} /> },
    { title: "التحسين", desc: "تحسين خدمات السحابة لتوفير التكاليف والاستخدام الأمثل للموارد.", icon: <TrendingUp size={36} /> },
    { title: "الدعم", desc: "تقديم مراقبة مستمرة وحل المشكلات والتحديثات لضمان عمليات سحابية سلسة.", icon: <Headset size={36} /> }
  ];

  const testimonials = [
    {
      quote: "كانت عملية نقلنا إلى السحابة سلسة، والحل المقدم زاد من كفاءتنا بشكل كبير.",
      name: "ديفيد براون",
      role: "المدير التقني، GlobalTech"
    },
    {
      quote: "ساعدنا الفريق في تحسين بنية AWS التحتية، موفرين الوقت والمال أثناء توسيع عملياتنا.",
      name: "إيما وايت",
      role: "نائب رئيس الهندسة، SoftWave"
    },
    {
      quote: "كنا بحاجة إلى مهندسين سحابة موثوقين لمشروعنا، وكانت خبرتهم في أمان السحابة لا تقدر بثمن.",
      name: "أوليفيا جرين",
      role: "رئيس عمليات السحابة، CloudNet"
    }
  ];

  return (
    <div className="expert-page" dir="rtl">
      <Head>
        <title>توظيف مهندسي السحابة | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section" dir="rtl">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف خبراء <span>مهندسي السحابة</span></h1>
          <p>ابنِ حلول سحابية قوية وقابلة للتوسع مع أفضل المهندسين في صناعة الحوسبة السحابية.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview" dir="rtl">
        <div className="container">
          <h2>لماذا تختار السحابة لعملك؟</h2>
          <p>
            تتيح الحوسبة السحابية للأعمال التوسع بسرعة، وتقليل تكاليف تكنولوجيا المعلومات، وتعزيز أمان البيانات. سواء لإدارة البنية التحتية أو استضافة التطبيقات أو تخزين البيانات، فإن حلول السحابة مرنة ومواكبة للمستقبل.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Rocket size={36} />
              </div>
              <h3>نشر سريع</h3>
              <p>يقوم مهندسو السحابة بنشر وتكوين البنية التحتية بسرعة لتلبية احتياجات عملك.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={36} />
              </div>
              <h3>حلول قابلة للتوسع</h3>
              <p>يمكن توسيع حلول السحابة بسهولة مع نمو عملك، لتستوعب ارتفاع حركة المرور بسهولة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={36} />
              </div>
              <h3>أمان معزز</h3>
              <p>توفر منصات السحابة ميزات أمان مدمجة لحماية بياناتك وبنيتك التحتية من التهديدات الخارجية.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <DollarSign size={36} />
              </div>
              <h3>فعالية من حيث التكلفة</h3>
              <p>تقدم منصات السحابة نماذج تسعير مرنة، مما يسهل عليك تحسين التكاليف والدفع فقط مقابل ما تستخدمه.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" dir="rtl">
        <div className="container">
          <h2>خطوات عملنا</h2>
          <p className="subtitle">هيكلية تضمن حلول سحابية سلسة تدفع نجاحك.</p>
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
                  <div className="icon-circle">
                    <User size={36} />
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
