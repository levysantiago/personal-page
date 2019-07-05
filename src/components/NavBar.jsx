import React, { Component } from "react";

class NavBar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    window.M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <div>
        <nav id="main-nav" className="transparent z-depth-0">
          <div className="nav-wrapper">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <img
                src={require("../imgs/menu-white.png")}
                alt="Plano de Fundo da página"
              />
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="./index">Principal</a>
              </li>
              <li>
                <a href="./publicacoes">Publicações</a>
              </li>
              <li>
                <a href="./projetos">Projetos</a>
              </li>
              <li>
                <a href="./hellowtips">HellowTips</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a className="waves-effect waves-teal" href="./index">
              Principal
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="./publicacoes">
              Publicações
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="./projetos">
              Projetos
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="./hellowtips">
              HellowTips
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
