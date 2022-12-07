import * as React from "react";
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
        <HighlightedDescription>criação/testes de SmCs</HighlightedDescription>,
        assim como o{" "}
        <HighlightedDescription>
          desenvolvimento de uma DApp
        </HighlightedDescription>{" "}
        para integração com estes SmCs utilizando{" "}
        <HighlightedDescription>React.js</HighlightedDescription> para o
        front-end e{" "}
        <HighlightedDescription>
          Web3.js, Metamask, Truffle.js, Mocha.js, RemixIDE
        </HighlightedDescription>{" "}
        e outras ferramentas para desenvolvimento e testes dos SmCs. Este também
        foi o primeiro momento em que comecei a entender a dinâmica do mercado e
        organização empresarial.
      </Description>

      <Description>
        Durante um período do mestrado, trabalhei em outra empresa onde tive
        contato com mais conceitos da área, envolvendo{" "}
        <HighlightedDescription>
          criação/testes de tokens
        </HighlightedDescription>{" "}
        (Security, Utility, Hybrid, etc.),{" "}
        <HighlightedDescription>NFTs, DEXs, DApps</HighlightedDescription>,
        estratégias de trading , etc. Da mesma forma, adquiri maior conhecimento
        em desenvolvimento back-end (Node.js) e front-end (React.js), banco de
        dados (SQL e NoSQL) configuração de clouds, gerenciamento de domínios,
        SSL, hospedagem, etc. Porém, uma das experiências mais importantes para
        mim, foi a possibilidade de{" "}
        <HighlightedDescription>liderar uma equipe</HighlightedDescription>. Foi
        a primeira oportunidade que tive de{" "}
        <HighlightedDescription>
          compartilhar o meu conhecimento
        </HighlightedDescription>
        , liderar e{" "}
        <HighlightedDescription>participar de decisões</HighlightedDescription>{" "}
        de grande impacto na empresa .
      </Description>

      <Description>
        A partir de 2022 comecei a trabalhar como{" "}
        <HighlightedDescription>freelancer</HighlightedDescription>, pretendo
        participar de forma mais ativa dentro da comunidade blockchain, não só
        contribuindo com o{" "}
        <HighlightedDescription>
          desenvolvimento de novas aplicações
        </HighlightedDescription>
        , como também{" "}
        <HighlightedDescription>
          compartilhando o conhecimento
        </HighlightedDescription>{" "}
        para que nós possamos{" "}
        <HighlightedDescription>
          evoluir para um outro nível
        </HighlightedDescription>{" "}
        onde saímos da zona de conforto e buscamos novos desafios (dentro da
        blockchain "novos desafios" é o que não falta). Fique a vontade para me
        seguir e entrar em contato no Linkedin, GitHub, etc.
      </Description>
    </Container>
  );
};

export default ProfessionalLife;
