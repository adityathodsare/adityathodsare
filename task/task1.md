# Codex prompt: improve adityathodsare.vercel.app (UI, content, SEO)

Paste everything below the line into Codex, with your portfolio repo open.

---

You are improving my existing personal portfolio, live at https://adityathodsare.vercel.app. First inspect the repo (framework, routing, layout, components, styles, public assets, metadata setup). Then make the changes directly. Preserve the dark, terminal-inspired visual identity. Do not replace it with a generic template.

## About me (source of truth for all copy)

- Name: Aditya Thodsare. Location: Pune, India. Email: thodsareaditya@gmail.com. Phone: +91 8263878470.
- Education: B.E. Electronics & Telecommunication, JSPM's Imperial College of Engineering and Research, Pune, 2022-2026, CGPA 9.25/10.
- Experience:
  - Software Engineer Trainee (QA & AI Automation), Testrig Technologies Pvt Ltd. Resume dates: Jan 2026 - Jun 2026. Built an AI-powered KPI dashboard (Next.js, FastAPI, LanceDB, DuckDB, Gemini AI) fed by Allure reports, with role-based responses, a chat-with-data chatbot, trend analysis and release-readiness insights. Maintained Playwright + TypeScript and Salesforce automation suites. Worked on a Grafana + Azurite (Docker) POC and a Bitbucket-to-Jenkins CI migration POC.
  - Java Developer Intern, Shorat Innovations Pvt Ltd, Jan 2025 - Feb 2025. Spring Boot backend work, troubleshooting, documentation.
- Projects:
  - SAFE-V: IoT + full-stack vehicle safety system. Next.js, Spring Boot and FastAPI microservices, ESP32 + ThingSpeak, YOLOv8, real-time telemetry dashboards, Email/Telegram emergency alerts.
  - HealthOrbit.AI: event-driven microservices (Spring Boot, Config Server, Eureka, RabbitMQ) with Gemini AI and a fitness analytics dashboard.
  - Printify: secure print shop system (Spring Boot, WebSocket, MongoDB).
  - Also keep the JWT user-management project if it exists on the site.
- Skills: Java, Python, TypeScript, JavaScript, SQL; Spring Boot, FastAPI, REST, microservices, RabbitMQ, JPA/Hibernate; Next.js, React; Playwright, Allure; MySQL, MongoDB, DuckDB, LanceDB; Gemini API, LLM integration, AI-assisted development; Docker (basics), Jenkins (basics), Git, Grafana; ESP32, YOLOv8.
- Certifications: Complete Web Development Course (Udemy); Spring Framework 6 & Spring Boot 3 with Spring AI (Udemy); Docker for Java Developers (Udemy).

Do not invent employers, metrics, clients, certifications, skills or results. Where something is uncertain, keep it editable and list it in a "Needs my confirmation" section at the end.

## Problems already found on the live site (fix these first)

1. **Crawlers see an empty page.** The HTML served at the root contains only "Loading..." (a client-side loading screen or client-only rendering). Search engines and link-preview bots may index almost nothing. Server-render or statically generate all portfolio content (hero, about, experience, projects, skills, contact) so it is present in the initial HTML. If a loading/boot animation exists, make it a purely visual overlay that does not replace or delay the real content (no `ssr: false` on main content, no content gated behind client state). Verify with `curl -s https://localhost:PORT | grep -i "Aditya"` after building.
2. **Title and meta description are wrong for my real profile.** They currently say "Full Stack MERN Developer" and describe React, Node.js, Express and MongoDB. My strongest work is Java/Spring Boot, Next.js, FastAPI, AI-powered dashboards and QA automation. Rewrite the metadata to match my real stack and the visible page content.
3. **Headline claims "AI Engineer".** Position me as "Full Stack Developer" first (Java, Spring Boot, Next.js), with AI-powered analytics/automation and IoT as supporting strengths. Only use "AI Engineer" if the page shows project evidence for it.
4. **Date inconsistency.** The site shows a current role as "Jul 2026 - Present (5 months)". Today is 1 Nov 2026, so that is about 4 months, and my resume lists Testrig as Jan 2026 - Jun 2026. Do not silently change it. Remove the "N months" counter, keep dates in one data file, and flag this for me to confirm.
5. **Broken stats widgets.** GitHub shows "--" for repos, followers, commits and join date; LeetCode shows "#Top" with no rank. Fix with a real data source (GitHub API fetched server-side with revalidation, with a graceful fallback) or remove the numbers and keep plain profile links. Never show placeholder or fabricated stats.
6. **Mislabeled demo links.** HealthOrbit and Printify "Live Demo" buttons point to LinkedIn posts. Relabel as "Project walkthrough (LinkedIn)" unless a real deployed URL exists. Add real "Live app" and "Source code" links for SAFE-V.
7. **Contact section.** A field called "Coordinates" looks like a location field but is part of the form. Use plain labels (Name, Email, Message), accessible validation, and a visible success/error state. Keep my email as a visible fallback.

## UI / appearance improvements

- Keep the terminal aesthetic as an accent (prompt-style section labels, monospace for small details), but use a readable sans-serif or comfortable monospace for body text. Define a type scale (e.g. 14/16/18/24/36/56 px), 8px spacing grid, one primary accent color plus one secondary, and WCAG AA contrast for text and links.
- Hero (first screen): name, one-line role headline "Full Stack Developer | Java, Spring Boot & Next.js", a 2-sentence specific summary (backend microservices, AI-powered dashboards, IoT), location (Pune, India), and three clear actions: **View projects**, **Download resume**, **Contact me**. Add a small "Open to internships / full-time roles" badge only if it is truthful and editable via a config constant.
- Add a downloadable resume: place `Aditya_Thodsare_Resume.pdf` in `/public` and link it. Track nothing; just a plain link with a descriptive label.
- Navigation: sticky header with plain labels (About, Experience, Projects, Skills, Contact), highlighted active section, accessible mobile menu with focus trap and Escape-to-close. Add a "skip to content" link.
- Projects as case-study cards: title, one-line problem, my contribution, stack chips, outcome/evidence, and links (Live app / Source code / Walkthrough). Order: SAFE-V, HealthOrbit.AI, the AI KPI dashboard (as an experience-backed highlight; no confidential company data or screenshots), Printify, JWT project. Add screenshots or short GIFs only from assets that already exist. Use `next/image` with explicit width/height and descriptive alt text.
- Experience: concise, tool-named bullets, no vague phrases like "improved release confidence" unless backed by a measurable fact. Use a single data file so dates are consistent.
- Skills: group into Backend, Frontend, Databases & Data, AI & Automation, Testing & DevOps, IoT & Computer Vision. Visually separate "Used in projects/work" from "Learning" and do not imply equal proficiency (no fake percentage bars).
- Remove repeated claims and repeated ticker text ("scalable", "robust", "open for work" repeated across sections). Keep one short tagline.
- Motion: subtle reveal-on-scroll only; respect `prefers-reduced-motion`; no heavy canvas or particle effects that hurt performance.
- Responsive: test 360px, 768px, 1280px widths. No horizontal overflow, tap targets at least 44px, readable line length (60-75 characters), and no layout shift.
- Accessibility: semantic landmarks (`header`, `nav`, `main`, `section` with headings, `footer`), visible `:focus-visible` outlines, descriptive link text (no bare "click here"), `aria-label`s on icon-only buttons, form labels linked to inputs, color not the sole indicator of state.
- Footer: name, copyright year generated dynamically, social links (GitHub, LinkedIn, email), back-to-top link.

## SEO implementation (use the framework's native metadata API, e.g. Next.js `metadata` / `generateMetadata`)

- `<title>`: "Aditya Thodsare | Full Stack Developer (Java, Spring Boot, Next.js) in Pune"
- Meta description (about 150-160 characters, matches visible content): "Aditya Thodsare is a full stack developer in Pune building Java Spring Boot microservices, Next.js apps, AI-powered dashboards and IoT systems."
- Canonical `https://adityathodsare.vercel.app/` via `alternates.canonical`; set `metadataBase`.
- `robots` metadata allowing index/follow; add `app/robots.ts` (or `public/robots.txt`) referencing the sitemap; add `app/sitemap.ts` (or `sitemap.xml`) listing only real public URLs.
- Open Graph and Twitter card: title, description, URL, `og:type=website`, `og:locale=en_IN`, and a 1200x630 preview image generated from existing branding (use `opengraph-image` / `ImageResponse` or a static file in `/public`; do not hotlink).
- Favicon and `apple-touch-icon` from existing branding; add `theme-color`.
- JSON-LD in the page (rendered server-side, valid, no fake data):
  - `Person`: name, url, jobTitle "Full Stack Developer", address (Pune, Maharashtra, India), alumniOf (JSPM's Imperial College of Engineering and Research), knowsAbout (Java, Spring Boot, Next.js, React, FastAPI, microservices, test automation), `sameAs` with my verified GitHub and LinkedIn URLs.
  - `WebSite`: name and url.
  - Optional `ItemList` or `SoftwareSourceCode` for projects only if the data is accurate.
- Exactly one `<h1>` (my name plus role). Logical H2/H3 hierarchy. All important content as crawlable text. Informative images get alt text; decorative images get `alt=""`.
- Natural keyword use only where true to content: "full stack developer in Pune", "Java Spring Boot developer", "Next.js developer", "AI-powered dashboards", "test automation (Playwright)". No keyword stuffing.
- Consider a dedicated page per featured project (`/projects/safe-v`, `/projects/healthorbit-ai`, `/projects/ai-kpi-dashboard`) only if each has substantial unique content (problem, architecture, stack, screenshots, outcomes), its own title/description/canonical, and is in the sitemap. Otherwise stay single-page. No thin or duplicate pages.
- Performance (affects SEO): optimize fonts with `next/font`, lazy-load below-the-fold images, keep JS lean, target Lighthouse 90+ for Performance, Accessibility, Best Practices and SEO on mobile.
- Do not promise rankings or traffic.

## Engineering rules

- Preserve existing functionality; keep changes reviewable. Put all profile text, links and dates in one typed data file (e.g. `data/profile.ts`) so I can edit them without touching components.
- Avoid new heavy dependencies. Keep TypeScript strict-clean and ESLint-clean.
- Run the build and a link check. Fix broken links, missing images and console errors. Verify the built HTML contains my real content and JSON-LD.

## Deliverables at the end

1. Summary of changed files.
2. List of SEO items implemented and how to verify each (view-source, Rich Results Test, Lighthouse).
3. "Needs my confirmation" list: employment dates, live demo URLs, GitHub/LinkedIn URLs, any claims I should verify.
4. Steps to submit the site in Google Search Console (add property, verify, submit `sitemap.xml`, request indexing), plus optional Bing Webmaster Tools.