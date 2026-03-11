import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Header } from "../header/Header";
import { CartContext, BurgerContext } from "../../context/AppContexts";

const labelMap = {
  sizes: "Sizes",
  material: "Material",
  fill: "Fill",
  weight: "Weight",
  waterproofing: "Waterproofing",
  breathability: "Breathability",
  temperatureRating: "Temperature",
  packSize: "Pack size",
  insulation: "Insulation",
  protection: "Protection",
  fit: "Fit",
  volume: "Volume",
  lens: "Lens",
  batteryLife: "Battery life",
  features: "Features",
  components: "Components",
  gender: "Gender",
  points: "Points",
};

function renderDetails(details, selectedSize, setSelectedSize) {
  const order = ["sizes"];

  return Object.entries(details)
    .sort(([a], [b]) => {
      const aIndex = order.indexOf(a);
      const bIndex = order.indexOf(b);
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return 0;
    })
    .map(([key, value]) => {
      const label = labelMap[key] || key;

      if (key === "sizes") {
        return (
          <li key={key} className="details__item details__item--sizes">
            <span className="details__label">{label}:</span>
            <ul className="details__list">
              {value.map((size) => (
                <li key={size} className="details__list-item">
                  <button
                    type="button"
                    className={`details__size-btn ${selectedSize === size ? "details__size-btn--active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        );
      }

      if (Array.isArray(value)) {
        return (
          <li key={key} className={`details__item details__item--${key}`}>
            <span
              className={`details__label ${key === "features" || key === "components" ? "details__label--list" : ""}`}
            >
              {label}:
            </span>
            <ul className="details__list">
              {value.map((v, i) => (
                <li key={i} className="details__list-item">
                  {v}
                </li>
              ))}
            </ul>
          </li>
        );
      }

      return (
        <li key={key} className={`details__item details__item--${key}`}>
          <span className="details__label">{label}:</span>
          <span className="details__value">{value}</span>
        </li>
      );
    });
}

export function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { toggleButton, isActive } = useContext(BurgerContext);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`,
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product is not found</p>;

  return (
    <>
      <Header />
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
                <ul
                  className={`description__details ${isActive === "details" ? "description__details--active" : ""}`}
                >
                  {renderDetails(
                    product.details,
                    selectedSize,
                    setSelectedSize,
                  )}
                </ul>
              </div>
            </div>
            <button
              className="details-section__add-btn button"
              onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
