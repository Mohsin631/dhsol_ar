import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/3/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/3/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/3/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/3/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/mobile-app-stacks';

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>خدمات تطوير تطبيقات الهواتف المحمولة المتخصصة</title>
        <meta
          name="description"
          content="حوّل عملك من خلال خدمات تطوير تطبيقات الهواتف المحمولة المبتكرة، مع تقديم حلول مخصصة عالية الأداء وسهلة الاستخدام لمنصات أندرويد وiOS."
        />
        <meta
          name="keywords"
          content="تطوير تطبيقات الهواتف المحمولة, تطبيقات مخصصة, تطبيقات أندرويد, تطبيقات iOS, تطبيقات متعددة المنصات, Flutter, React Native, حلول الهواتف المحمولة, خدمات تطوير التطبيقات, تصميم واجهة وتجربة المستخدم"
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
