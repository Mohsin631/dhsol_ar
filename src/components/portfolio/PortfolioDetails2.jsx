import Head from "next/head";
import {
  Code,
  Server,
  Database,
  Cloud,
} from "lucide-react";

export default function PortfolioDetails1() {
  return (
    <div className="portfolio-details-page">
      <Head>
        <title>Kobi Education – Payroll System Development | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">Kobi Education Payroll System</h1>
          <p className="portfolio-tagline">
            Streamlining Payroll Management for One of the Largest Educational Networks
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Project Overview</h2>
          <p className="portfolio-text">
            Kobi Education, one of the largest educational networks, relies on DH Solutions for the
            development and maintenance of its payroll system. This system is designed to streamline payroll management,
            ensuring efficiency and accuracy across its extensive operations. We developed a custom payroll management
            system using the MERN stack (MongoDB, Express.js, React, Node.js). The system handles various payroll functions
            with ease, including salary calculation, bonus management, and more.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">The Challenge</h2>
          <p className="portfolio-text portfolio-text-white">
            Kobi Education required a scalable, secure, and efficient payroll system that could manage payroll processing for
            thousands of employees across multiple campuses and regions. The solution had to integrate seamlessly with their
            existing HR systems and be highly customizable to meet varying payroll structures.
          </p>
        </div>
      </section>

      {/* Our Role */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Our Role</h2>
          <p className="portfolio-text">
            DH Solution handled the full-stack development of the payroll system, including both front-end and back-end
            development. We worked closely with Kobi Education&apos;s HR team to ensure the system met all their requirements,
            including compliance with local tax laws and handling various compensation structures. Our team also managed the
            deployment and ongoing maintenance of the system.
          </p>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Process &amp; Approach</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">🔍 Requirement Gathering &amp; Analysis</li>
            <li className="portfolio-list-item portfolio-list-item-white">🎨 UI/UX Design for HR Admin Portal</li>
            <li className="portfolio-list-item portfolio-list-item-white">⚙️ Back-End Development with Node.js</li>
            <li className="portfolio-list-item portfolio-list-item-white">🧪 QA &amp; Testing for Compliance and Accuracy</li>
            <li className="portfolio-list-item portfolio-list-item-white">🚀 Deployment &amp; Maintenance on AWS</li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="portfolio-section portfolio-section-white">
        <div className="container">
          <h2 className="portfolio-heading">Development Stack</h2>
          <div className="portfolio-tech-stack">
            <div className="portfolio-tech-item">
              <Code size={40} color="#3533cd" /> React
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
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="portfolio-section portfolio-section-black">
        <div className="container">
          <h2 className="portfolio-heading portfolio-heading-white">Results &amp; Impact</h2>
          <ul className="portfolio-list">
            <li className="portfolio-list-item portfolio-list-item-white">💸 Reduced payroll processing time by 50%</li>
            <li className="portfolio-list-item portfolio-list-item-white">📈 Improved efficiency for HR teams</li>
            <li className="portfolio-list-item portfolio-list-item-white">🔐 Fully secure with end-to-end encryption</li>
            <li className="portfolio-list-item portfolio-list-item-white">🌍 Deployed on AWS for high availability and scalability</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
