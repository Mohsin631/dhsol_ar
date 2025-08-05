"use client";
import Image from "next/image";

const clientLogos = [
  { name: "Stripe", src: "/assets/logos/stripe.svg" },
  { name: "Shopify", src: "/assets/logos/shopify.svg" },
  { name: "AWS", src: "/assets/logos/aws.svg" },
  { name: "Google Cloud", src: "/assets/logos/googlecloud.svg" },
];

const testimonials = [
  {
    text: "كان العمل مع DH سلسًا — لقد أنجزوا المشروع قبل الموعد المتوقع وتجاوزوا التوقعات.",
    author: "سارة ل.، الرئيسة التقنية في FinTech Pro",
  },
  {
    text: "تميزوا في الجانب الفني والتواصل طوال فترة المشروع.",
    author: "جيمس ر.، رئيس المنتج في SaaSFlow",
  },
];

const TrustSection = () => {
  return (
    <section className="trust__section" dir="rtl">
      <div className="container">
        <h2 className="trust__title">🤝 موثوق بهم من قبل قادة الصناعة</h2>

        <div className="trust__logos">
          {clientLogos.map((logo, index) => (
            <div key={index} className="logo__item">
              <Image src={logo.src} alt={logo.name} width={120} height={60} />
            </div>
          ))}
        </div>

        <div className="trust__testimonials">
          {testimonials.map((item, index) => (
            <div className="testimonial__card" key={index}>
              <p className="quote">“{item.text}”</p>
              <p className="author">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
