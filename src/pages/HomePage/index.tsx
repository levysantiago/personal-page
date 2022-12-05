import About from "components/About";
import Banner from "components/Banner";
import HardSkills from "components/HardSkills";
import Navbar from "components/Navbar";
import Professional from "components/Professional";
import SoftSkills from "components/SoftSkills";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
      <Banner />
      <About />
      <HardSkills />
      <Professional />
      <SoftSkills />
    </div>
  );
};

export default HomePage;
