import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TermsAndConditions from "@/components/terms/terms";
import SecurityRiskAssessor from "@/components/security/security";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>مُقيّم مخاطر الأمن | DH Solution</title>
        <meta name="description" content="مُقيّم مخاطر الأمن | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <SecurityRiskAssessor />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
