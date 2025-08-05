"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Frontend Developer",
    quote: "DH Solutions gave me the space to innovate and grow — every day is exciting!",
  },
  {
    name: "Ahmed K.",
    role: "Project Manager",
    quote: "The leadership is inspiring and the culture is truly global.",
  },
  {
    name: "Emily R.",
    role: "UI/UX Designer",
    quote: "Creative freedom and collaboration here are on another level!",
  },
];

const TeamTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const { name, role, quote } = testimonials[currentIndex];

  return (
    <section className="team__testimonials">
      <div className="container">
        <h2 className="testimonial__title">💬 What Our Team Says</h2>
        <div className="testimonial__wrapper">
          <button className="arrow left" onClick={prev}>
            <ChevronLeft size={32} />
          </button>
          <div className="testimonial__card glass">
            <p className="quote">“{quote}”</p>
            <div className="person">
              <span className="name">{name}</span>
              <span className="role">{role}</span>
            </div>
          </div>
          <button className="arrow right" onClick={next}>
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamTestimonials;
