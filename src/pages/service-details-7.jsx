import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/7/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/7/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/7/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/7/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/custom-software-stacks';    

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>خدمات تطوير البرمجيات المخصصة</title>
        <meta
          name="description"
          content="حوّل عملك من خلال خدمات تطوير البرمجيات المخصصة المصممة لتلبية احتياجاتك الفريدة، تعزيز الكفاءة، ودفع الابتكار من خلال حلول قابلة للتوسع."
        />
        <meta
          name="keywords"
          content="تطوير البرمجيات المخصصة، حلول مخصصة، برمجيات قابلة للتوسع، تحول الأعمال، برمجيات المؤسسات، حلول البرمجيات، هندسة البرمجيات، تطبيقات مخصصة، تطوير أجايل، خدمات تكنولوجيا المعلومات"
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
