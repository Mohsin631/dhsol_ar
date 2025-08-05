import Head from "next/head";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="terms-and-conditions-page" dir="rtl" lang="ar">
      <Head>
        <title>الشروط والأحكام | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <h1 className="terms-title">الشروط والأحكام</h1>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-section">
            <h2 className="terms-subtitle">مقدمة</h2>
            <p>
              مرحبًا بكم في DH Solution. تحكم هذه الشروط والأحكام (&quot;الشروط&quot;) استخدامك لموقعنا وخدماتنا. باستخدامك لأي جزء من خدماتنا، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق، يُرجى عدم استخدام خدماتنا.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">التعريفات</h2>
            <p>لأغراض هذه الشروط والأحكام، تنطبق التعريفات التالية:</p>
            <ul>
              <li><strong>&quot;نحن&quot; أو &quot;الشركة&quot;:</strong> تشير إلى DH Solution.</li>
              <li><strong>&quot;أنت&quot; أو &quot;المستخدم&quot;:</strong> تشير إلى مستخدم أو عميل DH Solution.</li>
              <li><strong>&quot;الخدمات&quot;:</strong> تشمل جميع الخدمات المقدمة من قبل DH Solution مثل تطوير البرمجيات، الأمن السيبراني، حلول الذكاء الاصطناعي، وغيرها.</li>
              <li><strong>&quot;المحتوى&quot;:</strong> جميع النصوص، الرسومات، الشعارات، الصور، والمواد الأخرى على الموقع أو من خلال الخدمات.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">الخدمات المقدمة</h2>
            <p>توفر DH Solution مجموعة متنوعة من الخدمات لدعم الأعمال في المجال الرقمي، بما في ذلك:</p>
            <ul>
              <li>تطوير البرمجيات المخصصة</li>
              <li>حلول الأمن السيبراني</li>
              <li>تطوير حلول الذكاء الاصطناعي</li>
              <li>خدمات الحوسبة السحابية</li>
              <li>تحليل البيانات والاستخبارات التجارية</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">مسؤوليات المستخدم</h2>
            <p>بصفتك مستخدمًا، فأنت مسؤول عن ما يلي:</p>
            <ul>
              <li>الامتثال لجميع القوانين المحلية والوطنية.</li>
              <li>عدم استخدام الخدمات لأغراض غير قانونية أو غير مصرح بها.</li>
              <li>عدم انتهاك أي شروط أو إرشادات صادرة من DH Solution.</li>
              <li>الحفاظ على سرية معلومات حسابك.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">شروط الدفع</h2>
            <p>
              تخضع جميع خدمات DH Solution لشروط الدفع المحددة في العقد أو الاتفاقية. يجب إجراء الدفعات وفق الجدول المتفق عليه. قد يتم فرض رسوم إضافية في حالة التأخير.
            </p>
            <ul>
              <li>طرق الدفع: التحويل البنكي، بطاقة الائتمان، PayPal</li>
              <li>يتم إصدار الفواتير بعد إنجاز الخدمات أو حسب الفترات المتفق عليها.</li>
              <li>يتم تقديم المبالغ المستردة فقط في حال عدم تقديم الخدمة حسب الاتفاق.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">الخصوصية وحماية البيانات</h2>
            <p>
              تحترم DH Solution خصوصيتك. نقوم بجمع ومعالجة البيانات الشخصية وفقًا لسياسة الخصوصية الخاصة بنا، والتي تتوافق مع القوانين المعمول بها.
            </p>
            <p>
              لمزيد من التفاصيل، يُرجى الرجوع إلى{" "}
              <Link href="/privacy-policy">سياسة الخصوصية</Link>.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">تحديد المسؤولية</h2>
            <p>
              لا تتحمل DH Solution أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة أو عرضية ناتجة عن استخدامك لخدماتنا، بما في ذلك فقدان البيانات أو الدخل.
            </p>
            <p>توافق على تعويض DH Solution عن أي مطالبات ناتجة عن إساءة استخدامك للخدمات.</p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">تعديلات الشروط</h2>
            <p>
              تحتفظ DH Solution بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة، ويُعد استمرار استخدامك للخدمات قبولًا للتعديلات.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">القانون المعمول به</h2>
            <p>
              تخضع هذه الشروط لقوانين البلد الذي تعمل فيه DH Solution. يتم حل أي نزاعات في المحاكم المختصة بذلك البلد.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">معلومات الاتصال</h2>
            <p>إذا كان لديك أي استفسارات حول هذه الشروط، يُرجى التواصل معنا عبر:</p>
            <p>
              <strong>البريد الإلكتروني:</strong> legal@dhsol.net<br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
