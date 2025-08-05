import RootLayout from "@/components/common/layout/RootLayout";
import GitHubExpertPage from "@/components/hire/github-expert";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert GitHub Specialist in Your Timezone | Version Control & Collaboration</title>
        <meta
          name="description"
          content="Hire GitHub experts to manage your repositories, version control, and collaboration. Experts available to work in your timezone for seamless integration."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire GitHub expert, GitHub repositories, version control, GitHub collaboration, Git workflows, GitHub management, Git integration, DevOps, GitHub actions"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert GitHub Specialist in Your Timezone" />
        <meta
          property="og:description"
          content="Get GitHub experts to handle repository management, version control, and Git workflows. Available to collaborate in your timezone."
        />
        <meta property="og:url" content="https://dhsol.net/hire/github-expert" />
        <meta property="og:image" content="https://dhsol.net/images/github-expert-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert GitHub Specialist in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire GitHub experts to manage version control, automate workflows, and integrate with your CI/CD pipeline. Available in your timezone."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/github-expert-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <GitHubExpertPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
