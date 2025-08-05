"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "ما هي الوظائف المتاحة في DH Solutions؟",
    answer:
      "نقدم وظائف في مجالات التطوير، التصميم، الاستراتيجية، التسويق، والدعم. تحقق من صفحة الوظائف لدينا لمعرفة الوظائف المتاحة حالياً.",
  },
  {
    question: "هل توفرون خيارات عمل عن بعد؟",
    answer:
      "نعم! العديد من الوظائف لدينا متاحة بالكامل عن بعد أو بنظام هجين حسب الفريق والقسم.",
  },
  {
    question: "كيف تتم عملية التوظيف؟",
    answer:
      "تمر عبر طلب مبدئي، مقابلة تمهيدية، جولة فنية وثقافية، ثم مناقشة العرض النهائي.",
  },
  {
    question: "كيف أتميز كمرشح؟",
    answer:
      "كن صادقاً، أظهر شغفك، وشارك أمثلة عن كيفية حلك للمشاكل أو تحقيق نتائج في الواقع.",
  },
];

const WhiteFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq__section white" dir="rtl">
      <div className="container">
        <h2 className="faq__heading">❓ الأسئلة المتكررة</h2>
        <div className="faq__items">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__card ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
              <div className="faq__answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteFAQ;
