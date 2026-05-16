"use client";

import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { SITE } from "@/lib/site";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function BrutalSection({ id, bg, children, className = "" }) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden doodle-bg py-16 sm:py-20 md:py-24", className)}
      style={{ "--section-bg": bg }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, accent = "#C08B3E" }) {
  return (
    <div className="mb-10 sm:mb-12 text-center">
      <span
        className="font-display inline-block rounded-full brutal-border brutal-shadow-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
        style={{ backgroundColor: accent }}
      >
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base font-semibold text-[#2D2D2D]/65 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function BrutalCard({ children, bg = "#ffffff", className = "", tilt = false }) {
  return (
    <div
      className={cn(
        "rounded-2xl brutal-border brutal-shadow transition-transform brutal-hover",
        tilt && "rotate-[-0.5deg] sm:rotate-[-1deg]",
        className
      )}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

export function BrutalButton({
  href, onClick, children, variant = "primary", className = "",
  download, external, type = "button", disabled,
}) {
  const variants = {
    primary: "bg-[#C08B3E] hover:bg-[#D09C50] text-white",
    secondary: "bg-white hover:bg-[#f5f5f5]",
    outline: "bg-transparent hover:bg-[#2D2D2D]/5 border-[#2D2D2D]",
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
      <a href={href} className={classes} download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >{children}</a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

export function BrutalBadge({ children, color = "#F0EBE0", className = "" }) {
  return (
    <span
      className={cn("font-display inline-block rounded-lg brutal-border px-2.5 py-0.5 text-xs font-bold", className)}
      style={{ backgroundColor: color }}
    >{children}</span>
  );
}

export function BrutalInput({ id, label, type = "text", rows, ...props }) {
  const inputClass =
    "w-full rounded-xl brutal-border bg-white px-4 py-3 font-semibold text-[#2D2D2D] placeholder:text-[#2D2D2D]/35 focus:ring-0 focus:outline-none";
  return (
    <div className="mb-4">
      <label htmlFor={id} className="font-display mb-1.5 block text-sm font-bold">{label}</label>
      {rows ? (
        <textarea id={id} rows={rows} className={inputClass} {...props} />
      ) : (
        <input id={id} type={type} className={inputClass} {...props} />
      )}
    </div>
  );
}

export function SocialLinks({ size = "md", showLabels = false }) {
  const iconSize = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  const pad = size === "lg" ? "p-3" : "p-2.5";
  const links = [
    { href: SITE.github, label: "GitHub", icon: FiGithub },
    { href: SITE.linkedin, label: "LinkedIn", icon: FiLinkedin },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {links.map(({ href, label, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-2 rounded-xl brutal-border brutal-shadow-sm brutal-hover brutal-active transition-transform bg-white",
            pad, "font-display text-sm font-bold"
          )}
          aria-label={label}
        >
          <Icon className={iconSize} />
          {showLabels && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}

/* Professional Photo Card */
export function Mascot({ className = "" }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-sm animate-float-soft", className)}>
      <div className="rounded-3xl brutal-border brutal-shadow-lg bg-white p-3 sm:p-4 rotate-[-1deg]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl brutal-border">
          <img src="/1.png" alt="Aditya Thodsare" className="h-full w-full object-cover object-top" />
        </div>
        <div className="mt-3 px-1">
          <p className="font-display text-lg font-extrabold">{SITE.name}</p>
          <p className="text-sm font-bold text-[#2D2D2D]/55">Full Stack Developer · QA Engineer</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Spring Boot", "React", "Next.js", "IoT"].map((t) => (
              <BrutalBadge key={t} color="#F0EBE0">{t}</BrutalBadge>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full brutal-border bg-[#4A9B5A] px-3 py-1.5 font-display text-xs font-bold text-white brutal-shadow-sm animate-wiggle">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        Open to work
      </div>
    </div>
  );
}
