import About from "components/About";
import Banner from "components/Banner";
import HardSkills from "components/HardSkills";
import Navbar from "components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
      <Banner />
      <About />
      <HardSkills />
    </div>
  );
};

export default HomePage;
