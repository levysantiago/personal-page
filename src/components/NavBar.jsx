import React, { Component } from "react";

class NavBar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    window.M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  blackLinkStyle(yes) {
    if (yes) {
      return { color: "#424242" };
    } else {
      return { color: "#e0e0e0" };
    }
  }

  getMenuIcon(blackStyle) {
    if (blackStyle) {
      return "menu.png";
    }
    return "menu-white.png";
  }

  render() {
    const { blackStyle } = this.props;
    return (
      <div>
        <nav id="main-nav" className="transparent z-depth-0">
          <div className="nav-wrapper">
            <a href="/#" data-target="mobile-demo" className="sidenav-trigger">
              <img
                src={require("../imgs/" + this.getMenuIcon(blackStyle))}
                alt="Plano de Fundo da página"
              />
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a style={this.blackLinkStyle(blackStyle)} href="/">
                  Principal
                </a>
              </li>
              <li>
                <a style={this.blackLinkStyle(blackStyle)} href="/publicacoes">
                  Publicações
                </a>
              </li>
              <li>
                <a style={this.blackLinkStyle(blackStyle)} href="/projetos">
                  Projetos
                </a>
              </li>
              <li>
                <a style={this.blackLinkStyle(blackStyle)} href="/hellowtips">
                  HellowTips
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a className="waves-effect waves-teal" href="/">
              Principal
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="/publicacoes">
              Publicações
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="/projetos">
              Projetos
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="/hellowtips">
              HellowTips
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
