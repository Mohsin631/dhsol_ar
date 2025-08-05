"use client";
import React from "react";

const HiringProcess = () => {
  const steps = [
    {
      title: "التقديم عبر الإنترنت",
      description: "أرسل لنا سيرتك الذاتية وأخبرنا عن شغفك."
    },
    {
      title: "الفرز الأولي",
      description: "فريق الموارد البشرية سيراجع سيرتك ويحدد موعدًا لاتصال تعريفي."
    },
    {
      title: "المقابلة التقنية",
      description: "أظهر مهاراتك من خلال تحديات واقعية."
    },
    {
      title: "الملاءمة الثقافية",
      description: "التقِ بالفريق وتعرف إذا كانت قيمنا متوافقة."
    },
    {
      title: "العرض والاندماج",
      description: "احصل على عرض العمل وابدأ رحلتك معنا!"
    }
  ];

  return (
    <section className="hiring__process" dir="rtl" style={{ textAlign: "right" }}>
      <div className="container">
        <h2 className="hiring__title">عملية التوظيف لدينا</h2>
        <div className="hiring__timeline">
          {steps.map((step, index) => (
            <div className="hiring__step" key={index}>
              <div className="hiring__circle">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="arrow" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
