import About from "pages/sections/About";
import AcademicLife from "pages/sections/AcademicLife";
import Articles from "pages/sections/Articles";
import Banner from "components/Banner";
import Footer from "components/Footer";
import HardSkills from "pages/sections/HardSkills";
import Navbar from "components/Navbar";
import ProfessionalLife from "pages/sections/ProfessionalLife";
import Projects from "pages/sections/Projects";
import Quote from "pages/sections/Quote";
import SoftSkills from "pages/sections/SoftSkills";
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
        <div id="projects">
          <Projects />
        </div>
        <div id="soft-skills">
          <SoftSkills />
        </div>
        <div id="professional-life">
          <ProfessionalLife />
        </div>
        <div id="articles">
          <Articles />
        </div>
        <div id="academic-life">
          <AcademicLife />
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
