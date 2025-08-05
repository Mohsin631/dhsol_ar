import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import Blog11 from "../../../public/assets/imgs/blog/1.jpg";
import Blog22 from "../../../public/assets/imgs/blog/2.jpg";
import Blog33 from "../../../public/assets/imgs/blog/3.jpg";
import Blog44 from "../../../public/assets/imgs/blog/4.jpg";
import Blog55 from "../../../public/assets/imgs/blog/5.jpg";
import Blog66 from "../../../public/assets/imgs/blog/6.jpg";
import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

const Blog1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="blog__area-6 blog__animation" dir="rtl" style={{textAlign: "right"}}>
        <div className="container g-0 line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="row pb-130">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  نحن دائماً <br />
                  نفكر
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                  نصنع علامات تجارية جديدة مشرقة، وأنظمة بصرية فريدة وتجارب رقمية تركز على مجموعة واسعة من التعاونات الأصلية.
                </p>
              </div>
            </div>
          </div>

          <div className="row reset-grid">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog11}
                        alt="صورة المقال"
                      />
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog11}
                        alt="صورة المقال"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/blog">تصميم واجهات المستخدم</Link> . 15 مارس 2019
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    أهمية الأمن السيبراني في المشهد الرقمي اليوم.
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  قراءة المزيد{" "}
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog22}
                        alt="صورة المقال"
                      />
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog22}
                        alt="صورة المقال"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">تصميم واجهات المستخدم</Link> . 02 مايو 2019
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    كيف تدير فريق تصميم موهوب وناجح
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  قراءة المزيد{" "}
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog33}
                        alt="صورة المقال"
                      />
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog33}
                        alt="صورة المقال"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">تصميم واجهات المستخدم</Link> . 02 مايو 2022
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    كيف تجلب النجاح لشركتك الناشئة مع Axtra
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  قراءة المزيد{" "}
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog44}
                        alt="صورة المقال"
                      />
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog44}
                        alt="صورة المقال"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">تصميم واجهات المستخدم</Link> . 22 ديسمبر 2018
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    طرق الكذب على نفسك بشأن علاقتك الجديدة.
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  قراءة المزيد{" "}
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog55}
                        alt="صورة المقال"
                      />
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog55}
                        alt="صورة المقال"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">تصميم واجهات المستخدم</Link> . 02 مايو 2019
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    كيف تدير فريق تصميم موهوب وناجح
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  قراءة المزيد{" "}
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog66}
                        alt="صورة المقال"
                      />
                      <Image
                        priority
                        style={{ width: "1024", height: "1024" }}
                        className="image-box__item"
                        src={Blog66}
                        alt="صورة المقال"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">تصميم واجهات المستخدم</Link> . 02 مايو 2019
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    كيف تجلب النجاح لشركتك الناشئة مع Axtra
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  قراءة المزيد{" "}
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog1;
