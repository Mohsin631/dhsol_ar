'use client';

import { useState } from 'react';

export default function CloudHostingAdvisor() {
  const [projectType, setProjectType] = useState('web');
  const [storage, setStorage] = useState(50);
  const [bandwidth, setBandwidth] = useState(100);
  const [recommendation, setRecommendation] = useState('');

  const calculateRecommendation = () => {
    let result = '';

    if (projectType === 'web') {
      if (storage <= 100 && bandwidth <= 200) {
        result = 'مُوصى به: استضافة مشتركة أو VPS أساسي (DigitalOcean، Linode، Bluehost)';
      } else {
        result = 'مُوصى به: VPS أو استضافة سحابية (AWS Lightsail، Google Cloud، Hetzner)';
      }
    } else if (projectType === 'mobile') {
      result = 'مُوصى به: خدمات سحابية للواجهة الخلفية مثل Firebase، AWS Amplify، أو Supabase';
    } else if (projectType === 'ai') {
      result = 'مُوصى به: سحابة عالية الأداء (AWS EC2، Azure ML، Paperspace، RunPod)';
    } else if (projectType === 'ecommerce') {
      result = 'مُوصى به: سحابة قابلة للتوسع مع CDN (Shopify Plus، AWS، Vercel + Headless CMS)';
    } else {
      result = 'مُوصى به: استضافة سحابية للأغراض العامة (AWS، Azure، GCP، DigitalOcean)';
    }

    setRecommendation(result);
  };

  return (
    <section className="cloud-hosting-advisor-full" dir="rtl" style={{ textAlign: 'right' }}>
      <div className="advisor-title">مستشار استضافة السحابة</div>
      <div className="advisor-description">
        اختر أفضل حل استضافة سحابية يناسب حجم واحتياجات مشروعك.
      </div>
      <form>
        <div className="form-group">
          <label className="form-label">نوع المشروع</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="form-select"
          >
            <option value="web">تطبيق ويب</option>
            <option value="mobile">تطبيق جوال</option>
            <option value="ai">مشروع ذكاء اصطناعي/تعلم آلي</option>
            <option value="ecommerce">تجارة إلكترونية</option>
            <option value="other">أخرى</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">التخزين المقدر (جيجابايت)</label>
          <input
            type="number"
            value={storage}
            onChange={(e) => setStorage(Number(e.target.value))}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">النطاق الترددي المقدر (جيجابايت/شهر)</label>
          <input
            type="number"
            value={bandwidth}
            onChange={(e) => setBandwidth(Number(e.target.value))}
            className="form-input"
          />
        </div>

        <button type="button" className="calculate-btn" onClick={calculateRecommendation}>
          احصل على التوصية
        </button>
      </form>

      {recommendation && (
        <div className="result-box">
          <div className="result-title">خيار الاستضافة المقترح</div>
          <div className="result-text">{recommendation}</div>
        </div>
      )}
    </section>
  );
}
