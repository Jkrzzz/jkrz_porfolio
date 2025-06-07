import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";

import "./Skill.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Skill = () => {
  const {t} = useTranslation();
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">{t("skill.title")}</h2>
      <span className="section__subtitle">{t("skill.sub-title")}</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skill;
