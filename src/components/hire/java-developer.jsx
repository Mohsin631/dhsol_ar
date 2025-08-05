import Head from 'next/head';
import { useEffect } from 'react';
import { User, Shield, Server, Code, Globe, Smartphone } from 'lucide-react'; // Add relevant icons

export default function JavaDeveloperPage() {
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
    { title: "Consultation", desc: "Gather business requirements & understand your Java tech stack.", icon: <Smartphone size={32} /> },
    { title: "Planning", desc: "Architect reliable backend and frontend systems using Java.", icon: <Server size={32} /> },
    { title: "Development", desc: "Develop scalable apps using Spring, Hibernate, and more.", icon: <Code size={32} /> },
    { title: "Testing", desc: "Unit, integration, and load testing to ensure stability.", icon: <Shield size={32} /> },
    { title: "Launch", desc: "Production deployment and long-term support services.", icon: <Globe size={32} /> }
  ];

  const testimonials = [
    {
      quote: "Our enterprise app built in Java is now faster and more scalable, thanks to DH Solution.",
      name: "Sophie Jackson",
      role: "Product Manager, CoreFin",
      image: <User size={40} />
    },
    {
      quote: "Highly experienced Java developers. They integrated seamlessly into our existing team.",
      name: "Tom Alvarez",
      role: "CTO, BuildNet",
      image: <User size={40} />
    },
    {
      quote: "Reliable, professional, and full of smart solutions. Our Java project was a success!",
      name: "Grace Liu",
      role: "CEO, InvoTech",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Java Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Java Developers</span></h1>
          <p>Top 1% engineers to build secure, scalable enterprise-grade applications.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Java for Your Project?</h2>
          <p>
            Java is one of the most robust and mature programming languages, ideal for building scalable enterprise applications, Android apps, and backend systems.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />
              </div>
              <h3>Robust Language</h3>
              <p>Java&rsquo;s strong typing and compile-time checks ensure high reliability and fewer bugs.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={32} />
              </div>
              <h3>Enterprise-Ready</h3>
              <p>Trusted by Fortune 500s for scalable backend systems and ERP solutions.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />
              </div>
              <h3>Secure Codebase</h3>
              <p>Java&rsquo;s security model and mature frameworks ensure enterprise-grade protection.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Globe size={32} />
              </div>
              <h3>Cross-Platform</h3>
              <p>Write once, run anywhere — Java works across servers, desktops, and Android devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Structured for speed, precision, and quality delivery.</p>
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
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info">
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
