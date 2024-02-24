import { SideTopic } from "components/SideTopic";
import React from "react";
import {
  AcademyIconBlock,
  Container,
  Description,
  HighlightedDescription,
  HighlightedSubTitle,
  HtmlTagImg,
  LevysdevPicture,
  ProfissionIconBlock,
  RelativeDiv,
  SubTitle,
  Title,
  TitleContinuation,
} from "./styles";
import { Link } from "components/styles";

const About: React.FC = () => {
  return (
    <Container>
      <Title>
        Um pouco <TitleContinuation>Sobre Levy</TitleContinuation>
      </Title>

      <SideTopic
        imageElement={<LevysdevPicture />}
        titleElement={
          <SubTitle>
            Bem vindo(a) ao mundo{" "}
            <HighlightedSubTitle>levysdev</HighlightedSubTitle>!
          </SubTitle>
        }
        description={`Prazer em te conhecer, meu nome é Levy, mas muitos me chamam de
            Levy's. Sou de originalidade brasileira, sou fascinado pela área da
            tecnologia, principalmente pelo desenvolvimento de sistemas. Estou sempre 
            aprendendo coisas novas, desenvolvendo projetos e compartilhando conhecimento 
            com a comunidade.`}
      />

      <SideTopic
        imageElement={<AcademyIconBlock />}
        title={`Formação Acadêmica`}
        description={`Sou bacharelado em Ciência da Computação na UESC (Universidade
            Estadual de Santa Cruz). E possuo mestrado em Ciência da Computação com foco em
             Blockchain na UFBA (Universidade Federal da Bahia).`}
      />

      <SideTopic
        imageElement={<ProfissionIconBlock />}
        title={`Blockchain Developer`}
        descriptionElement={
          <Description>
            Hoje trabalho como{" "}
            <HighlightedDescription>
              Blockchain Developer
            </HighlightedDescription>{" "}
            na <Link href="https://blockchainwebservices.com.br/">Bitfy BWS</Link>{" "}
            e também compartilho conteúdo nas redes sociais.
            Tenho experiência principalmente em Programação Backend e de
            Aplicações Blockchain.
          </Description>
        }
      />

      <RelativeDiv>
        <HtmlTagImg />
      </RelativeDiv>
    </Container>
  );
};

export default About;
