import React from "react";
import MyParallax from "./components/MyParallax";
import Sobre from "./components/Sobre";
import Graficos from "./components/Graficos";
import Artigos from "./components/Artigos";
import Projetos from "./components/Projetos";

const greyContentBlock = { backgroundColor: "#f0f2f4", padding: "10px" };
const contentBlock = { backgroundColor: "#ffffff", padding: "10px" };

function App() {
  return (
    <div>
      <MyParallax />
      {/* Sobre */}
      <div style={contentBlock}>
        <div className="container">
          <Sobre />
        </div>
      </div>

      {/* Linguagens */}
      <div style={greyContentBlock}>
        <div className="container">
          <Graficos />
        </div>
      </div>

      {/* Artigos */}
      <div style={contentBlock}>
        <div className="container">
          <Artigos />
        </div>
      </div>

      {/* Projetos */}
      <div style={greyContentBlock}>
        <div className="container">
          <Projetos />
        </div>
      </div>
    </div>
  );
}

export default App;
