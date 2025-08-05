import Head from "next/head";
import {
  BarChart,
  Database,
  TrendingUp,
  Cloud,
  Cpu,
} from "lucide-react";

export default function PortfolioDetails5() {
  return (
    <div className="portfolio-details-page">
      <Head>
        <title>DH Solutions – Business Intelligence Solutions for MENA Distributors | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">Business Intelligence Solutions for MENA Distributors</h1>
          <p className="portfolio-tagline">
            Empowering Decision-Making with AI-Driven Insights for MENA Distributors
          </p>
          <a
            href="#"
            className="portfolio-hero-btn"
          >
            Visit MENA Distributors
          </a>
        </div>
      </section>

      {/* Project Overview */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Project Overview</h2>
          <p className="portfolio-text">
            DH Solutions delivered cutting-edge business intelligence (BI) solutions to MENA Distributors, a leading UK-based
            company. By integrating Artificial Intelligence (AI) into Power BI, DH Solutions enhanced MENA Distributors&apos; ability to
            analyze complex datasets and make informed, data-driven decisions. The solution provided real-time analytics, offering
            actionable insights that empowered MENA Distributors to optimize operations and drive growth across multiple markets.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">The Challenge</h2>
          <p className="portfolio-text portfolio-text-white">
            MENA Distributors was facing challenges in deriving actionable insights from their vast data repositories. The existing
            BI tools were limited in terms of providing real-time analysis and AI-powered decision-making capabilities. The task was
            to integrate AI-driven analytics into Power BI, enabling the company to make faster and more accurate business decisions,
            all while handling complex data from multiple regions and operations.
          </p>
        </div>
      </section>

      {/* Your Role */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Our Role</h2>
          <p className="portfolio-text">
            DH Solutions was responsible for designing and implementing a robust, AI-powered business intelligence solution within
            Power BI. Our team integrated machine learning models for predictive analytics, real-time data visualization, and
            intuitive dashboards. We also provided training and support to the MENA Distributors team to ensure they could maximize
            the capabilities of the new system and utilize data for better decision-making.
          </p>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Process &amp; Approach</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔍 Data Analysis &amp; Requirement Gathering</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚙️ Power BI Integration &amp; AI Model Design</li>
            <li className="portfolio-list-item portfolio-list-item-white">📊 Real-Time Dashboard Development</li>
            <li className="portfolio-list-item portfolio-list-item-white">💡 AI-Driven Predictive Analytics Integration</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚀 Post-Deployment Support &amp; Training</li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Tech Stack</h2>
          <div className="portfolio-tech-stack">
            <div className="portfolio-tech-item">
              <Database size={40} color="#3533cd" /> Power BI
            </div>
            <div className="portfolio-tech-item">
              <Cpu size={40} color="#3533cd" /> AI &amp; Machine Learning
            </div>
            <div className="portfolio-tech-item">
              <Cloud size={40} color="#3533cd" /> Azure Cloud
            </div>
            <div className="portfolio-tech-item">
              <TrendingUp size={40} color="#3533cd" /> Predictive Analytics
            </div>
            <div className="portfolio-tech-item">
              <BarChart size={40} color="#3533cd" /> Data Visualization
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Results &amp; Impact</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">📈 Improved decision-making with AI-driven insights</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚡ Real-time data processing and analytics</li>
            <li className="portfolio-list-item portfolio-list-item-white">💡 Enhanced operational efficiency and cost reduction</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚀 Increased market competitiveness and growth</li>
            <li className="portfolio-list-item portfolio-list-item-white">🔍 Accurate, actionable reporting for cross-functional teams</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
