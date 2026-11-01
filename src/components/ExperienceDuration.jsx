"use client";

import { useEffect, useState } from "react";

function getMonthDuration(startDate, now = new Date()) {
  const start = new Date(`${startDate}T00:00:00`);
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    now.getMonth() -
    start.getMonth();

  if (months < 0) return null;
  return `${months} ${months === 1 ? "month" : "months"}`;
}

export default function ExperienceDuration({ startDate }) {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    setDuration(getMonthDuration(startDate) || "");
  }, [startDate]);

  if (!duration) return null;

  return <span className="duration">{duration}</span>;
}
