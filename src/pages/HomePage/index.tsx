import About from "components/About";
import AcademicLife from "components/AcademicLife";
import Banner from "components/Banner";
import HardSkills from "components/HardSkills";
import Navbar from "components/Navbar";
import ProfessionalLife from "components/ProfessionalLife";
import SoftSkills from "components/SoftSkills";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
      <Banner />
      <About />
      <HardSkills />
      <ProfessionalLife />
      <SoftSkills />
      <AcademicLife />
    </div>
  );
};

export default HomePage;
