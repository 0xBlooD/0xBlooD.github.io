export const portfolioData = {
  name: "John Doe",
  title: "Full Stack Developer",
  ascii: `
   ██████╗ ██████╗ ██╗   ██╗██████╗     ██████╗ ██╗   ██╗
  ██╔════╝ ██╔══██╗██║   ██║██╔══██╗    ██╔══██╗██║   ██║
  ██║  ███╗██████╔╝██║   ██║██████╔╝    ██║  ██║██║   ██║
  ██║   ██║██╔══██╗██║   ██║██╔══██╗    ██║  ██║╚██╗ ██╔╝
  ╚██████╔╝██║  ██║╚██████╔╝██████╔╝    ██████╔╝ ╚████╔╝
   ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═════╝     ╚═════╝   ╚═══╝`,

  about: {
    bio: [
      "Full Stack Developer with 5+ years of experience building web applications.",
      "Passionate about open source, Linux, and clean code architecture.",
      "Currently based in San Francisco, CA.",
      "Interests: Systems programming, DevOps, mechanical keyboards, coffee.",
    ],
    contact: {
      email: "john.doe@example.com",
      github: "github.com/johndoe",
      linkedin: "linkedin.com/in/johndoe",
      website: "johndoe.dev",
    },
  },

  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022-01 — present",
      description: [
        "Led migration of monolithic app to microservices architecture",
        "Reduced API response time by 60% through query optimization",
        "Mentored team of 4 junior developers",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020-03 — 2021-12",
      description: [
        "Built real-time collaboration features using WebSockets",
        "Implemented CI/CD pipeline reducing deploy time by 80%",
        "Designed and built RESTful API serving 10k+ daily users",
      ],
    },
    {
      title: "Junior Developer",
      company: "WebAgency Co.",
      period: "2018-06 — 2020-02",
      description: [
        "Developed responsive web applications for 15+ clients",
        "Integrated third-party APIs and payment gateways",
        "Wrote unit and integration tests achieving 90% coverage",
      ],
    },
  ],

  projects: [
    {
      name: "cloud-deploy-cli",
      version: "2.4.1",
      description: "CLI tool for automated cloud infrastructure deployment",
      tech: ["Go", "AWS SDK", "Terraform"],
      link: "github.com/johndoe/cloud-deploy-cli",
    },
    {
      name: "realtime-chat",
      version: "1.2.0",
      description: "End-to-end encrypted real-time chat application",
      tech: ["TypeScript", "React", "WebSocket", "Redis"],
      link: "github.com/johndoe/realtime-chat",
    },
    {
      name: "log-analyzer",
      version: "3.0.0",
      description: "Distributed log aggregation and analysis platform",
      tech: ["Python", "Elasticsearch", "Kafka"],
      link: "github.com/johndoe/log-analyzer",
    },
    {
      name: "dotfiles",
      version: "1.0.0",
      description: "Personal Linux/macOS configuration and setup scripts",
      tech: ["Bash", "Lua", "Nix"],
      link: "github.com/johndoe/dotfiles",
    },
  ],

  skills: [
    { name: "typescript", version: "5.3.0", category: "language", level: 95 },
    { name: "react", version: "18.2.0", category: "framework", level: 92 },
    { name: "node.js", version: "20.10.0", category: "runtime", level: 90 },
    { name: "python", version: "3.12.0", category: "language", level: 85 },
    { name: "go", version: "1.21.0", category: "language", level: 75 },
    { name: "postgresql", version: "16.1", category: "database", level: 88 },
    { name: "docker", version: "24.0.0", category: "devops", level: 85 },
    { name: "kubernetes", version: "1.28.0", category: "devops", level: 70 },
    { name: "linux", version: "6.6.0", category: "system", level: 90 },
    { name: "git", version: "2.43.0", category: "tool", level: 92 },
    { name: "aws", version: "2.0.0", category: "cloud", level: 80 },
    { name: "redis", version: "7.2.0", category: "database", level: 78 },
  ],
};
