import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/4/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/4/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/4/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/4/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/ai-development-stacks';    

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>حلول الذكاء الاصطناعي وتعلم الآلة</title>
        <meta
          name="description"
          content="عزز عملك بحلول متقدمة للذكاء الاصطناعي وتعلم الآلة مصممة لتحسين العمليات، وتعزيز اتخاذ القرار، ودفع النمو من خلال الأتمتة الذكية ورؤى البيانات."
        />
        <meta
          name="keywords"
          content="حلول الذكاء الاصطناعي, خدمات تعلم الآلة, تطوير الذكاء الاصطناعي, التحليلات التنبؤية, الأتمتة الذكية, رؤى البيانات, حلول معتمدة على الذكاء الاصطناعي, نماذج تعلم الآلة, تطوير تعلم الآلة, التعلم العميق, علوم البيانات"
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
