import CareerBenefit from "@/components/benefit/CareerBenefit";
import Career1 from "@/components/career/Career1";
import RootLayout from "@/components/common/layout/RootLayout";
import CareerGallery from "@/components/gallery/CareerGallery";
import CareerHero from "@/components/hero/CareerHero";
import WhyJoinDH from "@/components/whydh/whydh";
import HiringProcess from "@/components/HiringProcess/HiringProcess";
import CareerFAQ from "@/components/careerFAQ/careerFAQ";
import Head from "next/head";

const Career = () => {
  return (
    <div dir="rtl">
      <Head>
        <title>الوظائف في DH Solution - انضم إلى فريقنا المتنامي</title>
        <meta
          name="description"
          content="اكتشف فرصًا وظيفية مثيرة في DH Solution. انضم إلى فريقنا الديناميكي وساعد في تشكيل مستقبل تطوير البرمجيات والذكاء الاصطناعي والحلول الرقمية."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="فرص عمل، انضم إلى DH Solution، تطوير البرمجيات، وظائف ذكاء اصطناعي، حلول رقمية، وظائف تقنية، العمل معنا"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="الوظائف في DH Solution - انضم إلى فريقنا المتنامي" />
        <meta
          property="og:description"
          content="اكتشف وظيفة مجزية في DH Solution. تصفح الوظائف الشاغرة لدينا وتعرف على مزايا العمل مع وكالة تطوير البرمجيات الرائدة."
        />
        <meta property="og:url" content="https://dhsol.net/ar/career" />
        <meta property="og:image" content="https://dhsol.net/images/career-hero.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="الوظائف في DH Solution - انضم إلى فريقنا المتنامي" />
        <meta
          name="twitter:description"
          content="انضم إلى DH Solution وكن جزءًا من فريق رائد في تطوير البرمجيات والذكاء الاصطناعي والابتكار الرقمي. اكتشف فرص العمل لدينا اليوم!"
        />
        <meta name="twitter:image" content="https://dhsol.net/images/career-hero.jpg" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <CareerHero />
          <CareerGallery />
          <Career1 />
          <CareerBenefit />
          <WhyJoinDH />
          <HiringProcess />
          <CareerFAQ />
        </RootLayout>
      </main>
    </div>
  );
};

export default Career;
