'use client';

import { useState } from 'react';

const recommendations = {
  website: {
    frontend: 'React.js + Tailwind CSS',
    backend: 'Node.js + Express',
    db: 'MongoDB',
    reason: 'مناسبة لتطوير متكامل سريع وقابل للتوسع.',
  },
  mobile: {
    frontend: 'React Native',
    backend: 'Firebase أو Node.js',
    db: 'Firestore',
    reason: 'دعم متعدد المنصات ونشر سريع.',
  },
  ai: {
    frontend: 'Streamlit أو React.js',
    backend: 'Python + FastAPI',
    db: 'PostgreSQL',
    reason: 'أفضل للعمل على حلول الذكاء الاصطناعي والنشر.',
  },
  ecommerce: {
    frontend: 'Next.js + Tailwind CSS',
    backend: 'Node.js أو Shopify',
    db: 'MySQL أو MongoDB',
    reason: 'محسنة جداً للأداء وقابلية التوسع.',
  },
};

export default function TechStackRecommender() {
  const [projectType, setProjectType] = useState('');
  const [stack, setStack] = useState(null);

  const handleRecommend = () => {
    setStack(recommendations[projectType]);
  };

  return (
    <section className="tech-stack-section" dir="rtl">
      <div className="container">
        <h2 className="title">مُوصي تكنولوجيا المشاريع</h2>
        <p className="subtitle">اختر نوع المشروع للحصول على توصية بتقنيات مناسبة.</p>
        <div className="input-group">
          <select
            className="selector"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="">-- اختر نوع المشروع --</option>
            <option value="website">موقع إلكتروني</option>
            <option value="mobile">تطبيق موبايل</option>
            <option value="ai">حل ذكاء اصطناعي</option>
            <option value="ecommerce">تجارة إلكترونية</option>
          </select>
          <button onClick={handleRecommend} className="btn-recommend">
            توصية التقنية
          </button>
        </div>

        {stack && (
          <div className="stack-result">
            <h3>التقنيات الموصى بها</h3>
            <ul>
              <li><strong>الواجهة الأمامية:</strong> {stack.frontend}</li>
              <li><strong>الواجهة الخلفية:</strong> {stack.backend}</li>
              <li><strong>قاعدة البيانات:</strong> {stack.db}</li>
              <li><strong>السبب:</strong> {stack.reason}</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
