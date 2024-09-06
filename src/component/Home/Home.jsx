import React from "react";
import "../../css/Home.css";
import Data from "../Home/Data";
import ScrollDown from "../Home/ScrollDown";
import Social from "../Home/Social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
