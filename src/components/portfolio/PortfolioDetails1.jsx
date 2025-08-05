import Head from "next/head";
import {
  Code,
  Server,
  Database,
  Cloud,
  CreditCard,
  Globe,
} from "lucide-react";

export default function PortfolioDetails1() {
  return (
    <div className="portfolio-details-page">
      <Head>
        <title>ViBeats – Project Details | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">ViBeats</h1>
          <p className="portfolio-tagline">
            A Global Ticketing Platform Empowering Events Worldwide
          </p>
          <a
            href="https://vibeat.io"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-hero-btn"
          >
            Visit Live Site
          </a>
        </div>
      </section>

      {/* Project Overview */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Project Overview</h2>
          <p className="portfolio-text">
            ViBeats is a global ticketing platform that enables organizers to host, manage, and
            sell tickets for events across the world. It offers real-time analytics, dynamic pricing,
            fraud protection, and a seamless user experience across all devices.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">The Challenge</h2>
          <p className="portfolio-text portfolio-text-white">
            Build a scalable, secure, and fast system capable of handling global event ticketing
            in real time — with top-tier UX and support for various currencies and payment gateways.
          </p>
        </div>
      </section>

      {/* Your Role */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Our Role</h2>
          <p className="portfolio-text">
            We managed end-to-end product development — including front-end and back-end development,
            architecture, payment integration, and DevOps. We ensured security, scalability, and top
            performance throughout.
          </p>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Process & Approach</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔍 Requirement Analysis & Wireframing</li>
            <li className="portfolio-list-item portfolio-list-item-white">🎨 UI/UX Design (Mobile First)</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚙️ Agile Sprints & Feature Delivery</li>
            <li className="portfolio-list-item portfolio-list-item-white">🧪 Testing, QA, and Optimizations</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚀 CI/CD with AWS Cloud Hosting</li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Development Stack</h2>
          <div className="portfolio-tech-stack">
            <div className="portfolio-tech-item">
              <Code size={40} color="#3533cd" /> React + Next.js
            </div>
            <div className="portfolio-tech-item">
              <Server size={40} color="#3533cd" /> Node.js
            </div>
            <div className="portfolio-tech-item">
              <Database size={40} color="#3533cd" /> MongoDB
            </div>
            <div className="portfolio-tech-item">
              <Cloud size={40} color="#3533cd" /> AWS
            </div>
            <div className="portfolio-tech-item">
              <CreditCard size={40} color="#3533cd" /> Stripe
            </div>
            <div className="portfolio-tech-item">
              <Globe size={40} color="#3533cd" /> Global CDN
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Results & Impact</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🌎 100K+ tickets sold in first 3 months</li>
            <li className="portfolio-list-item portfolio-list-item-white">📈 70% boost in event efficiency</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚡ Sub-300ms response time</li>
            <li className="portfolio-list-item portfolio-list-item-white">🔐 Fully compliant with GDPR & PCI</li>
            <li className="portfolio-list-item portfolio-list-item-white">🌐 Operating in 20+ countries</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
