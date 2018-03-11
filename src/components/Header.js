import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <h1>Markdown Previewer</h1>
        <p>Start typing to preview your markup!</p>
      </div>
      <div className="header__links">
        <a href="http://www.keithrodriguez.me/" className="header__icon-box">
          <svg className="header__icon">
            <use xlinkHref="images/sprite.svg#icon-laptop" />
          </svg>
        </a>
        <a href="https://github.com/keithro" className="header__icon-box">
          <svg className="header__icon">
            <use xlinkHref="images/sprite.svg#icon-github" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/keithrodriguez/" className="header__icon-box">
          <svg className="header__icon">
            <use xlinkHref="images/sprite.svg#icon-linkedin" />
          </svg>
        </a>
        <a href="https://www.freecodecamp.org/keithro" className="header__icon-box">
          <svg className="header__icon">
            <use xlinkHref="images/sprite.svg#icon-freecodecamp" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
