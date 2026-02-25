import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";
import { SalesSection } from "../sales-section/SalesSection";
import { ProductsSection } from "../products/ProductsSection";

export function HomePage() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroSection />
        <SalesSection />
        <ProductsSection />
      </div>
    </>
  );
}
