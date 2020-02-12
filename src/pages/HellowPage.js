import React, { Component } from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import ListTips from "../components/ListTips";
import Blockquote from "../components/Blockquote";
import dict from "../language/info";
import lang from "../language/en";
import Footer from "../components/Footer";

class HellowPage extends Component {
  render() {
    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <PageHeader
            title={lang.hellowtipspage.title}
            description={lang.hellowtipspage.description}
            description2={lang.hellowtipspage.description2}
          />
          <ListTips />
          <Blockquote
            phrase={dict.blockquotes.four.phrase}
            author={dict.blockquotes.four.author}
          />
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

export default HellowPage;
