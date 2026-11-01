"use client";

import { useState } from "react";
import { PROFILE } from "@/lib/profile";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio message from ${data.get("name")}`;
    const body = `From: ${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the message. You can also write to " + PROFILE.email + ".");
  };
  return <section id="contact" className="section-wrap" aria-labelledby="contact-heading">
    <h2 id="contact-heading" className="section-title">Contact</h2>
    <p>Email me at <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
    <form className="contact-form" onSubmit={submit}>
      <label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required />
      <label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required />
      <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" minLength="10" required />
      <button className="button primary" type="submit">Prepare email</button>
      <p role="status" aria-live="polite">{status}</p>
    </form>
  </section>;
}
