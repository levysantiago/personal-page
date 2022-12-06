import * as React from "react";
import { quotes } from "./content/quotes";
import {
  Container,
  Phrase,
  QuoteContainer,
  QuoteImg,
  QuoteImgReverse,
  QuoteSuperContainer,
  VerticalLine,
} from "./styles";

const Quote: React.FC = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);

  return (
    <Container>
      <QuoteSuperContainer>
        <QuoteImg />
        <QuoteContainer>
          <VerticalLine />
          <Phrase>
            {quotes[randomNumber].phrase} <br /> - {quotes[randomNumber].author}
          </Phrase>
        </QuoteContainer>
        <QuoteImgReverse />
      </QuoteSuperContainer>
    </Container>
  );
};

export default Quote;
