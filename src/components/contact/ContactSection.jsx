import ContactForm from "@/components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section className="contact-full-section" style={{ direction: "rtl", textAlign: "right", backgroundColor: "#000" }}>
      <div className="contact-wrapper" style={{ display: "flex", flexDirection: "row-reverse", gap: "2rem" }}>
        <div className="contact-left" style={{ flex: 1 }}>
          <div className="content-box">
            <h1 className="tagline" style={{ color: "#fff", textTransform: "uppercase" }}>احصل على عرض تجريبي</h1>
            <h2 className="headline" style={{ color: "#fff" }}>
              نود أن نُرِيَك ما لدينا
            </h2>
            <p className="description" style={{ color: "#fff", lineHeight: "1.6" }}>
              هل أنت مستعد لترى كيف يمكن لـ <strong>DH Solutions</strong> أن تساعد في تحويل تقديم خدمتك؟ <br /><br />
              اتصل بنا، تحدث معنا، أو املأ النموذج للتواصل — نحن متحمسون لمعرفة التحديات التي يمكننا حلها معًا.
            </p>
          </div>
        </div>
        <div className="contact-right" style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
