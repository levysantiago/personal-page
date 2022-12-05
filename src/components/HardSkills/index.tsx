import ImageQuad from "components/ImageQuad";
import ProgressBar from "components/ProgressBar";
import React from "react";
import { languages } from "./content/languages";
import { tools } from "./content/tools";
import {
  Container,
  ContentContainer,
  LeftContent,
  RightContent,
  Title,
  TitleContinuation,
} from "./styles";

const HardSkills: React.FC = () => {
  return (
    <Container>
      <Title>
        Hard <TitleContinuation>Skills</TitleContinuation>
      </Title>
      <ContentContainer>
        <LeftContent>
          {languages.map((language) => {
            return (
              <ProgressBar
                title={language.title}
                barWidthPercent={language.progress}
              />
            );
          })}
        </LeftContent>
        <RightContent>
          {tools.map((tool) => {
            return (
              <ImageQuad src={tool.image} alt={tool.alt} title={tool.title} />
            );
          })}
        </RightContent>
      </ContentContainer>
    </Container>
  );
};

export default HardSkills;
