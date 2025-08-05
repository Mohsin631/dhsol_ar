import RootLayout from "@/components/common/layout/RootLayout";
import NodejsDeveloperPage from "@/components/hire/nodejs-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert NodeJS Developer in Your Timezone | NodeJS Development Services</title>
        <meta
          name="description"
          content="Hire an expert Node.js developer to build scalable, high-performance applications. Get custom backend solutions with NodeJS development services tailored to your business needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Node.js developer, NodeJS expert, NodeJS development, backend development, scalable web applications, custom backend solutions"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert NodeJS Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for an expert NodeJS developer? Hire skilled developers to build scalable and efficient web applications using Node.js tailored to your business requirements."
        />
        <meta property="og:url" content="https://dhsol.net/hire/nodejs-developer" />
        <meta property="og:image" content="https://dhsol.net/images/nodejs-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert NodeJS Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert Node.js developers to create high-performance, scalable applications and backend solutions tailored to your business."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/nodejs-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <NodejsDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
