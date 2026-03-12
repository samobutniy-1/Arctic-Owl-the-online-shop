import { Link } from "react-router";
import { useState, useEffect, forwardRef } from "react";
import axios from "axios";

export const ProductsSection = forwardRef(function ProductsSection(
  { addToCart, query, activeCategory },
  ref,
) {
  const [products, setProducts] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory =
      !activeCategory || product.category === activeCategory;
    return matchesCategory && matchesQuery;
  });

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <section className="products-section" ref={ref}>
      <div className="products-section__container">
        <div className="products-section__content">
          {filteredProducts.length === 0 && query.length > 0 ? (
            <div className="products-section__no-results">
              <p>No products found</p>
            </div>
          ) : (
            <ul className="products-section__list">
              {filteredProducts.map((product) => (
                <li key={product.id} className="products-section__item">
                  <article className="products-section__product product">
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
                          <span className="product__usual-price">
                            ${product.price}
                          </span>
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
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
});
