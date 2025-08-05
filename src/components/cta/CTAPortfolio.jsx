import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ScheduleMeetingSection() {
  return (
    <div className="schedule-meeting-section">
      <Head>
        <title>Schedule a Meeting | DH Solution</title>
      </Head>

      {/* Section */}
      <section className="schedule-section">
        <div className="container">
          <div className="schedule-content">
            <Image
              className="schedule-logo"
              src="/assets/imgs/logo/1.png"
              alt="DH Solution Logo"
              width={120} // replace with your actual logo width
              height={60} // replace with your actual logo height
              priority
            />
            <Link href="/contact" className="schedule-btn">
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
