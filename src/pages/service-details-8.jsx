import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/8/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/8/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/8/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/8/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/qa-and-testing-stacks';    

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>خدمات شاملة لضمان الجودة والاختبار</title>
        <meta
          name="description"
          content="ضمان أعلى جودة لبرمجياتك من خلال خدماتنا الشاملة لضمان الجودة والاختبار، المصممة للكشف عن الأخطاء، وتعزيز الأداء، وتقديم تجربة مستخدم سلسة."
        />
        <meta
          name="keywords"
          content="خدمات ضمان الجودة، اختبار البرمجيات، ضمان الجودة، اكتشاف الأخطاء، اختبار الأداء، الاختبارات الآلية، الاختبارات اليدوية، أتمتة الاختبارات، تجربة المستخدم، جودة البرمجيات، حلول الاختبار"
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
