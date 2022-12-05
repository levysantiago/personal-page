import About from "components/About";
import Banner from "components/Banner";
import HardSkills from "components/HardSkills";
import Navbar from "components/Navbar";
import Professional from "components/Professional";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
      <Banner />
      <About />
      <HardSkills />
      <Professional />
    </div>
  );
};

export default HomePage;
