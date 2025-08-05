import RootLayout from "@/components/common/layout/RootLayout";
import SlackIntegratorPage from "@/components/hire/slack-integrator";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Slack Integrator in Your Timezone | Slack Integration Services</title>
        <meta
          name="description"
          content="Hire expert Slack integrators to seamlessly connect Slack with your business tools and optimize team communication and workflows."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire Slack integrator, Slack integration, Slack development, business workflow integration, Slack apps"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Slack Integrator in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for a Slack integrator? Hire skilled developers to integrate Slack with your business tools for enhanced communication and team collaboration."
        />
        <meta property="og:url" content="https://dhsol.net/hire/slack-integrator" />
        <meta property="og:image" content="https://dhsol.net/images/slack-integrator-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Slack Integrator in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert Slack integrators to streamline communication and optimize workflows by integrating Slack with your business tools."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/slack-integrator-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <SlackIntegratorPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
