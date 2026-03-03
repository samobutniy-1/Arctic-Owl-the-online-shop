import { useState } from "react";

import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";
import { SalesSection } from "../sales-section/SalesSection";
import { ProductsSection } from "../products/ProductsSection";

export function HomePage({ addToCart }) {
  const [query, setQuery] = useState("");
  const isSearching = query.length > 0;

  return (
    <>
      <div className="wrapper">
        <Header query={query} setQuery={setQuery} />
        {!isSearching && <HeroSection />}
        {!isSearching && <SalesSection addToCart={addToCart} />}
        <ProductsSection addToCart={addToCart} query={query} />
      </div>
    </>
  );
}
