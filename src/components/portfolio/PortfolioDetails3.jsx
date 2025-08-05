import Head from "next/head";
import {
  Code,
  Server,
  Database,
  Cloud,
  ShoppingBag,
  Globe,
} from "lucide-react";

export default function PortfolioDetails3() {
  return (
    <div className="portfolio-details-page">
      <Head>
        <title>DH Solutions – E-commerce Platform for Perfume Business | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">E-commerce Platform for Perfume Business</h1>
          <p className="portfolio-tagline">
            Transforming a Local Perfume Business in Kuwait into a Global E-commerce Platform
          </p>
          <a
            href="#"
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
            DH Solutions is helping a local perfume business in Kuwait by transforming it into a fully functional and
            responsive e-commerce platform. This digital transformation allows the perfume brand to reach a global audience,
            offering customers an enhanced shopping experience with easy online browsing, purchasing, and delivery options.
            The website features a catalog of premium perfumes, detailed product descriptions, and an intuitive user interface,
            bringing traditional retail into the digital marketplace.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">The Challenge</h2>
          <p className="portfolio-text portfolio-text-white">
            The perfume business in Kuwait needed a complete digital transformation to expand its reach beyond local customers.
            The challenge was to develop a user-friendly, secure, and visually stunning e-commerce platform that would allow the
            business to not only sell locally but also cater to international customers. We had to ensure a seamless shopping
            experience across all devices and integrate payment gateways for multiple currencies.
          </p>
        </div>
      </section>

      {/* Your Role */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Our Role</h2>
          <p className="portfolio-text">
            DH Solutions was responsible for the end-to-end development of the e-commerce platform. This included front-end
            and back-end development, UI/UX design, product catalog integration, and payment gateway setup. We ensured a
            smooth user experience and optimized the platform for performance, security, and scalability. Additionally, we
            provided ongoing support and maintenance for the system post-launch.
          </p>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Process & Approach</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔍 Requirement Gathering & Analysis</li>
            <li className="portfolio-list-item portfolio-list-item-white">🎨 UI/UX Design for E-commerce Platform</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚙️ Front-End Development with React</li>
            <li className="portfolio-list-item portfolio-list-item-white">💳 Payment Gateway Integration</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚀 Deployment & Cloud Hosting on AWS</li>
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
              <ShoppingBag size={40} color="#3533cd" /> E-commerce Integration
            </div>
            <div className="portfolio-tech-item">
              <Globe size={40} color="#3533cd" /> Global Shipping Integration
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Results & Impact</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🌍 Increased global reach by 150%</li>
            <li className="portfolio-list-item portfolio-list-item-white">📦 Streamlined inventory management and order processing</li>
            <li className="portfolio-list-item portfolio-list-item-white">💳 Secure and seamless multi-currency payment options</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚚 Integrated international shipping options for global customers</li>
            <li className="portfolio-list-item portfolio-list-item-white">📈 Increased revenue by 40% within the first 6 months</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
