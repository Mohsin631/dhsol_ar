"use client";
import { useEffect } from "react";

const ContactUsForm = () => {
  useEffect(() => {
    // Dynamically load the Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="contact-us-wrapper" style={{ textAlign: "center", padding: "0px 0" }}>
      <div className="contact-us-form" style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Contact Us Section with Centered Heading and Description */}
        <div className="contact-us-description" style={{ marginBottom: "30px" }}>
          <h1
            className="contact-heading"
            style={{
              fontSize: "40px",  // Set the font size to 40px
              fontWeight: "bold",  // Bold font
              color: "black",      // Black color for the heading
            
              marginBottom: "10px",
            }}
          >
            Contact Us
          </h1>
          <p
            className="contact-description"
            style={{
              fontSize: "1.25rem",  // Slightly larger font size for description
              color: "black",      // Black color for description
              marginTop: "10px",
            }}
          >
            We’d love to hear from you! Please fill out the form below, and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Tally Form Embed */}
        <div style={{ minHeight: "600px" }}>
          <iframe
            src="https://tally.so/embed/3xgGJr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%" // Make the iframe responsive
            height="600px" // Set a height, can be adjusted
            frameBorder="0"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              border: "none",
              background: "transparent",
            }}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
