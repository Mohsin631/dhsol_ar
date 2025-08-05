// pages/team.jsx
import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TeamCounter from "@/components/counter/TeamCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutTeam from "@/components/team/AboutTeam";
import TeamTestimonials from "@/components/team/testimonials";

const Team = () => {
  return (
    <div>
      <Head>
        <title>الفريق</title>
        <meta
          name="description"
          content="تعرف على فريقنا من الخبراء الذين يقودون الابتكار والإبداع والنجاح في كل مشروع نقوم به. تعرّف على الأفراد الموهوبين وراء خدماتنا."
        />
        <meta
          name="keywords"
          content="الفريق, أعضاء الفريق, وكالة رقمية, فريق إبداعي, فريق خبراء, فريق أعمال, نجاح الفريق, الابتكار, محترفون, خبراء رقميون"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main dir="rtl">
        <RootLayout header="header3">
          <AboutTeam />
          <TeamCounter />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default Team;
