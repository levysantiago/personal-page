import React, { Component } from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import ListTips from "../components/ListTips";
import Blockquote from "../components/Blockquote";
import dict from "../language/pt";
import Footer from "../components/Footer";

class HellowPage extends Component {
  render() {
    return (
      <div>
        <NavBar blackStyle={true} />
        <div className="container row">
          <PageHeader
            title="Hellow Tips"
            description='O Hellow Tips é uma página no Instagram que criei com o intuito de
          divulgar dicas de qualquer informação relacionada à programação,
          tecnologia, e outros conceitos. O nome "Tips" é do inglês "dicas"
          e "Hellow" vem da frase usada no primeiro programa de todo
          programador: "Hello World!".'
            description2="Depois que entrei no curso de Ciência da Computação, percebi que
          muitas pessoas desistiam logo ao entrar no curso, pois acreditavam que
          este trataria de assuntos como manutenção de computadores ou uso de
          Excel, Word e outras ferramentas, e não sabiam o que era programação.
          Em 2017, mais especificamente no meu 4º semestre de curso, quando já
          tinha um conhecimento razoável dos assuntos, resolvi criar o Hellow
          Tips para publicar dicas de programação, dessa forma, pessoas que
          querem ser programadores entendem a ideia da programação e outras
          tecnologias e conceitos. Também aqueles que estão estudando
          programação em algum curso e aqueles que já são, podem aperfeiçoar os
          conhecimentos."
          />
          <ListTips />
          <Blockquote
            phrase={dict.blockquotes.four.phrase}
            author={dict.blockquotes.four.author}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HellowPage;
