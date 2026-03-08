import { useParams } from "react-router";

import data from "../../../server/db.json";
import { Header } from "../header/Header";

export function ProductDetails({ toggleButton, isActive, cart }) {
  const { id } = useParams();
  const product = data.products.find((p) => p.id === Number(id));
  if (!product) return <p>Product is not found</p>;
  return (
    <>
      <Header cart={cart} toggleButton={toggleButton} isActive={isActive} />

      <section className="details-section">
        <div className="details-section__container">
          <div className="details-section__content">
            <div className="details-section__main-content main-content">
              <div className="main-content__img">
                <img
                  src={product.image || "../../images/no-image.png"}
                  alt="product photo"
                />
              </div>
              <div className="main-content__description description">
                <h3 className="description__title">{product.name}</h3>
                <button
                  onClick={() => toggleButton("about")}
                  className="description__button button"
                  type="button"
                >
                  <span className="description__span">About product</span>
                  <svg
                    className={`description__arrow ${isActive === "about" ? "description__arrow--active" : ""}`}
                  >
                    <use href="/symbol-defs.svg#icon-arrow"></use>
                  </svg>
                </button>
                <p
                  className={`description__text ${isActive === "about" ? "description__text--active" : ""}`}
                >
                  {product.longDescription}
                </p>
                <button
                  onClick={() => toggleButton("details")}
                  className="description__button button"
                  type="button"
                >
                  <span className="description__span">Details</span>
                  <svg
                    className={`description__arrow ${isActive === "details" ? "description__arrow--active" : ""}`}
                  >
                    <use href="/symbol-defs.svg#icon-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
            <button className="details-section__add-btn button">
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
