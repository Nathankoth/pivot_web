import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import martialArtsImage from "@/assets/action-martial-arts.jpg";
import basketballImage from "@/assets/action-basketball.jpg";

const ActionGallery = () => {
  return (
    <section aria-labelledby="action-gallery-heading" className="bg-background py-12">
      <div className="container-custom space-y-8">
        <div className="space-y-3 text-center">
          <h2 id="action-gallery-heading" className="text-3xl font-headline font-bold text-primary">
            Built for real training
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Two core drills to start: simulate contact safely for martial arts and basketball/flag football sessions.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <img
              src={martialArtsImage}
              alt="Martial Arts: control & impact drills"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">
              Martial Arts: control & impact drills
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <img
              src={basketballImage}
              alt="Basketball/Flag Football: simulate contact"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">
              Basketball/Flag Football: simulate contact
            </figcaption>
          </figure>
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/drills">See drills & videos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActionGallery;
