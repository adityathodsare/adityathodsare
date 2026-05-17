"use client";

import { useState } from "react";
import { FiSend, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { SITE } from "@/lib/site";
import { BrutalSection, SectionHeader, BrutalCard, BrutalButton, BrutalInput, SocialLinks } from "./ui/BrutalUI";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

      // Google Apps Script redirects (302) after POST, which breaks standard
      // CORS fetch. Using "no-cors" mode avoids the preflight and follows the
      // redirect silently. The trade-off is we get an opaque response (can't
      // read status/body), so we treat any non-thrown fetch as success.
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
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.name === "AbortError" ? "Request timed out. Please try again." : error.message || "Failed to send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: FiPhone, label: "Phone", value: SITE.phone },
    { icon: FiMail, label: "Email", value: SITE.email },
    { icon: FiMapPin, label: "Location", value: SITE.location },
  ];

  return (
    <BrutalSection id="contact" bg="#F0F3F7">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Have a project, internship, or collab in mind? Drop a message!"
        accent="#6A80B8"
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <BrutalCard bg="#ffffff" className="p-5 sm:p-6">
          <h3 className="font-display mb-4 text-xl font-extrabold">Contact info</h3>
          <ul className="space-y-3">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3 rounded-xl bg-[#F8F6F1] p-3 brutal-border">
                <span className="shrink-0 rounded-lg bg-[#F0EBE0] p-2 brutal-border">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-extrabold">{label}</p>
                  <p className="text-sm font-semibold break-words">{value}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t-2 border-dashed border-[#2D2D2D]/15 pt-6">
            <p className="font-display mb-3 text-sm font-extrabold">Connect with me</p>
            <SocialLinks size="lg" showLabels />
          </div>
        </BrutalCard>

        <BrutalCard bg="#F0EBE0" className="p-5 sm:p-6">
          <form onSubmit={handleSubmit}>
            <BrutalInput id="name" label="Your name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
            <BrutalInput id="email" label="Email" type="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} required />
            <BrutalInput id="subject" label="Subject" placeholder="Project inquiry" value={formData.subject} onChange={handleChange} required />
            <BrutalInput id="message" label="Message" rows={5} placeholder="Tell me about your idea..." value={formData.message} onChange={handleChange} required />
            {submitStatus && (
              <div className={`mb-4 rounded-xl brutal-border p-3 text-sm font-bold ${submitStatus.success ? "bg-[#E6F0E8]" : "bg-[#FAF0EE]"}`}>
                {submitStatus.message}
              </div>
            )}
            <BrutalButton type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : (<><FiSend className="shrink-0" /> Send message</>)}
            </BrutalButton>
          </form>
        </BrutalCard>
      </div>
    </BrutalSection>
  );
}
