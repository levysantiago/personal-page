import React, { Component } from "react";
import Card from "./Card";

class Artigos extends Component {
  render() {
    const { long } = this.props;

    return (
      <div className="row">
        <h2>Publicações</h2>
        <Card
          title="I2oTology - Tracking-Oriented Ontology"
          date="22 / 12 / 2018"
          place="XVII ESCOLA REGIONAL DE COMPUTAÇÃO BAHIA - ALAGOAS -
              SERGIPE, Cruz das Almas"
          proceeding="Anais Workshop de Educação e Informática
              Bahia-Alagoas-Sergipe (WEIBASE), p. 36-45"
          link="https://drive.google.com/file/d/1m7rEnwgkHGoOUowkV6Vdm-x7T02h8TRI/view?usp=sharing"
          long={long}
        />
        <Card title="Artigo" date="22 / 12 / 2018" long={long} />
        <Card title="Artigo" date="22 / 12 / 2018" long={long} />
        <Card title="Artigo" date="22 / 12 / 2018" long={long} />

        <div className="col s12">
          <a href="" className="center">
            Veja mais publicações aqui >
          </a>
        </div>
      </div>
    );
  }
}

export default Artigos;
