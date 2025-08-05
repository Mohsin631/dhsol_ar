"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    companySize: "",
    service: "",
    agree: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.agree) {
      alert("يرجى الموافقة على سياسة الخصوصية.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
          companySize: "",
          service: "",
          agree: false,
        });
      } else {
        throw new Error("خطأ في الخادم");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} dir="rtl">
      {status === "success" ? (
        <div className={styles.thankyou}>
          <div className={styles.checkmark}>✔</div>
          <h2>شكرًا لك!</h2>
          <p>تم إرسال رسالتك بنجاح.</p>
        </div>
      ) : (
        <>
          <input
            name="name"
            type="text"
            placeholder="الاسم الكامل"
            required
            value={form.name}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            name="email"
            type="email"
            placeholder="البريد الإلكتروني"
            required
            value={form.email}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            name="subject"
            type="text"
            placeholder="الموضوع"
            required
            value={form.subject}
            onChange={handleChange}
            className={styles.input}
          />

          <select
            name="companySize"
            required
            value={form.companySize}
            onChange={handleChange}
            className={styles.formSelect}
          >
            <option value="">حجم الشركة</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="200+">200+</option>
          </select>

          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={styles.formSelect}
          >
            <option value="">الخدمة المهتم بها</option>
            <option value="web-development">تطوير الويب</option>
            <option value="mobile-app">تطوير تطبيقات الجوال</option>
            <option value="uiux">تصميم UI/UX</option>
            <option value="cyber-security">الأمن السيبراني</option>
            <option value="artificial-intelligence">الذكاء الاصطناعي</option>
            <option value="devops">حلول DevOps</option>
            <option value="qa-testing">ضمان الجودة والاختبار</option>
            <option value="consulting">الاستشارات التقنية</option>
          </select>

          <textarea
            name="message"
            placeholder="رسالتك"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={styles.textarea}
          />

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className={styles.checkbox}
              required
            />
            أوافق على{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              سياسة الخصوصية
            </a>
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className={styles.button}
          >
            {status === "loading" ? "جاري الإرسال..." : "إرسال الرسالة"}
          </button>

          {status === "error" && (
            <p className={styles.error}>حدث خطأ ما. يرجى المحاولة مرة أخرى.</p>
          )}
        </>
      )}
    </form>
  );
}
