import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headline font-bold">
            Get drills, discounts and first access
          </h2>
          <p className="text-lg opacity-90">
            Join our newsletter for exclusive training content — 10% off your first order.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground"
              required
            />
            <Button type="submit" variant="secondary" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm opacity-75">
            We hate spam. Opt-out anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
