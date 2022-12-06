import About from "components/About";
import AcademicLife from "components/AcademicLife";
import Banner from "components/Banner";
import HardSkills from "components/HardSkills";
import Navbar from "components/Navbar";
import ProfessionalLife from "components/ProfessionalLife";
import Quote from "components/Quote";
import SoftSkills from "components/SoftSkills";
import Theme from "components/Theme";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <Theme>
      <div>
        <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
        <Banner />
        <About />
        <HardSkills />
        <ProfessionalLife />
        <SoftSkills />
        <AcademicLife />
        <Quote />
      </div>
    </Theme>
  );
};

export default HomePage;
