import AboutUs from "./components/AboutUs/aboutUs";
import FAQ from "./components/FAQs/faq";
import HeroSection from "./components/HeroSection/heroSection";
import Products from "./components/Products/products";

export default function Home() {
  return (
    <div className="w-full h-full tracking-wide">
      <HeroSection />
      <AboutUs />
      <Products />
      <FAQ />
    </div>
  );
}
