"use client";
import React from "react";
import { FaBullhorn, FaSearch, FaHandshake, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaBullhorn />,
    title: "انشر متطلباتك",
    desc: "أخبرنا بما تحتاج إليه بالضبط — المهارات، الميزانية، والمدة الزمنية.",
  },
  {
    icon: <FaSearch />,
    title: "استعرض ملفات الخبراء",
    desc: "تصفح الملفات التفصيلية، التقييمات، وأمثلة من الأعمال السابقة.",
  },
  {
    icon: <FaHandshake />,
    title: "قم بالتوظيف وابدأ التعاون",
    desc: "تواصل، تحدث، وابدأ مشروعك مع الخبير الذي اخترته.",
  },
  {
    icon: <FaRocket />,
    title: "أطلق مشروعك",
    desc: "أطلق مشروعك بثقة بمساعدة خبير محترف وموثوق.",
  },
];

const HowItWorks = () => (
  <section className="how-it-works" dir="rtl">
    <div className="container">
      <h2 className="hiw__heading">كيف تعمل المنصة</h2>
      <div className="hiw__steps">
        {steps.map((step, i) => (
          <div key={i} className="hiw__step">
            <div className="hiw__icon">{step.icon}</div>
            <h3 className="hiw__title">{step.title}</h3>
            <p className="hiw__desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
