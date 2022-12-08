import * as React from "react";
import {
  Container,
  Description,
  HighlightedDescription,
  Title,
  TitleContinuation,
} from "./styles";

const AcademicLife: React.FC = () => {
  return (
    <Container>
      <Title>
        Vida <TitleContinuation>Acadêmica</TitleContinuation>
      </Title>

      <Description>
        É difícil de acreditar, mas eu gosto tanto do mercado quanto da área
        acadêmica. Desde a graduação eu participo de projetos científicos e, por
        isso, já publiquei vários artigos científicos junto com meu grupo de
        pesquisa nas áreas de Internet das Coisas, educação em computação e
        Blockchain.{" "}
        <HighlightedDescription>
          Me fascina a ideia de compartilhar seu conhecimento com outras pessoas
          na intenção de fazer a tecnologia evoluir
        </HighlightedDescription>
        . Ao compartilhar seu conhecimento, outra pessoa pode utilizar sua ideia
        para criar algo totalmente novo seguindo uma abordagem que você não
        tinha enxergado antes, da mesma forma, essa pessoa não chegaria nesta
        nova abordagem se você não tivesse compartilhado.
      </Description>

      <Description>
        Durante minha vida acadêmica, tanto na graduação quanto no mestrado,{" "}
        <HighlightedDescription>
          tive a oportunidade de apresentar artigos em conferências em locais
          diferentes, nacionais e internacionais
        </HighlightedDescription>
        . Já apresentei trabalhos em São Paulo (SP), Cruz das Almas (BA), em
        Salvador (BA) auxiliei na organização de um minicurso de programação
        básica em Solidity, também apresentei em conferências online (no período
        da pandemia COVID19) como na SBES (CBSoft 2021) e na CASCON X EVOKE 2021
        patrocinada pela IBM, esta última internacional. São experiências que,
        além de conhecer outras pessoas e trabalhos diferentes, foi possível
        exercitar a comunicação, o que foi essencial para projetos que vieram no
        futuro.{" "}
        <HighlightedDescription>
          Por isso, considero que a academia ajudou no meu desenvolvimento
          profissional, assim como o inverso
        </HighlightedDescription>
        .
      </Description>
    </Container>
  );
};

export default AcademicLife;
