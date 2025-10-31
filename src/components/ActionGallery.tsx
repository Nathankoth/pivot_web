import { Button } from "@/components/ui/button";
import martialArtsImage from "@/assets/action-martial-arts.jpg";
import basketballImage from "@/assets/action-basketball.jpg";

const ActionGallery = () => {
  return (
    <section id="drills" className="py-12 md:py-20 bg-card">
      <div className="container-custom">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Built for real training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From martial arts dojos to basketball courts — coaches trust Pivot Guard for realistic contact drills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden hover-lift">
            <img
              src={martialArtsImage}
              alt="Martial arts training with Pivot Guard stick"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden hover-lift">
            <img
              src={basketballImage}
              alt="Basketball training drill with Pivot Guard"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            See drills & videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActionGallery;
