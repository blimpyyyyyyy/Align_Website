const quotes = [
  {
    quote: "I haven't missed a single assignment since I started using Align. It's literally life-changing for soccer season.",
    name: "Maya R.",
    role: "11th grade · Varsity Soccer",
    accent: "bg-primary-soft",
  },
  {
    quote: "Between rehearsals, AP classes, and clubs — Align is the only reason I'm not a stressed mess anymore.",
    name: "Jordan T.",
    role: "12th grade · Theatre",
    accent: "bg-secondary",
  },
  {
    quote: "It just works. Canvas, Google Classroom, my soccer schedule — all in one place. Wish I had this freshman year.",
    name: "Devin P.",
    role: "College Sophomore",
    accent: "bg-accent",
  },
];

export const Testimonials = () => (
  <section className="bg-gradient-soft py-24 md:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">Loved by students</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Less stress. Better grades. Happier weeks.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border/70 transition-all hover:-translate-y-1 hover:shadow-elevated"
          >
            <div className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl ${q.accent} text-2xl font-extrabold text-primary`}>
              "
            </div>
            <blockquote className="flex-1 text-base leading-relaxed text-foreground">{q.quote}</blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-display text-sm font-bold text-foreground">{q.name}</p>
              <p className="text-xs text-muted-foreground">{q.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
