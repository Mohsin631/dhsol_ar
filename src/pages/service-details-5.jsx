import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/5/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/5/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/5/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/5/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/cyber-security-stacks';    

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>حلول الأمن السيبراني الشاملة</title>
        <meta
          name="description"
          content="احمِ عملك بحلول أمن سيبراني شاملة مصممة لحماية أصولك الرقمية، والتقليل من المخاطر، وضمان الامتثال من خلال الكشف والاستجابة الاستباقية للتهديدات."
        />
        <meta
          name="keywords"
          content="حلول الأمن السيبراني, حماية الأعمال, كشف التهديدات, خدمات الأمن السيبراني, تقليل المخاطر, حماية الأصول الرقمية, أمن البيانات, الامتثال, أمان الشبكات, أمان تكنولوجيا المعلومات"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <ServiceDetailsDevelopment />
          <ServiceDetailsWorkflow />
          <ServiceDetailsService />
          <OurTechStacksWithLogos />
          <ServiceDetailsFaq />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
