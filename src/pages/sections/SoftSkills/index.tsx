import SimpleCardInfo from "components/SimpleCardInfo";
import * as React from "react";
import { content } from "./content/softskills";
import { CardsContainer, Container, Title, TitleContinuation } from "./styles";
import { useLanguage } from "components/contexts/LanguageContext";
import { formatContent } from "util/content-formatter";

const SoftSkills: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <Container>
      <Title>
        {formatContent({
          message: content[lang].title,
          components: {
            HighlightComponent: TitleContinuation,
          },
        })}
      </Title>
      <CardsContainer>
        {content[lang].softSkills.map((skill, key) => {
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
