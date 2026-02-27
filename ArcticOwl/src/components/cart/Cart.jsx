import { Header } from "../header/Header";

export function Cart({ cart }) {
  return (
    <>
      <Header />
      <section className="cart-section">
        <div className="cart-section__container">
          <div className="cart-section__content">
            {cart.length === 0 ? (
              <>
                <div className="cart-section__empty-cart">
                  <h2 className="cart-section__empty-title">
                    Your cart is still empty...
                  </h2>
                  <img
                    className="cart-section__empty-img"
                    src="/images/empty-cart.png"
                    alt="empty cart image"
                  />
                  <a className="cart-section__empty-link" href="/">
                    go shopping
                  </a>
                </div>
              </>
            ) : (
              <>
                <ul className="cart-section__product-container">
                  {cart.map((cartItem) => {
                    return (
                      <li
                        key={cartItem.id}
                        className="cart-section__product-card product-card"
                      >
                        <img
                          src={cartItem.image}
                          alt="product image"
                          className="product-card__img"
                        />
                        <div className="product-card__info">
                          <h3 className="product-card__title">
                            {cartItem.name}
                          </h3>
                          <span className="product-card__price">
                            $
                            {cartItem.salePrice ? (
                              <>
                                <s>{cartItem.price}</s>${cartItem.salePrice}
                              </>
                            ) : (
                              cartItem.price
                            )}
                          </span>
                          <div className="product-card__quantity">
                            <input
                              type="number"
                              className="product-card__input"
                              value={cartItem.quantity}
                            />
                            <div className="product-card__buttons">
                              <button className="product-card__button product-card__button--increase">
                                up
                              </button>
                              <button className="product-card__button product-card__button--decrease">
                                down
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="cart-section__payment-info"></div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
