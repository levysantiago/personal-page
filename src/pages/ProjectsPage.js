import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ListProjects from "../components/ListProjects";
import PageHeader from "../components/PageHeader";
import Blockquote from "../components/Blockquote";
import Footer from "../components/Footer";
import dict from "../language/pt";

class ProjectsPage extends Component {
  state = {
    projects: [
      {
        title: "",
        abstract: "",
        type: "project",
        link: "",
        date: ""
      }
    ]
  };

  render() {
    return (
      <div>
        <NavBar blackStyle={true} />
        <div className="container row">
          <PageHeader
            title="Projetos"
            description="Nesta página são apresentados alguns dos projetos que desenvolvi
            tanto para a faculdade quanto para projetos de bolsas de estudo e
            pessoais. Grande parte destes se encontram no GitHub. Cada projeto
            contém o link para a página que o descreve."
          />

          <ListProjects list={dict.projects.reverse()} />
          <Blockquote
            phrase={dict.blockquotes.three.phrase}
            author={dict.blockquotes.three.author}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectsPage;
