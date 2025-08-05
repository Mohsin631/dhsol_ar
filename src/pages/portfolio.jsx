import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>أعمالنا | DH Solutions</title>
        <meta 
          name="description" 
          content="استعرض محفظتنا التي تعرض المشاريع الناجحة في تطوير البرمجيات المخصصة، حلول الذكاء الاصطناعي، والتحولات الرقمية. اكتشف كيف تمكّن DH Solutions الأعمال على مستوى العالم." 
        />
        <meta name="keywords" content="تطوير برمجيات مخصصة، حلول الذكاء الاصطناعي، التحولات الرقمية، محفظة الأعمال، مشاريع ناجحة، محفظة DH Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="path-to-image.jpg" />
        <meta property="og:description" content="استعرض محفظتنا للمشاريع الناجحة مع DH Solutions." />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <Portfolio1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Portfolio;
