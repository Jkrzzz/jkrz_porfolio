import React from "react";
import "./Work.css";
import Works from "./Works";
import "../../i18n";
import { useTranslation } from "react-i18next";
const Work = () => {
  const {t} = useTranslation();
  return (
    <section className="work section" id="porfolio">
      <h2 className="section__title">{t("project.title")}</h2>
      <span className="section__subtitle">{t("project.sub-title")}</span>
      <Works />
    </section>
  );
};

export default Work;
