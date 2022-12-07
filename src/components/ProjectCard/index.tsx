import * as React from "react";
import {
  CardContainer,
  Description,
  GithubIcon,
  ReadMoreLink,
  Title,
} from "./styles";

interface IProps {
  title: string;
  description: string;
  readMoreLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<IProps> = ({
  title,
  description,
  readMoreLink,
  githubLink,
}: IProps) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {readMoreLink ? (
        <a href={githubLink} target="_blank" rel="noopener noreferer">
          <ReadMoreLink>Ler mais</ReadMoreLink>
        </a>
      ) : null}
      {githubLink ? (
        <a href={githubLink} target="_blank" rel="noopener noreferer">
          <GithubIcon />
        </a>
      ) : null}
    </CardContainer>
  );
};

export default ProjectCard;
