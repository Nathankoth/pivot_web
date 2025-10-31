import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";

const navItems = [
  { label: "Shop", to: "/shop" },
  { label: "Drills", to: "/drills" },
  { label: "Support", to: "/support" },
];

const Header = () => {
  const { items } = useCart();
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center gap-6">
        <div className="flex flex-1 items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <nav className="mt-10 flex flex-col gap-4 text-sm font-medium">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-2 ${isActive ? "bg-accent/20 text-primary" : "text-foreground/80 hover:bg-accent/10"}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link to="/cart" className="rounded-md px-3 py-2 text-foreground/80 hover:bg-accent/10">
                    Cart
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/buy-now?sku=PG-STD-BLK&qty=1" className="rounded-md px-3 py-2 text-foreground/80 hover:bg-accent/10">
                    Buy now
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="text-xl font-headline font-bold tracking-tight text-primary">
            Pivot Guard
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <Button asChild variant="ghost" size="icon" className="relative">
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" aria-hidden />
              <span className="sr-only">Shopping cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold text-accent-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link to="/buy-now?sku=PG-STD-BLK&qty=1">Buy now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
