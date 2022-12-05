import React from "react";
import {
  Container,
  Description,
  HtmlTagImg,
  Title,
  TitleContinuation,
} from "./styles";

interface IAboutProps {
  title: string;
  titleContinuation?: string;
}

const About: React.FC<IAboutProps> = (props: IAboutProps) => {
  const { title, titleContinuation } = props;

  return (
    <Container>
      <HtmlTagImg />

      <Title>
        {title} <TitleContinuation>{titleContinuation}</TitleContinuation>
      </Title>

      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Description>
    </Container>
  );
};

export default About;
