import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TermsAndConditions from "@/components/terms/terms";
import ProjectTimelineEstimator from "@/components/project-timeline-estimator/project-timeline";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>مقدر الجدول الزمني للمشروع | DH Solution</title>
        <meta name="description" content="مقدر الجدول الزمني للمشروع | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <ProjectTimelineEstimator />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
