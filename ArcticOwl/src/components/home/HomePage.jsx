import { useState, useRef, useContext } from "react";
import { CartContext } from "../../context/AppContexts";
import { BurgerContext } from "../../context/AppContexts";

import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";
import { SalesSection } from "../sales-section/SalesSection";
import { ProductsSection } from "../products/ProductsSection";

export function HomePage() {
  const { cart, addToCart, query, setQuery } = useContext(CartContext);
  const { isActive } = useContext(BurgerContext);

  const isSearching = query.length > 0;
  const [activeCategory, setActiveCategory] = useState(null);
  const productsSectionRef = useRef(null);

  return (
    <div className="wrapper">
      <Header
        isActive={isActive}
        query={query}
        setQuery={setQuery}
        cart={cart}
        setActiveCategory={setActiveCategory}
        productsSectionRef={productsSectionRef}
      />
      {!isSearching && (
        <HeroSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          productsSectionRef={productsSectionRef}
        />
      )}
      {!isSearching && <SalesSection addToCart={addToCart} />}
      <ProductsSection
        activeCategory={activeCategory}
        addToCart={addToCart}
        query={query}
        ref={productsSectionRef}
      />
    </div>
  );
}
