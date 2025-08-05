import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterLogoWhite from '../../../public/assets/imgs/logo/footer-logo-white.png';

const Footer3 = () => {
  return (
    <footer className="footer" dir="rtl" style={{ fontFamily: '"Noto Sans Arabic", sans-serif' }}>
      <div className="footer__container">
        <div className="footer__column footer__branding">
          <div className="footer__logo">
            <Image src={FooterLogoWhite} alt="TaskUs Logo" width={200} />
          </div>
          <p style={{ color: "#fff" }}>
            نحن موجودون لتمكين الناس من تقديم الابتكار الجيد للغاية لأفضل الشركات في العالم.
          </p>

          <div className="footer__socials">
            <i className="icon linkedin"></i>
            <i className="icon facebook"></i>
            <i className="icon instagram"></i>
            <i className="icon youtube"></i>
            <i className="icon x"></i>
          </div>
        </div>

        <div className="footer__column">
          <h4>الخدمات</h4>
          <ul>
            <li><Link href="/service-details-1">تطوير الواجهة الأمامية</Link></li>
            <li><Link href="/service-details-2">تطوير الواجهة الخلفية</Link></li>
            <li><Link href="/service-details-3">تطبيقات الجوال</Link></li>
            <li><Link href="/service-details-4">حلول الذكاء الاصطناعي</Link></li>
            <li><Link href="/service-details-5">الأمن السيبراني</Link></li>
            <li><Link href="/service-details-6">حلول DevOps</Link></li>
            <li><Link href="/service-details-7">تطوير البرمجيات</Link></li>
            <li><Link href="/service-details-8">الاختبار وضمان الجودة</Link></li>
            <li><Link href="/service-details-9">الرؤية الحاسوبية</Link></li>
            <li><a href="tel:8886105270"><strong>الهاتف:</strong> (888) 610-DHSOL</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>توظيف خبير</h4>
          <ul>
            <li><Link href="/hire/php-engineer">مهندس PHP</Link></li>
            <li><Link href="/hire/shopify-expert">خبير Shopify</Link></li>
            <li><Link href="/hire/wordpress-developer">مطوّر WordPress</Link></li>
            <li><Link href="/hire/react-developer">مطوّر React</Link></li>
            <li><Link href="/hire/python-developer">مطوّر Python</Link></li>
            <li><Link href="/hire/nodejs-developer">مطوّر Node.js</Link></li>
            <li><Link href="/hire/java-developer">مطوّر Java</Link></li>
            <li><Link href="/hire/laravel-developer">مطوّر Laravel</Link></li>
            <li><Link href="/hire/magento-expert">خبير Magento</Link></li>
            <li><Link href="/hire/angular-developer">مطوّر Angular</Link></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>توظيف خبير</h4>
          <ul>
            <li><Link href="/hire/vuejs-developer">مطوّر Vue.js</Link></li>
            <li><Link href="/hire/aws-expert">خبير AWS</Link></li>
            <li><Link href="/hire/ios-developer">مطوّر iOS</Link></li>
            <li><Link href="/hire/android-developer">مطوّر Android</Link></li>
            <li><Link href="/hire/cloud-engineer">مهندس سحابي</Link></li>
            <li><Link href="/hire/uiux-designer">مصمم UI/UX</Link></li>
            <li><Link href="/hire/database-admin">مدير قواعد بيانات</Link></li>
            <li><Link href="/hire/devops-engineer">مهندس DevOps</Link></li>
            <li><Link href="/hire/fullstack-developer">مطوّر Fullstack</Link></li>
            <li><Link href="/hire/qa-engineer">مهندس QA</Link></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>روابط أخرى</h4>
          <ul>
            <li><Link href="/cost-estimator">حاسبة التكلفة</Link></li>
            <li><Link href="/cloud-advisor">مستشار السحابة</Link></li>
            <li><Link href="/project-timeline">مقدر زمن المشروع</Link></li>
            <li><Link href="/security-calculator">تقييم المخاطر الأمنية</Link></li>
            <li><Link href="/tech-recommender">مقترح التقنية</Link></li>
            <li><Link href="/timezone-converter">محول التوقيت</Link></li>
            <li><Link href="/about">عن الشركة</Link></li>
            <li><Link href="/career">الوظائف</Link></li>
            <li><Link href="/contact">اتصل بنا</Link></li>
            <li><Link href="/blog">المدونة</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <ul>
          <li><Link href="/privacy-policy">سياسة الخصوصية</Link></li>
          <li><Link href="/terms">الشروط والأحكام</Link></li>
          <li><Link href="/supplier-code">مدونة الموردين العالمية</Link></li>
          <li><Link href="/human-trafficking">سياسة مكافحة الاتجار بالبشر</Link></li>
          <li><Link href="/cookie-policy">سياسة ملفات تعريف الارتباط</Link></li>
          <li><Link href="/ai-policy">سياسة الذكاء الاصطناعي</Link></li>
        </ul>
        <p>© 2025 DH Solutions LLC</p>
      </div>
    </footer>
  );
};

export default Footer3;
