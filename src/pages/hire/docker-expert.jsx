import RootLayout from "@/components/common/layout/RootLayout";
import DockerExpertPage from "@/components/hire/docker-expert";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Docker Expert in Your Timezone | Containerization & Deployment Specialists</title>
        <meta
          name="description"
          content="Hire Docker experts to streamline containerization, CI/CD, and scalable deployment processes. Available in your timezone for microservices and DevOps pipelines."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Docker expert, containerization, Docker consulting, Docker deployment, Kubernetes, DevOps, microservices, Docker Compose, Docker Swarm"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Docker Expert in Your Timezone" />
        <meta
          property="og:description"
          content="Get on-demand Docker expertise for application containerization, infrastructure automation, and secure deployment pipelines."
        />
        <meta property="og:url" content="https://dhsol.net/hire/docker-expert" />
        <meta property="og:image" content="https://dhsol.net/images/docker-expert-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Docker Expert in Your Timezone" />
        <meta
          name="twitter:description"
          content="Scale your infrastructure with Docker-powered workflows. Hire top Docker developers and DevOps engineers for seamless container solutions."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/docker-expert-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <DockerExpertPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
