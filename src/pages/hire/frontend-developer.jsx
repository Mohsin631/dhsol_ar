import RootLayout from "@/components/common/layout/RootLayout";
import FrontendDeveloperPage from "@/components/hire/frontend-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Frontend Developer in Your Timezone | React, Vue, HTML/CSS Experts</title>
        <meta
          name="description"
          content="Hire skilled frontend developers for React, Vue, Next.js, and modern UI development. Work with top engineers in your timezone to build responsive, performant web apps."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire frontend developer, UI developer, React developer, Vue developer, HTML CSS JS expert, Next.js, Tailwind CSS, frontend services"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Frontend Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Get modern, pixel-perfect UIs and fast-loading web apps built by frontend experts. Available to work in your timezone."
        />
        <meta property="og:url" content="https://dhsol.net/hire/frontend-developer" />
        <meta property="og:image" content="https://dhsol.net/images/frontend-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Frontend Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Frontend engineers ready to build responsive, scalable, and interactive web interfaces using modern frameworks like React, Vue, and Next.js."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/frontend-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <FrontendDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
