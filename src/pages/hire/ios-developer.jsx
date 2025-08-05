import RootLayout from "@/components/common/layout/RootLayout";
import IOSDeveloperPage from "@/components/hire/ios-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert iOS Developer in Your Timezone | iOS App Development</title>
        <meta
          name="description"
          content="Hire experienced iOS developers to build innovative, user-friendly, and high-performance mobile apps for your business. Available in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire iOS developer, iOS app development, mobile app development, Swift, iPhone app, iOS programming, native app, iOS developer, app design, iOS solutions"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert iOS Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for iOS app development? Hire experienced iOS developers to create custom mobile apps for your business. Expert iPhone app developers."
        />
        <meta property="og:url" content="https://dhsol.net/hire/ios-developer" />
        <meta property="og:image" content="https://dhsol.net/images/ios-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert iOS Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire professional iOS developers to build high-quality iPhone apps and solutions tailored to your business needs."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/ios-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <IOSDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
