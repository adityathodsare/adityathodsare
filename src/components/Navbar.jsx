"use client";

import { useEffect, useRef, useState } from "react";

const links = ["about", "experience", "projects", "skills", "education", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    links.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const items = menu?.querySelectorAll("a");
    items?.[0]?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === "Tab" && items?.length) {
        if (event.shiftKey && document.activeElement === items[0]) {
          event.preventDefault();
          items[items.length - 1].focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === items[items.length - 1]
        ) {
          event.preventDefault();
          items[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav-inner">
        <a className="brand" href="#home" onClick={close}>
          AT<span>.</span>
        </a>
        <button
          ref={triggerRef}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <div
          ref={menuRef}
          id="site-menu"
          className={`nav-links${open ? " is-open" : ""}`}
          role="list"
        >
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={close}
              role="listitem"
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
