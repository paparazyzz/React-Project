// import React from "react";
// import "../App.css";
// import "../css/About.css";

// const Descab = () => {
//   return (
//     <div className="about__info grid">
//       <div className="about__box">
//         <i className="uil uil-cloud-computing about__icon"></i>
//         <h3 className="about__title">Experience</h3>
//         <span className="about__subtitle">1 Years Experience</span>
//       </div>
//       <div className="about__box">
//         <i className="uil uil-airplay about__icon"></i>
//         <h3 className="about__title">UI Designer</h3>
//         <span className="about__subtitle">4 + Project</span>
//       </div>
//       <div className="about__box">
//         <i className="uil uil-brackets-curly about__icon"></i>
//         <h3 className="about__title">Front-End</h3>
//         <span className="about__subtitle">5 + Project</span>
//       </div>
//     </div>
//   );
// };

// export default Descab;

import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import "../../css/About.css";

const Descab = () => {
  // Initialize state for the animated numbers
  const [experience, setExperience] = useState(0);
  const [uiProjects, setUiProjects] = useState(0);
  const [frontEndProjects, setFrontEndProjects] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To ensure animation runs only once
  const ref = useRef(null); // Reference to the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Trigger the animation once the section is visible
          animateValue(0, 2, 2000, setExperience); // 1 year of experience
          animateValue(0, 40, 2000, setUiProjects); // 4 UI projects
          animateValue(0, 50, 2000, setFrontEndProjects); // 5 Front-End projects
          setHasAnimated(true); // Set to true to prevent re-animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  // Function to animate the numbers
  const animateValue = (start, end, duration, setValue) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div ref={ref} className="about__info grid">
      <div className="about__box">
        <i className="uil uil-cloud-computing about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">+{experience} Years</span>
      </div>
      <div className="about__box">
        <i className="uil uil-airplay about__icon"></i>
        <h3 className="about__title">UI Designer</h3>
        <span className="about__subtitle">+{uiProjects} Projects</span>
      </div>
      <div className="about__box">
        <i className="uil uil-brackets-curly about__icon"></i>
        <h3 className="about__title">Front-End</h3>
        <span className="about__subtitle">+{frontEndProjects} Projects</span>
      </div>
    </div>
  );
};

export default Descab;
