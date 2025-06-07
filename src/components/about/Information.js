import React from "react";
import "../../i18n"
import { useTranslation } from "react-i18next";

const Information = () => {
  const {t} = useTranslation();
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award"></i>
        <h3 className="about__title">{t('about.exp')}</h3>
        <span className="about__subtitle">{t('about.years')}</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt"></i>
        <h3 className="about__title">{t('about.completed')}</h3>
        <span className="about__subtitle">{t('about.project')}</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support"></i>
        <h3 className="about__title">{t('about.support')}</h3>
        <span className="about__subtitle">{t('about.time')}</span>
      </div>
    </div>
  );
};

export default Information;
