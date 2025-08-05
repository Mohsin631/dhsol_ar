"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/imgs/logo/footer-logo-white.png";

const Preloader = () => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.classList.add("hide");
      }
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="preloader__container" ref={preloaderRef}>
      <div className="preloader__inner">
      </div>
    </div>
  );
};

export default Preloader;
