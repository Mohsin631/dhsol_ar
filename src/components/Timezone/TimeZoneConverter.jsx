'use client';

import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import TimePicker from 'react-time-picker';

const TimeZoneConverter = () => {
  const [time, setTime] = useState('12:00');
  const [fromZone, setFromZone] = useState('UTC');
  const [toZone, setToZone] = useState('UTC');
  const [convertedTime, setConvertedTime] = useState('');
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    const zones = moment.tz.names();
    setTimeZones(zones);
  }, []);

  const convertTime = () => {
    if (!time) {
      setConvertedTime('يرجى إدخال وقت صالح');
      return;
    }

    const date = new Date(`1970-01-01T${time}:00Z`);
    const fromOffset = new Date(date.toLocaleString('en-US', { timeZone: fromZone })).getTime() - date.getTime();
    const convertedDate = new Date(date.getTime() + fromOffset + new Date().getTimezoneOffset() * 60000);
    const convertedTime = convertedDate.toLocaleString('en-US', { timeZone: toZone });

    setConvertedTime(convertedTime);
  };

  return (
    <section className="timezone-converter" dir="rtl">
      <div className="converter-card">
        <div className="converter-title">محول المناطق الزمنية</div>
        <div className="converter-description">
          قم بتحويل الوقت بين المناطق الزمنية المختلفة فورًا باستخدام هذه الأداة. مثالية للجدولة الدولية.
        </div>

        <div className="form-group">
          <label className="form-label">أدخل الوقت</label>
          <TimePicker
            onChange={setTime}
            value={time}
            className="form-time-picker"
            clockIcon={null}
            clearIcon={null}
          />
        </div>

        <div className="form-group">
          <label className="form-label">من المنطقة الزمنية</label>
          <select
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
            className="form-select"
          >
            {timeZones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">إلى المنطقة الزمنية</label>
          <select
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
            className="form-select"
          >
            {timeZones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        <button type="button" className="convert-btn" onClick={convertTime}>
          تحويل الوقت
        </button>

        {convertedTime && (
          <div className="result-box">
            <div className="result-title">الوقت المحول</div>
            <div className="result-text">{convertedTime}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TimeZoneConverter;
