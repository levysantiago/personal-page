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
    const { blackStyle, lang } = this.props;
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
                  {lang.menu.home}
                </a>
              </li>
              <li>
                <a style={this.blackLinkStyle(blackStyle)} href="/articles">
                  {lang.menu.articles}
                </a>
              </li>
              <li>
                <a style={this.blackLinkStyle(blackStyle)} href="/projects">
                  {lang.menu.projects}
                </a>
              </li>
              <li>
                <a style={this.blackLinkStyle(blackStyle)} href="/blog">
                  {lang.menu.blog}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a className="waves-effect waves-teal" href="/">
              {lang.menu.home}
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="/articles">
              {lang.menu.articles}
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="/projects">
              {lang.menu.projects}
            </a>
          </li>
          <li>
            <a className="waves-effect waves-teal" href="/blog">
              {lang.menu.blog}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
