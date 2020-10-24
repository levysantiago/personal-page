import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ListProjects from "../components/ListProjects";
import PageHeader from "../components/PageHeader";
import Blockquote from "../components/Blockquote";
import Footer from "../components/Footer";
import dict from "../language/info";
import lang from "../language/pt";
import helpers from "../lib/helpers";

class ProjectsPage extends Component {
  state = {
    projects: [
      {
        title: "",
        abstract: "",
        type: "project",
        link: "",
        date: "",
      },
    ],
    blockquote: helpers.getRandomBlockquote(),
  };

  render() {
    const { blockquote } = this.state;

    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <PageHeader
            title={lang.projectspage.title}
            description={lang.projectspage.description}
          />

          <ListProjects list={dict.projects.reverse()} />
          <Blockquote phrase={blockquote.phrase} author={blockquote.author} />
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

export default ProjectsPage;
