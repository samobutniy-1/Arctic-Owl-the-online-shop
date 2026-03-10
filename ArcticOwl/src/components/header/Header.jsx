import { useState, useEffect } from "react";
import { Link } from "react-router";
import { MenuBurger } from "../burger/MenuBurger";

export function Header({
  query,
  setQuery,
  cart = [],
  toggleButton,
  isActive,
  setActiveCategory,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const searchProduct = (e) => {
    const value = e.target.value;
    setQuery(value);
    setActiveCategory(null);
  };

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
            <div
              className={`header__input-container ${isScrolled ? "header__input-container--scrolled" : ""}`}
            >
              <input
                type="text"
                placeholder="Find yout product..."
                className="header__input"
                onChange={searchProduct}
                value={query}
              />
              <svg className="header__search-icon">
                <use href="/symbol-defs.svg#icon-search"></use>
              </svg>
            </div>
          </div>
          <div className="header__buttons buttons">
            <Link
              to="/cart"
              className={`buttons__action-btn ${isScrolled ? "buttons__action-btn--scrolled" : ""} `}
            >
              <svg className="buttons__cart-icon">
                <use href="/symbol-defs.svg#icon-cart"></use>
              </svg>
              <span
                className={`buttons__indicator ${cart.length > 0 ? "buttons__indicator--active" : ""}`}
              >
                {cart.length > 0 && cart.length}
              </span>
            </Link>
            <button
              className={`buttons__burger ${isOpen ? "buttons__burger--active" : ""} ${isScrolled ? "buttons__burger--scrolled" : ""} `}
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
      <MenuBurger
        isOpen={isOpen}
        onClose={manageBurger}
        toggleButton={toggleButton}
        isActive={isActive}
      />
    </>
  );
}
