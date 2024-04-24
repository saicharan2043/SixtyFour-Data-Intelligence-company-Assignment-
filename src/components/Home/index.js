import { useState } from "react";

import Cards from "../Cards";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.css";

const Home = () => {
  const [isTrue, setIsTrue] = useState(false);
  const changeExpandAndCollapse = () => {
    setIsTrue((previews) => !previews);
  };
  return (
    <div className="home-container">
      <Sidebar
        changeExpandAndCollapse={changeExpandAndCollapse}
        isTrue={isTrue}
      />
      <div className={`body-container ${isTrue && "Collapse-width"}`}>
        <Header />
        <div className="cards-and-releases-container">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
