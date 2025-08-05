import RootLayout from "@/components/common/layout/RootLayout";
import JavaScriptExpertPage from "@/components/hire/javascript-expert";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert JS Developer in Your Timezone | JavaScript Development</title>
        <meta
          name="description"
          content="Hire expert JavaScript developers for your web development needs. Build dynamic websites, web apps, and scalable solutions with JavaScript, React, Angular, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire JavaScript developer, JavaScript expert, web development, JS programming, front-end development, full-stack development, React, Node.js, Angular, JavaScript solutions"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert JS Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for JavaScript development experts? Hire skilled JS developers for web and app development, specializing in React, Angular, Node.js, and other frameworks."
        />
        <meta property="og:url" content="https://dhsol.net/hire/javascript-expert" />
        <meta property="og:image" content="https://dhsol.net/images/javascript-expert-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert JS Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire JavaScript experts to build dynamic websites, web apps, and scalable solutions using JavaScript, React, Angular, and Node.js."
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
