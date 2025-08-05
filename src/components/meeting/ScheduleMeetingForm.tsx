"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/assets/imgs/logo/1.png";

const ScheduleMeetingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    services: [""],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic goes here (e.g. send to backend or HubSpot)
    setSubmitted(true);
  };

  return (
    <div className="schedule-meeting-form">
      <div className="logo-wrapper">
        <Image src={Logo} alt="DH Solutions Logo" width={100} height={100} />
      </div>

      {!submitted ? (
        <>
          <h2>Schedule a Meeting</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="services"
              value={formData.services[0]}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, services: [e.target.value] }))
              }
              required
            >
              <option value="">Select a Service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="IT Consultancy">IT Consultancy</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Cloud Solutions">Cloud Solutions</option>
              <option value="Custom Software">Custom Software</option>
            </select>

            <textarea
              name="message"
              placeholder="Project Details (optional)"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />

            <button type="submit">Book Now</button>
          </form>
        </>
      ) : (
        <div className="thank-you">
          <h2>Thank You!</h2>
          <p>We’ve received your request and will be in touch shortly.</p>
        </div>
      )}
    </div>
  );
};

export default ScheduleMeetingForm;
