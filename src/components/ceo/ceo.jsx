"use client";

import Image from "next/image";

export default function CEOMessage() {
  return (
    <section className="ceo-section">
      <div className="ceo-overlay"></div>
      <div className="ceo-container">
        <h2 className="ceo-heading">Message from our CEO</h2>
        <div className="ceo-content">
          <div className="ceo-image-wrapper">
            <Image
              src="/images/ceo.jpg"
              alt="CEO of DH Solutions"
              className="ceo-image"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="ceo-message">
            <p className="ceo-quote">
              “At DH Solutions, our mission goes beyond code. We’re building intelligent,
              impactful software that shapes industries and empowers ideas. Your vision is
              our blueprint.”
            </p>
            <p className="ceo-signature">— CEO, DH Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
