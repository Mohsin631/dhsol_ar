"use client";
import Link from "next/link";
import { useTranslations } from "use-intl";

const Career1 = () => {
  const t = useTranslations();

  return (
    <section className="career-section" id="job_list">
      <div className="container">
        <div className="career-header">
          <h2 className="career-title">{t("careerHeading")}</h2>
          <p className="career-subtitle">
            {t("careerNoJobsHeading")} {t("careerNoJobsLine2")}
          </p>
        </div>

        <div className="cta-box">
          <div className="cta-text">
            <h3>نحن نوظف دائماً!</h3>
            <p>
              استكشف فرص العمل المثيرة وانضم إلى فريق مبتكر وديناميكي في DH Solution.
            </p>
          </div>
          <Link
            href="https://careers.dhsol.net"
            target="_blank"
            className="cta-button"
          >
            عرض الوظائف المتاحة
          </Link>
        </div>

        <div className="contact-hr">
          <p style={{ color: "white" }}>
            لم تجد الدور المناسب؟ أرسل سيرتك الذاتية إلى{" "}
            <a href="mailto:hr@dhsol.net" style={{ color: "white" }}>
              hr@dhsol.net
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career1;
