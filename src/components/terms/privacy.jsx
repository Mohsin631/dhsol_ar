import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page" dir="rtl" lang="ar">
      <Head>
        <title>سياسة الخصوصية | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <h1 className="privacy-title">سياسة الخصوصية</h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <h2 className="privacy-subtitle">مقدمة</h2>
            <p>
              في DH Solution، نحترم خصوصيتك ونحميها. توضح سياسة الخصوصية هذه أنواع المعلومات الشخصية التي نجمعها وكيف نستخدمها ونفصح عنها ونحميها عند استخدامك لخدماتنا. باستخدامك لخدماتنا، فإنك توافق على جمع واستخدام المعلومات وفقًا لهذه السياسة.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">المعلومات التي نجمعها</h2>
            <p>نجمع أنواعًا مختلفة من المعلومات لتقديم خدماتنا وتحسينها:</p>
            <ul>
              <li><strong>البيانات الشخصية:</strong> عند استخدامك لخدماتنا، قد نجمع بيانات شخصية مثل الاسم، البريد الإلكتروني، رقم الهاتف، وتفاصيل الدفع.</li>
              <li><strong>بيانات الاستخدام:</strong> قد نجمع معلومات حول كيفية وصولك إلى خدماتنا واستخدامك لها، بما في ذلك عنوان IP ونوع المتصفح وأنماط الاستخدام.</li>
              <li><strong>ملفات تعريف الارتباط (الكوكيز):</strong> نستخدم الكوكيز لتحسين تجربة المستخدم وجمع بيانات حول استخدام الموقع. يمكنك التحكم في إعدادات الكوكيز من خلال المتصفح الخاص بك.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">كيف نستخدم معلوماتك</h2>
            <p>نستخدم المعلومات التي نجمعها لأغراض متعددة، منها:</p>
            <ul>
              <li>تقديم خدماتنا وصيانتها.</li>
              <li>إعلامك بالتغييرات في خدماتنا.</li>
              <li>تقديم دعم العملاء.</li>
              <li>جمع التحليلات أو المعلومات المفيدة لتحسين خدماتنا.</li>
              <li>مراقبة استخدام الخدمات ومنع الاستخدام غير القانوني.</li>
              <li>التواصل معك، بما في ذلك إرسال المواد التسويقية (بموافقتك).</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">مشاركة البيانات</h2>
            <p>قد نشارك معلوماتك الشخصية في الحالات التالية:</p>
            <ul>
              <li><strong>مع مقدمي الخدمات:</strong> قد نستعين بشركات أو أفراد طرف ثالث لتسهيل خدماتنا أو المساعدة في تحليل استخدامها.</li>
              <li><strong>للامتثال القانوني:</strong> قد نفصح عن معلوماتك إذا طُلب منا ذلك بموجب القانون أو بناءً على طلبات قانونية.</li>
              <li><strong>التحويلات التجارية:</strong> في حالة دمج أو بيع أو شراء DH Solution، قد يتم نقل بياناتك إلى المالك الجديد.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">أمان البيانات</h2>
            <p>
              نحن نولي أهمية كبيرة لأمان معلوماتك الشخصية. نطبق مجموعة من التدابير الأمنية للحفاظ على سلامة البيانات. ومع ذلك، لا يمكن ضمان أمان البيانات بنسبة 100٪ عبر الإنترنت.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">حقوق حماية البيانات الخاصة بك</h2>
            <p>
              بناءً على موقعك الجغرافي، قد تكون لك حقوق الوصول إلى بياناتك أو تحديثها أو حذفها أو تقييد استخدامها. إذا كنت ترغب في ممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني الموضح أدناه.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">التغييرات على سياسة الخصوصية</h2>
            <p>
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، وسنخطرك إذا كانت هناك تغييرات جوهرية. نوصيك بمراجعة هذه السياسة بانتظام.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">اتصل بنا</h2>
            <p>
              إذا كانت لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية، يرجى الاتصال بنا على:
            </p>
            <p><strong>البريد الإلكتروني:</strong> legal@dhsol.net</p>
          </div>
        </div>
      </section>
    </div>
  );
}
