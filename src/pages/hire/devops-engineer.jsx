import RootLayout from "@/components/common/layout/RootLayout";
import DevOpsEngineerPage from "@/components/hire/devops-engineer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert DevOps Engineer in Your Timezone | CI/CD, Automation & Cloud Infrastructure</title>
        <meta
          name="description"
          content="Hire experienced DevOps engineers to streamline your CI/CD pipelines, automate deployments, and manage scalable cloud infrastructure. Available in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire devops engineer, CI/CD expert, cloud infrastructure engineer, automation specialist, DevOps services, AWS DevOps, Azure DevOps, GCP"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert DevOps Engineer in Your Timezone" />
        <meta
          property="og:description"
          content="Work with certified DevOps professionals to automate infrastructure, enhance CI/CD pipelines, and manage cloud-native deployments."
        />
        <meta property="og:url" content="https://dhsol.net/hire/devops-engineer" />
        <meta property="og:image" content="https://dhsol.net/images/devops-engineer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert DevOps Engineer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire DevOps engineers to build resilient, automated infrastructure and CI/CD systems. Available across timezones with flexible engagement models."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/devops-engineer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <DevOpsEngineerPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
