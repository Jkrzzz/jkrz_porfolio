import React from "react";
import "./Footer.css";
import "../../i18n"
import { useTranslation } from "react-i18next";

const Footer = () => {
   const {t} = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{t('name')}</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {t('about.title')}
            </a>
          </li>
          <li>
            <a href="#porfolio" className="footer__link">
              {t('project.title')}
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li> */}
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/heinhtet_jkrz/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"> </i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/hein.htet.10420"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; HeinJKRZ. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
