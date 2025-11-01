import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/utils";
import { pivotGuardProduct } from "@/data/product";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const product = pivotGuardProduct;
  const savings = product.originalPrice ? product.originalPrice - product.price : null;
  const discountPercent = product.originalPrice && product.originalPrice > 0 ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  const badgeText = product.pricingDisplay?.badgeText ?? (discountPercent ? `${discountPercent}% OFF` : null);
  const savingsText = product.pricingDisplay?.savingsText ?? (savings ? `Save ${formatCurrency(savings)}` : null);

  const increment = () => setQuantity((prev) => Math.min(10, prev + 1));
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    addItem(
      {
        sku: product.sku,
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        priceDisplay: formatCurrency(product.price),
        image: product.image,
      },
      quantity,
    );

    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.title} added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    navigate(`/buy-now?sku=${product.sku}&qty=${quantity}`);
  };

  return (
    <section id="shop" aria-labelledby="product-card" className="scroll-mt-24">
      <div className="container-custom">
        <Card className="mx-auto max-w-4xl border border-border bg-card shadow-card">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-lg bg-secondary">
                <img
                  src={product.image}
                  alt="Pivot Guard product photograph"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="text-xs uppercase tracking-wide">
                    {product.sku}
                  </Badge>
                  <h2 id="product-card" className="text-3xl font-headline font-bold text-primary md:text-4xl">
                    {product.title}
                  </h2>
                  <p className="text-base text-muted-foreground">{product.description}</p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    {product.originalPrice ? (
                      <>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-base text-muted-foreground line-through">
                            {formatCurrency(product.originalPrice)}
                          </span>
                          <span className="text-3xl font-headline font-semibold text-primary">
                            {formatCurrency(product.price)}
                          </span>
                          {badgeText ? (
                            <span className="rounded-md bg-accent px-2 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                              {badgeText}
                            </span>
                          ) : null}
                        </div>
                        {savingsText ? (
                          <p className="text-sm text-muted-foreground">{savingsText}</p>
                        ) : null}
                      </>
                    ) : (
                      <p className="text-3xl font-headline font-semibold text-primary">
                        {formatCurrency(product.price)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-muted-foreground">Quantity</span>
                    <div className="inline-flex items-center rounded-full border border-border bg-background">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Decrease quantity"
                        onClick={decrement}
                        disabled={quantity === 1}
                      >
                        -
                      </Button>
                      <span className="min-w-[2rem] text-center text-sm font-semibold text-primary">{quantity}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Increase quantity"
                        onClick={increment}
                        disabled={quantity === 10}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                      Add to cart
                    </Button>
                    <Button className="flex-1" size="lg" variant="outline" onClick={handleBuyNow}>
                      Buy now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductCard;
