"use client";

import { useEffect, useState } from "react";

export default function ResumeClickCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const updateCount = (event) => setCount(event.detail);
    window.addEventListener("resume-click-count-updated", updateCount);

    fetch("/api/resume-clicks", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (Number.isFinite(data?.count)) setCount(data.count);
      })
      .catch(() => {});

    return () => {
      window.removeEventListener("resume-click-count-updated", updateCount);
    };
  }, []);

  if (!Number.isFinite(count)) return null;

  return (
    <span className="resume-click-count" aria-label="Portfolio counter" aria-live="polite">
      {count}
    </span>
  );
}
