"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiExternalLink, FiGlobe, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function LinkIcon({ href }) {
  if (href.includes("github.com")) return <FaGithub aria-hidden="true" />;
  if (href.includes("youtu")) return <FaYoutube aria-hidden="true" />;
  if (href.includes("linkedin.com")) return <FaLinkedin aria-hidden="true" />;
  if (href.includes("vercel.app") || href.includes("safev"))
    return <FiGlobe aria-hidden="true" />;
  return <FiExternalLink aria-hidden="true" />;
}

export default function ProjectCarousel({ projects }) {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // "next" | "prev"
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const hasShownHint = useRef(false);
  const [showNavigationHint, setShowNavigationHint] = useState(false);

  const count = projects.length;

  useEffect(() => {
    const update = () => {
      setPerView(window.innerWidth < 720 ? 1 : 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = count - perView;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || hasShownHint.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownHint.current) {
          hasShownHint.current = true;
          setShowNavigationHint(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const navigate = useCallback(
    (dir) => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);

      setTimeout(() => {
        setCurrent((prev) => {
          if (dir === "next") {
            return prev >= maxIndex ? 0 : prev + 1;
          } else {
            return prev <= 0 ? maxIndex : prev - 1;
          }
        });
        setIsAnimating(false);
        setDirection(null);
      }, 320);
    },
    [isAnimating, maxIndex]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  // Touch/swipe support
  const touchStartX = useRef(null);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      navigate(diff > 0 ? "next" : "prev");
    }
    touchStartX.current = null;
  };

  const slidePercent = (100 / perView) * current;

  return (
    <div className="carousel-root" ref={rootRef}>
      {/* Track */}
      <div
        className="carousel-overflow"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className={`carousel-track${isAnimating ? " is-animating" : ""}`}
          style={{
            transform: `translateX(-${slidePercent}%)`,
          }}
          aria-live="polite"
        >
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="carousel-card card project-card"
              style={{ flex: `0 0 calc(${100 / perView}% - ${(perView - 1) * 10 / perView}px)` }}
              aria-hidden={idx < current || idx >= current + perView ? "true" : "false"}
            >
              {project.image && (
                <div className="project-img-wrap">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={800}
                    height={450}
                    sizes="(max-width: 720px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="project-card-body">
                <div>
                  <h3>{project.title}</h3>
                  {project.subtitle && (
                    <span className="project-subtitle">{project.subtitle}</span>
                  )}
                  <p className="project-problem">{project.problem}</p>
                  <p className="project-desc">{project.contribution}</p>
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="project-highlights">
                      {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div>
                  <ul className="chips">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="link-row">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon href={link.href} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="carousel-controls">
        {/* Dot indicators */}
        <div className="carousel-dots" role="tablist" aria-label="Project slides">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${current === i ? " active" : ""}`}
              onClick={() => {
                if (!isAnimating) {
                  setDirection(i > current ? "next" : "prev");
                  setCurrent(i);
                }
              }}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={current === i}
              role="tab"
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="carousel-arrows">
          {showNavigationHint && (
            <p className="carousel-hint" role="status">
              Use the arrows to explore more projects <FiChevronRight aria-hidden="true" />
            </p>
          )}
          <button
            className={`carousel-arrow${showNavigationHint ? " is-highlighted" : ""}`}
            onClick={() => {
              setShowNavigationHint(false);
              navigate("prev");
            }}
            aria-label="Previous project"
            disabled={isAnimating}
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
          <span className="carousel-counter">
            {current + 1} / {maxIndex + 1}
          </span>
          <button
            className={`carousel-arrow carousel-arrow-next${showNavigationHint ? " is-highlighted" : ""}`}
            onClick={() => {
              setShowNavigationHint(false);
              navigate("next");
            }}
            aria-label="Next project"
            disabled={isAnimating}
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
