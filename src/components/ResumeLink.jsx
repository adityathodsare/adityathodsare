"use client";

import { recordResumeClick } from "@/lib/resumeClicks";

export default function ResumeLink({ href, download, className, children }) {
  return (
    <a
      className={className}
      href={href}
      download={download}
      onClick={recordResumeClick}
    >
      {children}
    </a>
  );
}
