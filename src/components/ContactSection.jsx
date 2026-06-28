"use client";

import { useState, useEffect, useRef } from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { SITE } from "@/lib/site";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "Project Inquiry", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (revealRef.current) observer.observe(revealRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) throw new Error("Please enter a valid email address");
      if (formData.message.trim().length < 10) throw new Error("Message should be at least 10 characters");
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      await fetch(
        "https://script.google.com/macros/s/AKfycbzmtY9cGoks519KLsiQV0tFoVcOeU5w2KY0pKMVCD-bkYbSLr5aOdE_aoYQdQ7YMq5Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
          signal: controller.signal,
        }
      );
      clearTimeout(timeout);

      setSubmitStatus({ success: true, message: "Message sent — thanks for reaching out!" });
      setFormData({ name: "", email: "", subject: "Project Inquiry", message: "" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.name === "AbortError" ? "Request timed out. Please try again." : error.message || "Failed to send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <div
        ref={revealRef}
        className="bg-white border-4 border-black brutal-shadow-xl p-8 md:p-12 relative reveal mt-12"
      >
        <div className="absolute -top-10 -left-6 bg-[var(--color-neo-yellow)] border-4 border-black px-6 py-2 brutal-shadow rotate-[-5deg]">
          <span className="font-black text-2xl font-display">START A PROJECT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
          <div>
            <h2 className="text-6xl font-black uppercase mb-6 leading-[0.85] font-display">
              Let's<br />Talk<br />Code.
            </h2>
            <p className="font-mono text-lg mb-8 text-gray-600">
              Looking to build a website or hire a developer?
              <br />
              <br />
              I’m available for freelance projects and full-time opportunities.
              <br />
              Let’s connect and create something impactful.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                  <FiMail className="text-xl" />
                </div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-xl font-bold hover:bg-[var(--color-neo-blue)] transition-colors cursor-hover font-display"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                  <FiMapPin className="text-xl" />
                </div>
                <span className="text-xl font-bold font-display">{SITE.location}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 border-2 border-black">
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Identity</label>
              <input
                id="name"
                type="text"
                placeholder="NAME / COMPANY"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-[var(--color-neo-yellow)] focus:brutal-shadow-sm transition-all cursor-hover font-display"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Coordinates</label>
              <input
                id="email"
                type="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-[var(--color-neo-yellow)] focus:brutal-shadow-sm transition-all cursor-hover font-display"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Transmission</label>
              <textarea
                id="message"
                rows="4"
                placeholder="PROJECT DETAILS..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-[var(--color-neo-yellow)] focus:brutal-shadow-sm transition-all resize-none cursor-hover font-display"
              />
            </div>

            {submitStatus && (
              <div
                className={`p-3 border-2 border-black font-bold text-sm text-center ${
                  submitStatus.success ? "bg-[var(--color-neo-green)]" : "bg-[var(--color-neo-red)] text-white"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--color-neo-blue)] text-white font-black text-xl py-4 border-2 border-black brutal-shadow hover:bg-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover font-display"
            >
              {isSubmitting ? "TRANSMITTING..." : "TRANSMIT DATA"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
