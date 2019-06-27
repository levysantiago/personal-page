import React, { Component } from "react";

class Sobre extends Component {
  /*textStyle = {
    fontFamily: "Quicksand"
  };*/

  render() {
    return (
      <div>
        <h2>Sobre</h2>
        <article>
          <p>
            Eu sou Levy. Sou originariamente brasileiro. Considero-me uma pessoa
            calma, amigável, curiosa e dedicada. Gosto de viajar, de aprender
            coisas novas e de conhecer novas pessoas.
          </p>
          <br />
          <p>
            Hoje sou graduando do curso de Ciência da Computação na UESC -{" "}
            <a href="http://www.uesc.br/" target="_blank">
              Universidade Estadual de Santa Cruz
            </a>
            . Faço parte do grupo LIF - Laboratório de Internet do Futuro, um
            grupo iniciado na UESC que envolve tanto estudantes como
            professores. Muitos dos meus projetos e publicações foram
            desenvolvidos juntamente com este grupo. Atualmente estou
            trabalhando em um projeto que envolve criação de contratos
            inteligentes utilizando a rede Ethereum.
          </p>
          <br />
          <p>
            Tenho experiência em Programação Web, Internet das Coisas,
            Ontologias, Blockchain e outras áreas e tecnologias.
          </p>
          <br />
          <p>
            A imagem abaixo demonstra as linguagens de programação as quais
            adquiri experiência até hoje. As porcentagens representam o quanto
            tenho de experiência e conhecimento em cada uma das linguagens. É
            uma forma controversa, uma vez que conhecimento não se quantifica,
            porém é direta e compreensível.
          </p>
          <br />
        </article>
      </div>
    );
  }
}

export default Sobre;
