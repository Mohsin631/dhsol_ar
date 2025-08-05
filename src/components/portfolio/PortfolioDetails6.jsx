import Head from "next/head";
import {
  ShieldLock,
  Database,
  BarChart,
  Cloud,
  Cpu,
} from "lucide-react";

export default function PortfolioDetails6() {
  return (
    <div className="portfolio-details-page">
      <Head>
        <title>DH Solutions – Cyber Analytics Services for ONE Network | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">Cyber Analytics Services for ONE Network</h1>
          <p className="portfolio-tagline">
            Enhancing Security and Efficiency for Pakistan&apos;s Leading Toll Plaza Automation System
          </p>
          <a
            href="#"
            className="portfolio-hero-btn"
          >
            Visit ONE Network
          </a>
        </div>
      </section>

      {/* Project Overview */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Project Overview</h2>
          <p className="portfolio-text">
            DH Solutions delivered advanced cyber analytics services to ONE Network, Pakistan&apos;s leading toll plaza automation
            company. The solution was designed to enhance the security, operational efficiency, and resilience of ONE Network&apos;s
            automated systems. By integrating real-time threat monitoring and predictive analytics, the project ensures data protection
            and improves the performance of toll management across the country.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">The Challenge</h2>
          <p className="portfolio-text portfolio-text-white">
            ONE Network&apos;s toll plaza automation systems were essential for managing traffic and revenue generation nationwide.
            However, these systems faced growing threats from cyberattacks and inefficiencies in real-time monitoring. The challenge
            was to strengthen data protection, ensure the operational resilience of the automated systems, and enhance threat detection
            capabilities to safeguard national infrastructure.
          </p>
        </div>
      </section>

      {/* Your Role */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Our Role</h2>
          <p className="portfolio-text">
            DH Solutions played a pivotal role in implementing cyber analytics services, including the deployment of advanced threat
            detection systems, real-time monitoring, and predictive analytics. We enhanced ONE Network&apos;s security infrastructure, enabling
            faster response times and improved decision-making to mitigate risks. Our team provided continuous support and training to ensure
            that the system could detect, analyze, and neutralize threats effectively.
          </p>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Process &amp; Approach</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔍 Security Audit &amp; Risk Assessment</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚙️ Real-Time Threat Monitoring Integration</li>
            <li className="portfolio-list-item portfolio-list-item-white">📊 Predictive Analytics for Threat Detection</li>
            <li className="portfolio-list-item portfolio-list-item-white">💡 Incident Response System Design</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚀 Ongoing Support &amp; System Optimization</li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Tech Stack</h2>
          <div className="portfolio-tech-stack">
            <div className="portfolio-tech-item">
              <ShieldLock size={40} color="#3533cd" /> Cybersecurity Monitoring
            </div>
            <div className="portfolio-tech-item">
              <Database size={40} color="#3533cd" /> Real-Time Data Processing
            </div>
            <div className="portfolio-tech-item">
              <Cpu size={40} color="#3533cd" /> Predictive Analytics
            </div>
            <div className="portfolio-tech-item">
              <Cloud size={40} color="#3533cd" /> Cloud-Based Infrastructure
            </div>
            <div className="portfolio-tech-item">
              <BarChart size={40} color="#3533cd" /> Performance Optimization
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Results &amp; Impact</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔒 Enhanced security and threat detection</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚡ Improved operational resilience and system uptime</li>
            <li className="portfolio-list-item portfolio-list-item-white">📈 Optimized system performance and efficiency</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚨 Real-time monitoring for rapid threat response</li>
            <li className="portfolio-list-item portfolio-list-item-white">🌍 Strengthened national infrastructure security</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
