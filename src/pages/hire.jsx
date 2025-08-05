import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import HireAnExpert from "@/components/hire/hire";
import HowItWorks from "@/components/hire/howitworks";
import StartingFrom from "@/components/hire/PricingPackages";
import ExpertFAQ from "@/components/hire/expertfaq";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>توظيف مطور - مطورون خبراء لمشاريعك</title>
        <meta
          name="description"
          content="هل تبحث عن توظيف مطور؟ نحن نوفر مطورين خبراء في مختلف التقنيات لتلبية احتياجات عملك. تواصل مع فريقنا اليوم!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="توظيف مطور، مطورين محترفين، تطوير برمجيات، توظيف عن بعد، حلول تكنولوجيا المعلومات، توظيف JavaScript، Python، Node.js، React"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="توظيف مطور - مطورون خبراء لمشاريعك" />
        <meta
          property="og:description"
          content="قم بتوظيف مطورين محترفين لمشروعك التالي. نحن نوفر خيارات توظيف مرنة وعن بُعد لمطورين متخصصين في تقنيات متعددة."
        />
        <meta property="og:url" content="https://dhsol.net/hire" />
        <meta property="og:image" content="https://dhsol.net/images/hire-developer.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="توظيف مطور - مطورون خبراء لمشاريعك" />
        <meta
          name="twitter:description"
          content="ابحث عن مطورين محترفين وقم بتوظيفهم لعملك. اكتشف عملية التوظيف لدينا وابدأ ببناء فريقك اليوم."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/hire-developer.jpg" />
      </Head>
      <main>
        <RootLayout>
          <HireAnExpert />
          <AboutCounter />
          <HowItWorks />
          <StartingFrom />
          <ExpertFAQ />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
