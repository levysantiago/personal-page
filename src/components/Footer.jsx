import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer white">
        <div className="divider"></div>
        <div className="container">
          <div className="row">
            <div className="col l4 m6 s12">
              <h4 className="grey-text text-darken-3">Sobre</h4>
              <ul>
                <p className="text-lighten-4">
                  Eu sou Levy. Hoje sou bacharelado em Ciência da Computação na
                  UESC. Esta é a minha página pessoal onde apresento as
                  publicações, projetos e outros trabalhos.
                </p>
              </ul>
            </div>
            <div className="col l6 offset-l2 m6 s12">
              <h4 className="grey-text text-darken-3">Contato</h4>
              <div className="row">
                <div className="col s12 valign-wrapper">
                  <img
                    className="img-footer"
                    src={require("../imgs/email.jpg")}
                    alt="Endereço de email"
                  />
                  <p className="text-lighten-4 left-align">
                    levyssantiago@gmail.com
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col s12 valign-wrapper">
                  <img
                    className="img-footer"
                    src={require("../imgs/github-circle.jpg")}
                    alt="Usuário github"
                  />
                  <a
                    href="https://github.com/levysantiago"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    levysantiago
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col s12 valign-wrapper">
                  <img
                    className="img-footer"
                    src={require("../imgs/linkedin.jpg")}
                    alt="Usuário linkedin"
                  />
                  <a
                    href="https://www.linkedin.com/in/levy-santiago-88a807162/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Levy Santiago
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright blue-grey darken-3 hide-on-small">
          <nav className="transparent z-depth-0">
            <div className="nav-wrapper">
              <ul className="right">
                <li>
                  <a href="/">Principal</a>
                </li>
                <li>
                  <a href="/publicacoes">Publicações</a>
                </li>
                <li>
                  <a href="/projetos">Projetos</a>
                </li>
                <li>
                  <a href="/hellowtips">HellowTips</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
