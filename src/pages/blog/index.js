import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import { blogData } from "@/data/BlogsData";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

export default function BlogIndex() {
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
            stagger: { each: 0.3 },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <Head>
        <title>مدونة</title>
        <meta name="description" content="وصف المدونة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <RootLayout header="header3" footer="footer3">
          <section
            className="blog__area-6 blog__animation"
            dir="rtl"
            style={{ textAlign: "right" }}
          >
            <div className="container g-0 line pt-110 pb-110">
              <span className="line-3"></span>

              <div className="row pb-130">
                <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h2
                      className="sec-title-2 animation__char_come"
                
                    >
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
                {blogData.map((blog) => (
                  <div
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-4"
                    key={blog.slug}
                  >
                    <article className="blog__item">
                      <div className="blog__img-wrapper">
                        <Link href={`/blog/${blog.slug}`}>
                          <div className="img-box">
                            <Image
                              priority
                              style={{ width: "1024", height: "1024" }}
                              className="image-box__item"
                              src={blog.mainImage}
                              alt={`صورة المقال ${blog.title}`}
                            />
                            <Image
                              priority
                              style={{ width: "1024", height: "1024" }}
                              className="image-box__item"
                              src={blog.mainImage}
                              alt={`صورة المقال ${blog.title}`}
                            />
                          </div>
                        </Link>
                      </div>
                      <h4 className="blog__meta">
                        <Link href={`/blog/${blog.slug}`}>{blog.category}</Link>{" "}
                        . {blog.date}
                      </h4>
                      <h5>
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="blog__title"
                        >
                          {blog.title}
                        </Link>
                      </h5>
                      <Link href={`/blog/${blog.slug}`} className="blog__btn">
                        قراءة المزيد{" "}
                        <span>
                          <i className="fa-solid fa-arrow-left"></i>
                        </span>
                      </Link>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
}
