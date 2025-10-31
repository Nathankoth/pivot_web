import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductCard from "@/components/ProductCard";
import ActionGallery from "@/components/ActionGallery";
import Reviews from "@/components/Reviews";

const Index = () => {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <Benefits />
      <ProductCard />
      <ActionGallery />
      <Reviews />
    </div>
  );
};

export default Index;
