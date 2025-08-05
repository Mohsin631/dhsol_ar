"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";
import { useTranslations } from "use-intl";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  const t = useTranslations();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // DISABLED: Animation logic that wraps characters in spans
      // setTimeout(() => {
      //   let rootParent = headerTitle.current?.children;
      //   if (!rootParent) return;
      //   for (let i = 0; i < rootParent.length; i++) {
      //     let firstParent = rootParent[i].children;
      //     for (let j = 0; j < firstParent.length; j++) {
      //       if (firstParent[j].className?.includes("header_title")) {
      //         let arr = firstParent[j].children[0].textContent.split("");
      //         let spanData = "";
      //         for (let k = 0; k < arr.length; k++) {
      //           spanData += `<span>${arr[k] === " " ? "&nbsp;" : arr[k]}</span>`;
      //         }
      //         let result = '<div class="menu-text">' + spanData + "</div>";
      //         firstParent[j].children[0].innerHTML = result;
      //       }
      //     }
      //   }
      // }, 10);
    }
  }, []);

  const openData = (data) => setAccordion(data);
  const openSubData = (data) => setSubAccordion(data);

  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };

  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href="/">
                <Image
                  src={logoWhite2}
                  alt="Offcanvas Logo"
                  width={60}
                  height={200}
                  priority
                />
              </Link>
            </div>
            <div className="offcanvas__social" style={{ paddingTop: "135px" }}>
              <h3 className="social-title">{t("canvasFollowUs")}</h3>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/dhsolutions.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/dhsolutions.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://pk.linkedin.com/company/dhsolutionspakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="offcanvas__menu-wrapper"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div className="mobile-logo" style={{ marginBottom: "2rem" }}>
              <Link href="/">
                <Image
                  src="/assets/imgs/logo/footer-logo-white.png"
                  alt="Logo"
                  width={150}
                  height={50}
                />
              </Link>
            </div>

            <nav
              className="offcanvas__menu"
              style={{ width: "100%", textAlign: "center" }}
            >
              <ul className="menu-anim title" ref={headerTitle}>
                <li>
                  {[
                    ["", t("navHome")],
                    ["about", t("navAbout")],
                    ["service-v5", t("navServices")],
                    ["hire", t("navHire")],
                    ["portfolio", t("navPortfolio")],
                    ["team", t("navTeam")],
                    ["career", t("navCareers")],
                    ["blog", t("navBlog")],
                    ["contact", t("navContact")],
                  ].map(([path, label]) => (
                    <div
                      key={path}
                      className="header_title"
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      <Link href={`/${path}`}>{label}</Link>
                    </div>
                  ))}
                </li>
              </ul>
            </nav>
          </div>

          <div className="offcanvas__right">
            <div
              className="offcanvas__contact"
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3>{t("canvasGetInTouch")}</h3>
              <ul>
                <li>
    
                  <a href="tel:8886105270" dir="rtl">
  5270 610 888 (1+) (مجاني)
</a>

                </li>
                <li>
                  <a href="mailto:sales@dhsol.net">sales@dhsol.net</a>
                </li>
                <li>{t("canvasAddress")}</li>
              </ul>
            </div>
            <Image
              src={Shape11}
              alt="shape"
              className="shape-1"
              width={100}
              height={100}
              priority
            />
            <Image
              src={Shape12}
              alt="shape"
              className="shape-2"
              width={100}
              height={100}
              priority
            />
          </div>

          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .offcanvas__menu-wrapper a:hover {
          background-color: green;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Canvas;
