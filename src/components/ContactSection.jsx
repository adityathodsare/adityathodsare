"use client";

import { useState, useRef } from "react";
import { PROFILE } from "@/lib/profile";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | sent | error
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const submit = (event) => {
    event.preventDefault();
    if (submitted) return;

    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = `Portfolio contact from ${name}`;
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setStatus("sent");
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="section-wrap" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title">
        Contact
      </h2>
      <p className="muted" style={{ marginBottom: 36, maxWidth: "56ch" }}>
        Open to engineering roles, collaborations, and conversations. Reach out
        via email or connect on LinkedIn.
      </p>

      <div className="contact-layout">
        <div>
          <div className="contact-info">
            <div className="contact-info-item">
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </div>
            <div className="contact-info-item">
              <FaGithub aria-hidden="true" />
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                github.com/adityathodsare
              </a>
            </div>
            <div className="contact-info-item">
              <FaLinkedin aria-hidden="true" />
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/aditya-thodsare
              </a>
            </div>
            <div className="contact-info-item">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Pune, India</span>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={submit}
          noValidate
        >
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Your name"
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            minLength={10}
            required
            placeholder="Your message..."
          />

          <button
            className="button primary"
            type="submit"
            disabled={submitted}
            aria-disabled={submitted}
          >
            {submitted ? "Email draft opened" : "Open email draft"}
          </button>

          {status === "sent" && (
            <p role="status" aria-live="polite" className="contact-status success">
              Your email client should open with the draft. You can also write
              directly to{" "}
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
            </p>
          )}
          {status === "error" && (
            <p role="alert" aria-live="assertive" className="contact-status info">
              Please fill in all fields before sending.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
