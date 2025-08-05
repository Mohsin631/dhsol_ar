import Head from "next/head";
import {
  Car,
  Users,
  Smartphone,
  Cpu,
  BarChart,
} from "lucide-react";

export default function PortfolioDetails7() {
  return (
    <div className="portfolio-details-page">
      <Head>
        <title>DH Solutions – AI and Development Solutions for Smile Taxi | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">AI and Development Solutions for Smile Taxi</h1>
          <p className="portfolio-tagline">
            Enhancing Operational Efficiency and Customer Experience in Ride-Hailing Services
          </p>
          <a
            href="#"
            className="portfolio-hero-btn"
          >
            Explore Smile Taxi
          </a>
        </div>
      </section>

      {/* Project Overview */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Project Overview</h2>
          <p className="portfolio-text">
            DH Solutions provided AI-driven solutions and development support to Smile Taxi, a leading ride-hailing service provider.
            This collaboration focuses on enhancing operational efficiency and improving customer experience through advanced technology
            integrations. The new features streamline ride-hailing processes, optimize routes, and offer real-time tracking, creating a
            smoother and more reliable service for both passengers and drivers.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">The Challenge</h2>
          <p className="portfolio-text portfolio-text-white">
            Smile Taxi faced challenges in optimizing their ride-hailing operations, including improving route planning, enhancing
            customer experience, and reducing wait times for passengers. Additionally, their system lacked real-time data analytics and
            predictive features that could optimize the matching of riders and drivers and anticipate demand.
          </p>
        </div>
      </section>

      {/* Your Role */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Our Role</h2>
          <p className="portfolio-text">
            DH Solutions played a critical role in integrating AI-powered systems that optimize route planning, demand forecasting,
            and ride matching. We also worked on improving Smile Taxi’s mobile platform by providing better UX and real-time ride tracking.
            Additionally, we incorporated data analytics to assist in performance monitoring and predictive maintenance of the vehicle fleet.
          </p>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Process & Approach</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔍 Data Collection & Analysis for Route Optimization</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚙️ AI Model Integration for Predictive Matching</li>
            <li className="portfolio-list-item portfolio-list-item-white">📱 Mobile App UI/UX Redesign for Enhanced User Experience</li>
            <li className="portfolio-list-item portfolio-list-item-white">📊 Real-Time Data Monitoring & Performance Analytics</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚗 Fleet Performance Tracking & Predictive Maintenance</li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Tech Stack</h2>
          <div className="portfolio-tech-stack">
            <div className="portfolio-tech-item">
              <Car size={40} color="#3533cd" /> Ride-Hailing Optimization
            </div>
            <div className="portfolio-tech-item">
              <Users size={40} color="#3533cd" /> User Matching Algorithm
            </div>
            <div className="portfolio-tech-item">
              <Smartphone size={40} color="#3533cd" /> Mobile App Development
            </div>
            <div className="portfolio-tech-item">
              <Cpu size={40} color="#3533cd" /> AI-Powered Routing
            </div>
            <div className="portfolio-tech-item">
              <BarChart size={40} color="#3533cd" /> Data Analytics & Insights
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Results & Impact</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🚗 20% reduction in wait times for passengers</li>
            <li className="portfolio-list-item portfolio-list-item-white">📈 30% increase in ride efficiency and optimized routes</li>
            <li className="portfolio-list-item portfolio-list-item-white">📱 Improved customer experience through real-time tracking</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚡ Enhanced driver-passenger matching, improving service delivery</li>
            <li className="portfolio-list-item portfolio-list-item-white">🔧 Predictive maintenance resulting in 15% reduction in downtime</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
