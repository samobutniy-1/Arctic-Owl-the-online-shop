import { Header } from "../header/Header";

export function Cart({ cart }) {
  return (
    <>
      <Header />
      <section className="cart-sectoion">
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
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
