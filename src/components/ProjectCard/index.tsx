import * as React from "react";
import {
  Badge,
  BadgeList,
  BadgeTitle,
  CardContainer,
  CardContainerBorder,
  CardContainerBorderOver,
  Description,
  ExternalLink,
  ExternalLinkIcon,
  ImageHeader,
  ImageHeaderContainer,
  ReadMoreLink,
  Title,
} from "./styles";

interface IProps {
  title: string;
  banner: string;
  description: string;
  readMoreLink?: string;
  githubLink?: string;
  badges: string[];
}

const ProjectCard: React.FC<IProps> = ({
  title,
  banner,
  description,
  readMoreLink,
  githubLink,
  badges,
}: IProps) => {
  return (
    <CardContainerBorder href={githubLink}>
      <CardContainerBorderOver />

      <CardContainer>
        <ImageHeaderContainer>
          <ImageHeader src={banner} />
        </ImageHeaderContainer>

        <BadgeList>
          {badges.map((badge, index) => {
            return (
              <Badge key={`project-card-badge-${index}`}>
                <BadgeTitle>{badge}</BadgeTitle>
              </Badge>
            );
          })}
        </BadgeList>

        <Title>{title}</Title>
        <Description>{description}</Description>
        {readMoreLink ? (
          <ExternalLink href={githubLink}>
            <ExternalLinkIcon />
            <ReadMoreLink>Ver projeto</ReadMoreLink>
          </ExternalLink>
        ) : null}
      </CardContainer>
    </CardContainerBorder>
  );
};

export default ProjectCard;
