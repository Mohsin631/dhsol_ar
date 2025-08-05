'use client';

import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function CostEstimator() {
  const hourlyRate = 20; // USD per hour

  // Define state variables for each service's hours
  const [frontEndHours, setFrontEndHours] = useState(0);
  const [backEndHours, setBackEndHours] = useState(0);
  const [mobileAppHours, setMobileAppHours] = useState(0);
  const [aiMlHours, setAiMlHours] = useState(0);
  const [cyberSecurityHours, setCyberSecurityHours] = useState(0);
  const [devOpsHours, setDevOpsHours] = useState(0);
  const [customSoftwareHours, setCustomSoftwareHours] = useState(0);
  const [qaTestingHours, setQaTestingHours] = useState(0);

  // Calculate total cost
  const totalCost =
    (Number(frontEndHours) +
      Number(backEndHours) +
      Number(mobileAppHours) +
      Number(aiMlHours) +
      Number(cyberSecurityHours) +
      Number(devOpsHours) +
      Number(customSoftwareHours) +
      Number(qaTestingHours)) *
    hourlyRate;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add title to PDF
    doc.setFontSize(20);
    doc.text("تقرير تقدير التكلفة", 14, 20);

    doc.setFontSize(12);
    doc.text(`السعر بالساعة: $${hourlyRate} لكل ساعة`, 14, 30);

    // Add table with autoTable
    doc.autoTable({
      head: [["الخدمة", "الساعات", "التكلفة المقدرة"]],
      body: [
        ["تطوير الواجهة الأمامية", frontEndHours, `$${frontEndHours * hourlyRate}`],
        ["تطوير الواجهة الخلفية", backEndHours, `$${backEndHours * hourlyRate}`],
        ["تطوير تطبيق الجوال", mobileAppHours, `$${mobileAppHours * hourlyRate}`],
        ["حلول الذكاء الاصطناعي/التعلم الآلي", aiMlHours, `$${aiMlHours * hourlyRate}`],
        ["الأمن السيبراني", cyberSecurityHours, `$${cyberSecurityHours * hourlyRate}`],
        ["حلول DevOps", devOpsHours, `$${devOpsHours * hourlyRate}`],
        ["البرمجيات المخصصة", customSoftwareHours, `$${customSoftwareHours * hourlyRate}`],
        ["اختبار وضمان الجودة", qaTestingHours, `$${qaTestingHours * hourlyRate}`],
      ],
      startY: 40, // Position to start the table (below the title)
    });

    // Add total cost to the end of the table
    doc.text(`إجمالي التكلفة المقدرة: $${totalCost}`, 14, doc.lastAutoTable.finalY + 10);

    // Save the PDF with the specified filename
    doc.save("تقرير_تقدير_التكلفة.pdf");
  };

  return (
    <section className="cost-estimator-section" dir="rtl" style={{ textAlign: "right" }}>
      <div className="container">
        <h2 className="section-heading">تقدير التكلفة</h2>
        <div className="form-container">
          <div className="form-group">
            <label>تطوير الواجهة الأمامية (ساعات)</label>
            <input
              type="number"
              value={frontEndHours}
              onChange={(e) => setFrontEndHours(e.target.value)}
              placeholder="أدخل عدد الساعات"
            />
          </div>
          <div className="form-group">
            <label>تطوير الواجهة الخلفية (ساعات)</label>
            <input
              type="number"
              value={backEndHours}
              onChange={(e) => setBackEndHours(e.target.value)}
              placeholder="أدخل عدد الساعات"
            />
          </div>
          <div className="form-group">
            <label>تطوير تطبيق الجوال (ساعات)</label>
            <input
              type="number"
              value={mobileAppHours}
              onChange={(e) => setMobileAppHours(e.target.value)}
              placeholder="أدخل عدد الساعات"
            />
          </div>
          <div className="form-group">
            <label>حلول الذكاء الاصطناعي/التعلم الآلي (ساعات)</label>
            <input
              type="number"
              value={aiMlHours}
              onChange={(e) => setAiMlHours(e.target.value)}
              placeholder="أدخل عدد الساعات"
            />
          </div>
          <div className="form-group">
            <label>الأمن السيبراني (ساعات)</label>
            <input
              type="number"
              value={cyberSecurityHours}
              onChange={(e) => setCyberSecurityHours(e.target.value)}
              placeholder="أدخل عدد الساعات"
            />
          </div>
          <div className="form-group">
            <label>حلول DevOps (ساعات)</label>
            <input
              type="number"
              value={devOpsHours}
              onChange={(e) => setDevOpsHours(e.target.value)}
              placeholder="أدخل عدد الساعات"
            />
          </div>
          <div className="form-group">
            <label>البرمجيات المخصصة (ساعات)</label>
            <input
              type="number"
              value={customSoftwareHours}
              onChange={(e) => setCustomSoftwareHours(e.target.value)}
              placeholder="أدخل عدد الساعات"
            />
          </div>
          <div className="form-group">
            <label>اختبار وضمان الجودة (ساعات)</label>
            <input
              type="number"
              value={qaTestingHours}
              onChange={(e) => setQaTestingHours(e.target.value)}
              placeholder="أدخل عدد الساعات"
            />
          </div>
          <div className="total-cost">
            <h3>إجمالي التكلفة المقدرة: ${totalCost}</h3>
          </div>
          <button onClick={handleDownloadPDF} className="download-btn">
            تحميل التقرير بصيغة PDF
          </button>
        </div>
      </div>
    </section>
  );
}
