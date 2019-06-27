import React from "react";
import MyParallax from "./components/MyParallax";
import Sobre from "./components/Sobre";
import Graficos from "./components/Graficos";

function App() {
  return (
    <div className="App">
      <MyParallax />
      <div className="container">
        <Sobre />
        <Graficos />
      </div>
    </div>
  );
}

export default App;
