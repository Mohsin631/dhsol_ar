'use client';

const SwitchToMainVersionButton = () => {
  const handleSwitch = () => {
    window.location.href = 'https://dhsol.net';
  };

  return (
    <>
      <button className="switch-button" onClick={handleSwitch}>
        النسخة الرئيسية
      </button>

      <style jsx>{`
        .switch-button {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px 20px;
          background-color: white;
          color: black;
          font-weight: 600;
          font-size: 14px;
          border: none;
          border-radius: 9999px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: background-color 0.3s ease;
          z-index: 9999;
        }

        .switch-button:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </>
  );
};

export default SwitchToMainVersionButton;
