import AboutUs from "./components/AboutUs/aboutUs";
import FAQ from "./components/FAQs/faq";
import Footer from "./components/Footer/footer";
import HeroSection from "./components/HeroSection/heroSection";
import NavBar from "./components/NavBar/navBar";
import Products from "./components/Products/products";

export default function Home() {
  return (
    <div className="w-full h-full tracking-wide">
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Products />
      <FAQ />
      <Footer />
    </div>
  );
}
