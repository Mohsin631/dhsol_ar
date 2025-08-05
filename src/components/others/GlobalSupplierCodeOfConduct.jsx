import Head from "next/head";

export default function GlobalSupplierCodeOfConduct() {
  return (
    <div className="privacy-policy-page" dir="rtl">
      <Head>
        <title>مدونة قواعد السلوك العالمية للموردين | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <h1 className="privacy-title">مدونة قواعد السلوك العالمية للموردين</h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <h2 className="privacy-subtitle">مقدمة</h2>
            <p>
              في DH Solution، نلتزم بالحفاظ على أعلى المعايير الأخلاقية في جميع مجالات أعمالنا. توضح مدونة قواعد السلوك العالمية هذه التوقعات التي نضعها لموردينا والمقاولين والشركاء لضمان عمليات مسؤولة وقانونية وأخلاقية.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">العمل وحقوق الإنسان</h2>
            <p>
              نتوقع من موردينا احترام حقوق العمال ومعاملتهم بكرامة واحترام:
            </p>
            <ul>
              <li><strong>العمالة الطوعية:</strong> يجب ألا يستخدم الموردون العمل القسري أو الإجباري بأي شكل.</li>
              <li><strong>عمالة الأطفال:</strong> يجب ألا يوظف الموردون أشخاصًا دون السن القانوني للعمل في بلدهم.</li>
              <li><strong>عدم التمييز:</strong> يجب أن تكون ممارسات التوظيف خالية من أي تمييز على أساس العرق أو الجنس أو الدين أو أي حالة أخرى محمية بموجب القانون.</li>
              <li><strong>الأجور العادلة:</strong> يجب دفع الحد الأدنى للأجور القانونية وتقديم جميع المزايا المقررة قانوناً.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">الصحة والسلامة</h2>
            <p>
              يجب على الموردين توفير بيئة عمل آمنة وصحية للموظفين. ويشمل ذلك:
            </p>
            <ul>
              <li>الامتثال لجميع القوانين واللوائح الصحية والسلامة المعمول بها.</li>
              <li>توفير التدريب الكافي والسلامة المهنية ومعدات الحماية.</li>
              <li>وضع إجراءات لمنع الحوادث والإصابات.</li>
              <li>ضمان وجود خطط للاستجابة للطوارئ.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">المسؤولية البيئية</h2>
            <p>
              نتوقع من الموردين تقليل الأثر البيئي والعمل بطريقة مستدامة:
            </p>
            <ul>
              <li><strong>الامتثال التنظيمي:</strong> يجب على الموردين الالتزام بجميع القوانين البيئية.</li>
              <li><strong>إدارة النفايات:</strong> يجب اتباع ممارسات التخلص وإعادة التدوير السليمة.</li>
              <li><strong>كفاءة الموارد:</strong> يجب مراقبة وتقليل استهلاك الطاقة والمياه قدر الإمكان.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">ممارسات العمل الأخلاقية</h2>
            <p>
              تتوقع DH Solution من مورديها الالتزام بالأخلاق والنزاهة في جميع تعاملاتهم:
            </p>
            <ul>
              <li><strong>مكافحة الفساد:</strong> يجب ألا يشارك الموردون في أي شكل من أشكال الرشوة أو الفساد.</li>
              <li><strong>السرية:</strong> يجب حماية المعلومات المشتركة وعدم الكشف عنها دون موافقة.</li>
              <li><strong>المنافسة العادلة:</strong> يجب عدم الانخراط في ممارسات احتكارية أو تواطؤ.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">الرصد والامتثال</h2>
            <p>
              تحتفظ DH Solution بالحق في تقييم مدى امتثال الموردين لهذه المدونة. وقد يؤدي عدم الامتثال إلى اتخاذ إجراءات تصحيحية أو إنهاء العلاقة.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">الإبلاغ عن الانتهاكات</h2>
            <p>
              يُشجَّع الموردون وموظفوهم على الإبلاغ عن أي انتهاكات لهذه المدونة بسرية وبدون خوف من الانتقام.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">تواصل معنا</h2>
            <p>
              إذا كانت لديك أي استفسارات بخصوص مدونة قواعد السلوك العالمية للموردين أو للإبلاغ عن الانتهاكات، يرجى التواصل معنا:
            </p>
            <p>
              <strong>البريد الإلكتروني:</strong> legal@dhsol.net
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
