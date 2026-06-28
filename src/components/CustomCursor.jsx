"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname(); // to re-attach events on route change

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 1024) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Find closest element that matches interactable selectors
      const interactable = e.target.closest(
        'a, button, input, textarea, select, .cursor-hover'
      );
      if (interactable) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [pathname]);

  return (
    <div
      className="hidden lg:block pointer-events-none fixed z-[9999] rounded-full transition-all duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        width: isHovering ? "60px" : "24px",
        height: isHovering ? "60px" : "24px",
        backgroundColor: isHovering ? "var(--color-neo-yellow)" : "white",
        mixBlendMode: isHovering ? "normal" : "difference",
        border: isHovering ? "2px solid black" : "none",
      }}
    />
  );
}
