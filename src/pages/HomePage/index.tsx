import About from "components/About";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
      <Banner />
      <About />
    </div>
  );
};

export default HomePage;
