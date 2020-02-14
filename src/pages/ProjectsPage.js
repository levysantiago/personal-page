import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ListProjects from "../components/ListProjects";
import PageHeader from "../components/PageHeader";
import Blockquote from "../components/Blockquote";
import Footer from "../components/Footer";
import dict from "../language/info";
import lang from "../language/en";

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
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <PageHeader
            title={lang.projectspage.title}
            description={lang.projectspage.description}
          />

          <ListProjects list={dict.projects.reverse()} />
          <Blockquote
            phrase={dict.blockquotes.three.phrase}
            author={dict.blockquotes.three.author}
          />
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

export default ProjectsPage;
