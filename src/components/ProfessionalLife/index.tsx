import * as React from "react";
import { Container, Description, Title, TitleContinuation } from "./styles";

const ProfessionalLife: React.FC = () => {
  return (
    <Container>
      <Title>
        Vida <TitleContinuation>Profissional</TitleContinuation>
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

export default ProfessionalLife;
