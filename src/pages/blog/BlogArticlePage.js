import React, { Component } from "react";
import lang from "../../language/en";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

class BlogArticlePage extends Component {
  render() {
    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <PageHeader title={"Travels"} />
          <h3 className="center">My article title</h3>
          <p className="center" style={{ marginBottom: 40 }}>
            April 05, 2019, Levy
          </p>
          <p style={{ marginBottom: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mollis dapibus justo quis tempus. Integer ultrices purus orci, eget
            pharetra magna sodales nec. Donec id fermentum ipsum. Proin a lorem
            vestibulum, interdum velit sit amet, eleifend urna. Phasellus
            condimentum massa ut lorem eleifend porta. Nullam quis dapibus
            felis. Vivamus aliquam purus id mi vehicula, quis lacinia felis
            viverra. Maecenas eu elementum libero. Nulla sapien dui, elementum
            scelerisque ultrices at, cursus eget ipsum. Ut at enim turpis.
            Praesent dignissim ut neque nec iaculis. Donec ac malesuada erat,
            vel sagittis velit. Vivamus ac nisl facilisis, accumsan dui a,
            convallis metus.
          </p>
          <p style={{ marginBottom: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mollis dapibus justo quis tempus. Integer ultrices purus orci, eget
            pharetra magna sodales nec. Donec id fermentum ipsum. Proin a lorem
            vestibulum, interdum velit sit amet, eleifend urna. Phasellus
            condimentum massa ut lorem eleifend porta. Nullam quis dapibus
            felis. Vivamus aliquam purus id mi vehicula, quis lacinia felis
            viverra. Maecenas eu elementum libero. Nulla sapien dui, elementum
            scelerisque ultrices at, cursus eget ipsum. Ut at enim turpis.
            Praesent dignissim ut neque nec iaculis. Donec ac malesuada erat,
            vel sagittis velit. Vivamus ac nisl facilisis, accumsan dui a,
            convallis metus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mollis dapibus justo quis tempus. Integer ultrices purus orci, eget
            pharetra magna sodales nec. Donec id fermentum ipsum. Proin a lorem
            vestibulum, interdum velit sit amet, eleifend urna. Phasellus
            condimentum massa ut lorem eleifend porta. Nullam quis dapibus
            felis. Vivamus aliquam purus id mi vehicula, quis lacinia felis
            viverra. Maecenas eu elementum libero. Nulla sapien dui, elementum
            scelerisque ultrices at, cursus eget ipsum. Ut at enim turpis.
            Praesent dignissim ut neque nec iaculis. Donec ac malesuada erat,
            vel sagittis velit. Vivamus ac nisl facilisis, accumsan dui a,
            convallis metus.
          </p>
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

export default BlogArticlePage;
