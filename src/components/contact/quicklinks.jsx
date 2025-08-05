"use client";
import Link from "next/link";
import { BookOpen, Briefcase, ShieldCheck, Info } from "lucide-react";

const QuickLinks = () => {
  return (
    <section className="quick__links" dir="rtl">
      <div className="container">
        <h2 className="quick__links-title">🧾 روابط سريعة / مصادر</h2>
        <div className="quick__links-grid">
          <Link href="/career" className="quick__card">
            <Briefcase size={32} />
            <span>الوظائف</span>
          </Link>
          <Link href="/about" className="quick__card">
            <Info size={32} />
            <span>من نحن</span>
          </Link>
          <Link href="/terms" className="quick__card">
            <ShieldCheck size={32} />
            <span>الشروط / الخصوصية</span>
          </Link>
          <Link href="/blog" className="quick__card">
            <BookOpen size={32} />
            <span>المدونة / الرؤى</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
