import RootLayout from "@/components/common/layout/RootLayout";
import VueJSDeveloperPage from "@/components/hire/vuejs-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert VueJS Developer in Your Timezone | Frontend Web Development</title>
        <meta
          name="description"
          content="Looking for an expert VueJS developer? Hire skilled professionals to build dynamic and responsive web applications with VueJS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire VueJS developer, VueJS, frontend development, web development, VueJS expert, hire developer, JavaScript framework"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert VueJS Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Hire professional VueJS developers for building interactive web applications with VueJS. Get started today!"
        />
        <meta property="og:url" content="https://dhsol.net/hire/vuejs-developer" />
        <meta property="og:image" content="https://dhsol.net/images/vuejs-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert VueJS Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Get top-tier VueJS developers for your web development projects. Hire professionals to bring your ideas to life."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/vuejs-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <VueJSDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
