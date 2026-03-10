import owl from "../../assets/images/hero-section-img.png";

export function HeroSection({ setActiveCategory, productsSectionRef }) {
  const handleCategoryClick = (value) => {
    setActiveCategory(value);
    productsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
            <button onClick={() => handleCategoryClick("jackets")}>
              Jackets
            </button>
            <button onClick={() => handleCategoryClick("sleeping-bags")}>
              Sleeping bags
            </button>
            <button onClick={() => handleCategoryClick("base-layers")}>
              Base layers
            </button>
            <button onClick={() => handleCategoryClick("accessories")}>
              Accessories
            </button>
            <button onClick={() => handleCategoryClick("equipment")}>
              Equipment
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
