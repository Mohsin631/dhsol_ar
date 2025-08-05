import Head from "next/head";

export default function CareerHero() {
  return (
    <div className="terms-and-conditions-page" dir="rtl" lang="ar">
      <Head>
        <title>الوظائف | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <h1 className="terms-title">الوظائف</h1>
          <p className="terms-subtitle">
            انضم إلى فريق DH Solution وابدأ مسيرتك المهنية في بيئة عمل مبتكرة وداعمة.
          </p>
        </div>
      </section>
    </div>
  );
}
