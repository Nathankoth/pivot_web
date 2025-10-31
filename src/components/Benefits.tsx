import { Shield, Zap, User } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Protect & Practice",
    description: "Realistic contact feedback for safe practice.",
  },
  {
    icon: Zap,
    title: "Light & Durable",
    description: "Engineered for repeated drills and easy carry.",
  },
  {
    icon: User,
    title: "Coach-approved Drills",
    description: "Actionable drills included with each purchase.",
  },
];

const Benefits = () => {
  return (
    <section aria-labelledby="benefits-heading" className="bg-card py-9">
      <div className="container-custom">
        <h2 id="benefits-heading" className="sr-only">
          Why coaches choose Pivot Guard
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="rounded-lg border border-border bg-background p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <h3 className="text-lg font-headline font-semibold text-primary">{benefit.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
