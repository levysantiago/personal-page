import ArticleCard from "components/ArticleCard";
import * as React from "react";
import { articles } from "./content/articles";
import { CardsContainer, Container, Title, TitleContinuation } from "./styles";

const Articles: React.FC = () => {
  return (
    <Container>
      <Title>
        Publicações <TitleContinuation>Acadêmicas</TitleContinuation>
      </Title>
      <CardsContainer>
        {articles.map((article, key) => {
          return (
            <ArticleCard
              key={key}
              title={article.title}
              items={article.items}
            />
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default Articles;
