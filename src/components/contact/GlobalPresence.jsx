"use client";
import React from "react";
import { motion } from "framer-motion";

const officeLocations = [
  {
    flag: "🇺🇸",
    country: "الولايات المتحدة الأمريكية",
    city: "نيويورك",
    phone: "+1-888-610-5270",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇺🇸",
    country: "الولايات المتحدة الأمريكية",
    city: "سان فرانسيسكو",
    phone: "+1-888-610-5270",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇨🇦",
    country: "كندا",
    city: "أوتاوا",
    phone: "+1-888-610-5270",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇵🇰",
    country: "باكستان",
    city: "إسلام آباد",
    phone: "+92-330-7474-614",
    email: "sales@dhsol.net",
    isGlobalDeliveryOffice: true,
  },
  {
    flag: "🇰🇼",
    country: "الكويت",
    city: "مدينة الكويت",
    phone: "+965-6613-2885",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇦🇪",
    country: "الإمارات العربية المتحدة",
    city: "دبي",
    phone: "+965-6613-2885",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇦🇪",
    country: "الإمارات العربية المتحدة",
    city: "أبو ظبي",
    phone: "+965-6613-2885",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇸🇦",
    country: "المملكة العربية السعودية",
    city: "الرياض",
    phone: "+965-6613-2885",
    email: "sales@dhsol.net",
  },
];

const GlobalPresence = () => {
  return (
    <section className="global__presence" dir="rtl">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="global__title"
        >
          حضورنا العالمي
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="global__subtitle"
        >
          تتوسع DH Solutions عالميًا — تقدم الابتكار عبر الحدود.
        </motion.p>

        <div className="office__grid">
          {officeLocations.map((office, index) => (
            <motion.div
              key={index}
              className={`office__card ${office.isGlobalDeliveryOffice ? "highlight" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flag">{office.flag}</div>
              <h3>{office.country}</h3>
              <p>
                <strong>المدينة:</strong> {office.city}
              </p>
              <p>
                <strong>الهاتف:</strong>{" "}
                <span dir="ltr">{office.phone}</span>
              </p>
              <p>
                <strong>البريد الإلكتروني:</strong>{" "}
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </p>
              {office.isGlobalDeliveryOffice && (
                <span className="badge">مكتب التوصيل العالمي</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
