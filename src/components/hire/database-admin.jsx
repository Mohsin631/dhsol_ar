import Head from 'next/head';
import { useEffect } from 'react';
import { User, Database, Settings2, UploadCloud, Zap, ShieldCheck, Shield, Layers } from 'lucide-react';

export default function DatabaseAdminPage() {
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
    { title: "الاستشارة", desc: "تقييم احتياجات وقواعد بياناتك وبيئتك.", icon: <Database size={36} /> },
    { title: "التخطيط", desc: "تصميم استراتيجية قواعد بيانات مخصصة لأداء مثالي.", icon: <Settings2 size={36} /> },
    { title: "الإعداد والهجرة", desc: "إعداد قواعد البيانات والهجرة بأمان وسلاسة.", icon: <UploadCloud size={36} /> },
    { title: "التحسين", desc: "تحسين أداء قواعد البيانات للسرعة، القابلية للتوسع، والكفاءة.", icon: <Zap size={36} /> },
    { title: "المراقبة", desc: "مراقبة مستمرة وحل المشكلات للحفاظ على صحة قواعد البيانات.", icon: <ShieldCheck size={36} /> }
  ];

  const testimonials = [
    {
      quote: "كان فريق إدارة قواعد البيانات ممتازًا في تحسين نظامنا، مما أدى إلى تحسين الأداء بشكل كبير.",
      name: "جون دو",
      role: "المدير التقني، WebTech"
    },
    {
      quote: "تم ترحيل قاعدة بياناتنا بالكامل دون أية مشاكل. تعامل الفريق مع كل شيء باحترافية.",
      name: "إميلي سميث",
      role: "مديرة العمليات، DataCorp"
    },
    {
      quote: "عمل استثنائي في صيانة وتأمين قواعد بياناتنا. ننصح بهم لأي احتياجات معقدة لقواعد البيانات.",
      name: "مايكل جونسون",
      role: "المؤسس، DataSync"
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف مسؤولي قواعد البيانات | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>خبراء قواعد البيانات</span></h1>
          <p>تأكد من أن قواعد بياناتك آمنة، ومحسنة، وتعمل بكفاءة مع إدارة قواعد البيانات الاحترافية.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار مسؤولي قواعد البيانات لدينا؟</h2>
          <p>
            يضمن فريق إدارة قواعد البيانات لدينا أن قواعد بياناتك تعمل بأفضل أداء، آمنة، ومدعومة بنسخ احتياطية. من الترحيل إلى تحسين الأداء، خبراؤنا يتولون كل شيء.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Shield size={36} />
              </div>
              <h3>آمنة</h3>
              <p>نطبق أفضل الممارسات لأمن قواعد البيانات لضمان حماية بياناتك من الاختراقات.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Zap size={36} />
              </div>
              <h3>محسنة</h3>
              <p>يقوم مسؤولو قواعد البيانات لدينا بتحسين أداء قواعد البيانات، مما يضمن سرعة معالجة الاستعلامات وتقليل وقت التوقف.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <UploadCloud size={36} />
              </div>
              <h3>نسخ احتياطي موثوق</h3>
              <p>نقدم استراتيجيات نسخ احتياطي واسترداد من الكوارث قوية لتقليل مخاطر فقدان البيانات.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={36} />
              </div>
              <h3>قابلة للتوسع</h3>
              <p>نصمم قواعد البيانات الخاصة بك لتكون قابلة للتوسع، لتلبية نمو أعمالك واحتياجاتها المستقبلية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">تضمن عملية إدارة قواعد البيانات لدينا عمليات سلسة، تحسين أداء، ونسخ احتياطي موثوق.</p>
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
                  <User size={36} />
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
