import React, { Component } from "react";
import Grafico from "./Grafico";

class Graficos extends Component {
  render() {
    const { lang } = this.props;
    return (
      <div>
        {lang.languages.description}
        <br />
        {/* Config for Small sizes */}
        <div className="hide-on-med-and-up">
          <div className="row">
            <Grafico title="Javascript" percent="90" color="#fad12c" />
            <Grafico title="Solidity" percent="90" color="#545454" />
            <Grafico title="Python" percent="80" color="#5271ff" />
          </div>
          <div className="row">
            <Grafico title="C/C++" percent="80" color="#a6a6a6" />
            <Grafico title="PHP" percent="60" color="#8c52ff" />
            <Grafico title="Java" percent="50" color="#ff5757" />
          </div>
          <div className="row">
            <Grafico title="HTML" percent="80" color="#ff914d" />
            <Grafico title="CSS" percent="80" color="#5271ff" />
            <Grafico title="SQL" percent="80" color="#b85518" />
          </div>
        </div>

        {/* Config for Medium-Up sizes */}
        <div className="hide-on-small-only">
          <div className="row">
            <Grafico title="Javascript" percent="90" color="#fad12c" />
            <Grafico title="Solidity" percent="90" color="#545454" />
            <Grafico title="Python" percent="80" color="#5271ff" />
            <Grafico title="C/C++" percent="80" color="#a6a6a6" />
            <Grafico title="PHP" percent="60" color="#8c52ff" />
            <Grafico title="Java" percent="50" color="#ff5757" />
          </div>
          <div className="row">
            <Grafico title="HTML" percent="80" color="#ff914d" />
            <Grafico title="CSS" percent="80" color="#5271ff" />
            <Grafico title="SQL" percent="80" color="#b85518" />
          </div>
        </div>
      </div>
    );
  }
}

export default Graficos;
