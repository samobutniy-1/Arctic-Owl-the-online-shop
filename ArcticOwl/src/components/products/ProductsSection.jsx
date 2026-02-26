import { useState, useEffect } from "react";
import axios from "axios";

export function ProductsSection({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    };

    getProducts();
  }, []);

  return (
    <>
      <section className="products-section">
        <div className="products-section__container">
          <div className="products-section__content">
            <ul className="products-section__list">
              {products.map((product) => {
                return (
                  <li key={product.id} className="products-section__item">
                    <article className="products-section__product product">
                      <a href="#">
                        <img
                          className="product__img"
                          src={product.image || "../../images/no-image.png"}
                          alt="product image"
                        />
                        <h3 className="product__title">{product.name}</h3>
                      </a>

                      <div className="product__footer">
                        <div className="product__price-container">
                          {product.salePrice ? (
                            <>
                              <s className="product__old-price">
                                ${product.price}
                              </s>
                              <span className="product__sale-price">
                                ${product.salePrice}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="product__usual-price">
                                ${product.price}
                              </span>
                            </>
                          )}
                        </div>

                        <button
                          className="product__add-btn"
                          onClick={() => addToCart(product)}
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
        </div>
      </section>
    </>
  );
}
