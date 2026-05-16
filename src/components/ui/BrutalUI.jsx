"use client";

import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { SITE } from "@/lib/site";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function BrutalSection({
  id,
  bg,
  children,
  className = "",
  decor = true,
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden doodle-bg py-16 sm:py-20 md:py-24", className)}
      style={{ "--section-bg": bg }}
    >
      {decor && <SectionDoodles />}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

function SectionDoodles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute -left-4 top-12 h-24 w-24 opacity-60 animate-wiggle"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M20 50 Q50 10 80 50 Q50 90 20 50"
          stroke="#0f0f0f"
          strokeWidth="3"
          fill="#FFD43B"
        />
      </svg>
      <svg
        className="absolute right-6 top-24 h-16 w-16 opacity-50"
        viewBox="0 0 80 80"
        fill="none"
      >
        <polygon
          points="40,5 48,30 75,30 52,48 60,75 40,58 20,75 28,48 5,30 32,30"
          fill="#FF8A7A"
          stroke="#0f0f0f"
          strokeWidth="2.5"
        />
      </svg>
      <svg
        className="absolute bottom-16 left-[15%] h-20 w-32 opacity-40"
        viewBox="0 0 120 40"
        fill="none"
      >
        <path
          d="M5 25 C30 5, 50 35, 75 15 S110 30, 115 20"
          stroke="#0f0f0f"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, accent = "#FFD43B" }) {
  return (
    <div className="mb-10 sm:mb-12 text-center">
      <span
        className="font-display inline-block rounded-full brutal-border brutal-shadow-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
        style={{ backgroundColor: accent }}
      >
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-[#0f0f0f] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base font-semibold text-[#0f0f0f]/80 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function BrutalCard({
  children,
  bg = "#ffffff",
  className = "",
  tilt = false,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl brutal-border brutal-shadow transition-transform",
        tilt && "rotate-[-0.5deg] sm:rotate-[-1deg]",
        "brutal-hover",
        className
      )}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

export function BrutalButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  download,
  external,
  type = "button",
  disabled,
}) {
  const variants = {
    primary: "bg-[#FFD43B] hover:bg-[#ffe566]",
    secondary: "bg-white hover:bg-[#f5f5f5]",
    coral: "bg-[#FF8A7A] hover:bg-[#ff9f92] text-white",
    mint: "bg-[#7AE582] hover:bg-[#8ef098]",
    violet: "bg-[#A78BFA] hover:bg-[#b89ffc] text-white",
    sky: "bg-[#74C0FC] hover:bg-[#8acbfc]",
  };

  const classes = cn(
    "font-display inline-flex items-center justify-center gap-2 rounded-xl brutal-border brutal-shadow px-5 py-2.5 text-sm font-bold sm:px-6 sm:py-3 sm:text-base",
    "brutal-hover brutal-active transition-transform",
    variants[variant] || variants.primary,
    disabled && "pointer-events-none opacity-60",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function BrutalBadge({ children, color = "#E4D4FF", className = "" }) {
  return (
    <span
      className={cn(
        "font-display inline-block rounded-lg brutal-border px-2.5 py-0.5 text-xs font-bold",
        className
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}

export function BrutalInput({ id, label, type = "text", rows, ...props }) {
  const inputClass =
    "w-full rounded-xl brutal-border bg-white px-4 py-3 font-semibold text-[#0f0f0f] placeholder:text-[#0f0f0f]/40 focus:ring-0";

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="font-display mb-1.5 block text-sm font-bold"
      >
        {label}
      </label>
      {rows ? (
        <textarea id={id} rows={rows} className={inputClass} {...props} />
      ) : (
        <input id={id} type={type} className={inputClass} {...props} />
      )}
    </div>
  );
}

export function SocialLinks({ size = "md", showLabels = false }) {
  const iconSize = size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const pad = size === "lg" ? "p-3.5" : "p-2.5";

  const links = [
    {
      href: SITE.github,
      label: "GitHub",
      icon: FiGithub,
      bg: "#E4D4FF",
    },
    {
      href: SITE.linkedin,
      label: "LinkedIn",
      icon: FiLinkedin,
      bg: "#C5E8FF",
    },
    {
      href: SITE.resumeUrl,
      label: "Resume",
      icon: FiDownload,
      bg: "#FFD6C9",
      download: SITE.resumeFilename,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map(({ href, label, icon: Icon, bg, download }) => (
        <a
          key={label}
          href={href}
          download={download}
          target={download ? undefined : "_blank"}
          rel={download ? undefined : "noopener noreferrer"}
          className={cn(
            "group inline-flex items-center gap-2 rounded-xl brutal-border brutal-shadow brutal-hover brutal-active transition-transform",
            pad,
            "font-display text-sm font-bold"
          )}
          style={{ backgroundColor: bg }}
          aria-label={label}
        >
          <Icon className={iconSize} />
          {showLabels && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}

export function Mascot({ className = "" }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-sm animate-float-soft",
        className
      )}
    >
      <div className="rounded-3xl brutal-border brutal-shadow-lg bg-[#FFD43B] p-4 sm:p-6 rotate-[-1deg]">
        <svg
          viewBox="0 0 320 360"
          className="w-full h-auto"
          role="img"
          aria-label="Cartoon developer mascot"
        >
          <ellipse cx="160" cy="340" rx="90" ry="12" fill="#0f0f0f" opacity="0.15" />
          <rect x="95" y="250" width="130" height="70" rx="12" fill="#74C0FC" stroke="#0f0f0f" strokeWidth="3" />
          <rect x="110" y="265" width="45" height="8" rx="2" fill="#fff" stroke="#0f0f0f" strokeWidth="2" />
          <rect x="110" y="280" width="70" height="6" rx="2" fill="#E4D4FF" stroke="#0f0f0f" strokeWidth="1.5" />
          <circle cx="160" cy="130" r="70" fill="#FFDBAC" stroke="#0f0f0f" strokeWidth="3" />
          <path d="M90 115 Q160 55 230 115" fill="#0f0f0f" />
          <circle cx="135" cy="135" r="8" fill="#0f0f0f" />
          <circle cx="185" cy="135" r="8" fill="#0f0f0f" />
          <circle cx="137" cy="133" r="2" fill="#fff" />
          <circle cx="187" cy="133" r="2" fill="#fff" />
          <path d="M140 165 Q160 185 180 165" fill="none" stroke="#0f0f0f" strokeWidth="3" strokeLinecap="round" />
          <rect x="125" y="195" width="70" height="60" rx="8" fill="#FF8A7A" stroke="#0f0f0f" strokeWidth="3" />
          <path d="M95 220 L70 280" stroke="#0f0f0f" strokeWidth="3" strokeLinecap="round" />
          <path d="M225 220 L250 280" stroke="#0f0f0f" strokeWidth="3" strokeLinecap="round" />
          <circle cx="70" cy="285" r="12" fill="#FFDBAC" stroke="#0f0f0f" strokeWidth="3" />
          <circle cx="250" cy="285" r="12" fill="#FFDBAC" stroke="#0f0f0f" strokeWidth="3" />
          <rect x="200" y="60" width="55" height="40" rx="6" fill="#7AE582" stroke="#0f0f0f" strokeWidth="2.5" transform="rotate(12 227 80)" />
          <text x="208" y="85" fontSize="11" fontWeight="bold" fill="#0f0f0f" transform="rotate(12 227 80)">
            Hi!
          </text>
        </svg>
      </div>
      <div className="absolute -right-2 -top-2 rounded-full brutal-border bg-[#FF8A7A] px-3 py-1 font-display text-xs font-bold brutal-shadow-sm animate-wiggle">
        Open to work
      </div>
    </div>
  );
}
