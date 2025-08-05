"use client";
import React, { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useTranslations } from "use-intl";
import ContactUsForm from "@/components/meeting/ContactUsForm";

const Contact1 = () => {
  const charAnim = useRef(null);
  const wordAnim = useRef(null);
  const t = useTranslations(); // or from 'next-intl'

  // Trigger animations on component mount
  useEffect(() => {
    if (charAnim.current) animationCharCome(charAnim.current);
    if (wordAnim.current) animationWordCome(wordAnim.current);

    // Load HubSpot form
    const script = document.createElement("script");
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "242541729",
          formId: "8f83f931-d071-4517-b099-a893e400f509",
          region: "na2",
          target: "#hubspotForm"
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="contact__area-6">
      <div className="container g-0 line pt-120 pb-110">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="sec-title-wrapper">
              <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                {t("contactTitle")}
              </h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="contact__text">
              <p>{t("contactDesc")}</p>
            </div>
          </div>
        </div>
        <div className="row contact__btm">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="contact__info">
              <h3 className="sub-title-anim-top animation__word_come" ref={wordAnim}>
                {t("contactDontBeAfraid")}
              </h3>
              <ul>
                <li>
                  <a href="https://wa.me/19255589107">(+1) 925 558 9107</a>
                </li>
                <li>
                  <a href="mailto:sales@dhsol.net">sales@dhsol.net</a>
                </li>
                <li>
                  <span>
                    1309 Coffeen Ave. Sheridan, Wyoming , <br /> (USA) 82801
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 d-flex justify-content-center align-items-center">
           <ContactUsForm/>
          </div>
        </div>
      </div>
    </section>
    
  );
};
export default Contact1;