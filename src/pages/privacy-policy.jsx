import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PrivacyPolicy from "@/components/terms/privacy";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>سياسة الخصوصية | DH Solution</title>
        <meta name="description" content="الشروط والأحكام | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <PrivacyPolicy />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
