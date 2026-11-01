export const PROFILE = {
  name: "Aditya Thodsare",
  role: "Software Engineer",
  headline: "Software Engineer | AI & Cloud Architecture Designer",
  summary:
    "I build scalable, real-world software solutions by combining full-stack development, AI integration, cloud architecture, IoT, and test automation to solve complex problems.",
  about:
    "I'm a software engineer based in Pune, India, focused on building reliable applications and intelligent systems that solve practical problems. My experience spans backend and full-stack development, AI-powered analytics, cloud-connected services, test automation, and IoT. I enjoy working across the software lifecycle—from designing APIs and integrating services to validating workflows, analysing data, and deploying solutions.",
  focusAreas: [
    {
      label: "Build",
      description: "Full-stack applications, APIs, and microservices.",
    },
    {
      label: "Integrate",
      description: "AI/LLM capabilities, data sources, and connected systems.",
    },
    {
      label: "Validate",
      description: "Automated testing, observability, and reliable delivery.",
    },
  ],
  email: "thodsareaditya@gmail.com",
  phone: "+91 8263878470",
  location: "Pune, India",
  openToRoles: false,
  github: "https://github.com/adityathodsare",
  linkedin: "https://www.linkedin.com/in/aditya-thodsare-475366289/",
  photoUrl: "/2.jpg",
  resumeUrl: "/Aditya_Thodsare_Resume-nov26.pdf",
  resumeFilename: "Aditya_Thodsare_Resume-nov26.pdf",
  canonicalUrl: "https://adityathodsare.vercel.app/",
  experience: [
    {
      title: "Software Engineer Trainee (AI Automation)",
      company: "Testrig Technologies Pvt. Ltd.",
      location: "Pune, India",
      periodStart: "2026-01-01",
      period: "Jan 2026 – Present",
      details: [
        "Built an AI-powered, RAG-based release-assurance dashboard using Next.js, FastAPI, LanceDB, and DuckDB, enabling teams to explore test results through role-aware answers, charts, and trends.",
        "Designed a reusable data-ingestion layer for sources including Allure reports, spreadsheets, databases, HTTP APIs, and live Playwright or Cypress runs.",
        "Prototyped an AI-assisted test-generation workflow that converts requirements into test scenarios and specifications using MCP servers, agentic tools, Playwright, Cypress, and TypeScript.",
        "Contributed to CI/CD workflows across Bitbucket Pipelines, Azure DevOps, and Jenkins, including a Bitbucket-to-Jenkins migration proof of concept.",
        "Maintained Playwright and TypeScript end-to-end test suites for healthcare e-commerce and Salesforce workflows.",
      ],
    },
    {
      title: "Java Developer Intern",
      company: "Shorat Innovations Pvt. Ltd.",
      location: "Pune, India",
      period: "Jan 2025 – Feb 2025",
      details: [
        "Developed backend features in Java and Spring Boot, supporting application workflows and service integrations.",
        "Implemented and maintained REST API functionality to connect backend services with application features.",
        "Helped troubleshoot issues and documented API behavior and technical updates for the development team.",
      ],
    },
  ],
  projects: [
    {
      id: "safe-v",
      title: "SAFE-V.ai",
      subtitle: "Vehicle Safety Monitoring System",
      problem:
        "Drivers and responders need timely vehicle telemetry and useful alerts when an incident occurs.",
      contribution:
        "Built an IoT-enabled vehicle safety platform that collects sensor data, provides live monitoring, and supports incident alerts. The system combines connected hardware, backend services, APIs, and dashboards to make vehicle safety information easier to monitor.",
      highlights: [
        "Integrated ESP32-based sensor readings and connected telemetry workflows.",
        "Used Spring Boot and FastAPI services with REST APIs.",
        "Built web dashboards using Next.js.",
        "Used ThingSpeak for IoT data visualisation and telemetry.",
        "Integrated AI-assisted analysis for road and passenger monitoring.",
      ],
      stack: [
        "Next.js",
        "Spring Boot",
        "FastAPI",
        "REST APIs",
        "ESP32",
        "ThingSpeak",
        "MySQL",
        "IoT",
      ],
      image: "/safev.jpg",
      imageAlt: "SAFE-V.ai telemetry dashboard showing live vehicle sensor data",
      links: [
        { label: "Live demo", href: "https://safev.vercel.app" },
        {
          label: "Source code",
          href: "https://github.com/adityathodsare/safev",
        },
        {
          label: "Walkthrough",
          href: "https://youtu.be/22hU7Eip-ag",
        },
      ],
    },
    {
      id: "healthorbit-ai",
      title: "HealthOrbit.AI",
      subtitle: "Health & Fitness Platform",
      problem:
        "Health and fitness information can be fragmented across services, making it difficult to understand progress and get useful guidance.",
      contribution:
        "Developed a health and fitness platform that brings tracking, analytics, and AI-assisted guidance into one experience.",
      highlights: [
        "Built a web application and supporting backend services.",
        "Integrated Gemini AI capabilities for guidance features.",
        "Used Spring Cloud Config Server and Eureka for service configuration and discovery.",
        "Used RabbitMQ for event messaging between services.",
        "Structured health and fitness data for dashboard visualisation.",
      ],
      stack: [
        "Spring Boot",
        "Spring Cloud Config",
        "Eureka",
        "RabbitMQ",
        "Gemini API",
        "MongoDB",
        "PostgreSQL",
        "Next.js",
      ],
      image: "/healthorbit.png",
      imageAlt: "HealthOrbit.AI dashboard showing health tracking and analytics",
      links: [
        {
          label: "Walkthrough",
          href: "https://youtu.be/UUP3TIrz5PM",
        },
        {
          label: "Frontend source",
          href: "https://github.com/adityathodsare/healthOrbit-Ai",
        },
        {
          label: "Backend source",
          href: "https://github.com/adityathodsare/microservices-project-health-fitness-ai",
        },
      ],
    },
    {
      id: "printify",
      title: "Printify",
      subtitle: "Print Shop Management",
      problem:
        "Print shops need a way to manage print jobs and coordinate customer conversations in one place.",
      contribution:
        "Built a print-shop management application with job organisation, document handling, and customer communication workflows.",
      highlights: [
        "Implemented a React-based user interface with Vite.",
        "Built backend functionality using Spring Boot.",
        "Used WebSocket messaging for real-time updates.",
        "Added secure document-upload workflows.",
      ],
      stack: ["React", "Vite", "Spring Boot", "MongoDB", "WebSocket"],
      image: "/printify.png",
      imageAlt: "Printify print shop management interface",
      links: [
        {
          label: "Project walkthrough",
          href: "https://www.linkedin.com/posts/aditya-thodsare-475366289_webapp-printify-springboot-activity-7284180807630368768-WPDF/",
        },
        {
          label: "Source code",
          href: "https://github.com/adityathodsare/project-Printify",
        },
      ],
    },
  ],
  skills: [
    {
      group: "Programming",
      items: ["Java", "TypeScript", "Python", "SQL"],
    },
    {
      group: "Backend & APIs",
      items: [
        "Spring Boot",
        "FastAPI",
        "REST APIs",
        "Microservices",
        "Event-driven architecture",
        "RabbitMQ",
      ],
    },
    {
      group: "Frontend",
      items: ["Next.js", "React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      group: "AI & Data",
      items: [
        "RAG",
        "LLM API integration",
        "MCP",
        "Agentic workflows",
        "LanceDB",
        "DuckDB",
      ],
    },
    {
      group: "Test Automation",
      items: [
        "Playwright",
        "Cypress",
        "End-to-end testing",
        "Page Object Model",
        "Allure",
      ],
    },
    {
      group: "Cloud, DevOps & Tools",
      items: [
        "AWS",
        "Docker",
        "CI/CD",
        "Jenkins",
        "Azure DevOps",
        "Bitbucket Pipelines",
        "Git",
        "GitHub",
        "Terraform",
        "Grafana",
        "Jira",
      ],
    },
    {
      group: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
  ],
  education: {
    degree: "B.E. Electronics & Telecommunication Engineering",
    institution: "JSPM's Imperial College of Engineering and Research",
    location: "Pune",
    period: "2022–2026",
    cgpa: "9.25/10",
    earlierEducation: [
      {
        qualification: "Higher Secondary Certificate (HSC), 12th",
        institution: "NMV & Jr. College, Markal, Pune",
        period: "2022",
        result: "71.83%",
      },
      {
        qualification: "Secondary School Certificate (SSC), 10th",
        institution: "Shramjivi High School, Bhosari, Pune",
        period: "2020",
        result: "88.80%",
      },
    ],
  },
};
