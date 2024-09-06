import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic Skill</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-css3"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-java-script"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-php"></i>
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-github"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-react"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
