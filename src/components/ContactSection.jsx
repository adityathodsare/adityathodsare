"use client";

import { useState, useRef } from "react";
import { PROFILE } from "@/lib/profile";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef(null);

  const submit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatusMessage("Please fill in all fields before sending.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatusMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (message.length < 10) {
      setStatusMessage("Please write a message with at least 10 characters.");
      setStatus("error");
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    setStatus("sending");
    setStatusMessage("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzmtY9cGoks519KLsiQV0tFoVcOeU5w2KY0pKMVCD-bkYbSLr5aOdE_aoYQdQ7YMq5Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            name,
            email,
            subject: "Project Inquiry",
            message,
          }).toString(),
          signal: controller.signal,
        }
      );

      setStatus("sent");
      setStatusMessage("Message saved — thanks for reaching out!");
      formRef.current?.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error.name === "AbortError"
          ? "Request timed out. Please try again."
          : "Could not save your message. Please try again."
      );
    } finally {
      clearTimeout(timeout);
    }
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
              <FaPhone aria-hidden="true" />
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>{PROFILE.phone}</a>
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
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {(status === "sent" || status === "error") && (
            <p
              role={status === "error" ? "alert" : "status"}
              aria-live={status === "error" ? "assertive" : "polite"}
              className={`contact-status ${status === "sent" ? "success" : "info"}`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
