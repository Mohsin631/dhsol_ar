"use client";

import { useState } from "react";

export default function SecurityRiskAssessor() {
  const [formData, setFormData] = useState({
    dataType: "",
    authMethod: "",
    hasPayments: false,
    hasUserUpload: false,
    industry: ""
  });
  const [riskLevel, setRiskLevel] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const assessRisk = () => {
    let score = 0;
    if (formData.dataType === "personal") score += 2;
    if (formData.dataType === "financial") score += 3;
    if (formData.authMethod === "password") score += 1;
    if (formData.authMethod === "2fa") score -= 1;
    if (formData.hasPayments) score += 2;
    if (formData.hasUserUpload) score += 2;
    if (formData.industry === "health") score += 3;
    if (formData.industry === "ecommerce") score += 2;

    let risk = "منخفض";
    if (score > 4 && score <= 7) risk = "متوسط";
    if (score > 7) risk = "مرتفع";
    setRiskLevel(risk);
  };

  return (
    <section className="security-risk-assessor" dir="rtl" style={{textAlign: "right"}}>
      <div className="container">
        <h1>🔐 تقييم مخاطر الأمان</h1>
        <p>افهم المخاطر الأمنية المحتملة بناءً على إعداد منصة العمل الرقمية الخاصة بك.</p>

        <div className="form-grid">
          <div className="form-group">
            <label>نوع البيانات المخزنة</label>
            <select name="dataType" onChange={handleChange}>
              <option value="">-- اختر --</option>
              <option value="personal">بيانات شخصية</option>
              <option value="financial">بيانات مالية</option>
              <option value="general">معلومات عامة</option>
            </select>
          </div>

          <div className="form-group">
            <label>طريقة توثيق المستخدم</label>
            <select name="authMethod" onChange={handleChange}>
              <option value="">-- اختر --</option>
              <option value="none">لا يوجد</option>
              <option value="password">كلمة مرور</option>
              <option value="2fa">توثيق ثنائي العامل</option>
            </select>
          </div>

          <div className="form-group checkbox">
            <input type="checkbox" name="hasPayments" onChange={handleChange} />
            <label>يحتوي على مدفوعات عبر الإنترنت</label>
          </div>

          <div className="form-group checkbox">
            <input type="checkbox" name="hasUserUpload" onChange={handleChange} />
            <label>يمكن للمستخدمين رفع ملفات</label>
          </div>

          <div className="form-group">
            <label>الصناعة</label>
            <select name="industry" onChange={handleChange}>
              <option value="">-- اختر --</option>
              <option value="health">الرعاية الصحية</option>
              <option value="ecommerce">التجارة الإلكترونية</option>
              <option value="education">التعليم</option>
              <option value="other">أخرى</option>
            </select>
          </div>
        </div>

        <button className="assess-btn" onClick={assessRisk}>تقييم المخاطر</button>

        {riskLevel && (
          <div className={`result-box ${riskLevel === "منخفض" ? "low" : riskLevel === "متوسط" ? "medium" : "high"}`}>
            <h2>مستوى المخاطر: {riskLevel}</h2>
            <p>
              {riskLevel === "منخفض" && "منصتك لديها مخاطر قليلة. حافظ على الفحوصات الأمنية الدورية."}
              {riskLevel === "متوسط" && "يُفضل تحسين التوثيق، تشفير البيانات ومراقبة السجلات."}
              {riskLevel === "مرتفع" && "مخاطر عالية! يجب تنفيذ إجراءات أمنية صارمة وفحوصات عاجلة."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
