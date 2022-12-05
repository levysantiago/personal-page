import ProgressBar from "components/ProgressBar";
import React from "react";
import { Container, LeftContent, Title, TitleContinuation } from "./styles";

const HardSkills: React.FC = () => {
  return (
    <Container>
      <Title>
        Hard <TitleContinuation>Skills</TitleContinuation>
      </Title>

      <LeftContent>
        <ProgressBar title="Javascript" barWidthPercent="80%" />
      </LeftContent>
    </Container>
  );
};

export default HardSkills;
