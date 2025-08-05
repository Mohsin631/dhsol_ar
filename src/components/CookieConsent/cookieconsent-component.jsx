import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (cookieAccepted) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  const handleManage = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    setIsModalOpen(false);
    alert("تم حفظ تفضيلاتك!");
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCookiePreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="cookie-consent-banner" dir="rtl">
        <div className="cookie-content">
          <p className="cookie-text">
            مرحبًا! نحن نستخدم ملفات تعريف الارتباط لتخصيص وتحسين تجربتك. بالاستمرار في تصفح موقعنا، فإنك توافق على استخدامنا لملفات تعريف الارتباط (كما هو موضح في سياسة ملفات تعريف الارتباط الخاصة بنا) أو يمكنك إدارة التفضيلات بنفسك.
          </p>
          <div className="cookie-actions">
            <button className="cookie-btn" onClick={handleAccept}>
              موافق، فهمت!
            </button>
            <button className="manage-btn" onClick={handleManage}>
              إدارة ملفات تعريف الارتباط
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="cookie-modal" dir="rtl">
          <div className="cookie-modal-content">
            <h2>إدارة تفضيلات ملفات تعريف الارتباط</h2>
            <div className="cookie-options">
              <label>
                <input
                  type="checkbox"
                  name="essential"
                  checked={cookiePreferences.essential}
                  disabled
                  onChange={handleCheckboxChange}
                />
                ملفات تعريف الارتباط الضرورية (مفعّلة دائمًا)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="functional"
                  checked={cookiePreferences.functional}
                  onChange={handleCheckboxChange}
                />
                ملفات تعريف الارتباط الوظيفية
              </label>
              <label>
                <input
                  type="checkbox"
                  name="marketing"
                  checked={cookiePreferences.marketing}
                  onChange={handleCheckboxChange}
                />
                ملفات تعريف الارتباط التسويقية
              </label>
            </div>
            <div className="modal-actions">
              <button onClick={handleSavePreferences}>حفظ التفضيلات</button>
              <button onClick={handleCloseModal}>إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
