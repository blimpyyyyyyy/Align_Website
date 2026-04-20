import { BellRing, Brain, RefreshCw, Smile } from "lucide-react";

const benefits = [
  {
    icon: BellRing,
    title: "Never miss an assignment",
    body: "Smart reminders make sure nothing slips through the cracks.",
    accent: "bg-primary-soft text-primary",
  },
  {
    icon: RefreshCw,
    title: "All platforms, auto-synced",
    body: "Canvas, ReNew, Google Classroom — connected in seconds.",
    accent: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Brain,
    title: "AI-powered prioritization",
    body: "Align ranks what matters most so you focus on the right thing.",
    accent: "bg-accent text-accent-foreground",
  },
  {
    icon: Smile,
    title: "Less stress, more focus",
    body: "One calendar. One source of truth. A calmer school week.",
    accent: "bg-amber-100 text-amber-700",
  },
];

export const Benefits = () => (
  <section className="container py-24 md:py-32">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-primary">Why students love Align</p>
      <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
        Built for the way you actually live.
      </h2>
    </div>

    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((b) => (
        <div
          key={b.title}
          className="group relative overflow-hidden rounded-3xl bg-gradient-card p-6 ring-1 ring-border/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
        >
          <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${b.accent}`}>
            <b.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-foreground">{b.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
        </div>
      ))}
    </div>
  </section>
);
