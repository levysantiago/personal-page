import { BlockQuote } from "components/BlockQuote";
import { SideTopic } from "components/SideTopic";
import * as React from "react";
import {
  Container,
  Description,
  HighlightedDescription,
  ShareBlock,
  Title,
  TitleContinuation,
} from "./styles";
import { useLanguage } from "components/contexts/LanguageContext";
import { content } from "./content";
import { formatContent } from "util/content-formatter";

const AcademicLife: React.FC = () => {
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

      <SideTopic
        imageElement={<ShareBlock />}
        title={content[lang].sections[0].title}
        descriptionElement={
          <Description>
            {formatContent({
              message: content[lang].sections[0].description,
              components: {
                HighlightComponent: HighlightedDescription,
              },
            })}
          </Description>
        }
      />

      <BlockQuote description={content[lang].blockQuoteDescription} />

      <SideTopic
        imageElement={<ShareBlock />}
        title={content[lang].sections[1].title}
        descriptionElement={
          <Description>
            {formatContent({
              message: content[lang].sections[1].description,
              components: {
                HighlightComponent: HighlightedDescription,
              },
            })}
          </Description>
        }
      />
    </Container>
  );
};

export default AcademicLife;
