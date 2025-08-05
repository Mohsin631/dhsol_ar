import RootLayout from "@/components/common/layout/RootLayout";
import JenkinsDevOpsEngineerPage from "@/components/hire/jenkins-devops-engineer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Jenkins DevOps Engineer in Your Timezone | Jenkins DevOps Services</title>
        <meta
          name="description"
          content="Hire a skilled Jenkins DevOps engineer to optimize your CI/CD pipelines, automate deployments, and enhance software delivery processes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Jenkins DevOps engineer, Jenkins expert, CI/CD, DevOps services, automation, software deployment, Jenkins pipeline, DevOps engineer"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Jenkins DevOps Engineer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for a Jenkins DevOps engineer? Hire an expert to streamline your CI/CD pipelines, automate deployments, and manage your DevOps processes efficiently."
        />
        <meta property="og:url" content="https://dhsol.net/hire/jenkins-devops-engineer" />
        <meta property="og:image" content="https://dhsol.net/images/jenkins-devops-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Jenkins DevOps Engineer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire Jenkins DevOps engineers to optimize your CI/CD pipelines, automate deployments, and enhance software delivery."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/jenkins-devops-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <JenkinsDevOpsEngineerPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
