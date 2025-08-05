import { useTranslations } from "next-intl";
import { FaLightbulb, FaHandshake, FaUsers, FaShieldAlt } from 'react-icons/fa'; // Icons for Core Values

const CareerGallery = () => {
  const t = useTranslations();

  return (
    <section className="career-gallery-horizontal">
      <div className="container">
        <div className="career-gallery-inner">
          {/* Values Column */}
          <div className="career-gallery-values">
            <h2 className="section-title">{t("قيمنا")}</h2>
            <div className="values-container">
              <div className="value-item">
                <FaLightbulb className="value-icon" />
                <h4>{t("innovation")}</h4>
             
              </div>
              <div className="value-item">
                <FaHandshake className="value-icon" />
                <h4>{t("Transparency")}</h4>
          
              </div>
              <div className="value-item">
                <FaUsers className="value-icon" />
                <h4>{t("teamWork")}</h4>
           
              </div>
              <div className="value-item">
                <FaShieldAlt className="value-icon" />
                <h4>{t("Integrity")}</h4>
         
              </div>
            </div>
          </div>

          {/* Vision and Mission Column */}
          <div className="career-gallery-vision-mission">
  <h2 className="section-title">الرؤية والرسالة</h2>
  <div className="vision-mission-container">
    <div className="vision-item">
      <h4>الرؤية</h4>
      <p>أن نكون الرائدين عالميًا في حلول البرمجيات المبتكرة، وتمكين الأعمال من خلال أحدث التقنيات.</p>
    </div>
    <div className="mission-item">
      <h4>الرسالة</h4>
      <p>تقديم حلول رقمية عالية الجودة ومخصصة تدفع النمو والنجاح لعملائنا حول العالم.</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default CareerGallery;
