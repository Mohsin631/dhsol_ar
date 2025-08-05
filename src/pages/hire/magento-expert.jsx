import RootLayout from "@/components/common/layout/RootLayout";
import MagentoDeveloperPage from "@/components/hire/magento-developer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Magento Developer in Your Timezone | Magento Development Services</title>
        <meta
          name="description"
          content="Hire a skilled Magento developer to create custom eCommerce websites, optimize your store, and improve backend systems. Work with Magento experts in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Magento developer, Magento expert, Magento development, eCommerce website, custom Magento solutions, Magento store optimization"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Magento Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for expert Magento developers? Hire skilled professionals to build and optimize your Magento store with custom solutions and backend systems."
        />
        <meta property="og:url" content="https://dhsol.net/hire/magento-developer" />
        <meta property="og:image" content="https://dhsol.net/images/magento-developer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Magento Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire Magento developers to create customized eCommerce websites, improve backend functionalities, and optimize Magento stores for your business."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/magento-developer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <MagentoDeveloperPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
