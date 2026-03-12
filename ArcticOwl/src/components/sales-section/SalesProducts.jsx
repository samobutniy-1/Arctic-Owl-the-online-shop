import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import axios from "axios";

import { Header } from "../header/Header";
import { CartContext } from "../../context/AppContexts";

export function SalesProducts() {
  const { addToCart } = useContext(CartContext);
  const [salesProducts, setSalesProducts] = useState([]);

  useEffect(() => {
    const getSalesProductsData = async () => {
      const response = await axios.get(
        "http://localhost:3001/products?sale=true",
      );
      setSalesProducts(response.data);
    };
    getSalesProductsData();
  }, []);

  return (
    <>
      <Header />
      <div className="sales-products-section">
        <div className="sales-products-section__container">
          <div className="sales-products-section__content">
            <ul className="sales-products-section__list">
              {salesProducts.map((product) => (
                <li key={product.id} className="sales-products-section__item">
                  <article className="sales-products-section__product product">
                    <Link to={`/product-details/${product.id}`}>
                      <div className="product__img-wrapper">
                        <img
                          loading="lazy"
                          className="product__img"
                          src={product.image || "../../images/no-image.png"}
                          alt="product image"
                        />
                      </div>
                      <h3 className="product__title">{product.name}</h3>
                    </Link>
                    <div className="product__footer">
                      <div className="product__price-container">
                        <s className="product__old-price">${product.price}</s>
                        <span className="product__sale-price">
                          ${product.salePrice}
                        </span>
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
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
