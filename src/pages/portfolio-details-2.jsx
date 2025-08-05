import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioDetails2 from "@/components/portfolio/PortfolioDetails2";
import ScheduleMeetingSection from "@/components/cta/CTAPortfolio";

const PortfolioDetails = () => {
  return (
    <>
      <Head>
        <title>تفاصيل الملف الشخصي</title>
        <meta name="description" content="وصف تفاصيل الملف الشخصي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <PortfolioDetails2 />
          <ScheduleMeetingSection />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioDetails;
