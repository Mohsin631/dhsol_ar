import RootLayout from "@/components/common/layout/RootLayout";
import AndroidDeveloperPage from "@/components/hire/android-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Android Developer in Your Timezone | Remote Android App Developers</title>
        <meta
          name="description"
          content="Hire top-rated Android developers who align with your time zone and business goals. Get expert Android app development services tailored to your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Android developer, Android app developer, remote Android developers, Android app development, dedicated Android developers"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Android Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Connect with vetted Android developers who can work in your preferred timezone. Reliable, scalable, and dedicated Android app development services."
        />
        <meta property="og:url" content="https://dhsol.net/hire/android-developer" />
        <meta property="og:image" content="https://yourwebsite.com/images/android-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Android Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Get access to professional Android developers suited to your project needs and timezone. Let's build something great together."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/images/android-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <AndroidDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
