import RootLayout from "@/components/common/layout/RootLayout";
import AngularDeveloperPage from "@/components/hire/angular-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Angular Developer in Your Timezone | Remote Angular Developers</title>
        <meta
          name="description"
          content="Hire highly skilled Angular developers who work in your timezone. Get scalable, high-performance web apps built with Angular by dedicated experts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Angular developer, Angular web developer, remote Angular developers, Angular development services, frontend Angular experts"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Angular Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Work with experienced Angular developers across your timezone. Build fast, secure, and scalable Angular apps with DH Solution."
        />
        <meta property="og:url" content="https://dhsol.net/hire/angular-developer" />
        <meta property="og:image" content="https://dhsol.net/images/angular-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Angular Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Connect with top Angular developers ready to work remotely in your timezone. Custom frontend solutions built for speed and scale."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/angular-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <AngularDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
