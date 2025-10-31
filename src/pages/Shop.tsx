import ProductCard from "@/components/ProductCard";

const Shop = () => {
  return (
    <div className="space-y-12 py-12">
      <section className="container-custom space-y-3">
        <h1 className="text-3xl font-headline font-bold text-primary">Shop Pivot Guard</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Essential training equipment for coaches who need realistic contact feedback without bulky gear.
        </p>
      </section>
      <ProductCard />
    </div>
  );
};

export default Shop;

