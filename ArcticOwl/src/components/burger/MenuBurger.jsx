import { Link } from "react-router";

export function MenuBurger({ isOpen, onClose, isActive, toggleButton }) {
  return (
    <>
      <div
        className={`burger-overlay ${isOpen ? "burger-overlay--active" : ""}`}
        onClick={onClose}
      />

      <div className={`burger-menu ${isOpen ? "burger-menu--open" : ""}`}>
        <div className="burger-menu__content">
          <ul className="burger-menu__list">
            <li className="burger-menu__item">
              <a href="/">Your account</a>
            </li>
            <li className="burger-menu__item">
              <a href="/">About us</a>
            </li>
            <li className="burger-menu__item categories">
              <button
                type="button"
                className={`categories__button-container ${isActive ? "categories__button-container--active" : ""}`}
                onClick={() => toggleButton("categories")}
              >
                <span className="categories__button">Categories</span>
                <svg
                  className={`categories__arrow ${isActive === "categories" ? "categories__arrow--active" : ""}`}
                >
                  <use href="/symbol-defs.svg#icon-arrow"></use>
                </svg>
              </button>
              <ul
                className={`categories__list ${isActive === "categories" ? "categories__list--active" : ""}`}
              >
                <li className="categories__item">
                  <a
                    className={`categories__link ${isActive === "categories" ? "categories__link--active" : ""}`}
                    href="/"
                  >
                    Category 1
                  </a>
                </li>
                <li className="categories__item">
                  <a
                    className={`categories__link ${isActive ? "categories__link--active" : ""}`}
                    href="/"
                  >
                    Category 2
                  </a>
                </li>
                <li className="categories__item">
                  <a
                    className={`categories__link ${isActive ? "categories__link--active" : ""}`}
                    href="/"
                  >
                    Category 3
                  </a>
                </li>
                <li className="categories__item">
                  <a
                    className={`categories__link ${isActive ? "categories__link--active" : ""}`}
                    href="/"
                  >
                    Category 4
                  </a>
                </li>
                <li className="categories__item">
                  <a
                    className={`categories__link ${isActive ? "categories__link--active" : ""}`}
                    href="/"
                  >
                    Category 5
                  </a>
                </li>
              </ul>
            </li>
            <li className="burger-menu__cart">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
