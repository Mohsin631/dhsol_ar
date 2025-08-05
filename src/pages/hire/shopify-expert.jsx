import RootLayout from "@/components/common/layout/RootLayout";
import ShopifyExpertPage from "@/components/hire/hire-a-shopify";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Shopify Expert in Your Timezone | Expert Shopify Development Services</title>
        <meta
          name="description"
          content="Hire expert Shopify developers to create and manage your online store. Get custom Shopify solutions tailored to your business needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Shopify expert, Shopify developer, eCommerce solutions, Shopify store development, Shopify theme customization"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Shopify Expert in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for a Shopify expert? Hire skilled Shopify developers to build and manage your eCommerce store with custom features and designs."
        />
        <meta property="og:url" content="https://dhsol.net/hire/shopify-expert" />
        <meta property="og:image" content="https://dhsol.net/images/shopify-expert-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Shopify Expert in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert Shopify developers to help with custom Shopify store design, setup, and optimization for your online business."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/shopify-expert-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <ShopifyExpertPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
