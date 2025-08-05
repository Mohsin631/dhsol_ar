import RootLayout from "@/components/common/layout/RootLayout";
import HTMLCSSExpertPage from "@/components/hire/html-css-expert";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert HTML and CSS Developer in Your Timezone | Web Design & Development</title>
        <meta
          name="description"
          content="Hire skilled HTML and CSS developers to create stunning, responsive websites, custom layouts, and pixel-perfect designs. Available to collaborate in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire HTML developer, hire CSS expert, HTML CSS developer, web design, responsive websites, front-end development, custom layouts, CSS styling, HTML5, CSS3"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert HTML and CSS Developer in Your Timezone" />
        <meta
          property="og:description"
          content="Get expert HTML and CSS developers to build responsive, beautiful websites with perfect layouts and advanced styling."
        />
        <meta property="og:url" content="https://dhsol.net/hire/html-css-expert" />
        <meta property="og:image" content="https://dhsol.net/images/html-css-expert-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert HTML and CSS Developer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire professional HTML and CSS developers for responsive web design, custom layouts, and high-quality front-end development."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/html-css-expert-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <HTMLCSSExpertPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
