import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pivot-guard-studio.jpg";

const Hero = () => {
  return (
    <section className="bg-background py-10 md:py-16" aria-labelledby="hero-heading">
      <div className="container-custom">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent" aria-label="Trusted training gear">
              Trusted training gear
            </p>
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-4xl font-headline font-bold tracking-tight text-primary md:text-5xl">
                Train smarter. Pivot with confidence.
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Pivot Guard — engineered training sticks for basketball, flag football, martial arts and boxing.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/shop">Shop Pivot Guard</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/drills">See drills</Link>
              </Button>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Free returns • Local shipping • Coach-approved
            </p>
            <p className="text-sm font-semibold text-accent">
              Limited offer: ₦55,000 — Save ₦15,000 (21% OFF)
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <img
                src={heroImage}
                alt="Pivot Guard training stick studio photograph"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Use single 1:1 master; CSS crop for hero and thumbnail</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
