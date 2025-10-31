const sections = [
  {
    id: "faq",
    title: "FAQ",
    content: [
      {
        question: "What comes with Pivot Guard?",
        answer: "Each unit includes the training stick, downloadable drill sheets, and safety guidelines for coaches.",
      },
      {
        question: "Can I use it outdoors?",
        answer: "Yes. The foam guard is weather-resistant. Wipe dry after outdoor sessions to extend the lifespan.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      {
        question: "Email",
        answer: "support@pivotguard.com",
      },
      {
        question: "Phone",
        answer: "+234 800 000 0000 (Mon–Fri, 9am–5pm WAT)",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping",
    content: [
      {
        question: "Nigeria",
        answer: "2–5 business days nationwide with tracking.",
      },
      {
        question: "International",
        answer: "7–14 business days. Reach out for bulk and team orders.",
      },
    ],
  },
  {
    id: "reviews",
    title: "Reviews",
    content: [
      {
        question: "Coach A",
        answer: "“Great for simulating contact — improved my players' confidence on drives.”",
      },
      {
        question: "Coach B",
        answer: "“Durable and light. We use it for flag football and martial arts warmups.”",
      },
    ],
  },
];

const Support = () => {
  return (
    <div className="space-y-10 py-12">
      <section className="container-custom space-y-3">
        <h1 className="text-3xl font-headline font-bold text-primary">Support</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Quick answers and direct contact information. Need something custom? Reach out through the details below.
        </p>
        <nav className="flex flex-wrap gap-3 text-sm text-primary">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="rounded-full border border-border px-3 py-1 hover:border-primary">
              {section.title}
            </a>
          ))}
        </nav>
      </section>

      <section className="container-custom space-y-8">
        {sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="rounded-lg border border-border bg-card p-6 shadow-card"
          >
            <h2 className="text-2xl font-headline font-semibold text-primary">{section.title}</h2>
            <dl className="mt-4 space-y-4">
              {section.content.map((item) => (
                <div key={item.question}>
                  <dt className="text-sm font-semibold text-primary">{item.question}</dt>
                  <dd className="text-sm text-muted-foreground">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Support;

