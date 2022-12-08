import NetworkButtons from "components/NetworkButtons";
import React from "react";
import { withTheme } from "styled-components";
import {
  Container,
  Description,
  HighlightedDescription,
  Title,
  TitleContinuation,
} from "./styles";

const ProfessionalLife: React.FC = () => {
  return (
    <Container>
      <Title>
        Vida <TitleContinuation>Profissional</TitleContinuation>
      </Title>

      <Description>
        Grande parte do meu conhecimento prático foi obtido dentro das empresas
        em que trabalhei. Eu iniciei minha vida profissional trabalhando
        voluntariamente em uma empresa na área de blockchain na{" "}
        <HighlightedDescription>
          criação/testes de SmCs, assim como o desenvolvimento de uma DApp para
          integração com estes SmCs
        </HighlightedDescription>{" "}
        utilizando React.js para o front-end e Web3.js, Metamask, Truffle.js,
        Mocha.js, RemixIDE e outras ferramentas para desenvolvimento e testes
        dos SmCs. Este também foi o primeiro momento em que comecei a entender a
        dinâmica do mercado e organização empresarial.
      </Description>

      <Description>
        Durante um período do mestrado, trabalhei em outra empresa onde tive
        contato com mais conceitos da área, envolvendo criação/testes de tokens
        (Security, Utility, Hybrid, etc.), NFTs, DEXs, DApps, estratégias de
        trading , etc. Da mesma forma, adquiri maior conhecimento em
        desenvolvimento back-end (Node.js) e front-end (React.js), banco de
        dados (SQL e NoSQL) configuração de clouds, gerenciamento de domínios,
        SSL, hospedagem, etc.{" "}
        <HighlightedDescription>
          Porém, uma das experiências mais importantes para mim, foi a
          possibilidade de liderar uma equipe. Foi a primeira oportunidade que
          tive de compartilhar o meu conhecimento
        </HighlightedDescription>{" "}
        , liderar e participar de decisões de grande impacto na empresa .
      </Description>

      <Description>
        A partir de 2022 comecei a trabalhar como freelancer, pretendo
        participar de forma mais ativa dentro da comunidade blockchain, não só
        contribuindo com o desenvolvimento de novas aplicações , como também{" "}
        <HighlightedDescription>
          compartilhando o conhecimento para que nós possamos evoluir para um
          outro nível onde saímos da zona de conforto e buscamos novos desafios
        </HighlightedDescription>{" "}
        (dentro da blockchain "novos desafios" é o que não falta). Fique a
        vontade para me seguir e entrar em contato no Linkedin, GitHub, etc.
      </Description>

      <NetworkButtons />
    </Container>
  );
};

export default withTheme(ProfessionalLife);
