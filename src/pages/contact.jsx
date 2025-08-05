import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ContactSection from "@/components/contact/ContactSection";
import GlobalPresence from "@/components/contact/GlobalPresence";
import QuickLinks from "@/components/contact/quicklinks";
import TrustSection from "@/components/contact/TrustSection";
import WhiteFAQ from "@/components/contact/faqs";

const Contact = () => {
  return (
    <>
      <Head>
        <title>اتصل بـ DH Solution - تواصل معنا</title>
        <meta
          name="description"
          content="تواصل مع DH Solution للاستفسارات أو الدعم أو الشراكات. تواصل مع فريقنا للمساعدة أو استكشف وجودنا العالمي."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="اتصل بـ DH Solution, اتصل بنا, استفسار تطوير برمجيات, وجود عالمي, دعم, شراكة, تواصل"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="اتصل بـ DH Solution - تواصل معنا" />
        <meta
          property="og:description"
          content="هل لديك أسئلة أو تحتاج دعمًا؟ تواصل مع DH Solution لجميع الاستفسارات، أو استكشف خدماتنا ووجودنا العالمي."
        />
        <meta property="og:url" content="https://dhsol.net/contact" />
        <meta property="og:image" content="https://dhsol.net/images/contact-hero.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="اتصل بـ DH Solution - تواصل معنا" />
        <meta
          name="twitter:description"
          content="تواصل مع DH Solution للاستفسارات أو الدعم أو الشراكات. استكشف وجودنا العالمي وخدماتنا."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/contact-hero.jpg" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3" footer="footer3">
          <ContactSection />
          <GlobalPresence />
          <QuickLinks />
          <TrustSection />
          <WhiteFAQ />
        </RootLayout>
      </main>
    </>
  );
};

export default Contact;
