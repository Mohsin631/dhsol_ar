import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/1/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/1/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/1/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/1/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/front-end-stacks';

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>خدمات تطوير الواجهة الأمامية المتخصصة</title>
        <meta 
          name="description" 
          content="اكتشف خدمات تطوير الواجهة الأمامية المتقدمة المصممة لإنشاء واجهات سريعة، متجاوبة، وسهلة الاستخدام تزيد من تفاعل المستخدم ونمو الأعمال." 
        />
        <meta 
          name="keywords" 
          content="تطوير الواجهة الأمامية, تصميم ويب متجاوب, واجهات سهلة الاستخدام, تصميم UI/UX, تطوير ويب سريع, جافاسكريبت, React, Angular, HTML5, CSS3, نمو الأعمال" 
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
