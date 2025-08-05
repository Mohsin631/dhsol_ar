'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OurTeam() {
  const leadership = [
    {
      name: 'مدثر جليل',
      role: 'الرئيس التنفيذي',
      message:
        'كرئيس تنفيذي، أؤمن بالقيادة برؤية وتمكين فريقنا للابتكار بلا خوف.',
      image: '/assets/leaders/mudassir.jpg',
    },
    {
      name: 'محسن جليل',
      role: 'مدير العمليات',
      message:
        'التميز التشغيلي هو جوهر كل ما نقوم به — أضمن أننا نفي بوعودنا.',
      image: '/assets/leaders/mohsin.jpg',
    },
    {
      name: 'جواد فادي',
      role: 'رئيس منطقة الشرق الأوسط وشمال أفريقيا',
      message:
        'كرئيس قسم التكنولوجيا، أدفع التكنولوجيا قدمًا بشغف ورؤية استراتيجية.',
      image: '/assets/leaders/jawad.jpg',
    },
  ];

  const teamMembers = [
    { name: 'سيام علام', role: 'المدير المالي' },
    { name: 'محمد أحمد', role: 'رئيس قسم التكنولوجيا' },
    { name: 'قيصر فاروق', role: 'مهندس ذكاء اصطناعي أول' },
    { name: 'زيم أكبر', role: 'عالم بيانات' },
    { name: 'محمد أبرار', role: 'مهندس برمجيات' },
    { name: 'هارون شيخ', role: 'مهندس برمجيات' },
    { name: 'محمد علي', role: 'مهندس برمجيات' },
    { name: 'زیشان أحمد', role: 'قائد التسويق' },
    { name: 'عائشة رحمن', role: 'مدير المحتوى' },
    { name: 'أفاق أحمد', role: 'مصمم واجهات المستخدم وتجربة المستخدم' },
    { name: 'ندى عباس', role: 'مدير الموارد البشرية' },
    { name: 'بلال خان', role: 'مهندس ديف أوبس' },
    { name: 'سناء مير', role: 'مهندس ضمان الجودة' },
    { name: 'رضا علي', role: 'مهندس ضمان الجودة' },
    { name: 'هنا قريشي', role: 'محلل بيانات' },
    { name: 'أرسلان بشير', role: 'مطور تطبيقات الجوال' },
    { name: 'نور علي', role: 'مطور الواجهة الأمامية' },
  ];

  const [selectedLeader, setSelectedLeader] = useState(null);

  const generateInitials = (name) => {
    const parts = name.split(' ');
    // For Arabic names, initials can be first letters of first two words or just first if one word
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`
      : parts[0][0];
  };

  return (
    <section className="our-team" dir="rtl">
      <div className="container">
        <h2 className="team-heading">تعرف على قيادتنا</h2>
        <p className="team-subheading">
          العقول التي تقود رؤيتنا وثقافتنا وابتكارنا.
        </p>

        <div className="leadership-grid">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="leader-card"
              onClick={() => setSelectedLeader(leader)}
            >
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>

        <h2 className="team-heading">فريقنا</h2>
        <p className="team-subheading">
          تعرف على المحترفين الذين يجعلون مهمتنا حقيقة.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="avatar">{generateInitials(member.name)}</div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {selectedLeader && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedLeader(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              dir="rtl"
            >
              {selectedLeader.image && (
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  width={200}
                  height={200}
                  className="modal-photo"
                />
              )}
              <h3>{selectedLeader.name}</h3>
              <p className="modal-role">{selectedLeader.role}</p>
              <p className="modal-message">{selectedLeader.message}</p>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedLeader(null)}
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
