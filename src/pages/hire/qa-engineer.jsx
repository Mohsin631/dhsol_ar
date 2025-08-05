import RootLayout from "@/components/common/layout/RootLayout";
import QAEngineerPage from "@/components/hire/qa-engineer";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert QA Engineer in Your Timezone | Quality Assurance Services</title>
        <meta
          name="description"
          content="Hire skilled QA Engineers for efficient testing, automation, and quality assurance services to ensure your product meets the highest standards."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire QA engineer, QA testing, software testing, quality assurance, automated testing, manual testing"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert QA Engineer in Your Timezone" />
        <meta
          property="og:description"
          content="Looking for a QA engineer? Hire experts in manual and automated testing to ensure your software meets top quality standards."
        />
        <meta property="og:url" content="https://dhsol.net/hire/qa-engineer" />
        <meta property="og:image" content="https://dhsol.net/images/qa-engineer-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert QA Engineer in Your Timezone" />
        <meta
          name="twitter:description"
          content="Hire expert QA engineers for software testing, automation, and quality assurance to ensure your product's reliability."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/qa-engineer-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <QAEngineerPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
