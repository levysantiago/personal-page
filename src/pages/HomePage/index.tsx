import About from "components/About";
import AcademicLife from "components/AcademicLife";
import Articles from "components/Articles";
import Banner from "components/Banner";
import Footer from "components/Footer";
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
        <Articles />
        <Quote />
        <Footer />
      </div>
    </Theme>
  );
};

export default HomePage;
