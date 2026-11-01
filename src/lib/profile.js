export const PROFILE = {
  name: "Aditya Thodsare",
  role: "Software Engineer",
  headline: "Software Engineer | AI and Cloud Architecture",
  summary:
    "I build backend microservices and full-stack products with Java, Spring Boot and Next.js. My work also includes AI-powered analytics dashboards, test automation and IoT systems.",
  about:
    "I’m a software engineer in Pune building AI-powered products and full-stack services with Next.js, FastAPI and Spring Boot. My work spans RAG-based analytics, test automation, event-driven microservices and IoT systems.",
  email: "thodsareaditya@gmail.com",
  phone: "+91 8263878470",
  location: "Pune, India",
  openToRoles: false,
  github: "https://github.com/adityathodsare",
  linkedin: "https://www.linkedin.com/in/aditya-thodsare-475366289/",
  leetcode: "https://leetcode.com/u/adityathodsare/",
  photoUrl: "/2.jpg",
  resumeUrl: "/Aditya_Thodsare_Resume-nov26.pdf",
  resumeFilename: "Aditya_Thodsare_Resume-nov26.pdf",
  canonicalUrl: "https://adityathodsare.vercel.app/",
  education: {
    degree: "B.E. Electronics & Telecommunication",
    institution: "JSPM's Imperial College of Engineering and Research",
    location: "Pune",
    period: "2022–2026",
    cgpa: "9.10/10",
    description: "Completed a B.E. in Electronics & Telecommunication Engineering at JSPM's Imperial College of Engineering and Research, Pune.",
    earlierEducation: [
      { qualification: "Higher Secondary Certificate (HSC), 12th", institution: "NMV & Jr. College, Markal, Pune", period: "2022", result: "71.83%" },
      { qualification: "Secondary School Certificate (SSC), 10th", institution: "Shramjivi High School, Bhosari, Pune", period: "2020", result: "88.80%" },
    ],
  },
  experience: [
    {
      title: "Software Engineer Trainee (AI Automation)",
      company: "Testrig Technologies Pvt Ltd",
      periodStart: "2026-01-01",
      period: "Jan 2026 – Present",
      details: [
        "Built an AI-powered, RAG-driven release assurance dashboard with Next.js, FastAPI, LanceDB and DuckDB, allowing teams to ask questions about test results and explore role-based answers, charts and trends.",
        "Designed a universal data ingester with connectors for Allure, spreadsheets, databases, HTTP APIs and live Playwright or Cypress runs, normalizing data for vector and SQL stores.",
        "Prototyped an AI test automation workflow that turns requirements into test scenarios and specifications using MCP servers, agentic tools, Playwright and Cypress with TypeScript.",
        "Set up CI/CD work across Bitbucket Pipelines, Azure DevOps and Jenkins; contributed to a Bitbucket-to-Jenkins migration proof of concept and a Grafana with Azurite Docker proof of concept.",
        "Maintained Playwright and TypeScript end-to-end suites for a healthcare e-commerce platform and Salesforce.",
      ],
    },
    {
      title: "Java Developer Intern",
      company: "Shorat Innovations Pvt Ltd",
      period: "Jan 2025 – Feb 2025",
      details: [
        "Contributed to Spring Boot backend development and REST API work, and supported troubleshooting and technical documentation.",
      ],
    },
  ],
  projects: [
    {
      id: "safe-v",
      title: "SAFE-V",
      problem: "Drivers and responders need timely vehicle telemetry and useful alerts when an incident occurs.",
      contribution:
        "Built a cloud-deployed safety platform with Next.js, Spring Boot and FastAPI services, REST APIs and live dashboards for GPS history, speed, tilt, rollover and impact events.",
      evidence:
        "Streams ESP32 sensor readings through ThingSpeak, uses YOLOv8 for road and passenger analysis, and sends Email and Telegram emergency alerts. The project also includes an AI assistant for nearby services and hardware prototyping.",
      stack: ["Next.js", "Spring Boot", "FastAPI", "REST APIs", "ESP32", "ThingSpeak", "YOLOv8", "Gemini AI", "KiCad"],
      image: "/image.png",
      imageAlt: "SAFE-V sensor prototype with telemetry dashboard visible on a screen",
      links: [
        { label: "Live app", href: "https://safev.vercel.app" },
        { label: "Source code", href: "https://github.com/adityathodsare/safev" },
        { label: "Walkthrough (YouTube)", href: "https://youtu.be/22hU7Eip-ag" },
      ],
    },
    {
      id: "healthorbit-ai",
      title: "HealthOrbit.AI",
      problem: "Health and fitness features need to share data across services and turn it into useful guidance.",
      contribution:
        "Built a health platform with Gemini AI prescription guidance and a fitness tracking and analytics dashboard.",
      evidence: "Spring Boot services use Config Server, Eureka discovery and RabbitMQ to exchange health monitoring events.",
      stack: ["Spring Boot", "Config Server", "Eureka", "RabbitMQ", "Gemini AI", "MongoDB", "PostgreSQL"],
      image: "/healthorbit.png",
      imageAlt: "HealthOrbit.AI project interface screenshot",
      links: [
        {
          label: "Walkthrough (YouTube)",
          href: "https://youtu.be/UUP3TIrz5PM",
        },
        { label: "Frontend source code", href: "https://github.com/adityathodsare/healthOrbit-Ai" },
        {
          label: "Backend source code",
          href: "https://github.com/adityathodsare/microservices-project-health-fitness-ai",
        },
      ],
    },
    {
      id: "printify",
      title: "Printify",
      problem: "A print shop needs to manage jobs and coordinate customer conversations in one place.",
      contribution:
        "Built a print shop management system with room-based jobs, secure document uploads and real-time chat.",
      evidence: "WebSocket messaging supports live updates; the project walkthrough is available on LinkedIn.",
      stack: ["React", "Vite", "Spring Boot", "WebSocket", "MongoDB"],
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
  ],
  skills: [
    { group: "Languages", items: ["Java", "Python", "TypeScript", "SQL"] },
    { group: "Backend", items: ["Spring Boot", "FastAPI", "REST APIs", "Microservices", "Event-Driven Architecture", "RabbitMQ"] },
    { group: "Frontend", items: ["Next.js", "React"] },
    { group: "AI & LLM", items: ["RAG", "LLM API integration", "MCP", "Agentic tools", "Claude Code", "Cursor", "Codex"] },
    { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { group: "Test Automation", items: ["Playwright", "Cypress", "End-to-End Testing", "Page Object Model", "Allure"] },
    { group: "DevOps & Tools", items: ["Git", "GitHub", "Bitbucket", "Azure DevOps", "Jenkins", "Docker", "Terraform", "CI/CD", "Grafana", "Jira"] },
  ],
  needsConfirmation: [
    "Confirm whether the SAFE-V app URL is currently deployed and public.",
    "Confirm the GitHub and LinkedIn profile URLs are the preferred verified profiles.",
  ],
};
