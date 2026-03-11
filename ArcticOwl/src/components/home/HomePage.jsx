import { useEffect, useRef, useContext } from "react";
import { CartContext } from "../../context/AppContexts";

import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";
import { SalesSection } from "../sales-section/SalesSection";
import { ProductsSection } from "../products/ProductsSection";

export function HomePage() {
  const { addToCart, query, activeCategory, setActiveCategory } =
    useContext(CartContext);

  const isSearching = query.length > 0;
  const productsSectionRef = useRef(null);

  useEffect(() => {
    if (activeCategory && productsSectionRef.current) {
      setTimeout(() => {
        productsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [activeCategory]);

  return (
    <div className="wrapper">
      <Header />
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
