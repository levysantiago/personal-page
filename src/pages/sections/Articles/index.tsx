import ArticleCard from "components/ArticleCard";
import * as React from "react";
import {
  CardsContainer,
  Container,
  Link,
  Title,
  TitleContinuation,
} from "./styles";
import { formatContent } from "util/content-formatter";
import { content } from "./content";
import { useLanguage } from "components/contexts/LanguageContext";

const Articles: React.FC = () => {
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
        {content[lang].articles.map((article, key) => {
          return (
            <ArticleCard
              key={key}
              title={article.title}
              link={article.link}
              items={article.items}
              readMoreText={content[lang].readArticle}
            />
          );
        })}
      </CardsContainer>
      <Link href="https://bit.ly/3hcCeSX">{content[lang].seeMoreText}</Link>
    </Container>
  );
};

export default Articles;
