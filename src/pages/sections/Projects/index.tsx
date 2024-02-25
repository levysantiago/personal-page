import ProjectCard from "components/ProjectCard";
import * as React from "react";

import {
  CardsContainer,
  Container,
  Description,
  Title,
  TitleContinuation,
} from "./styles";
import { formatContent } from "util/content-formatter";
import { useLanguage } from "components/contexts/LanguageContext";
import { content } from "./content/indedx";

const Projects: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <Container>
      <Title>
        {formatContent({
          message: content[lang].title,
          components: {
            HighlightComponent: TitleContinuation,
          },
        })}
      </Title>

      <Description>{content[lang].description}</Description>

      <CardsContainer>
        {content[lang].projects.map((project, key) => {
          return (
            <ProjectCard
              key={key}
              title={project.title}
              description={project.description}
              readMoreLink={project.readMoreLink}
              githubLink={project.githubLink}
              readMoreText={content[lang].readMoreText}
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
