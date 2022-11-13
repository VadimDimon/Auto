import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__burger">
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
          </div>
          <div className="header__logo">
            <a href="#" className="header__logo-link">
                <img src='./images/logo.png' alt="ABC AUTO" className="header__logo-img" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
