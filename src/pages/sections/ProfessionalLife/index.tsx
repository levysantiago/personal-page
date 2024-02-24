import NetworkButtons from "components/NetworkButtons";
import { SideTopic } from "components/SideTopic";
import React from "react";
import { withTheme } from "styled-components";
import {
  BriefcaseBlock,
  Container,
  Description,
  HighlightedDescription,
  PlayBlock,
  RocketBlock,
  Title,
  TitleContinuation,
} from "./styles";
import { Link } from "components/styles";

const ProfessionalLife: React.FC = () => {
  return (
    <Container>
      <Title>
        Vida <TitleContinuation>Profissional</TitleContinuation>
      </Title>

      <SideTopic
        imageElement={<BriefcaseBlock />}
        title={`Boarding`}
        descriptionElement={
          <Description>
            Eu iniciei minha vida profissional trabalhando voluntariamente em
            uma empresa na área de Blockchain na criação/testes de SmCs, assim
            como no desenvolvimento de uma DApp para integração com estes SmCs
            utilizando <HighlightedDescription>React.js</HighlightedDescription>{" "}
            para o front-end e{" "}
            <HighlightedDescription>Web3.js</HighlightedDescription>,{" "}
            <HighlightedDescription>Metamask</HighlightedDescription>,{" "}
            <HighlightedDescription>Truffle.js</HighlightedDescription>,{" "}
            <HighlightedDescription>Mocha.js</HighlightedDescription>,{" "}
            <HighlightedDescription>RemixIDE</HighlightedDescription> e outras
            ferramentas para desenvolvimento e testes dos SmCs. Este também foi
            o primeiro momento em que comecei a entender a dinâmica do mercado e
            organização empresarial.
          </Description>
        }
      />

      <SideTopic
        imageElement={<BriefcaseBlock />}
        title={`Boosting`}
        descriptionElement={
          <Description>
            Durante o mestrado, trabalhei em outra empresa, ainda na área de Blockchain, onde tive
            a oportunidade de desenvolver mais projetos envolvendo {" "}
            <HighlightedDescription>
              tokens, NFTs, DEXs, DApps
            </HighlightedDescription>
            , etc. Também adquiri maior conhecimento em desenvolvimento
            backend (<HighlightedDescription>Node.js</HighlightedDescription>)
            e frontend (
            <HighlightedDescription>React.js</HighlightedDescription>), banco de
            dados (<HighlightedDescription>SQL e NoSQL</HighlightedDescription>),
            clouds, hospedagem,
            etc. Além disso, fui responsável por liderar uma equipe,{" "}
            <HighlightedDescription>
              foi a primeira oportunidade que tive de compartilhar o meu
              conhecimento, liderar e participar de decisões de grande impacto
              na empresa
            </HighlightedDescription>
            .
          </Description>
        }
      />

      <SideTopic
        imageElement={<PlayBlock />}
        title={`Freelancer & Digital Creator`}
        descriptionElement={
          <Description>
            A partir de 2022 comecei a trabalhar como freelancer{" "}
            <HighlightedDescription>
              e a participar de forma mais ativa dentro da comunidade de
              devs
            </HighlightedDescription>
            contribuindo com o desenvolvimento de novas aplicações,
            e também compartilhando o conhecimento. Este momento foi essencial
            para evoluir ainda mais minhas <HighlightedDescription>Hard Skills</HighlightedDescription> e
            {" "}<HighlightedDescription>Soft Skills</HighlightedDescription>, o que
            fez surgir a próxima oportunidade e cargo atual.
          </Description>
        }
      />

      <SideTopic
        imageElement={<RocketBlock />}
        title={`Blockchain Developer na Bitfy (cargo atual)`}
        descriptionElement={
          <Description>
            Em outubro de 2023 comecei a trabalhar na
            {" "}<Link href="https://blockchainwebservices.com.br/">Bifty</Link> como {" "}
            <HighlightedDescription>
              Blockchain Developer
            </HighlightedDescription>
            {" "} na criação de soluções com a tecnologia blockchain,
            a tecnologia de foco na minha carreira. Nesta empresa eu sou responsável
            por desenvolver APIs, aplicações e infraestruturas blockchain,
            pesquisar e desenvolver novas soluções em blockchain. Fique a vontade para me seguir
            e entrar em contato no Linkedin, GitHub, Instagram, etc.
          </Description>
        }
      />

      <NetworkButtons />
    </Container>
  );
};

export default withTheme(ProfessionalLife);
