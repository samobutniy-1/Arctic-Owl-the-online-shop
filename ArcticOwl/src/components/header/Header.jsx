import { useState, useEffect } from "react";
import { Link } from "react-router";
import { MenuBurger } from "../burger/MenuBurger";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const manageBurger = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      const scrollWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = `${scrollWidth}px`;
      document.querySelector(".header").style.paddingRight = `${scrollWidth}px`;
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
      document.querySelector(".header").style.paddingRight = "";
    }
  }, [isOpen]);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div>
            <a className="header__logo-container" href="/">
              <svg className="header__logo" width="100" height="100">
                <use href="/symbol-defs.svg#logo-owl"></use>
              </svg>
            </a>
            <div className="header__input-container">
              <input
                type="text"
                placeholder="Search"
                className="header__input"
              />
              <button className="header__search-btn">
                <svg>
                  <use href="/symbol-defs.svg#icon-search"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="header__buttons buttons">
            <Link to="/cart" className="buttons__action-btn">
              <svg className="buttons__cart-icon">
                <use href="/symbol-defs.svg#icon-cart"></use>
              </svg>
            </Link>
            <button
              className="buttons__burger"
              type="button"
              onClick={manageBurger}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <MenuBurger isOpen={isOpen} onClose={manageBurger} />
    </>
  );
}
