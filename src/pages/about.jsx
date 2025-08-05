import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import AboutTeam from "@/components/team/AboutTeam";
import AboutTestimonial from "@/components/testimonial/AboutTestimonial";
import Head from "next/head";

const About = () => {
  return (
    <div dir="rtl">
      <Head>
        <title>حول DH Solution - وكالة تطوير برمجيات احترافية</title>
        <meta
          name="description"
          content="تعرف على DH Solution، شركة رائدة في تطوير البرمجيات تقدم حلول تكنولوجيا المعلومات وخبرة في تطوير الويب والذكاء الاصطناعي والمزيد."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="حول DH Solution، وكالة تطوير برمجيات، حلول تكنولوجيا المعلومات، تطوير الويب، الذكاء الاصطناعي، حلول رقمية"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="حول DH Solution - وكالة تطوير برمجيات احترافية" />
        <meta
          property="og:description"
          content="اكتشف DH Solution، وكالة رائدة في تقديم خدمات تكنولوجيا المعلومات، الذكاء الاصطناعي، وحلول تطوير الويب المصممة لتلبية احتياجاتك."
        />
        <meta property="og:url" content="https://dhsol.net/about" />
        <meta property="og:image" content="https://dhsol.net/images/about-hero.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="حول DH Solution - وكالة تطوير برمجيات احترافية" />
        <meta
          name="twitter:description"
          content="تعرف على DH Solution، وكالة متخصصة في الذكاء الاصطناعي، تطوير الويب، وحلول تكنولوجيا المعلومات المصممة للأعمال."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/about-hero.jpg" />
      </Head>
      <main>
        <RootLayout>
          <AboutHero />
          <AboutStory />
          <AboutCounter />
          <AboutTeam />
          <DigitalAgencyBrand />
          <AboutTestimonial />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
