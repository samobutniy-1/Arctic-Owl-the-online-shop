import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";
import { SalesSection } from "../sales-section/SalesSection";
import { ProductsSection } from "../products/ProductsSection";

export function HomePage({ addToCart }) {
  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroSection />
        <SalesSection addToCart={addToCart} />
        <ProductsSection addToCart={addToCart} />
      </div>
    </>
  );
}
