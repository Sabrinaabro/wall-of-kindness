import BannerSection from "./components/BannerSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Work from "./components/HowItWorks";
import BottomSection from "./components/BottomSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BannerSection />
      <Work />
      <BottomSection />
      <Footer />
    </>
  );
}
