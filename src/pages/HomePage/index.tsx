import Navbar from "components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
    </div>
  );
};

export default HomePage;
