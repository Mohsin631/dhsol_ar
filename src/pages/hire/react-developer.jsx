import RootLayout from "@/components/common/layout/RootLayout";
import ReactDeveloperPage from "@/components/hire/hire-react";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert React Developer in Your Timezone | Custom React Solutions</title>
        <meta
          name="description"
          content="Hire skilled React developers for building fast, dynamic, and responsive web applications. Get the best React expertise for your next project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire React developer, React development, front-end developer, ReactJS, web applications, custom React solutions"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert React Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for a React developer? Hire top talent for creating fast, dynamic, and responsive web apps tailored to your needs."
        />
        <meta property="og:url" content="https://dhsol.net/hire/react-developer" />
        <meta property="og:image" content="https://dhsol.net/images/react-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert React Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert React developers for creating modern, high-performance web applications. Get custom solutions to suit your business needs."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/react-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <ReactDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
