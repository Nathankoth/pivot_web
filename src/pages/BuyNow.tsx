import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { pivotGuardProduct } from "@/data/product";
import { formatCurrency } from "@/lib/utils";

const paymentMethods = [
  { id: "paystack", label: "Paystack" },
  { id: "flutterwave", label: "Flutterwave" },
  { id: "card", label: "Card" },
];

const BuyNow = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const product = pivotGuardProduct;

  const initialQuantity = useMemo(() => {
    const qty = Number(searchParams.get("qty"));
    if (Number.isNaN(qty) || qty <= 0) return 1;
    return Math.min(10, qty);
  }, [searchParams]);

  const [quantity, setQuantity] = useState(initialQuantity);
  const [method, setMethod] = useState(paymentMethods[0].id);
  const savings = product.originalPrice ? product.originalPrice - product.price : null;
  const discountPercent = product.originalPrice && product.originalPrice > 0 ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  const savingsText = savings ? `Save ${formatCurrency(savings)} per item` : null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    toast({
      title: "Order ready for payment",
      description: `We will initialize a ${method} payment for ${formData.get("full_name")}.`,
    });
  };

  return (
    <section className="py-12">
      <div className="container-custom max-w-4xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-headline font-bold text-primary">Buy now</h1>
          <p className="text-sm text-muted-foreground">
            Quick checkout for coaches who already know their order. Confirm details, pick a payment method, and submit.
          </p>
        </header>

        <div className="space-y-6 rounded-lg border border-border bg-card p-6 shadow-card">
          <h2 className="text-xl font-headline font-semibold text-primary">Product summary</h2>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <img
              src={product.image}
              alt={`${product.title} preview`}
              className="h-32 w-32 rounded-md object-cover"
              loading="lazy"
            />
              <div className="flex flex-1 flex-col gap-2">
              <h3 className="text-lg font-semibold text-primary">{product.title}</h3>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">SKU: {product.sku}</p>
                {product.originalPrice ? (
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-muted-foreground line-through">{formatCurrency(product.originalPrice)}</span>
                      <span className="text-base font-semibold text-primary">{formatCurrency(product.price)} each</span>
                      {discountPercent ? (
                        <span className="rounded-md bg-accent px-2 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                          {`${discountPercent}% OFF`}
                        </span>
                      ) : null}
                    </div>
                    {savingsText ? <p className="text-xs text-muted-foreground">{savingsText}</p> : null}
                  </div>
                ) : (
                  <div className="text-base font-semibold text-primary">{formatCurrency(product.price)} each</div>
                )}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Quantity</span>
                <Input
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(event) => setQuantity(Math.min(10, Math.max(1, Number(event.target.value) || 1)))}
                  className="h-9 w-20"
                />
              </div>
              <div className="text-sm font-semibold text-primary">
                {formatCurrency(product.price * quantity)} total
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl font-headline font-semibold text-primary">Buyer details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="full_name">Full name</Label>
                <Input id="full_name" name="full_name" required autoComplete="name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" required autoComplete="tel" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address_line1">Address</Label>
                <Input id="address_line1" name="address_line1" required autoComplete="address-line1" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" required autoComplete="address-level2" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" name="state" required autoComplete="address-level1" />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" defaultValue="Nigeria" required autoComplete="country-name" />
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl font-headline font-semibold text-primary">Payment</h2>
            <fieldset className="space-y-3">
              <legend className="text-sm text-muted-foreground">Choose your payment gateway</legend>
              {paymentMethods.map((payment) => (
                <label key={payment.id} className="flex cursor-pointer items-center gap-3 rounded-md border border-transparent p-3 hover:border-accent">
                  <input
                    type="radio"
                    name="payment_method"
                    value={payment.id}
                    checked={method === payment.id}
                    onChange={() => setMethod(payment.id)}
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-primary">{payment.label}</span>
                </label>
              ))}
            </fieldset>
          </div>

          <div className="space-y-3 rounded-lg border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl font-headline font-semibold text-primary">Order summary</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <dt>{product.title}</dt>
                <dd className="text-right">
                  {product.originalPrice && (
                    <span className="mr-2 text-xs text-muted-foreground line-through">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                  <span>{formatCurrency(product.price)} × {quantity}</span>
                </dd>
              </div>
              {savings ? (
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <dt>Savings</dt>
                  <dd>{formatCurrency(savings * quantity)}</dd>
                </div>
              ) : null}
              <div className="flex items-center justify-between font-semibold text-primary">
                <dt>Total due</dt>
                <dd>{formatCurrency(product.price * quantity)}</dd>
              </div>
            </dl>
            <Button type="submit" size="lg" className="w-full">
              Pay now
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BuyNow;

