import axios from "axios";
import { useState, useEffect } from "react";

export function SalesSection({ addToCart }) {
  const [sales, setSales] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleProducts = sales.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    const getSalesData = async () => {
      const response = await axios.get(
        "http://localhost:3001/products?sale=true",
      );

      setSales(response.data);
    };
    getSalesData();
  }, []);

  return (
    <>
      <section className="sales-section">
        <div className="sales-section__container">
          <div className="sales-section__top">
            <h2 className="sales-section__topic">Sales</h2>
            <a href="#" className="sales-section__view-more-link">
              view more
            </a>
          </div>
          <div className="sales-section__content">
            <button
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              type="button"
              className="sales-section__prev-btn"
            >
              <svg>
                <use href="/symbol-defs.svg#icon-arrow"></use>
              </svg>
            </button>
            <div className="sales-section__products">
              <ul className="sales-section__list">
                {visibleProducts.map((salesProduct) => {
                  return (
                    <li key={salesProduct.id} className="sales-section__item">
                      <article className="sales-section__product product">
                        <a href="#">
                          <img
                            className="product__img"
                            src={
                              salesProduct.image || "../../images/no-image.png"
                            }
                            alt="product image"
                          />
                          <h3 className="product__title">
                            {salesProduct.name}
                          </h3>
                        </a>

                        <div className="product__footer">
                          <div className="product__price-container">
                            <s className="product__old-price">
                              ${salesProduct.price}
                            </s>
                            <span className="product__sale-price">
                              ${salesProduct.salePrice}
                            </span>
                          </div>

                          <button
                            className="product__add-btn"
                            onClick={() => addToCart(salesProduct)}
                          >
                            <svg className="product__cart-icon">
                              <use href="/symbol-defs.svg#icon-cart"></use>
                            </svg>
                          </button>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              onClick={() =>
                setCurrentIndex((i) => Math.min(sales.length - 3, i + 1))
              }
              type="button"
              className="sales-section__next-btn"
            >
              <svg>
                <use href="/symbol-defs.svg#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
