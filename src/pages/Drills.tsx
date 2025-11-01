import contactDrillImage from "@/assets/pivot_guard.jpg";
import basketballDrillImage from "@/assets/pivot_guard_basketball.jpg";

const drills = [
  {
    title: "Basketball: Drive vs Contact Simulation",
    media: basketballDrillImage,
    level: "Intermediate",
    description: "Build confidence attacking the lane with controlled contact and finish through pressure.",
  },
  {
    title: "Martial Arts: Pad Kick Control",
    media: contactDrillImage,
    level: "All levels",
    description: "Improve striking accuracy and reaction timing while protecting training partners.",
  },
];

const Drills = () => {
  return (
    <div className="space-y-10 py-12">
      <section className="container-custom space-y-3">
        <h1 className="text-3xl font-headline font-bold text-primary">Drills library</h1>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Actionable drills included with every Pivot Guard. Start with the two foundational sessions below and expand to custom variations for your team.
        </p>
      </section>

      <section className="container-custom grid gap-6 md:grid-cols-2">
        {drills.map((drill) => (
          <article key={drill.title} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <img src={drill.media} alt={drill.title} className="h-48 w-full object-cover" loading="lazy" />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground">
                <span>{drill.level}</span>
              </div>
              <h2 className="text-lg font-headline font-semibold text-primary">{drill.title}</h2>
              <p className="text-sm text-muted-foreground">{drill.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Drills;

