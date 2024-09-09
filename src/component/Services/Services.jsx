import React, { useState } from "react";
import "../../css/Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>

            <h3 className="services__title">
              UI <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">UI Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus nesciunt harum placeat assumenda quia rerum
                laudantium magni ratione.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Webpage Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I create element of UX interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Design interface and mockup of products for clients
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-airplay services__icon"></i>

            <h3 className="services__title">
              Front-End <br /> Developper
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Front-End Developper</h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus nesciunt harum placeat assumenda quia rerum
                laudantium magni ratione.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Webpage Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I create element of UX interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Design interface and mockup of products for clients
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-search services__icon"></i>

            <h3 className="services__title">
              UX <br /> Researcher
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">UX Researcher</h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus nesciunt harum placeat assumenda quia rerum
                laudantium magni ratione.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Webpage Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I create element of UX interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Design interface and mockup of products for clients
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
