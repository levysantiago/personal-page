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
        Alguns <TitleContinuation>Projetos</TitleContinuation>
      </Title>

      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
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
            />
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default Projects;
