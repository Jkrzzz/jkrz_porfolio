import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/heinhtet_jkrz/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"> </i>
      </a>
      <a
        href="https://github.com/Jkrzzz?tab=repositories"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.facebook.com/hein.htet.10420"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-facebook"></i>
      </a>
    </div>
  );
};

export default Social;
