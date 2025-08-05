"use client";

import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { useTranslations } from "next-intl";

const DigitalAgencyRoll = () => {
  const t = useTranslations();

  const rollItems = [
    t("digitalAgencyRoll1"),
    t("digitalAgencyRoll2"),
    t("digitalAgencyRoll3"),
    t("digitalAgencyRoll4"),
    t("digitalAgencyRoll5"),
    t("digitalAgencyRoll6"),
    t("digitalAgencyRoll7"),
    t("digitalAgencyRoll8"),
    t("digitalAgencyRoll9"),
    t("digitalAgencyRoll10"),
    t("digitalAgencyRoll11"),
    t("digitalAgencyRoll12"),
    t("digitalAgencyRoll13"),
    t("digitalAgencyRoll14"),
    t("digitalAgencyRoll15"),
    t("digitalAgencyRoll16"),
    t("digitalAgencyRoll17"),
    t("digitalAgencyRoll18"),
    t("digitalAgencyRoll19"),
  ];

  return (
    <>
      <style>{`
        .roll__area {
          background-color: #3533cd;
          padding: 20px 0;
          overflow: hidden;
        }
        .roll__slider {
          max-width: 100vw;
          /* prevents horizontal scroll */
          overflow: hidden;
        }
        .roll__slide h2 {
          color: white;
          font-weight: 700;
          font-size: 1.4rem;
          white-space: nowrap;
          user-select: none;
          /* Smooth fade on edges */
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          padding: 10px;
        }
        /* Optional: add some letter spacing for style */
        .roll__slide h2 {
          letter-spacing: 1.2px;
        }
      `}</style>

      <section className="roll__area" aria-label="Digital Agency Rolling Text">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            freeMode={true}
            loop={true}
            centeredSlides={false}
            allowTouchMove={false}
            speed={2000} // slower speed for smooth marquee effect
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1300: {
                slidesPerView: 6,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
          >
            {rollItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="roll__slide">
                  <h2>{item}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyRoll;
