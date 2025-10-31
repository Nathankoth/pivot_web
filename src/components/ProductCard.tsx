import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productImage from "@/assets/product-square.jpg";

const ProductCard = () => {
  return (
    <section id="shop" className="py-12 md:py-20">
      <div className="container-custom">
        <Card className="max-w-3xl mx-auto shadow-hover hover-lift">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                <img
                  src={productImage}
                  alt="Pivot Guard Standard Black - 31 inch training stick"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      PG-STD-BLK
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-headline font-bold">
                      Pivot Guard — Standard Black
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground">
                    31" training stick — 15.5" padded guard (5" diameter), 15.5" foam handle (1.5" thick).
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Coach-tested</Badge>
                    <Badge variant="outline">Glossy vinyl pad</Badge>
                    <Badge variant="outline">Anti-slip foam handle</Badge>
                  </div>
                  
                  <p className="text-3xl font-headline font-bold">
                    ₦15,000
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Add to cart
                  </Button>
                  <Button className="w-full" variant="outline" size="lg">
                    Buy now
                  </Button>
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
