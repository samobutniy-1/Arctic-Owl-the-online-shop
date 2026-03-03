import { Link } from "react-router";

export function MenuBurger({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`burger-overlay ${isOpen ? "burger-overlay--active" : ""}`}
        onClick={onClose}
      />

      <div className={`burger-menu ${isOpen ? "burger-menu--open" : ""}`}>
        <div className="burer-menu__content">
          <ul className="burger-menu__list">
            <li className="burger-menu__item">
              <a href="/">Your account</a>
            </li>
            <li className="burger-menu__item">
              <a href="/">About us</a>
            </li>
            <li className="burger-menu__item categories">
              <ul className="categories__list">
                Categories
                <li className="categories__item">
                  <a href="/">Category 1</a>
                </li>
                <li className="categories__item">
                  <a href="/">Category 2</a>
                </li>
                <li className="categories__item">
                  <a href="/">Category 3</a>
                </li>
                <li className="categories__item">
                  <a href="/">Category 4</a>
                </li>
                <li className="categories__item">
                  <a href="/">Category 5</a>
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
