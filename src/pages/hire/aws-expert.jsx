import RootLayout from "@/components/common/layout/RootLayout";
import AWSSpecialistPage from "@/components/hire/aws-expert";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire AWS Expert in Your Timezone | Certified AWS Specialists</title>
        <meta
          name="description"
          content="Hire certified AWS experts who align with your timezone and project goals. Get professional cloud infrastructure, DevOps, and AWS solutions tailored to your business."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire AWS expert, AWS cloud engineer, AWS DevOps specialist, certified AWS developers, cloud infrastructure services"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire AWS Expert in Your Timezone" />
        <meta
          property="og:description"
          content="Work with experienced AWS engineers in your timezone. From cloud migration to DevOps and architecture, hire trusted AWS professionals today."
        />
        <meta property="og:url" content="https://dhsol.net/hire/aws-expert" />
        <meta property="og:image" content="https://dhsol.net/images/aws-expert-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire AWS Expert in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire top-rated AWS engineers for cloud infrastructure, DevOps, and scalable solutions. Available to work in your timezone."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/aws-expert-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <AWSSpecialistPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
