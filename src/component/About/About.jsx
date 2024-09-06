import React from "react";
import "../../App.css";
import "../../css/About.css";
import Descab from "../About/Descab";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container  container grid">
        <div className="about__content">
          {/* <img src={Aimg} alt="" className="about__img" /> */}
          <div className="about__img"></div>
          <div className="about__data">
            <Descab />

            <p className="about__description">
              I'm a passion with UI/UX Designer and have knowledge base of
              programming language like PHP, HTML, CSS, JavaScript and familliar
              with React.Js as a Framework
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
