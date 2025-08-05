import RootLayout from "@/components/common/layout/RootLayout";
import UIUXDesignerPage from "@/components/hire/ui-ux-designer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert UI/UX Designer in Your Timezone | Web & Mobile Design</title>
        <meta
          name="description"
          content="Hire expert UI/UX designers to create user-centric designs that enhance user experience and interface for your web and mobile applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire UI/UX designer, UI/UX design, user interface design, user experience design, web design, mobile app design, expert designer"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert UI/UX Designer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for a UI/UX designer? Hire skilled professionals to design user-friendly and visually appealing web and mobile applications."
        />
        <meta property="og:url" content="https://dhsol.net/hire/ui-ux-designer" />
        <meta property="og:image" content="https://dhsol.net/images/ui-ux-designer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert UI/UX Designer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert UI/UX designers to improve user experience with engaging web and mobile designs."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/ui-ux-designer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <UIUXDesignerPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
