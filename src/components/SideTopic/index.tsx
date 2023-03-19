import React, { ReactElement } from "react";
import {
  Container,
  Description,
  Title,
  TitleDescriptionContainer,
} from "./styles";

interface ISideTopicProps {
  title?: string;
  titleElement?: ReactElement;
  description?: string;
  descriptionElement?: ReactElement;
  imageElement: ReactElement;
}

export function SideTopic({
  title,
  titleElement,
  description,
  descriptionElement,
  imageElement,
}: ISideTopicProps) {
  return (
    <Container>
      {imageElement}
      <TitleDescriptionContainer>
        {title ? <Title>{title}</Title> : null}
        {titleElement ? titleElement : null}
        {description ? <Description>{description}</Description> : null}
        {descriptionElement ? descriptionElement : null}
      </TitleDescriptionContainer>
    </Container>
  );
}
