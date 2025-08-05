"use client";

import { useState } from "react";
import Head from "next/head";

export default function ProjectTimelineEstimator() {
  const [features, setFeatures] = useState([]);
  const [teamSize, setTeamSize] = useState(1);
  const [complexity, setComplexity] = useState("medium");
  const [estimatedWeeks, setEstimatedWeeks] = useState(null);

  const featureList = [
    "توثيق المستخدم",
    "دمج الدفع",
    "نظام الدردشة",
    "لوحة تحكم الإدارة",
    "دمج واجهة برمجة التطبيقات",
    "التحليلات والتقارير",
    "الإشعارات الفورية",
    "دعم متعدد اللغات",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let baseTime = features.length * 1.5; // 1.5 أسبوع لكل ميزة

    if (complexity === "high") baseTime *= 1.5;
    if (complexity === "low") baseTime *= 0.8;

    const adjustedTime = baseTime / (teamSize * 0.8); // إنتاجية الفريق

    setEstimatedWeeks(Math.ceil(adjustedTime));
  };

  const toggleFeature = (feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter((f) => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  return (
    <>
      <Head>
        <title>تقدير مدة المشروع | حلول DH</title>
        <meta name="description" content="قدّر مدة مشروعك بناءً على الميزات، التعقيد، وحجم الفريق." />
        <meta name="keywords" content="تقدير مدة المشروع، تخطيط المشروع، أدوات حلول DH" />
      </Head>
      <div className="timeline-tool" dir="rtl" style={{ textAlign: "right" }}>
        <h1>📆 تقدير مدة المشروع</h1>
        <p>قدّر كم من الوقت قد يستغرق تطوير مشروعك بناءً على المعايير المختارة.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>اختر الميزات:</label>
            <div className="features-grid">
              {featureList.map((feature, index) => (
                <button
                  type="button"
                  key={index}
                  className={`feature-button ${features.includes(feature) ? "active" : ""}`}
                  onClick={() => toggleFeature(feature)}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>حجم الفريق:</label>
            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              min="1"
              max="20"
            />
          </div>

          <div className="form-group">
            <label>تعقيد المشروع:</label>
            <select
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
            >
              <option value="low">منخفض</option>
              <option value="medium">متوسط</option>
              <option value="high">مرتفع</option>
            </select>
          </div>

          <button type="submit" className="calculate-btn">
            حساب المدة
          </button>
        </form>

        {estimatedWeeks !== null && (
          <div className="result-box">
            <h2>المدة المقدرة</h2>
            <p>🕒 قد يستغرق مشروعك حوالي <strong>{estimatedWeeks} أسابيع</strong> لإكماله.</p>
          </div>
        )}
      </div>
    </>
  );
}
