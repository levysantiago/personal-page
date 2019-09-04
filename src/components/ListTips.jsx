import React, { Component } from "react";
import dict from "../language/pt";

class ListTips extends Component {
  componentDidMount() {
    window.document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".materialboxed");
      window.M.Materialbox.init(elems, 0);
    });
  }

  render() {
    return dict.hellowtips.map(t => (
      <img
        className="materialboxed col s6 l4"
        key={t.key}
        src={require("../imgs/hellowtips/" + t.img)}
        alt="Postagem do Instagram"
      ></img>
    ));
  }
}

export default ListTips;
