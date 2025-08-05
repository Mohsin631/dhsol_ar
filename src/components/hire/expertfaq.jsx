"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "كيف أقدم متطلبات مشروعي؟",
    answer:
      "ببساطة قم بملء نموذج 'طلب عرض سعر' أعلاه بتفاصيل مشروعك. سنطابقك مع الخبير المناسب خلال 24 ساعة.",
  },
  {
    question: "هل يمكنني تغيير الخبير إذا لم أكن راضيًا؟",
    answer:
      "نعم! نحن نقدم ضمان رضا. إذا لم تكن سعيدًا، سنساعدك في العثور على مطابقة أفضل بدون تكلفة إضافية.",
  },
  {
    question: "ما هي طرق الدفع التي تقبلونها؟",
    answer:
      "نقبل جميع بطاقات الائتمان الرئيسية، PayPal، والتحويلات المصرفية. سيتم فوترة خدماتك بالساعة أو حسب مراحل المشروع، بناءً على خطتك.",
  },
  {
    question: "هل معلومات مشروعي سرية؟",
    answer:
      "بالتأكيد. كل تعامل محمي باتفاقية عدم إفشاء صارمة واتفاقية سرية.",
  },
  {
    question: "كيف يعمل الدعم؟",
    answer:
      "فريق الدعم متاح على مدار 24 ساعة طوال أيام الأسبوع عبر الدردشة المباشرة أو البريد الإلكتروني لمساعدتك في أي مرحلة من مشروعك.",
  },
];

const ExpertFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="expert-faq" dir="rtl" style={{ textAlign: "right" }}>
      <div className="container">
        <h2 className="faq-heading">❓ الأسئلة المتكررة</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="question" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </div>
              {openIndex === i && (
                <div className="answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertFAQ;
