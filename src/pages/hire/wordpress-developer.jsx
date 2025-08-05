import RootLayout from "@/components/common/layout/RootLayout";
import WordPressDeveloperPage from "@/components/hire/wordpress-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert WordPress Developer in Your Timezone | WordPress Web Development</title>
        <meta
          name="description"
          content="Hire experienced WordPress developers to build and manage your WordPress website. Get expert assistance with custom themes, plugins, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire WordPress developer, WordPress web development, custom WordPress themes, WordPress plugins, WordPress experts"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert WordPress Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Get top-tier WordPress developers for custom themes, plugin development, and WordPress website management."
        />
        <meta property="og:url" content="https://dhsol.net/hire/wordpress-developer" />
        <meta property="og:image" content="https://dhsol.net/images/wordpress-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert WordPress Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert WordPress developers for your website’s custom design and functionality needs. Get started today!"
        />
        <meta name="twitter:image" content="https://dhsol.net/images/wordpress-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <WordPressDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
