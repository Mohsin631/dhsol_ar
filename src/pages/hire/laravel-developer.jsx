import RootLayout from "@/components/common/layout/RootLayout";
import LaravelDeveloperPage from "@/components/hire/laravel-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Laravel Developer in Your Timezone | Laravel Development Services</title>
        <meta
          name="description"
          content="Hire a skilled Laravel developer for building scalable web applications, custom solutions, and efficient backend systems. Get Laravel experts to work in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Laravel developer, Laravel expert, Laravel development, web application, custom solutions, backend development"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Laravel Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for expert Laravel developers? Hire skilled professionals for custom web solutions, backend development, and scalable Laravel applications."
        />
        <meta property="og:url" content="https://dhsol.net/hire/laravel-developer" />
        <meta property="og:image" content="https://dhsol.net/images/laravel-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Laravel Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire skilled Laravel developers to build custom web applications, scalable solutions, and efficient backend systems."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/laravel-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <LaravelDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
