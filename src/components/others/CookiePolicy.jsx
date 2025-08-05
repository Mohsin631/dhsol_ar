import React from "react";
import Head from "next/head";

export default function CookiePolicy() {
  return (
    <div className="privacy-policy-page" dir="rtl" lang="ar">
      <Head>
        <title>سياسة الكوكيز | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <h1 className="privacy-title">سياسة الكوكيز</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <h2 className="privacy-subtitle">المقدمة</h2>
            <p>
              تشرح سياسة الكوكيز هذه كيف تستخدم DH Solution الكوكيز وتقنيات التتبع المماثلة عند زيارتك لموقعنا الإلكتروني. باستخدامك لموقعنا، فإنك توافق على استخدام الكوكيز وفقًا لهذه السياسة.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">ما هي الكوكيز؟</h2>
            <p>
              الكوكيز هي ملفات نصية صغيرة يتم تخزينها على جهازك من خلال متصفح الويب الخاص بك. تساعد المواقع على تذكر تفضيلاتك، وتحسين الأداء، وتوفير تحليلات دقيقة.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">أنواع الكوكيز التي نستخدمها</h2>
            <p>تستخدم DH Solution الأنواع التالية من الكوكيز:</p>
            <ul>
              <li><strong>الكوكيز الأساسية:</strong> ضرورية لتشغيل موقعنا ولا يمكن تعطيلها.</li>
              <li><strong>كوكيز الأداء:</strong> تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول.</li>
              <li><strong>كوكيز الوظائف:</strong> تتيح لنا تذكر تفضيلاتك وتحسين تجربة المستخدم.</li>
              <li><strong>كوكيز الاستهداف/الإعلانات:</strong> قد تُستخدم لتقديم إعلانات ذات صلة وتتبع فعالية حملات التسويق.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">كيفية استخدامنا للكوكيز</h2>
            <p>نستخدم الكوكيز من أجل:</p>
            <ul>
              <li>تمكين وظائف الموقع والتنقل.</li>
              <li>تحليل حركة الموقع وسلوك المستخدم.</li>
              <li>تخصيص المحتوى وتجربة المستخدم.</li>
              <li>تقديم وقياس فعالية حملات التسويق.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">إدارة الكوكيز</h2>
            <p>
              يمكنك التحكم في الكوكيز وإدارتها من خلال إعدادات المتصفح الخاص بك. تسمح معظم المتصفحات بحظر أو حذف الكوكيز. يرجى ملاحظة أن تعطيل الكوكيز قد يؤثر على وظائف موقعنا.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">كوكيز الطرف الثالث</h2>
            <p>
              قد يتم وضع بعض الكوكيز من قبل خدمات طرف ثالث تظهر على صفحاتنا. نحن لا نتحكم في هذه الكوكيز وننصح بمراجعة سياسات الكوكيز الخاصة بهذه الأطراف.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">التغييرات على هذه السياسة</h2>
            <p>
              قد نقوم بتحديث سياسة الكوكيز هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة. استمرار استخدامك لموقعنا بعد أي تغييرات يعني قبولك للسياسة الجديدة.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">اتصل بنا</h2>
            <p>إذا كان لديك أي أسئلة حول سياسة الكوكيز هذه، يرجى الاتصال بنا على:</p>
            <p>
              <strong>البريد الإلكتروني:</strong> legal@dhsol.net
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
