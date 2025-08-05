import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/9/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/9/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/9/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/9/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/computer-vision-stacks';    

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>خدمات متخصصة في رؤية الكمبيوتر</title>
        <meta
          name="description"
          content="اكتشف إمكانيات بياناتك مع خدمات رؤية الكمبيوتر المتخصصة لدينا، المصممة لتحسين تحليل الصور، وأتمتة المهام البصرية، واستخلاص الرؤى من خلال خوارزميات متقدمة."
        />
        <meta
          name="keywords"
          content="رؤية الكمبيوتر، تحليل الصور، التعرف البصري، تعلم الآلة، الأتمتة البصرية، كشف الأشياء، خوارزميات الذكاء الاصطناعي، معالجة الصور، التعلم العميق، خدمات رؤية الكمبيوتر"
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
