import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TermsAndConditions from "@/components/terms/terms";
import TechStackRecommender from "@/components/recommender/recommender";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>مُوصي التقنيات | DH Solution</title>
        <meta name="description" content="مُوصي التقنيات | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <TechStackRecommender />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
