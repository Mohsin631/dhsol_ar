import RootLayout from "@/components/common/layout/RootLayout";
import GoogleCloudEngineerPage from "@/components/hire/cloud-engineer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Cloud Engineer in Your Timezone | Google Cloud & DevOps Experts</title>
        <meta
          name="description"
          content="Hire top-tier cloud engineers specializing in Google Cloud, AWS, Azure, and DevOps. Scalable cloud infrastructure and deployment in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire cloud engineer, Google Cloud expert, DevOps engineer, cloud infrastructure specialist, AWS Azure GCP developers"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Cloud Engineer in Your Timezone" />
        <meta
          property="og:description"
          content="Connect with cloud engineers experienced in Google Cloud, AWS, and Azure. Get secure and scalable cloud solutions tailored to your business."
        />
        <meta property="og:url" content="https://dhsol.net/hire/cloud-engineer" />
        <meta property="og:image" content="https://dhsol.net/images/cloud-engineer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Cloud Engineer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire Google Cloud and multi-cloud engineers for scalable infrastructure, CI/CD, and DevOps excellence. Available in your preferred timezone."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/cloud-engineer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <GoogleCloudEngineerPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
