import * as React from "react";
import {
  Badge,
  BadgeList,
  BadgeTitle,
  CardContainer,
  CardContainerBorder,
  Description,
  GithubIcon,
  ImageHeader,
  ImageHeaderContainer,
  ReadMoreLink,
  Title,
} from "./styles";
import gifflar_img from "../../assets/project-imgs/gifflar.jpg";

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
    <CardContainerBorder>
      <CardContainer>
        <ImageHeaderContainer>
          <ImageHeader src={gifflar_img} />
        </ImageHeaderContainer>

        <BadgeList>
          <Badge>
            <BadgeTitle>nodejs</BadgeTitle>
          </Badge>
          <Badge>
            <BadgeTitle>nodejs</BadgeTitle>
          </Badge>
          <Badge>
            <BadgeTitle>nodejs</BadgeTitle>
          </Badge>
          <Badge>
            <BadgeTitle>nodejs</BadgeTitle>
          </Badge>
          <Badge>
            <BadgeTitle>nodejs</BadgeTitle>
          </Badge>
          <Badge>
            <BadgeTitle>nodejs</BadgeTitle>
          </Badge>
          <Badge>
            <BadgeTitle>nodejs</BadgeTitle>
          </Badge>
        </BadgeList>

        <Title>{title}</Title>
        <Description>{description}</Description>
        {/* {readMoreLink ? (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <ReadMoreLink>Ler mais</ReadMoreLink>
          </a>
        ) : null} */}
        {/* {githubLink ? (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        ) : null} */}
      </CardContainer>
    </CardContainerBorder>
  );
};

export default ProjectCard;
