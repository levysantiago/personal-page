export const pt = {
  heading: "Sobre <highlight>mim</highlight>",
  lead: "Olá 👋, sou engenheiro back-end Node.js com experiência projetando APIs robustas e soluções de IA.",
  paragraph1:
    "Bacharelado em Ciência da Computação pela Universidade Estadual de Santa Cruz (UESC) e mestrado em Ciência da Computação pela Universidade Federal da Bahia (UFBA).",
  paragraph2:
    "Também gosto de compartilhar o que aprendo com a comunidade dev, escrevendo e gravando conteúdo sobre programação e tecnologia.",
  facts: {
    locationLabel: "Localização",
    location: "Bahia, Brasil",
    languagesLabel: "Idiomas",
    languages: "Português, Inglês",
    statusLabel: "Status",
    status: "Open to work",
  },
  cards: [
    {
      icon: "plugsConnected" as const,
      accent: "accent" as const,
      title: "APIs & serviços",
      description: "REST APIs, DDD, testes e CI com Nest.js, Fastify e Express.",
    },
    {
      icon: "brain" as const,
      accent: "green" as const,
      title: "Sistemas de IA",
      description:
        "Workflows multi-agente, RAG, MCP e frameworks de avaliação em produção.",
    },
    {
      icon: "database" as const,
      accent: "accent" as const,
      title: "Dados & infra",
      description:
        "PostgreSQL, Redis, Docker e deploys em cloud atrás de NGINX.",
    },
  ],
};
