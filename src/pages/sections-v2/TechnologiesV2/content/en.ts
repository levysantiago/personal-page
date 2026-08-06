export const en = {
  heading: "Technologies",
  groups: [
    {
      icon: "code" as const,
      label: "Core",
      tags: [
        { label: "TypeScript", variant: "accent" as const },
        { label: "Node.js", variant: "accent" as const },
        { label: "Nest.js", variant: "outline" as const },
        { label: "Fastify", variant: "outline" as const },
        { label: "Express", variant: "outline" as const },
        { label: "Prisma", variant: "outline" as const },
        { label: "TypeORM", variant: "outline" as const },
      ],
    },
    {
      icon: "sparkle" as const,
      label: "AI",
      tags: [
        { label: "OpenAI", variant: "outline" as const },
        { label: "Vercel AI SDK", variant: "outline" as const },
        { label: "OpenRouter", variant: "outline" as const },
        { label: "RAG", variant: "outline" as const },
        { label: "MCP", variant: "outline" as const },
        { label: "Agent workflows", variant: "outline" as const },
      ],
    },
    {
      icon: "database" as const,
      label: "Data",
      tags: [
        { label: "PostgreSQL", variant: "outline" as const },
        { label: "MySQL", variant: "outline" as const },
        { label: "MongoDB", variant: "outline" as const },
        { label: "Redis", variant: "outline" as const },
        { label: "SQLite", variant: "outline" as const },
      ],
    },
    {
      icon: "cloud" as const,
      label: "Infra",
      tags: [
        { label: "Docker", variant: "outline" as const },
        { label: "Google Cloud", variant: "outline" as const },
        { label: "Digital Ocean", variant: "outline" as const },
        { label: "Amazon S3", variant: "outline" as const },
        { label: "NGINX", variant: "outline" as const },
      ],
    },
  ],
};
