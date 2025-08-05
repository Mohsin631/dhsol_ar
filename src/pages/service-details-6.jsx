import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/6/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/6/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/6/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/6/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/devops-solutions-stacks';     

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>خدمات ديف أوبس المتخصصة</title>
        <meta
          name="description"
          content="قم بتحسين تطوير البرمجيات وعمليات تكنولوجيا المعلومات الخاصة بك من خلال خدمات ديف أوبس المتخصصة التي تعزز التعاون، وتؤتمت سير العمل، وتسارع عمليات النشر لتحقيق وقت أسرع للوصول إلى السوق."
        />
        <meta
          name="keywords"
          content="خدمات ديف أوبس، التكامل المستمر، التسليم المستمر، الأتمتة، التعاون، نشر البرمجيات، عمليات تكنولوجيا المعلومات، التطوير السريع، حلول السحابة، إدارة البنية التحتية"
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
