import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { CartProvider } from "@/hooks/use-cart";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Drills from "./pages/Drills";
import Support from "./pages/Support";
import Cart from "./pages/Cart";
import BuyNow from "./pages/BuyNow";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Index />} />
              <Route path="shop" element={<Shop />} />
              <Route path="drills" element={<Drills />} />
              <Route path="support" element={<Support />} />
              <Route path="cart" element={<Cart />} />
              <Route path="buy-now" element={<BuyNow />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="about" element={<About />} />
              <Route path="careers" element={<Careers />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
