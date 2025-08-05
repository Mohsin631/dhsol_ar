import { useEffect } from 'react';
import Image from 'next/image';

export default function MeetingForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "242541729",
          formId: "04e3cd9c-220a-4b81-9b15-514d9551b3ce",
          region: "na2",
          target: "#hubspotForm"
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="col-xxl-16">
      <div className="custom-hero__form">
        <div id="hubspotForm"></div>
      </div>
    </div>
  );
}
