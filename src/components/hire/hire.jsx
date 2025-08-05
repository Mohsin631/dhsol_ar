import React from 'react';
import Link from 'next/link';
import {
  FaWordpress, FaShopify, FaPhp, FaReact, FaPython, FaNodeJs, FaJava,
  FaLaravel, FaMagento, FaAngular, FaVuejs, FaHtml5, FaCss3, FaJs,
  FaAndroid, FaApple, FaCloud, FaAws, FaGoogle, FaDocker, FaFigma,
  FaDatabase, FaSlack, FaGithub, FaGitAlt, FaJenkins, FaCogs
} from 'react-icons/fa';

const slugify = (str) =>
  '/hire/' +
  str
    .toLowerCase()
    .replace(/hire an? /, '')
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/[^a-z0-9\-]/g, '');

const skills = [
  { name: 'Hire a PHP Engineer', arabic: 'توظيف مهندس PHP', icon: <FaPhp /> },
  { name: 'Hire a Shopify Expert', arabic: 'توظيف خبير Shopify', icon: <FaShopify /> },
  { name: 'Hire a WordPress Developer', arabic: 'توظيف مطور WordPress', icon: <FaWordpress /> },
  { name: 'Hire a React Developer', arabic: 'توظيف مطور React', icon: <FaReact /> },
  { name: 'Hire a Python Developer', arabic: 'توظيف مطور Python', icon: <FaPython /> },
  { name: 'Hire a Node.js Developer', arabic: 'توظيف مطور Node.js', icon: <FaNodeJs /> },
  { name: 'Hire a Java Developer', arabic: 'توظيف مطور Java', icon: <FaJava /> },
  { name: 'Hire a Laravel Developer', arabic: 'توظيف مطور Laravel', icon: <FaLaravel /> },
  { name: 'Hire a Magento Expert', arabic: 'توظيف خبير Magento', icon: <FaMagento /> },
  { name: 'Hire an Angular Developer', arabic: 'توظيف مطور Angular', icon: <FaAngular /> },
  { name: 'Hire a Vue.js Developer', arabic: 'توظيف مطور Vue.js', icon: <FaVuejs /> },
  { name: 'Hire an HTML/CSS Expert', arabic: 'توظيف خبير HTML/CSS', icon: <><FaHtml5 /> <FaCss3 /></> },
  { name: 'Hire a JavaScript Developer', arabic: 'توظيف مطور JavaScript', icon: <FaJs /> },
  { name: 'Hire an Android Developer', arabic: 'توظيف مطور Android', icon: <FaAndroid /> },
  { name: 'Hire an iOS Developer', arabic: 'توظيف مطور iOS', icon: <FaApple /> },
  { name: 'Hire a Cloud Engineer', arabic: 'توظيف مهندس سحابي', icon: <FaCloud /> },
  { name: 'Hire an AWS Expert', arabic: 'توظيف خبير AWS', icon: <FaAws /> },
  { name: 'Hire a Google Cloud Engineer', arabic: 'توظيف مهندس Google Cloud', icon: <FaGoogle /> },
  { name: 'Hire a Docker Expert', arabic: 'توظيف خبير Docker', icon: <FaDocker /> },
  { name: 'Hire a UI/UX Designer', arabic: 'توظيف مصمم UI/UX', icon: <FaFigma /> },
  { name: 'Hire a Database Admin', arabic: 'توظيف مدير قاعدة بيانات', icon: <FaDatabase /> },
  { name: 'Hire a Slack Integrator', arabic: 'توظيف مدمج Slack', icon: <FaSlack /> },
  { name: 'Hire a GitHub Expert', arabic: 'توظيف خبير GitHub', icon: <FaGithub /> },
  { name: 'Hire a Git Specialist', arabic: 'توظيف أخصائي Git', icon: <FaGitAlt /> },
  { name: 'Hire a Jenkins DevOps Engineer', arabic: 'توظيف مهندس Jenkins DevOps', icon: <FaJenkins /> },
  { name: 'Hire a DevOps Engineer', arabic: 'توظيف مهندس DevOps', icon: <FaCogs /> },
  { name: 'Hire a QA Engineer', arabic: 'توظيف مهندس جودة QA', icon: <FaCogs /> },
  { name: 'Hire a Frontend Developer', arabic: 'توظيف مطور الواجهة الأمامية', icon: <FaReact /> },
  { name: 'Hire a Backend Developer', arabic: 'توظيف مطور الواجهة الخلفية', icon: <FaNodeJs /> },
  { name: 'Hire a Fullstack Developer', arabic: 'توظيف مطور Fullstack', icon: <FaJs /> },
];

const HireAnExpert = () => {
  return (
    <section className="hire-expert-section">
      <div className="container">
        <h2 className="section-heading">توظيف خبير</h2>
        <p className="section-subheading">اختر المحترف المناسب لفكرتك الكبيرة القادمة</p>
        <div className="expert-grid">
          {skills.map((skill, index) => (
            <Link key={index} href={slugify(skill.name)} className="expert-card">
              <div className="expert-icon">{skill.icon}</div>
              <h3 className="expert-title">{skill.arabic}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireAnExpert;
