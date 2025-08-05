import RootLayout from "@/components/common/layout/RootLayout";
import GitSpecialistPage from "@/components/hire/git-specialist";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Git Specialist in Your Timezone | Version Control & GitHub Management</title>
        <meta
          name="description"
          content="Hire Git specialists for seamless version control, repository management, and GitHub/GitLab expertise. Available to collaborate in your timezone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Git specialist, Git version control, GitHub, GitLab expert, repository management, DevOps, source control, Git commands, Git workflows"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Git Specialist in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for a Git expert? Hire specialists who manage version control, repositories, and integrate Git workflows into your CI/CD pipeline."
        />
        <meta property="og:url" content="https://dhsol.net/hire/git-specialist" />
        <meta property="og:image" content="https://dhsol.net/images/git-specialist-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Git Specialist in Your Timezone" />
        <meta
          name="twitter:description"
          content="Expert Git specialists available for managing repositories, version control, and GitHub/GitLab workflows. Hire today."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/git-specialist-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <GitSpecialistPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
