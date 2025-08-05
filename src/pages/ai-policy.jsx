import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import GlobalAIPolicy from "@/components/others/GlobalAIPolicy";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>سياسة الذكاء الاصطناعي العالمية | DH Solution</title>
        <meta name="description" content="سياسة الذكاء الاصطناعي العالمية | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <GlobalAIPolicy />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
