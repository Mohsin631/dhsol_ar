import RootLayout from "@/components/common/layout/RootLayout";
import JavaScriptExpertPage from "@/components/hire/javascript-expert";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert JavaScript Developer in Your Timezone | JavaScript Development</title>
        <meta
          name="description"
          content="Hire expert JavaScript developers to create high-performance, dynamic, and responsive websites or apps. Available to work in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire JavaScript developer, JavaScript expert, JavaScript programming, web development, front-end development, full-stack development, Node.js, React, Angular"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert JavaScript Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for a professional JavaScript developer? Hire skilled JavaScript experts for high-performance web apps and websites, custom solutions, and modern frameworks."
        />
        <meta property="og:url" content="https://dhsol.net/hire/javascript-expert" />
        <meta property="og:image" content="https://dhsol.net/images/javascript-expert-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert JavaScript Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire JavaScript experts to build dynamic websites, web apps, and scalable solutions with the latest frameworks like React, Angular, and Node.js."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/javascript-expert-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <JavaScriptExpertPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
