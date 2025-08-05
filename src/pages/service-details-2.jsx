import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/2/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/2/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/2/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/2/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/backend-development-stacks';

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>خدمات تطوير الواجهة الخلفية المتخصصة</title>
        <meta
          name="description"
          content="استفد من خدمات تطوير الواجهة الخلفية القوية التي تضمن الأمان، القابلية للتوسع، والتكامل السلس، مصممة لتعزيز عمليات عملك ودعم التطبيقات المعقدة."
        />
        <meta
          name="keywords"
          content="تطوير الواجهة الخلفية, تطوير جانب الخادم, إدارة قواعد البيانات, بنية قابلة للتوسع, APIs آمنة, التكامل السحابي, Node.js, Python, Ruby on Rails, حلول الأعمال"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
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
