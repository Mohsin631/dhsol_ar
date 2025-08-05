import RootLayout from "@/components/common/layout/RootLayout";
import PythonDeveloperPage from "@/components/hire/python-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Python Developer in Your Timezone | Python Development Services</title>
        <meta
          name="description"
          content="Hire expert Python developers for building scalable web applications, automation, data analysis, and AI solutions tailored to your business needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Python developer, Python expert, Python programming, web applications, data analysis, AI solutions"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Python Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for an expert Python developer? Hire skilled developers for Python web development, data analysis, AI solutions, and more tailored to your business."
        />
        <meta property="og:url" content="https://dhsol.net/hire/python-developer" />
        <meta property="og:image" content="https://dhsol.net/images/python-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Python Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert Python developers for web applications, data analysis, automation, and AI solutions customized to your needs."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/python-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <PythonDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
