import axios from "axios";
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/AppContexts";

export function SalesSection() {
  const { addToCart } = useContext(CartContext);
  const [sales, setSales] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const touchStartX = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const getSalesData = async () => {
      const response = await axios.get(
        "http://localhost:3001/products?sale=true",
      );
      setSales(response.data);
    };
    getSalesData();
  }, []);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      const next = width < 480 ? 1 : width < 768 ? 2 : 3;
      setItemsPerView((prev) => {
        if (prev !== next) setCurrentIndex(0);
        return next;
      });
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const showButtons = itemsPerView === 3;

  useEffect(() => {
    if (showButtons || sales.length === 0) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => {
        const max = sales.length - itemsPerView;
        return i >= max ? 0 : i + 1;
      });
    }, 3000);

    return () => clearInterval(autoPlayRef.current);
  }, [showButtons, sales.length, itemsPerView]);

  const handlePrev = () => {
    clearInterval(autoPlayRef.current);
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const handleNext = () => {
    clearInterval(autoPlayRef.current);
    setCurrentIndex((i) => Math.min(sales.length - itemsPerView, i + 1));
  };

  const handleTouchStart = (e) => {
    if (window.innerWidth <= 1024) {
      clearInterval(autoPlayRef.current);
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="sales-section">
      <div className="sales-section__container">
        <div className="sales-section__top">
          <p className="sales-section__topic">Sales</p>
          <a href="/sales-products" className="sales-section__view-more-link">
            view more
          </a>
        </div>
        <div className="sales-section__content">
          {showButtons && (
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              type="button"
              className="sales-section__prev-btn"
            >
              <svg>
                <use href="/symbol-defs.svg#icon-arrow"></use>
              </svg>
            </button>
          )}
          <div
            className="sales-section__products"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <ul
              className="sales-section__list"
              style={{ "--index": currentIndex, "--items": itemsPerView }}
            >
              {sales.map((salesProduct) => (
                <li key={salesProduct.id} className="sales-section__item">
                  <article className="sales-section__product product">
                    <Link to={`/product-details/${salesProduct.id}`}>
                      <div className="product__img-wrapper">
                        <img
                          className="product__img"
                          src={
                            salesProduct.image || "../../images/no-image.png"
                          }
                          alt="product image"
                        />
                      </div>
                      <h3 className="product__title">{salesProduct.name}</h3>
                    </Link>
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
              ))}
            </ul>
          </div>
          {showButtons && (
            <button
              onClick={handleNext}
              disabled={currentIndex >= sales.length - itemsPerView}
              type="button"
              className="sales-section__next-btn"
            >
              <svg>
                <use href="/symbol-defs.svg#icon-arrow"></use>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
