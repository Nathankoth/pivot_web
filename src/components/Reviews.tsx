import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <section aria-labelledby="reviews-heading" className="py-8">
      <div className="container-custom">
        <h2 id="reviews-heading" className="sr-only">
          Coach reviews highlight
        </h2>
        <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 shadow-card md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-accent" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="text-sm font-semibold text-primary" role="status" aria-live="polite">
              4.8 rating
            </div>
          </div>
          <blockquote className="max-w-2xl text-sm text-muted-foreground">
            “Great for simulating contact — improved my players' confidence on drives.” — Coach A
          </blockquote>
          <a
            href="/support#reviews"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Read all reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
