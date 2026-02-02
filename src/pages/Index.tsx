import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesCarousel from "@/components/ServicesCarousel";
import ServicesAccordion from "@/components/ServicesAccordion";
import Reviews from "@/components/Reviews";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ServicesCarousel />
      <ServicesAccordion />
      <Reviews />
      <Terms />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
