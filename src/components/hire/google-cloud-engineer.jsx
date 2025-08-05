import Head from 'next/head';
import { useEffect } from 'react';
import { Cloud, Lock, DollarSign, Server, User } from 'lucide-react';

export default function GoogleCloudEngineerPage() {
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
    { title: "الاستشارة", desc: "تحليل بنية السحابة الخاصة بك وتحديد احتياجاتك في جوجل كلاود.", icon: <Cloud size={32} /> },
    { title: "التخطيط", desc: "تصميم بنية سحابية مخصصة تتناسب مع متطلبات عملك باستخدام خدمات GCP.", icon: <Cloud size={32} /> },
    { title: "التنفيذ", desc: "نشر خدمات جوجل كلاود مثل Compute Engine و GKE و Cloud Storage و BigQuery.", icon: <Server size={32} /> },
    { title: "التحسين", desc: "تحسين البنية التحتية السحابية من حيث التكلفة، الأداء، وقابلية التوسع.", icon: <DollarSign size={32} /> },
    { title: "الدعم", desc: "تقديم الدعم والصيانة المستمرة لضمان أفضل أداء للسحابة.", icon: <Lock size={32} /> }
  ];

  const testimonials = [
    {
      quote: "ساعدتنا حلول جوجل كلاود على تقليل التكاليف والتوسع بسرعة. خبرتهم في GCP من الطراز الأول.",
      name: "لوكاس ديفيس",
      role: "المدير التقني، CloudSynergy",
      image: <User size={40} />
    },
    {
      quote: "فريق ممتاز! أرشدونا خلال كل خطوة من عملية الانتقال إلى GCP وضمان سير الأمور بسلاسة.",
      name: "أميليا براون",
      role: "مهندسة رئيسية، FinTechX",
      image: <User size={40} />
    },
    {
      quote: "شهدنا تحسنًا فوريًا في الأداء وقابلية التوسع بفضل تنفيذهم لبنية GCP.",
      name: "أوين لي",
      role: "قائد تقني، InnovateTech",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page" dir="rtl" lang="ar">
      <Head>
        <title>توظيف مهندسي جوجل كلاود | DH Solution</title>
      </Head>

      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف <span>مهندسي جوجل كلاود</span> الخبراء</h1>
          <p>استفد من قوة جوجل كلاود لتوسيع بنيتك التحتية، تحسين الأمان، ودفع الابتكار.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* نظرة عامة على التقنية */}
      <section className="tech-overview">
        <div className="container">
          <h2>لماذا تختار جوجل كلاود لعملك؟</h2>
          <p>
            توفر منصة جوجل كلاود (GCP) خدمات بنية تحتية موثوقة، قابلة للتوسع، وآمنة للأعمال بجميع أحجامها. سواء كنت تدير تطبيقات، تخزن بيانات، أو تحلل مجموعات بيانات كبيرة، توفر GCP مجموعة أدوات قوية لتحسين رحلتك السحابية.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Cloud size={32} />
              </div>
              <h3>بنية تحتية قابلة للتوسع</h3>
              <p>وسع بنية السحابة الخاصة بك حسب الطلب مع حلول جوجل كلاود المرنة والقوية.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={32} />
              </div>
              <h3>أمان عالي</h3>
              <p>استفد من التدابير الأمنية الرائدة في الصناعة من جوجل كلاود لحماية بياناتك وتطبيقاتك.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <DollarSign size={32} />
              </div>
              <h3>فعالية من حيث التكلفة</h3>
              <p>تقدم جوجل كلاود أسعارًا تنافسية وأدوات تحسين التكلفة، مما يتيح لك الاستفادة القصوى من استثمارك في السحابة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={32} />
              </div>
              <h3>مرنة ومتعددة الاستخدامات</h3>
              <p>تتناسب جوجل كلاود مع استخدامات متعددة، من استضافة مواقع بسيطة إلى تطبيقات تعلم الآلة والذكاء الاصطناعي المتقدمة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العملية */}
      <section className="process">
        <div className="container">
          <h2>عمليتنا</h2>
          <p className="subtitle">نتبع منهجًا مبسطًا لتقديم أفضل حلول GCP التي تلبي احتياجات عملك.</p>
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

      {/* قسم الشهادات */}
      <section className="testimonials">
        <div className="container">
          <h2>ماذا يقول عملاؤنا</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info">
                  <div className="client-icon">
                    {t.image}
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
