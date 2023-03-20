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
        Meus <TitleContinuation>Projetos</TitleContinuation>
      </Title>

      <Description>
        Muitos dos projetos que desenvolvi foram projetos privados, por isso,
        por enquanto você verá somente alguns projetos que puderam ser
        compartilhados. Entretanto, estou trabalhando em diversos projetos
        pessoais que serão open-source. Conforme estes projetos forem criados,
        eles irão entrar nesta lista.
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
