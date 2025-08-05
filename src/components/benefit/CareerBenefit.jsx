"use client";
import { useTranslations } from "use-intl";

const CareerBenefit = () => {
  const t = useTranslations();

  return (
    <section className="career__benefits" dir="rtl" style={{ textAlign: "right" }}>
      <div className="container line g-0 pt-140 pb-150">
        <span className="line-3"></span>

        <div className="row" style={{ flexDirection: "row-reverse" }}>
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <ul
              className="career__benefits-list"
              style={{ paddingRight: "1rem", listStylePosition: "inside", direction: "rtl" }}
            >
              <li>{t("careerBenefitItem1")}</li>
              <li>{t("careerBenefitItem2")}</li>
              <li>{t("careerBenefitItem3")}</li>
              <li>{t("careerBenefitItem4")}</li>
              <li>{t("careerBenefitItem5")}</li>
              <li>{t("careerBenefitItem6")}</li>
            </ul>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="sec-title-wrapper">
              <h2 className="sec-title title-anim">{t("careerBenefitHeading")}</h2>
              <p>{t("careerBenefitPara")}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sec-title {
          text-align: right;
        }
        /* Ensure list items inherit rtl */
        .career__benefits-list li {
          direction: rtl;
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
          color: #333;
        }
      `}</style>
    </section>
  );
};

export default CareerBenefit;
