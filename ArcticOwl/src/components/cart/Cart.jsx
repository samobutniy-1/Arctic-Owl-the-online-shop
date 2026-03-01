import { Header } from "../header/Header";

export function Cart({ cart, updateQuantity }) {
  const productsTotalPrice = () => {
    return cart.reduce((acc, curr) => {
      const price = curr.salePrice ?? curr.price;
      return acc + price * curr.quantity;
    }, 0);
  };

  const total = productsTotalPrice();

  const SHIPPING = 20;
  return (
    <>
      <Header />
      <section className="cart-section">
        <div className="cart-section__container">
          <div
            className={`cart-section__content ${cart.length === 0 ? "cart-section__content--empty" : ""}`}
          >
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
                          <h4 className="product-card__title">
                            {cartItem.name}
                          </h4>
                          <span className="product-card__price">
                            {cartItem.salePrice ? (
                              <>
                                <s className="product-card__old-price">
                                  ${cartItem.price * cartItem.quantity}
                                </s>
                                <span className="product-card__sale-price">
                                  ${cartItem.salePrice * cartItem.quantity}
                                </span>
                              </>
                            ) : (
                              <span>${cartItem.price * cartItem.quantity}</span>
                            )}
                          </span>
                          <div className="product-card__quantity">
                            <input
                              type="number"
                              className="product-card__input"
                              value={cartItem.quantity}
                              style={{
                                width: `${String(cartItem.quantity).length}ch`,
                              }}
                              onChange={(e) =>
                                updateQuantity(
                                  cartItem.id,
                                  Number(e.target.value),
                                )
                              }
                            />
                            <div className="product-card__buttons">
                              <button
                                className="product-card__button product-card__button--increase"
                                onClick={() =>
                                  updateQuantity(
                                    cartItem.id,
                                    cartItem.quantity + 1,
                                  )
                                }
                              >
                                <svg>
                                  <use href="/symbol-defs.svg#icon-arrow"></use>
                                </svg>
                              </button>
                              <button
                                className="product-card__button product-card__button--decrease"
                                onClick={() =>
                                  updateQuantity(
                                    cartItem.id,
                                    cartItem.quantity - 1,
                                  )
                                }
                              >
                                <svg>
                                  <use href="/symbol-defs.svg#icon-arrow"></use>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="cart-section__payment-info payment-info">
                  <h3 className="payment-info__title">Payment info</h3>
                  <span className="payment-info__decoration"></span>
                  <dl className="payment-info__price">
                    <div className="payment-info__products-cost">
                      <dt>Cost of products:</dt>
                      <dd>${total}</dd>
                    </div>
                    <div className="payment-info__shipping">
                      <dt>Shipping:</dt>
                      <dd>${SHIPPING}</dd>
                    </div>
                  </dl>
                  <p className="payment-info__total">
                    <span>Total amount:</span>
                    <span>${total + SHIPPING}</span>
                  </p>
                  <button type="button" className="payment-info__pay-btn">
                    to pay
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
