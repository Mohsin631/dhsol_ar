import RootLayout from "@/components/common/layout/RootLayout";
import PHPDeveloperPage from "@/components/hire/hire-a-php";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert PHP Developer in Your Timezone | PHP Development Services</title>
        <meta
          name="description"
          content="Hire a skilled PHP developer to create dynamic, high-performance web applications. Get custom PHP development solutions tailored to your business needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire PHP developer, PHP expert, PHP development, custom web applications, backend development, PHP web development"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert PHP Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for an expert PHP developer? Hire skilled developers to create dynamic and scalable web applications using PHP tailored to your business requirements."
        />
        <meta property="og:url" content="https://dhsol.net/hire/php-developer" />
        <meta property="og:image" content="https://dhsol.net/images/php-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert PHP Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert PHP developers to create dynamic, scalable web applications and custom backend solutions tailored to your business."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/php-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <PHPDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
