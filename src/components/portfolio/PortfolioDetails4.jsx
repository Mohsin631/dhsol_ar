import Head from "next/head";
import {
  Shield,
  Lock,
  Cloud,
  Server,
  UserCheck,
} from "lucide-react";

export default function PortfolioDetails4() {
  return (
    <div className="portfolio-details-page">
      <Head>
        <title>DH Solutions – Cybersecurity Services for Dubai Duty Free | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">Cybersecurity Services for Dubai Duty Free</h1>
          <p className="portfolio-tagline">
            Ensuring Digital Security for Dubai Duty Free&apos;s Operations and Sensitive Data
          </p>
          <a
            href="#"
            className="portfolio-hero-btn"
          >
            Visit Dubai Duty Free
          </a>
        </div>
      </section>

      {/* Project Overview */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Project Overview</h2>
          <p className="portfolio-text">
            DH Solutions has partnered with Dubai Duty Free to deliver robust cybersecurity services, ensuring the safety
            of their digital infrastructure and safeguarding sensitive customer and business data. As one of the leading
            retail organizations in the UAE, Dubai Duty Free relies on DH Solutions to maintain the security of their e-commerce
            platform and internal systems, allowing them to operate confidently in the digital space while maintaining strict
            compliance with industry standards.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">The Challenge</h2>
          <p className="portfolio-text portfolio-text-white">
            Dubai Duty Free operates a highly valuable and sensitive digital ecosystem, processing thousands of transactions
            daily and storing sensitive customer data. The challenge was to ensure robust cybersecurity protocols that could
            protect this data, defend against cyber-attacks, and meet international security standards. Our task was to enhance
            their existing infrastructure and provide ongoing support to mitigate any potential security threats.
          </p>
        </div>
      </section>

      {/* Your Role */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Our Role</h2>
          <p className="portfolio-text">
            DH Solutions was responsible for implementing a comprehensive cybersecurity strategy for Dubai Duty Free, which
            included security audits, threat detection, vulnerability assessments, data encryption, and access control. Our team
            provided continuous monitoring, timely threat response, and ensured compliance with GDPR and other industry regulations.
            We also provided ongoing support and updates to address emerging security threats.
          </p>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Process &amp; Approach</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔍 Security Audits &amp; Risk Assessments</li>
            <li className="portfolio-list-item portfolio-list-item-white">🛡️ Security Infrastructure Design</li>
            <li className="portfolio-list-item portfolio-list-item-white">🔒 Data Encryption &amp; Access Control</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚙️ Ongoing Monitoring &amp; Threat Response</li>
            <li className="portfolio-list-item portfolio-list-item-white">🔐 Compliance with GDPR &amp; International Standards</li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Cybersecurity Tools &amp; Tech Stack</h2>
          <div className="portfolio-tech-stack">
            <div className="portfolio-tech-item">
              <Shield size={40} color="#3533cd" /> Network Security Solutions
            </div>
            <div className="portfolio-tech-item">
              <Lock size={40} color="#3533cd" /> Data Encryption
            </div>
            <div className="portfolio-tech-item">
              <Server size={40} color="#3533cd" /> Firewall Protection
            </div>
            <div className="portfolio-tech-item">
              <Cloud size={40} color="#3533cd" /> Cloud Security
            </div>
            <div className="portfolio-tech-item">
              <UserCheck size={40} color="#3533cd" /> Access Management &amp; Authentication
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Results &amp; Impact</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔐 Secure handling of millions of transactions</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚡ Reduced security vulnerabilities by 90%</li>
            <li className="portfolio-list-item portfolio-list-item-white">🛡️ Real-time threat detection and rapid response</li>
            <li className="portfolio-list-item portfolio-list-item-white">🌍 Compliance with international security standards (GDPR, PCI DSS)</li>
            <li className="portfolio-list-item portfolio-list-item-white">📈 Enhanced customer trust and business reputation</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
