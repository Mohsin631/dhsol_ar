import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceHero from "@/components/hero/ServiceHero";
import Service1 from "@/components/service/Service1";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Service = () => {
  return (
    <>
      <Head>
        <title>الخدمات</title>
        <meta name="description" content="وصف الخدمات" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <ServiceHero />
          <Service1 />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Service;
