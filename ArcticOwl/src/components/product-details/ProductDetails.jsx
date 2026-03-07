import { Header } from "../header/Header";

export function ProductDetails({ toggleButton, isActive, cart }) {
  return (
    <>
      <Header cart={cart} />

      <section className="details-section">
        <div className="details-section__container">
          <div className="details-section__content">
            <div className="details-section__main-content main-content">
              <div className="main-content__img">
                <img src="/" alt="product photo" />
              </div>
              <div className="main-content__description description">
                <h3 className="description__title">Product name</h3>
                <button
                  onClick={toggleButton}
                  className="description__button"
                  type="button"
                >
                  <span className="description__span">About product</span>
                  <svg
                    className={`description__arrow ${isActive ? "description__arrow--active" : ""}`}
                  >
                    <use href="/symbol-defs.svg#icon-arrow"></use>
                  </svg>
                </button>
                <p className="description__text">
                  Lorem ipsum dolor sit amet consectetur. Dolor elit et
                  convallis aliquam pharetra adipiscing. Nec risus arcu aliquet
                  placerat tempor et lacus eu. Mi nunc commodo ut dictum orci
                  quam ut. Lorem urna platea elementum vulputate.
                </p>
                <button
                  onClick={toggleButton}
                  className="description__button"
                  type="button"
                >
                  <span className="description__span">Details</span>
                  <svg
                    className={`description__arrow ${isActive ? "description__arrow--active" : ""}`}
                  >
                    <use href="/symbol-defs.svg#icon-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </section>
    </>
  );
}
