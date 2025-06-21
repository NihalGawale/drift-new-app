import HeroSection from "./components/HeroSection/heroSection";
import NavBar from "./components/NavBar/navBar";
import Products from "./components/Products/products";

export default function Home() {
  return (
    <div className="w-full tracking-wide">
      <NavBar />
      <HeroSection />
      <Products />
    </div>
  );
}
