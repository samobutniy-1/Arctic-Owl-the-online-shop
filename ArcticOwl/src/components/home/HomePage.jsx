import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";
import { SalesSection } from "../sales-section/SalesSection";

export function HomePage() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroSection />
        <SalesSection />
      </div>
    </>
  );
}
