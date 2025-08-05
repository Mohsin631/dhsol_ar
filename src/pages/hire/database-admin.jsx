import RootLayout from "@/components/common/layout/RootLayout";
import DatabaseAdminPage from "@/components/hire/database-admin";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Hire Expert Database Admin in Your Timezone | Secure & Scalable DB Management</title>
        <meta
          name="description"
          content="Hire professional database administrators (DBAs) to manage, secure, and optimize your databases. Available to work in your timezone for MySQL, PostgreSQL, MongoDB, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire database admin, DBA services, database administrator, MySQL expert, PostgreSQL DBA, MongoDB database management"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Expert Database Admin in Your Timezone" />
        <meta
          property="og:description"
          content="Work with expert database administrators for high-availability, backup strategies, optimization, and security. Get expert DBAs now."
        />
        <meta property="og:url" content="https://dhsol.net/hire/database-admin" />
        <meta property="og:image" content="https://dhsol.net/images/database-admin-og.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Database Admin in Your Timezone" />
        <meta
          name="twitter:description"
          content="Secure and optimize your databases with help from certified DBAs. Experts in SQL, NoSQL, cloud database systems, and more."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/database-admin-og.jpg" />
      </Head>
      <main>
        <RootLayout>
          <DatabaseAdminPage />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
