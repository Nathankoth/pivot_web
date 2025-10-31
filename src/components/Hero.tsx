import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/pivot-guard-studio.jpg";

const Hero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="secondary" className="font-medium">
              New — Trusted training gear
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight leading-tight">
              Train smarter. Pivot with confidence.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Pivot Guard — 31" padded training stick built for basketball, flag football, martial arts, and boxing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="text-base">
                Shop Pivot Guard
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                See drills
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground pt-2">
              Free returns • Local shipping • Coach-approved
            </p>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={heroImage}
                alt="Pivot Guard training stick - professional product shot"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
