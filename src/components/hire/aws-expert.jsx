import Head from 'next/head';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faClipboardList,
  faCloud,
  faCogs,
  faHeadset,
  faBolt,
  faShieldAlt,
  faDollarSign,
  faSlidersH,
  faUser
} from '@fortawesome/free-solid-svg-icons';

export default function AWSSpecialistPage() {
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
    { title: "الاستشارة", desc: "تقييم بنية السحابة الخاصة بك وفهم احتياجات AWS الخاصة بك.", icon: faHandshake },
    { title: "التخطيط", desc: "إنشاء هندسة AWS مخصصة تتماشى مع أهداف عملك.", icon: faClipboardList },
    { title: "التنفيذ", desc: "تنفيذ خدمات AWS مثل EC2، Lambda، RDS، وS3 لتحسين البنية التحتية السحابية.", icon: faCloud },
    { title: "التحسين", desc: "تحسين بنية AWS الخاصة بك لتحقيق أفضل كفاءة من حيث التكلفة والسرعة والأمان.", icon: faCogs },
    { title: "الدعم", desc: "توفير الصيانة والدعم المستمر على مدار الساعة لضمان سير عمليات AWS بسلاسة.", icon: faHeadset }
  ];

  const testimonials = [
    {
      quote: "ساعدنا فريق AWS على توسيع بنيتنا التحتية للتعامل مع ملايين المستخدمين بسهولة. عمل رائع!",
      name: "ايدن كلارك",
      role: "المدير التقني، WebDynamics",
    },
    {
      quote: "تمكنا من تحسين تكاليفنا على AWS بشكل كبير. كانت خبرتهم لا تقدر بثمن.",
      name: "صوفيا باتيل",
      role: "نائب رئيس التكنولوجيا، BigCo",
    },
    {
      quote: "بفضل حلول AWS الخاصة بهم، استطعنا تقليل وقت التوقف وتحسين الأداء.",
      name: "ليام هاريس",
      role: "المطور الرئيسي، FinTech Solutions",
    }
  ];

  return (
    <div className="expert-page" dir="rtl">
      <Head>
        <title>توظيف خبراء AWS | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section" dir="rtl">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>توظيف خبراء <span>مهندسي AWS</span></h1>
          <p>قم بتحسين، توسيع، وتأمين حلول السحابة الخاصة بك مع محترفي AWS من الدرجة الأولى.</p>
          <a href="/contact" className="hero-btn">ابدأ الآن</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview" dir="rtl">
        <div className="container">
          <h2>لماذا تختار AWS لعملك؟</h2>
          <p>
            تعد AWS (خدمات أمازون ويب) المنصة السحابية الرائدة، حيث تقدم مجموعة واسعة من الخدمات للحوسبة، التخزين، وإدارة قواعد البيانات. حلولها القابلة للتوسع، الآمنة، وفعالة من حيث التكلفة تمكن الأعمال من الابتكار بشكل أسرع وأكثر كفاءة.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3>حلول قابلة للتوسع</h3>
              <p>تتيح لك AWS توسيع بنيتك التحتية حسب احتياجاتك، مع التعامل مع أي حجم من الطلبات بسهولة.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>أمان عالي</h3>
              <p>مع ميزات الأمان المدمجة والامتثال، تضمن AWS سلامة بياناتك وبنيتك التحتية.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <h3>فعالية من حيث التكلفة</h3>
              <p>ادفع فقط مقابل ما تستخدمه مع نموذج التسعير المرن لـ AWS، مما يجعلها خيارًا اقتصاديًا لأي عمل.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <h3>مرنة وموثوقة</h3>
              <p>تقدم AWS مجموعة متنوعة من الخدمات لحالات استخدام مختلفة، من استضافة الويب البسيطة إلى تطبيقات تعلم الآلة المعقدة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" dir="rtl">
        <div className="container">
          <h2>خطوات عملنا</h2>
          <p className="subtitle">نهجنا المنظم يضمن تقديم حلول سحابية قابلة للتوسع وآمنة على AWS.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle" aria-label={`أيقونة ${step.title}`}>
                  <FontAwesomeIcon icon={step.icon} />
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
                  <div className="client-icon">
                    <FontAwesomeIcon icon={faUser} />
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
