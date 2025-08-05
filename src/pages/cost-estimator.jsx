import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CostEstimator from "@/components/costestimator/CostEstimator";
import FaqCTA from "@/components/cta/FaqCTA";

const Faq = () => {
  return (
    <>
      <Head>
        <title>حاسبة التكاليف - حلول DH</title>
        <meta
          name="description"
          content="استخدم حاسبة التكاليف من حلول DH لحساب التكاليف التقديرية لمشاريع تطوير البرمجيات الخاصة بك. احصل على تفصيل دقيق لتكاليف الخدمات مثل تطوير الويب، حلول الذكاء الاصطناعي، تطوير تطبيقات الجوال والمزيد."
        />
        <meta
          name="keywords"
          content="حاسبة التكاليف، تطوير البرمجيات، حساب التكاليف، تقدير المشاريع، حلول DH، تكلفة خدمات البرمجيات، تطوير الويب، تطوير تطبيقات الجوال، حلول الذكاء الاصطناعي"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="حاسبة التكاليف - حلول DH" />
        <meta
          property="og:description"
          content="قم بتقدير تكاليف تطوير البرمجيات الخاصة بك باستخدام أداة حاسبة التكاليف السهلة من حلول DH. احسب تكلفة مشروعك خلال دقائق."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/cost-estimator" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="حاسبة التكاليف - حلول DH" />
        <meta
          name="twitter:description"
          content="احصل على تقدير دقيق لمشروع البرمجيات الخاص بك باستخدام أداة حاسبة التكاليف من حلول DH. قدر تكلفة تطوير الويب، الذكاء الاصطناعي، تطبيقات الجوال والمزيد."
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>

      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <CostEstimator />
          <FaqCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Faq;
