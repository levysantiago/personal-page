import Banner from "components/Banner";
import Navbar from "components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
      <Banner title="Levy Santiago" />
    </div>
  );
};

export default HomePage;
