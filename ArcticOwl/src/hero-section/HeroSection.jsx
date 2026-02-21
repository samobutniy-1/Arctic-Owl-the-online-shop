import owl from "../assets/images/hero-section-img.png";

export function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section__container">
          <div className="hero-section__info">
            <div className="hero-section__text">
              <h1 className="hero-section__title">Where Cold Meets Style</h1>

              <p className="hero-section__subtitle">Est. 2026</p>

              <p>
                Cold weather calls for serious gear — from thermal layers to
                parkas, built for warmth and made to last.
              </p>
            </div>

            <img src={owl} alt="Owl" className="hero-section__img" />
          </div>

          <div className="hero-section__nav-links">
            <a href="#">About us</a>
            <a href="#">Jackets</a>
            <a href="#">Knitwear</a>
            <a href="#">Accessories</a>
            <a href="#">Sale</a>
          </div>
        </div>
      </section>
    </>
  );
}
