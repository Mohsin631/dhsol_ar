import RootLayout from "@/components/common/layout/RootLayout";
import BackendDeveloperPage from "@/components/hire/backend-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Backend Developer in Your Timezone | Scalable API & Server Solutions</title>
        <meta
          name="description"
          content="Hire top-rated backend developers to build secure, scalable, and high-performance server-side applications. Available to work in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire backend developer, backend engineer, API development, Node.js developer, Python backend expert, scalable server-side development"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Backend Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Work with professional backend developers specializing in Node.js, Python, PHP, and more. Build powerful, scalable APIs and server-side systems."
        />
        <meta property="og:url" content="https://dhsol.net/hire/backend-developer" />
        <meta property="og:image" content="https://dhsol.net/images/backend-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Backend Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire backend developers for APIs, databases, and server logic. Experts in building fast, secure backend systems tailored to your business."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/backend-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <BackendDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
