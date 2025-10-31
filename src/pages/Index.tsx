import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductCard from "@/components/ProductCard";
import ActionGallery from "@/components/ActionGallery";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductCard />
        <ActionGallery />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
