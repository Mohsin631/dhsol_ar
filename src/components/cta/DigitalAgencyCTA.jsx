'use client';

import ContactForm from "@/components/contact/ContactForm";
import { useEffect, useState } from "react";
import { Sparkles, Terminal } from "lucide-react";
import ScheduleMeetingDark from "@/components/meeting/ScheduleMeetingDark";

export default function CallToAction() {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "242541729",
          formId: "2b8369ed-d041-4329-a94d-13a0b946b5ba",
          region: "na2",
          target: "#hubspot-form",
        });
        setHubspotLoaded(true);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="cta-wrapper" dir="rtl" style={{ textAlign: "right" }}>
      <div className="cta-container" style={{ direction: "rtl" }}>
        {/* Left Side Content */}
        <div className="cta-text">
          <div className="cta-badge" style={{ justifyContent: "flex-end" }}>
            <Terminal size={16} />
            <span>فريق برمجيات خبير</span>
          </div>
          <h1>
            لنصنع شيئاً <span className="highlight">استثنائياً</span>
          </h1>
          <p style={{ color: "#fff" }}>
            في DH Solutions، نقدم تطبيقات عالية الأداء، بنى خلفية قوية، ومنتجات رقمية قابلة للتوسع. دعنا نحول فكرتك إلى واقع.
          </p>

          <ul className="cta-features" style={{ paddingRight: 0 }}>
            <li><Sparkles size={18} /> تطوير مخصص للويب والجوال</li>
            <li><Sparkles size={18} /> تكاملات الذكاء الاصطناعي وتعلم الآلة</li>
            <li><Sparkles size={18} /> هندسة واجهات برمجة التطبيقات وحلول السحابة</li>
          </ul>

          <div className="cta-stats">
            <div>
              <h3>1000+</h3>
              <p style={{ color: "#fff" }}>مشاريع تم تنفيذها</p>
            </div>
            <div>
              <h3>40+</h3>
              <p style={{ color: "#fff" }}>الصناعات المخدومة</p>
            </div>
            <div>
              <h3>95%</h3>
              <p style={{ color: "#fff" }}>نسبة الاحتفاظ بالعملاء</p>
            </div>
          </div>
        </div>

        {/* Right Side HubSpot Form */}
        <div className="cta-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
