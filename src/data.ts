import { PortfolioData } from "./types";

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  name: "Abdul Samad Abdul Majeed",
  title: "Senior .NET Full-Stack Engineer",
  tagline: "Building Scalable Web Applications, Modern React Experiences & AI-Powered Solutions",
  experienceYears: "8+ Years of Professional Software Development Experience",
  location: "Vikhroli East, Mumbai, Maharashtra",
  email: "shaikhsamad26@gmail.com",
  phone: "+91 7302416108",
  githubUrl: "", // Blank as not provided in resume
  linkedinUrl: "", // Blank as not provided in resume
  resumeDownloadUrl: "", // Can be custom-uploaded or automatically generated
  statusText: "Open to Senior .NET / Full-Stack Opportunities",
  aboutText: [
    "I am an experienced Senior Full-Stack Software Engineer with over 8 years of professional software development experience, specializing in building high-performance, secure, and maintainable web applications.",
    "My engineering approach centers around SOLID principles, modern UI patterns, and secure coding practices. I bring a strong background in C#, .NET Core, ASP.NET MVC, React.js, SQL Server, and AI integrations to cross-functional teams.",
    "I have a proven record of optimizing database queries, implementing real-time transaction tracking, and reducing vulnerabilities by 20% in enterprise financial systems."
  ],
  skills: [
    {
      category: "Backend Engineering",
      items: ["C#", "ASP.NET MVC", "ASP.NET Core", "REST APIs", "ADO.NET", "API Integration"]
    },
    {
      category: "Frontend Engineering",
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "jQuery"]
    },
    {
      category: "Database Engineering",
      items: ["SQL Server", "Stored Procedures", "Joins", "Indexing", "Query Optimization"]
    },
    {
      category: "Engineering Practices",
      items: ["SOLID Principles", "Secure Coding", "Unit Testing", "SDLC", "Performance Optimization", "Git", "Visual Studio"]
    },
    {
      category: "Emerging Tech & AI",
      items: ["AI-based applications", "API integrations", "Prompt Engineering"]
    }
  ],
  experiences: [
    {
      id: "scanid",
      company: "SCANID SYSTEM PRIVATE LTD",
      role: "Software Developer / Full-Stack Engineer",
      period: "July 2025 – 30 August 2026",
      highlights: [
        "Led and maintained Payroll Management projects using ASP.NET MVC/Core, C#, and SQL Server.",
        "Built modern client web interfaces with React.js and integrated secure REST APIs.",
        "Managed the full software development lifecycle (SDLC) including requirement analysis, development, testing, deployment, and bug fixing.",
        "Delivered critical performance optimizations and continuous feature enhancements."
      ]
    },
    {
      id: "remiges",
      company: "REMIGES TECHNOLOGIES PVT LTD, MUMBAI",
      role: "Senior .NET Developer",
      client: "CVL Aventure – CDSL Aventure",
      period: "Nov 2023 – 17 July 2025",
      highlights: [
        "Developed AI-based projects similar to ChatGPT and Gemini using React.js and third-party API integrations.",
        "Enhanced real-time AI-driven data visualizations using Tailwind CSS, ensuring smooth interactive metrics.",
        "Designed and implemented secure KYC Financial modules using React.js, ASP.NET MVC, and SQL Server.",
        "Applied strict SOLID principles and secure coding practices, successfully reducing vulnerabilities by 20%."
      ]
    },
    {
      id: "writer",
      company: "WRITER TECHNOLOGIES, MUMBAI",
      role: ".NET Developer",
      period: "May 2023 – Oct 2023",
      highlights: [
        "Engineered the Infodocs Module using ASP.NET MVC, handling critical enterprise documentation.",
        "Implemented advanced programmatic PDF manipulation features, including insert, append, delete, and custom watermarking.",
        "Automated HealthAssure data uploads to streamline healthcare and insurance data management workflows."
      ]
    },
    {
      id: "neosoft",
      company: "NEO SOFT TECHNOLOGIES",
      role: ".NET Developer",
      period: "Nov 2022 – Apr 2023",
      highlights: [
        "Successfully migrated complex legacy Oracle database scripts into SQL Server.",
        "Implemented high-performance data access patterns with ADO.NET, reducing connection latency.",
        "Improved overall data connectivity, integrity, and query execution speeds."
      ]
    },
    {
      id: "ags",
      company: "AGS TRANSACT TECHNOLOGIES, MUMBAI",
      role: "Software Engineer",
      client: "Allahabad Bank, Central Bank, Union Bank",
      period: "Aug 2020 – Jan 2022",
      highlights: [
        "Developed financial dashboards and profile management modules using ASP.NET MVC.",
        "Enabled real-time, ultra-fast transaction tracking for national banking clients.",
        "Designed and implemented secure multi-user role mappings."
      ]
    },
    {
      id: "cubictree",
      company: "CUBICTREE TECHNOLOGIES PVT LTD, MUMBAI",
      role: ".NET Developer",
      period: "Mar 2019 – Jul 2020",
      highlights: [
        "Built a complete robust Case Management System from scratch.",
        "Structured databases, stored procedures, bulk upload handlers, and advanced text search functionality.",
        "Designed interactive performance dashboards and push notification modules.",
        "Successfully improved case-tracking efficiency by 15%."
      ]
    }
  ],
  projects: [
    {
      id: "proj-payroll",
      title: "Payroll Management Platform",
      problem: "Inefficient payroll handling with complex manual calculations and slow processing cycles.",
      solution: "Developed a comprehensive payroll engine with automated tax calculation, ledger generation, and a modern frontend dashboard.",
      tech: ["ASP.NET Core", "C#", "SQL Server", "React.js", "REST APIs"],
      contribution: "Built full-stack components, designed stored procedures for fast ledger queries, and structured the React employee self-service portal."
    },
    {
      id: "proj-ai",
      title: "AI-Powered Conversational Applications",
      problem: "Lack of contextual data analysis and conversational search capabilities in legacy financial archives.",
      solution: "Designed and built custom generative AI applications similar to ChatGPT and Gemini to analyze and query enterprise records.",
      tech: ["React.js", "API Integrations", "Tailwind CSS", "Node.js"],
      contribution: "Engineered real-time visual streaming nodes for generative AI outputs and integrated secure third-party Large Language Model APIs."
    },
    {
      id: "proj-kyc",
      title: "KYC Financial Verification Modules",
      problem: "High threat of document fraud and slow client onboarding due to unoptimized security checks in financial operations.",
      solution: "Implemented secure KYC modules with strict data validation, schema enforcement, and vulnerability patches.",
      tech: ["React.js", "ASP.NET MVC", "SQL Server", "SOLID Principles"],
      contribution: "Refactored key business logic to satisfy SOLID design, closing critical security loopholes and dropping vulnerability scans by 20%."
    },
    {
      id: "proj-infodocs",
      title: "Infodocs / PDF Processing Engine",
      problem: "Slow document compiling and lack of automated audit trails for insurance document verification.",
      solution: "Developed a high-throughput programmatic PDF processor with watermarking, splitting, appending, and merging capabilities.",
      tech: ["ASP.NET MVC", "C#", "PDF Processing Libraries", "Healthcare APIs"],
      contribution: "Programmed the custom PDF memory stream editor and automated batch HealthAssure records uploads."
    },
    {
      id: "proj-case",
      title: "Enterprise Case Management System",
      problem: "Legal and financial disputes tracking was unorganized, leading to delayed escalations and poor status updates.",
      solution: "Built a centralized case tracker with instant indexing, notifications, bulk uploads, and automated escalations.",
      tech: ["ASP.NET MVC", "SQL Server", "Bulk Upload Parser", "Dashboards"],
      contribution: "Designed the index tables and optimized lookup queries, accelerating case tracking speed and increasing efficiency by 15%."
    },
    {
      id: "proj-banking",
      title: "High-Volume Banking Transaction Dashboards",
      problem: "Bank personnel struggled to track and coordinate real-time ATMs and branch transactional issues.",
      solution: "Created active monitoring dashboards showing real-time transaction failures, map coordinates, and bank profiles.",
      tech: ["ASP.NET MVC", "SignalR", "Dashboards", "Multi-user Mapping"],
      contribution: "Designed and built real-time analytics panels and secure role mappings for Bank of Allahabad, Central Bank, and Union Bank."
    }
  ],
  capabilities: [
    {
      title: "Scalable Architecture",
      description: "Proven experience building highly robust, maintainable, and scalable enterprise web applications from the ground up.",
      iconName: "Layers"
    },
    {
      title: "Performance Engineering",
      description: "Deep expertise in SQL Server optimization, advanced indexing, query tuning, and application latency reduction.",
      iconName: "Cpu"
    },
    {
      title: "Secure Development",
      description: "Rigorous focus on secure coding standards, input validation, vulnerability reduction, and SOLID architecture rules.",
      iconName: "Shield"
    },
    {
      title: "Modern Frontend",
      description: "Crafting beautiful, reactive, and fluid user interfaces in React.js and TypeScript, paired with modern Tailwind CSS.",
      iconName: "Terminal"
    },
    {
      title: "API Integration",
      description: "Designing and integrating secure REST APIs, enterprise payment channels, and third-party web services.",
      iconName: "Link"
    },
    {
      title: "AI Integration",
      description: "Integrating modern LLM cognitive interfaces, vector search mechanisms, and stream-visualization UI components.",
      iconName: "Sparkles"
    }
  ],
  approachSteps: [
    {
      num: "01",
      title: "Understand",
      description: "Translate core business needs, user stories, and compliance requirements into exact engineering specifications."
    },
    {
      num: "02",
      title: "Architect",
      description: "Design modular database schemas, backend services, and clean component interfaces adhering strictly to SOLID principles."
    },
    {
      num: "03",
      title: "Build",
      description: "Develop clean C# codebases, robust REST APIs, fast React interfaces, and optimized database storage structures."
    },
    {
      num: "04",
      title: "Secure",
      description: "Perform vulnerability auditing, protect sensitive inputs, and ensure data integrity across multi-user environments."
    },
    {
      num: "05",
      title: "Optimize",
      description: "Audit index execution paths, refactor memory handling, and run profiling tests to ensure sub-second interaction speeds."
    },
    {
      num: "06",
      title: "Deliver",
      description: "Build thorough testing logs, orchestrate deployment, and establish resilient application maintenance strategies."
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "YCMOU University",
      year: "Graduated 2016"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Vikas Yatra College",
      year: "Completed 2008"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Anjuman Khairul Islam School",
      year: "Completed 2006"
    }
  ],
  metrics: [
    {
      value: "8+",
      label: "Years Professional Experience",
      description: "Enterprise software development focusing on .NET, APIs, and React architectures."
    },
    {
      value: "20%",
      label: "Vulnerability Reduction",
      description: "Successfully audited and patched critical KYC modules to secure user financial transactions."
    },
    {
      value: "15%",
      label: "Efficiency Improvement",
      description: "Optimized workflow speeds and case tracking capabilities for legal operations platforms."
    }
  ]
};

const STORAGE_KEY = "abdul_samad_portfolio_data_v1";

export function loadPortfolioData(): PortfolioData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Error loading portfolio data from localStorage", e);
  }
  return DEFAULT_PORTFOLIO_DATA;
}

export function savePortfolioData(data: PortfolioData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Error saving portfolio data to localStorage", e);
  }
}

export function resetPortfolioData(): PortfolioData {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Error resetting portfolio data", e);
  }
  return DEFAULT_PORTFOLIO_DATA;
}
