import React, { useState } from "react";
import "./Qualifications.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Qualifications = () => {
  const { t } = useTranslation();
  const [toggleModalServices, setToggleModalServices] = useState(1);

  const toggleTab = (index) => {
    setToggleModalServices(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{t("qual.title")}</h2>
      <span className="section__subtitle">{t("qual.sub-title")}</span>
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
            {t("qual.exp")}
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
            {t("qual.edu")}
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
                <h3 className="qualification__title">
                  {t("qual.first-edu.positions")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qual.first-edu.company")}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {t("qual.first-edu.time")}
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
                <h3 className="qualification__title">
                  {t("qual.sec-edu.positions")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qual.sec-edu.company")}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {t("qual.sec-edu.time")}
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("qual.thr-edu.positions")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qual.thr-edu.company")}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {t("qual.thr-edu.time")}
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
                <h3 className="qualification__title">
                  {t("qual.first-exp.positions")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qual.first-exp.company")}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {t("qual.first-exp.time")}
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
                <h3 className="qualification__title">
                  {t("qual.sec-exp.positions")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qual.sec-exp.company")}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {t("qual.sec-exp.time")}
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
