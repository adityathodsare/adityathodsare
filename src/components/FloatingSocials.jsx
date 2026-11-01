import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText, FiMail } from "react-icons/fi";
import { PROFILE } from "@/lib/profile";

export default function FloatingSocials() {
  return (
    <nav className="floating-socials" aria-label="Social and contact links">
      <a
        href={PROFILE.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Aditya on GitHub (opens in a new tab)"
        title="GitHub"
      >
        <FaGithub aria-hidden="true" />
      </a>
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Aditya on LinkedIn (opens in a new tab)"
        title="LinkedIn"
      >
        <FaLinkedin aria-hidden="true" />
      </a>
      <a
        className="email-link"
        href={`mailto:${PROFILE.email}`}
        aria-label="Email Aditya"
        title="Email"
      >
        <FiMail aria-hidden="true" />
      </a>
      <a
        className="resume-link"
        href={PROFILE.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Aditya's resume (opens in a new tab)"
        title="Resume"
      >
        <FiFileText aria-hidden="true" />
      </a>
    </nav>
  );
}
