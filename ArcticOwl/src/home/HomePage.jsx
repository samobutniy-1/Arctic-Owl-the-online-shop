import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";

export function HomePage() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroSection />
      </div>
    </>
  );
}
