import React, { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import "./Header.css";
import { useTranslation } from 'react-i18next';
import '../../i18n';
import LanguageSwitcher from "../langSwitcher/LangSwitcher";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
   const { t } = useTranslation();
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {t('name')}
        </a>
        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item ">
              <a
                href="#home"
                onClick={() => {
                  setActiveNav("#home");
                }}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>{t('home.title')}
              </a>
            </li>
            <li className="nav__item ">
              <a
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                }}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>{t('about.title')}
              </a>
            </li>
            <li className="nav__item ">
              <a
                href="#skills"
                onClick={() => {
                  setActiveNav("#skills");
                }}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>{t("skill.title")}
              </a>
            </li>
                        <li className="nav__item ">
              <a
                href="#qualification"
                onClick={() => {
                  setActiveNav("#qualification");
                }}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>{t("qual.title")}
              </a>
            </li>
            {/* <li className="nav__item ">
              <a
                href="#services"
                onClick={() => {
                  setActiveNav("#services");
                }}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li> */}
            <li className="nav__item ">
              <a
                href="#porfolio"
                onClick={() => {
                  setActiveNav("#porfolio");
                }}
                className={
                  activeNav === "#porfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>{t("project.title")}
              </a>
            </li>
            
            <li className="nav__item ">
              <a
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                }}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>{t("contact.title")}
              </a>
            </li>
            <li className="nav__item ">
              <div className="nav__link">
                <DarkMode />
              </div>
            </li>
            <li className="nav__item">
                <div className="nav__link">
                  <LanguageSwitcher/>
                </div>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={toggleMenuHandler}
          ></i>
        </div>
        <div className="nav__toggle" onClick={toggleMenuHandler}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
export default Header;
