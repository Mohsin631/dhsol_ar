"use client";

import Image from "next/image";
import Logo from "@/../public/assets/imgs/logo/footer-logo-white.png";
import { useEffect } from "react";

const ScheduleMeetingDark = () => {
  useEffect(() => {
    // Dynamically load Tally embed script if needed (you can also directly use iframe)
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="schedule-meeting-form dark">
      <div className="logo-wrapper">
        <Image src={Logo} alt="DH Solutions Logo" width={100} height={100} />
      </div>

      <h2>Schedule a Meeting</h2>

      {/* Embed Tally form as an iframe */}
      <div style={{ minHeight: "600px" }}>
        <iframe
          src="https://tally.so/embed/mR2Oo9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="600px"
          frameBorder="0"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            border: "none",
            background: "transparent",
          }}
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default ScheduleMeetingDark;
