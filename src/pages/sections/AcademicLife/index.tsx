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

const AcademicLife: React.FC = () => {
  return (
    <Container>
      <Title>
        Vida <TitleContinuation>Acadêmica</TitleContinuation>
      </Title>

      <SideTopic
        imageElement={<ShareBlock />}
        title="Academia x Mercado"
        descriptionElement={
          <Description>
            É difícil de acreditar, mas eu gosto tanto do mercado quanto da área
            acadêmica. Desde a graduação eu participo de projetos científicos e,
            por isso, já publiquei vários artigos científicos junto com meu
            grupo de pesquisa nas áreas de Internet das Coisas, engenharia de
            software e Blockchain.{" "}
            <HighlightedDescription>
              Me fascina a ideia de compartilhar seu conhecimento com outras
              pessoas na intenção de fazer a tecnologia evoluir.
            </HighlightedDescription>
          </Description>
        }
      />

      <BlockQuote
        description={`Ao compartilhar seu conhecimento, 
        outra pessoa pode utilizar sua ideia para criar 
        algo totalmente novo seguindo uma abordagem que 
        você não tinha enxergado antes, da mesma forma, 
        essa pessoa não chegaria nesta nova abordagem se 
        você não tivesse compartilhado.`}
      />

      <SideTopic
        imageElement={<ShareBlock />}
        title="Networking e Comunicação"
        descriptionElement={
          <Description>
            Durante minha vida acadêmica, tive a oportunidade de apresentar
            artigos em conferências em locais diferentes, nacionais e
            internacionais. Também já auxiliei na organização de um minicurso de
            programação básica em Solidity, também apresentei em conferências
            virtuais como na{" "}
            <HighlightedDescription>SBES (CBSoft 2021)</HighlightedDescription>{" "}
            e na{" "}
            <HighlightedDescription>CASCON X EVOKE 2021</HighlightedDescription>{" "}
            patrocinada pela IBM, esta última internacional. São experiências
            que, além de conhecer outras pessoas e trabalhos diferentes, foi
            possível exercitar a comunicação, o que foi essencial para projetos
            que vieram no futuro.{" "}
            <HighlightedDescription>
              Por isso, considero que a academia ajudou no meu desenvolvimento
              profissional, assim como o inverso
            </HighlightedDescription>
            .
          </Description>
        }
      />
    </Container>
  );
};

export default AcademicLife;
