import RootLayout from "@/components/common/layout/RootLayout";
import FullstackDeveloperPage from "@/components/hire/fullstack-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Fullstack Developer in Your Timezone | MERN, MEAN, Next.js</title>
        <meta
          name="description"
          content="Hire top fullstack developers skilled in MERN, MEAN, Next.js, Node.js, and modern web development. Get seamless front-to-back solutions in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire fullstack developer, MERN stack, MEAN stack, Next.js, Node.js, React, Express, MongoDB, frontend backend developer, remote fullstack developer"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Fullstack Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Work with fullstack experts who build scalable, efficient, and modern web apps. From UI to database, we've got you covered."
        />
        <meta property="og:url" content="https://dhsol.net/hire/fullstack-developer" />
        <meta property="og:image" content="https://dhsol.net/images/fullstack-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Fullstack Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Looking for skilled fullstack developers? Hire engineers who deliver complete web solutions with modern frameworks."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/fullstack-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <FullstackDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
