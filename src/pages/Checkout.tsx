import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const steps = [
  { id: "shipping", title: "Shipping", description: "Provide delivery contact and address." },
  { id: "payment", title: "Payment", description: "Select gateway and confirm billing." },
  { id: "review", title: "Review", description: "Verify order before submission." },
];

const Checkout = () => {
  return (
    <section className="py-12">
      <div className="container-custom max-w-5xl space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-headline font-bold text-primary">Checkout</h1>
          <p className="text-sm text-muted-foreground">
            Guest checkout supported. Steps: shipping, payment, review. Finalize with secure Paystack or Flutterwave transaction.
          </p>
        </header>

        <nav className="flex flex-wrap gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2 text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {index + 1}
              </span>
              <span className="font-medium text-primary">{step.title}</span>
            </div>
          ))}
        </nav>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <section className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl font-headline font-semibold text-primary">Shipping</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="ship_name">Full name</Label>
                  <Input id="ship_name" autoComplete="name" />
                </div>
                <div>
                  <Label htmlFor="ship_phone">Phone</Label>
                  <Input id="ship_phone" autoComplete="tel" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="ship_address">Address</Label>
                  <Input id="ship_address" autoComplete="street-address" />
                </div>
                <div>
                  <Label htmlFor="ship_city">City</Label>
                  <Input id="ship_city" autoComplete="address-level2" />
                </div>
                <div>
                  <Label htmlFor="ship_state">State</Label>
                  <Input id="ship_state" autoComplete="address-level1" />
                </div>
                <div>
                  <Label htmlFor="ship_country">Country</Label>
                  <Input id="ship_country" defaultValue="Nigeria" autoComplete="country-name" />
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl font-headline font-semibold text-primary">Payment</h2>
              <p className="text-sm text-muted-foreground">
                Implement Paystack & Flutterwave server-side for secure initialization. Use test keys first, then live keys after verification. Support card payments as backup.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="pay_email">Email for receipt</Label>
                  <Input id="pay_email" type="email" autoComplete="email" />
                </div>
                <div>
                  <Label htmlFor="pay_gateway">Preferred gateway</Label>
                  <Input id="pay_gateway" placeholder="Paystack" />
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl font-headline font-semibold text-primary">Review & confirm</h2>
              <p className="text-sm text-muted-foreground">
                Confirm items, shipping method, and totals. On submit, trigger payment initialization and await webhook confirmation for order creation.
              </p>
              <Button size="lg" className="w-full">
                Initialize payment
              </Button>
            </section>
          </div>

          <aside className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-card">
            <h2 className="text-lg font-headline font-semibold text-primary">Order checklist</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Verify cart subtotal and shipping estimate.</li>
              <li>Guest checkout stays available until order is confirmed.</li>
              <li>Webhook flow: payment confirmation → order creation.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

