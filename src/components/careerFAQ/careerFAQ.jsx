"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "ما هي الوظائف المتاحة حالياً؟",
    answer:
      "يمكنك عرض جميع الوظائف الشاغرة على صفحة الوظائف لدينا. نقوم بتحديث القوائم بانتظام حسب احتياجات التوظيف.",
  },
  {
    question: "هل تقدمون وظائف عن بُعد؟",
    answer:
      "نعم، العديد من الوظائف لدينا عن بُعد بالكامل أو توفر مرونة هجينة حسب القسم.",
  },
  {
    question: "كيف تبدو عملية المقابلة لديكم؟",
    answer:
      "تتضمن العملية عادة مراجعة الطلب، مقابلة أو أكثر، ومحادثة عن ملاءمة الثقافة.",
  },
  {
    question: "كيف أستعد للمقابلة؟",
    answer:
      "كن نفسك، تعرف على قيمنا، وكن مستعدًا لإظهار شغفك ومهاراتك بتفكير عملي.",
  },
];

const CareerFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="career__faq" dir="rtl" style={{ textAlign: "right" }}>
      <div className="container">
        <h2 className="career__faq-title">الأسئلة المتكررة</h2>
        <div className="career__faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                {faq.question}
                <span className="faq__icon">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="faq__answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerFAQ;
