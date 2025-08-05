import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CloudHostingAdvisor from "@/components/hosting/hosting-advisor";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>مستشار استضافة السحابة | DH Solution</title>
        <meta name="description" content="مستشار استضافة السحابة | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <CloudHostingAdvisor />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
