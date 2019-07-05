import React, { Component } from "react";
import Card from "./Card";

class Projetos extends Component {
  render() {
    const { long } = this.props;

    return (
      <div className="row">
        {/*<h2>Projetos</h2>*/}
        <Card
          title="ta5ks"
          type="project"
          abstract="Este é um aplicativo desenvolvido junto com amigos da faculdade.
          É um aplicativo que permite a criação e gerenciamento de tarefas
          (tasks). Ele foi desenvolvido utilizando Android Studio. Cada
          tarefa pode ser associada com um Projeto (ou tag) que representa
          a que a tarefa se refere."
          link="https://github.com/Levysantiago/ta5ks"
          date="22 / 12 / 2018"
          long={long}
        />
        <Card long={long} type="project" />

        <div className="col s12">
          <a href="" className="center">
            Veja mais projetos aqui >
          </a>
        </div>
      </div>
    );
  }
}

export default Projetos;
