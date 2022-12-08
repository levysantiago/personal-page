import About from "components/About";
import AcademicLife from "components/AcademicLife";
import Articles from "components/Articles";
import Banner from "components/Banner";
import Footer from "components/Footer";
import HardSkills from "components/HardSkills";
import Navbar from "components/Navbar";
import ProfessionalLife from "components/ProfessionalLife";
import Projects from "components/Projects";
import Quote from "components/Quote";
import SoftSkills from "components/SoftSkills";
import Theme from "components/Theme";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <Theme>
      <div>
        <Navbar />
        <Banner />
        <div id="about">
          <About />
        </div>
        <div id="hard-skills">
          <HardSkills />
        </div>
        <div id="professional-life">
          <ProfessionalLife />
        </div>
        <div id="soft-skills">
          <SoftSkills />
        </div>
        <div id="academic-life">
          <AcademicLife />
        </div>
        <div id="articles">
          <Articles />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="quote">
          <Quote />
        </div>
        <Footer />
      </div>
    </Theme>
  );
};

export default HomePage;
