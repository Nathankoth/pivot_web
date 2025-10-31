import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-headline font-bold tracking-tight">
            Pivot Guard
          </h1>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#shop" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Shop
            </a>
            <a href="#drills" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Drills
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#support" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Support
            </a>
          </nav>
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Shopping cart</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
