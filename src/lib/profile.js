export const PROFILE = {
  name: "Aditya Thodsare",
  role: "Full Stack Developer",
  headline: "Full Stack Developer | Java, Spring Boot & Next.js",
  summary:
    "I build backend microservices and full-stack products with Java, Spring Boot and Next.js. My work also includes AI-powered analytics dashboards, test automation and IoT systems.",
  about:
    "I’m a full stack developer in Pune focused on Java Spring Boot backends and Next.js applications. I have built microservices, AI-powered dashboards and connected IoT systems, and earned a B.E. in Electronics & Telecommunication at JSPM's Imperial College of Engineering and Research with a CGPA of 9.25/10.",
  email: "thodsareaditya@gmail.com",
  phone: "+91 8263878470",
  location: "Pune, India",
  openToRoles: false,
  github: "https://github.com/adityathodsare",
  linkedin: "https://www.linkedin.com/in/aditya-thodsare-475366289/",
  leetcode: "https://leetcode.com/u/adityathodsare/",
  resumeUrl: "/Aditya_Thodsare_Resume.pdf",
  resumeFilename: "Aditya_Thodsare_Resume.pdf",
  canonicalUrl: "https://adityathodsare.vercel.app/",
  education: {
    degree: "B.E. Electronics & Telecommunication",
    institution: "JSPM's Imperial College of Engineering and Research",
    location: "Pune",
    period: "2022–2026",
    cgpa: "9.25/10",
  },
  experience: [
    {
      title: "Software Engineer Trainee (QA & AI Automation)",
      company: "Testrig Technologies Pvt Ltd",
      period: "Jan 2026 – Jun 2026",
      details: [
        "Built an AI-powered KPI dashboard using Next.js, FastAPI, LanceDB, DuckDB and Gemini AI, fed by Allure reports.",
        "Added role-based responses, chat with test data, trend analysis and release-readiness insights.",
        "Maintained Playwright and TypeScript test suites, including Salesforce automation.",
        "Contributed to Grafana with Azurite on Docker and a Bitbucket-to-Jenkins CI migration proof of concept.",
      ],
    },
    {
      title: "Java Developer Intern",
      company: "Shorat Innovations Pvt Ltd",
      period: "Jan 2025 – Feb 2025",
      details: [
        "Worked on Spring Boot backend development, troubleshooting and technical documentation.",
      ],
    },
  ],
  projects: [
    {
      id: "safe-v",
      title: "SAFE-V",
      problem: "A connected vehicle safety system for monitoring telemetry and responding to emergencies.",
      contribution:
        "Built an IoT and full-stack system with real-time telemetry dashboards and emergency alert flows.",
      evidence:
        "Includes ESP32 telemetry via ThingSpeak, YOLOv8 detection and Email/Telegram alert integrations.",
      stack: ["Next.js", "Spring Boot", "FastAPI", "ESP32", "ThingSpeak", "YOLOv8"],
      image: "/image.png",
      imageAlt: "SAFE-V project interface screenshot",
      links: [
        { label: "Live app", href: "https://safev.vercel.app" },
        { label: "Source code", href: "https://github.com/adityathodsare/safev" },
      ],
    },
    {
      id: "healthorbit-ai",
      title: "HealthOrbit.AI",
      problem: "A fitness and health platform combining service-based features and personalized insights.",
      contribution:
        "Developed an event-driven microservices platform with a fitness analytics dashboard and Gemini AI integration.",
      evidence: "Uses Spring Cloud services and RabbitMQ for asynchronous communication.",
      stack: ["Spring Boot", "Config Server", "Eureka", "RabbitMQ", "Gemini AI"],
      image: "/healthorbit.png",
      imageAlt: "HealthOrbit.AI project interface screenshot",
      links: [
        {
          label: "Project walkthrough (LinkedIn)",
          href: "https://www.linkedin.com/posts/aditya-thodsare-475366289_springboot-microservices-rabbitmq-activity-7349101989458235393-2Av1",
        },
        { label: "Frontend source code", href: "https://github.com/adityathodsare/healthOrbit-Ai" },
        {
          label: "Backend source code",
          href: "https://github.com/adityathodsare/microservices-project-health-fitness-ai",
        },
      ],
    },
    {
      id: "ai-kpi-dashboard",
      title: "AI KPI Dashboard",
      problem: "Allure test reports can be difficult to explore for trends and release context.",
      contribution:
        "Built a dashboard and chat-with-data experience with role-based responses, trend analysis and release-readiness insights.",
      evidence: "Experience-backed work using Allure data, without displaying company data or screenshots.",
      stack: ["Next.js", "FastAPI", "LanceDB", "DuckDB", "Gemini AI", "Allure"],
      image: null,
      imageAlt: "",
      links: [],
    },
    {
      id: "printify",
      title: "Printify",
      problem: "A print shop needs a clear way to manage jobs and communicate around them.",
      contribution:
        "Built a secure print shop system with live updates using WebSocket and MongoDB.",
      evidence: "The project walkthrough is available on LinkedIn.",
      stack: ["Spring Boot", "WebSocket", "MongoDB"],
      image: "/printify.png",
      imageAlt: "Printify project interface screenshot",
      links: [
        {
          label: "Project walkthrough (LinkedIn)",
          href: "https://www.linkedin.com/posts/aditya-thodsare-475366289_webapp-printify-springboot-activity-7284180807630368768-WPDF/",
        },
        { label: "Source code", href: "https://github.com/adityathodsare/project-Printify" },
      ],
    },
    {
      id: "jwt-user-management",
      title: "User Management with JWT",
      problem: "A user management API needs authentication and role-based access controls.",
      contribution: "Built a Spring Boot user-management backend using JWT authentication.",
      evidence: "Source code is available on GitHub.",
      stack: ["Spring Boot", "Spring Security", "JWT", "MySQL"],
      image: null,
      imageAlt: "",
      links: [
        {
          label: "Source code",
          href: "https://github.com/adityathodsare/spring-security-user-management-with-JWT",
        },
      ],
    },
  ],
  skills: [
    { group: "Backend", items: ["Java", "Spring Boot", "FastAPI", "REST", "Microservices", "RabbitMQ", "JPA / Hibernate"] },
    { group: "Frontend", items: ["TypeScript", "JavaScript", "Next.js", "React"] },
    { group: "Databases & Data", items: ["SQL", "MySQL", "MongoDB", "DuckDB", "LanceDB"] },
    { group: "AI & Automation", items: ["Gemini API", "LLM integration", "AI-assisted development"] },
    { group: "Testing & DevOps", items: ["Playwright", "Allure", "Docker (basics)", "Jenkins (basics)", "Git", "Grafana"] },
    { group: "IoT & Computer Vision", items: ["ESP32", "YOLOv8"] },
  ],
  certifications: [
    "Complete Web Development Course (Udemy)",
    "Spring Framework 6 & Spring Boot 3 with Spring AI (Udemy)",
    "Docker for Java Developers (Udemy)",
  ],
  needsConfirmation: [
    "Testrig dates: the supplied resume says Jan–Jun 2026; the previous site said Jul 2026–Present.",
    "Confirm whether the SAFE-V app URL is currently deployed and public.",
    "Confirm the GitHub and LinkedIn profile URLs are the preferred verified profiles.",
  ],
};
