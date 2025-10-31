import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 fill-accent text-accent"
              />
            ))}
            <span className="ml-2 text-lg font-semibold">4.8</span>
          </div>
          
          <blockquote className="text-xl md:text-2xl font-medium italic">
            "Great for simulating contact — improved my players' confidence on drives."
          </blockquote>
          
          <p className="text-muted-foreground">
            — Coach A
          </p>
          
          <a
            href="#reviews"
            className="inline-block text-sm font-medium text-accent hover:underline"
          >
            Read all reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
