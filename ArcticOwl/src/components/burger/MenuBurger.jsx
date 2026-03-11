import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { BurgerContext, CartContext } from "../../context/AppContexts";

export function MenuBurger({ isOpen, onClose }) {
  const { toggleButton, isActive } = useContext(BurgerContext);
  const { setActiveCategory } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
    navigate("/");
    onClose();
  };

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
                {[
                  "jackets",
                  "sleeping-bags",
                  "base-layers",
                  "accessories",
                  "equipment",
                ].map((category) => (
                  <li key={category} className="categories__item">
                    <button
                      className={`categories__link ${isActive === "categories" ? "categories__link--active" : ""}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.charAt(0).toUpperCase() +
                        category.slice(1).replace("-", " ")}
                    </button>
                  </li>
                ))}
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
