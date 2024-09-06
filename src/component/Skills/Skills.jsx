import React from "react";
import "../../App.css";
import "../../css/Skills.css";
import Frontend from "./Frontend";
import Uidesigner from "./Uidesigner";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Uidesigner />
      </div>
    </section>
  );
};

export default Skills;
