"use client";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import {
  SiShopify,
  SiIntel,
  SiAmazon,
} from "react-icons/si";
import {
  FaLock,
  FaHeadset,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";

const certified = [
  { Icon: SiShopify, label: "معتمد من شوبيفاي" },
  { Icon: SiIntel, label: "شريك إنتل" },
  { Icon: SiAmazon, label: "معتمد من أمازون AWS" },
];

const features = [
  { Icon: FaLock, label: "اتفاقية عدم الإفشاء والسرية" },
  { Icon: FaHeadset, label: "دعم فني 24/7" },
  { Icon: FaCheckCircle, label: "ضمان الرضا" },
  { Icon: FaUserTie, label: "مدير مخصص للمشروع" },
];

const StartingFrom = () => (
  <section className="starting-section" dir="rtl">
    <div className="container">
      <div className="starting-wrapper">
        <div className="starting-info">
          <h2 className="starting-heading">
            تبدأ من <span>$20</span> في الساعة
          </h2>
          <p className="starting-subheading">
            احصل على خبرات عالية المستوى عند الطلب — مرنة، بأسعار مناسبة، وجاهزة للنمو مع مشروعك.
          </p>

          <div className="certified-logos">
            {certified.map(({ Icon, label }, idx) =>
              Icon ? (
                <Icon
                  key={idx}
                  title={label}
                  className="certified-icon"
                />
              ) : (
                <div key={idx} className="certified-icon fallback" title={label} />
              )
            )}
          </div>

          <ul className="feature-list">
            {features.map(({ Icon, label }, idx) => (
              <li key={idx} className="feature-item">
                <Icon className="feature-icon" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default StartingFrom;
