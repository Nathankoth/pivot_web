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
    <section className="py-12 md:py-16 bg-card">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center space-y-4 p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-headline font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
