import ArticleCard from "components/ArticleCard";
import * as React from "react";
import { articles } from "./content/articles";
import {
  CardsContainer,
  Container,
  Link,
  Title,
  TitleContinuation,
} from "./styles";

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
              link={article.link}
              items={article.items}
            />
          );
        })}
      </CardsContainer>
      <Link href="https://bit.ly/3hcCeSX">Ver mais publicações</Link>
    </Container>
  );
};

export default Articles;
