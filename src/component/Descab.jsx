import React from "react";
import "../css/About.css";

const Descab = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Years Experience</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">UI Designer</h3>
        <span className="about__subtitle">4 + Project</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Front-End</h3>
        <span className="about__subtitle">5 + Project</span>
      </div>
    </div>
  );
};

export default Descab;
