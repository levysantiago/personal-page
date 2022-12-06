import SimpleCardInfo from "components/SimpleCardInfo";
import * as React from "react";
import { softskills } from "./content/softskills";
import { CardsContainer, Container, Title, TitleContinuation } from "./styles";

const SoftSkills: React.FC = () => {
  return (
    <Container>
      <Title>
        Soft <TitleContinuation>Skills</TitleContinuation>
      </Title>
      <CardsContainer>
        {softskills.map((skill, key) => {
          return (
            <SimpleCardInfo
              key={key}
              title={skill.title}
              description={skill.description}
            />
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default SoftSkills;
