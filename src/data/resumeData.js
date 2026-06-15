// Central place to edit your profile content.
// Update this file and the site updates everywhere automatically.

export const profile = {
  name: "Abhishek Aryan",
  role: "Full-Stack Software Developer",
  tagline: "AI-Driven Product & Engineer",
  location: "Noida, India",
  email: "abhishekaryan270@gmail.com",
  resumeUrl: "/resume.pdf",
  // TODO: replace "#" with your real profile links
  socials: {
    linkedin: "https://www.linkedin.com/in/abhishekaryan-770aa345",
    facebook: "#",
    instagram: "#",
  },
};

export const about = {
  paragraphs: [
    "I'm a Full Stack Software Developer with 2+ years of experience designing, building, and deploying scalable enterprise applications.",
    "I'm skilled in REST API development, Generative AI, Large Language Model (LLM) integration, Azure OpenAI, and Agile software development — combining solid full-stack engineering with applied AI.",
    "At heart, I'm an AI-driven product & engineering mindset: I specialize in transforming businesses through AI, automation, and digital innovation, and I thrive on building scalable, high-impact solutions.",
  ],
  facts: [
    { label: "Based in", value: "Noida, Uttar Pradesh, India" },
    { label: "Currently", value: "Software Developer @ Ericsson" },
    { label: "Core stack", value: "C# · .NET Core · Blazor · SQL" },
    { label: "Exploring", value: "Agentic AI workflows with Azure OpenAI" },
  ],
};

// Approximate / placeholder levels — update with your own numbers anytime.
export const skills = [
  { name: "C# / .NET Core / Blazor", percent: 90 },
  { name: "Generative AI, LLMs & Azure OpenAI", percent: 85 },
  { name: "REST APIs & Microservices", percent: 85 },
  { name: "SQL Server & Database Optimization", percent: 80 },
  { name: "AngularJS / JavaScript", percent: 75 },
  { name: "Python", percent: 70 },
  { name: "Data Structures & Algorithms", percent: 75 },
  { name: "Git, Agile/Scrum & CI/CD", percent: 85 },
];

export const resume = {
  summary:
    "Full Stack Software Developer with 2+ years of experience designing, building, and deploying scalable enterprise applications using C#, .NET Core, Blazor, and SQL. Delivered an AI-powered network monitoring platform that reduced manual validation effort by 70% and was recognized by senior stakeholders. Skilled in REST API development, Generative AI, Large Language Model (LLM) integration, Azure OpenAI, and Agile software development.",

  education: {
    school: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, India",
    degree: "Bachelor of Technology — Information Technology",
    duration: "2019 — 2023",
  },

  experience: {
    company: "Ericsson Global India Ltd",
    location: "Noida, Uttar Pradesh, India",
    duration: "December 2023 — Present",
    roles: [
      {
        title: "Software Developer",
        duration: "September 2025 — Present",
        points: [
          "Developed scalable full-stack applications using C#, .NET Core, Python, Blazor and SQL, and designed the REST APIs, backend services and database workflows behind them.",
          "Implemented Generative AI and Large Language Model (LLM)-based capabilities using Azure OpenAI to build intelligent automation workflows and AI-driven application features.",
          "Delivered a real-time network monitoring solution that reduced manual validation effort by 70%, improving operational efficiency and enabling faster issue identification.",
        ],
      },
      {
        title: "Associate Software Developer",
        duration: "September 2024 — August 2025",
        points: [
          "Developed enterprise web applications using C#, .NET Core, AngularJS, Blazor, Java and SQL.",
          "Implemented backend logic, REST APIs, database integrations and reusable frontend components to support scalable application development.",
          "Optimized SQL queries and improved application performance through efficient database operations, debugging and performance tuning.",
        ],
      },
      {
        title: "Graduate Engineer Trainee",
        duration: "December 2023 — August 2024",
        points: [
          "Worked on telecom systems and software development processes — module enhancements, debugging, testing and Agile development.",
        ],
      },
    ],
  },

  project: {
    title: "AI-Powered Network Traffic Monitoring & Intelligent Health Analysis Platform",
    tags: ["C#", ".NET Core", "SQL", "Azure OpenAI", "Generative AI"],
    points: [
      "Engineered an AI-driven monitoring platform to analyze network performance, detect congestion patterns and identify anomalies through automated workflows.",
      "Built an AI chatbot using Azure OpenAI and Large Language Models, enabling natural-language interactions for device and network-related queries.",
      "Automated device testing workflows by triggering network checks, collecting performance metrics and generating actionable insights for faster troubleshooting.",
    ],
  },

  achievements: [
    {
      title: "Recognized by senior stakeholders",
      description:
        "for delivering an AI-powered network monitoring solution that supports real-time operational decision-making.",
    },
    {
      title: "Promoted from Graduate Engineer Trainee to Software Developer",
      description: "within 2 years at Ericsson Global India Ltd.",
    },
  ],
};
