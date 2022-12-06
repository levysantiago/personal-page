import * as React from "react";
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
  return (
    <Container>
      <QuoteSuperContainer>
        <QuoteImg />
        <QuoteContainer>
          <VerticalLine />
          <Phrase>
            “Para caminhar 40 passos ou 400, o primeiro passo é igual. Diferente
            é a disposição.”
            <br />- Katsumi Tokuhisa
          </Phrase>
        </QuoteContainer>
        <QuoteImgReverse />
      </QuoteSuperContainer>
    </Container>
  );
};

export default Quote;
