import RootLayout from "@/components/common/layout/RootLayout";
import GoogleCloudEngineerPage from "@/components/hire/google-cloud-engineer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Google Cloud Engineer in Your Timezone | Cloud Solutions & Infrastructure</title>
        <meta
          name="description"
          content="Hire skilled Google Cloud engineers to design, deploy, and manage cloud solutions, infrastructure, and Google Cloud services. Available in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Google Cloud engineer, Google Cloud solutions, GCP, cloud infrastructure, cloud engineer, cloud migration, DevOps, Google Cloud Platform, cloud automation"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Google Cloud Engineer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for Google Cloud engineers? Hire experts to manage GCP infrastructure, cloud services, and create scalable cloud solutions."
        />
        <meta property="og:url" content="https://dhsol.net/hire/google-cloud-engineer" />
        <meta property="og:image" content="https://dhsol.net/images/google-cloud-engineer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Google Cloud Engineer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Get Google Cloud engineers to manage your cloud infrastructure, deploy scalable solutions, and optimize your cloud resources."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/google-cloud-engineer-og.jpg" />
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
