import React, { Component } from "react";
import Grafico from "./Grafico";

class Graficos extends Component {
  render() {
    return (
      <div>
        {/*<h2>Linguagens</h2>*/}

        <p style={{ color: "white" }}>
          Os gráficos abaixo demonstram as linguagens de programação as quais
          adquiri experiência até hoje. As porcentagens representam o quanto
          tenho de experiência e conhecimento em cada uma das linguagens. É uma
          forma controversa, uma vez que conhecimento não se quantifica, porém é
          direta e compreensível.
        </p>
        <br />
        {/* Config for Small sizes */}
        <div className="hide-on-med-and-up">
          <div className="row">
            <Grafico title="C/C++" percent="80" color="#a6a6a6" />
            <Grafico title="Java" percent="70" color="#ff5757" />
            <Grafico title="Python" percent="70" color="#5271ff" />
          </div>
          <div className="row">
            <Grafico title="PHP" percent="60" color="#8c52ff" />
            <Grafico title="Javascript" percent="50" color="#fad12c" />
            <Grafico title="Solidity" percent="40" color="#545454" />
          </div>
          <div className="row">
            <Grafico title="R" percent="40" color="#38b6ff" />
            <Grafico title="C#" percent="30" color="#89449d" />
            <Grafico title="CSS" percent="80" color="#5271ff" />
          </div>
          <div className="row">
            <Grafico title="HTML" percent="80" color="#ff914d" />
            <Grafico title="SQL" percent="80" color="#b85518" />
          </div>
        </div>

        {/* Config for Medium-Up sizes */}
        <div className="hide-on-small-only">
          <div className="row">
            <Grafico title="C/C++" percent="80" color="#a6a6a6" />
            <Grafico title="Java" percent="70" color="#ff5757" />
            <Grafico title="Python" percent="70" color="#5271ff" />
            <Grafico title="PHP" percent="60" color="#8c52ff" />
            <Grafico title="Javascript" percent="50" color="#fad12c" />
            <Grafico title="Solidity" percent="40" color="#545454" />
          </div>
          <div className="row">
            <Grafico title="R" percent="40" color="#38b6ff" />
            <Grafico title="C#" percent="30" color="#89449d" />
            <Grafico title="CSS" percent="80" color="#5271ff" />
            <Grafico title="HTML" percent="80" color="#ff914d" />
            <Grafico title="SQL" percent="80" color="#b85518" />
          </div>
        </div>
      </div>
    );
  }
}

export default Graficos;
