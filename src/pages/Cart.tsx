import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/utils";
import { pivotGuardProduct } from "@/data/product";

const Cart = () => {
  const { items, updateQuantity, removeItem, getCartTotals } = useCart();
  const navigate = useNavigate();
  const { subtotal, itemCount } = getCartTotals();
  const totalSavings = items.reduce((acc, item) => {
    if (item.originalPrice) {
      return acc + (item.originalPrice - item.price) * item.quantity;
    }
    return acc;
  }, 0);

  if (items.length === 0) {
    return (
      <section className="py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-headline font-semibold text-primary">Your cart is empty</h1>
          <p className="mt-4 text-muted-foreground">Add Pivot Guard to your cart to keep drills moving.</p>
          <Button asChild className="mt-6">
            <Link to="/shop">Shop Pivot Guard</Link>
          </Button>
        </div>
      </section>
    );
  }

  const handleBuyNowShortcut = () => {
    const firstItem = items[0];
    navigate(`/buy-now?sku=${firstItem.sku}&qty=${firstItem.quantity}`);
  };

  return (
    <section className="py-12">
      <div className="container-custom">
        <header className="mb-8 space-y-2">
          <h1 className="text-3xl font-headline font-bold text-primary">Cart</h1>
          <p className="text-sm text-muted-foreground">Review items, adjust quantities, or move straight to checkout.</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <article key={item.sku} className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 shadow-card md:flex-row md:items-start">
                <img
                  src={item.image ?? pivotGuardProduct.image}
                  alt={`${item.title} product image`}
                  className="h-28 w-28 rounded-md object-cover"
                  loading="lazy"
                />

                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-primary">{item.title}</h2>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">SKU: {item.sku}</p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="self-start text-xs text-muted-foreground hover:text-primary"
                      onClick={() => removeItem(item.sku)}
                    >
                      Remove
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex flex-wrap items-center gap-2">
                        {item.originalPrice && (
                          <span className="line-through">{formatCurrency(item.originalPrice)}</span>
                        )}
                        <span className="text-base font-semibold text-primary">{formatCurrency(item.price)} each</span>
                        {item.originalPrice ? (
                          <span className="ml-1 rounded-md bg-accent px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                            {`${Math.round((1 - item.price / item.originalPrice) * 100)}% OFF`}
                          </span>
                        ) : null}
                      </div>
                      {item.originalPrice ? (
                        <p className="text-xs text-muted-foreground">
                          Save {formatCurrency(item.originalPrice - item.price)} per item
                        </p>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center rounded-full border border-border bg-background">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.sku, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </Button>
                        <span className="min-w-[2rem] text-center text-sm font-semibold text-primary">{item.quantity}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.sku, item.quantity + 1)}
                          disabled={item.quantity === 10}
                        >
                          +
                        </Button>
                      </div>
                      <div className="text-sm font-semibold text-primary">
                        {formatCurrency(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-6 rounded-lg border border-border bg-card p-6 shadow-card">
            <div className="space-y-2">
              <h2 className="text-xl font-headline font-semibold text-primary">Order summary</h2>
              <p className="text-sm text-muted-foreground">{itemCount} item{itemCount > 1 ? "s" : ""}</p>
            </div>

            <dl className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-semibold text-primary">{formatCurrency(subtotal)}</dd>
              </div>
              {totalSavings > 0 ? (
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <dt>Savings</dt>
                  <dd>{formatCurrency(totalSavings)}</dd>
                </div>
              ) : null}
              <div className="flex items-start justify-between gap-2">
                <dt className="text-muted-foreground">Shipping estimate</dt>
                <dd className="max-w-[220px] text-right text-xs text-muted-foreground">
                  Local delivery rates calculated at checkout. International shipping available on request.
                </dd>
              </div>
            </dl>

            <div className="space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full" onClick={handleBuyNowShortcut}>
                Buy Now (selected)
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;

