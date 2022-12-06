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
      {readMoreLink ? <ReadMoreLink>Ler mais</ReadMoreLink> : null}
      {githubLink ? <GithubIcon /> : null}
    </CardContainer>
  );
};

export default ProjectCard;
