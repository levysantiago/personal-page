import React, { Component } from "react";
import { Parallax } from "react-parallax";
import NavBar from "./NavBar";

class MyParallax extends Component {
  render() {
    return (
      <div>
        <Parallax
          blur={2}
          bgImage={require("../imgs/principal.jpg")}
          bgImageAlt="the cat"
          strength={200}
        >
          <NavBar />

          <div id="main-header" style={{ height: "500px" }}>
            {/* My Name */}
            <h1 className="white-text center-align">Levy M. S. Santiago</h1>

            {/* Image font */}
            <label className="white-text left">
              {"Foto de "}
              <a
                className="white-text center-align"
                href="https://unsplash.com/photos/TkEPQPWr2sY"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Mark Solarski "}
              </a>
              {"em "}
              <a
                className="white-text center-align"
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </label>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default MyParallax;
