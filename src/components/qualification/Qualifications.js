import React, { useState } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  const [toggleModalServices, setToggleModalServices] = useState(1);

  const toggleTab = (index) => {
    setToggleModalServices(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
              <div
            className={
              toggleModalServices === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggleModalServices === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
      
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleModalServices === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BE EC</h3>
                <span className="qualification__subtitle">TU Magway</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014-2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  LogicUnicon - Class
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020-2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  LogicUnicon - Class
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021-2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>
          </div>
          <div
            className={
              toggleModalServices === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                   Bliss Stock - JPN (Remote)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 Aug - 2024 Feb
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Machine Operator</h3>
                <span className="qualification__subtitle">
                  Okayama Towa - JPN
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2024 Nov - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
