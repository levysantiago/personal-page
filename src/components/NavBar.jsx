import React, { Component } from "react";

class NavBar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = window.M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <div>
        <nav id="main-nav" class="transparent z-depth-0">
          <div class="nav-wrapper">
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <img src={require("../imgs/menu-white.png")} />
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="./index.html">Principal</a>
              </li>
              <li>
                <a href="./publicacoes.html">Publicações</a>
              </li>
              <li>
                <a href="./projetos.html">Projetos</a>
              </li>
              <li>
                <a href="./hellowtips.html">HellowTips</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a class="waves-effect waves-teal" href="./index.html">
              Principal
            </a>
          </li>
          <li>
            <a class="waves-effect waves-teal" href="./publicacoes.html">
              Publicações
            </a>
          </li>
          <li>
            <a class="waves-effect waves-teal" href="./projetos.html">
              Projetos
            </a>
          </li>
          <li>
            <a class="waves-effect waves-teal" href="./hellowtips.html">
              HellowTips
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
