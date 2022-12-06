import * as React from "react";
import {
  CardContainer,
  ItemDescription,
  ItemsContainer,
  ItemTitle,
  ReadLink,
  ReadLinkContainer,
  Title,
} from "./styles";

interface IItems {
  title: string;
  description: string;
}

interface IProps {
  title: string;
  items: IItems[];
}

const ArticleCard: React.FC<IProps> = (props: IProps) => {
  const { title, items } = props;

  return (
    <CardContainer>
      <Title>{title}</Title>
      {items.map((item, key) => {
        return (
          <ItemsContainer key={key}>
            <ItemTitle>{item.title}: </ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemsContainer>
        );
      })}
      <ReadLinkContainer>
        <ReadLink href="#">Ler artigo</ReadLink>
      </ReadLinkContainer>
    </CardContainer>
  );
};

export default ArticleCard;
