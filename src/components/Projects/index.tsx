import ProjectCard from "components/ProjectCard";
import { projects } from "./content/projects";
import * as React from "react";

import {
  CardsContainer,
  Container,
  Description,
  Title,
  TitleContinuation,
} from "./styles";

const Projects: React.FC = () => {
  return (
    <Container>
      <Title>
        Meu <TitleContinuation>Portfólio</TitleContinuation>
      </Title>

      <Description>
        Dentre os diversos projetos que trabalhei, estes são alguns dos projetos que posso compartilhar com vocês.
      </Description>

      <CardsContainer>
        {projects.map((project, key) => {
          return (
            <ProjectCard
              key={key}
              title={project.title}
              description={project.description}
              readMoreLink={project.readMoreLink}
              githubLink={project.githubLink}
              banner={project.banner}
              badges={project.badges}
            />
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default Projects;
