import { CalendarDays, RefreshCw, ListChecks, Trophy, Bell, Lightbulb } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Smart Calendar",
    body: "The central hub. Daily, weekly, and monthly views, beautifully color-coded.",
    span: "lg:col-span-2 lg:row-span-2 bg-gradient-hero text-primary-foreground",
    feature: true,
  },
  {
    icon: RefreshCw,
    title: "Automatic Sync",
    body: "Canvas, RenWeb, Google Classroom and more — always in sync.",
  },
  {
    icon: ListChecks,
    title: "Assignment Tracking",
    body: "Deadlines, weights, and progress in one glance.",
  },
  {
    icon: Trophy,
    title: "Activity Integration",
    body: "Sports, clubs, and rehearsals fit right alongside academics.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    body: "Reminders that adapt to your week — never spammy.",
  },
  {
    icon: Lightbulb,
    title: "AI Insights",
    body: "Personalized focus suggestions based on what's coming up.",
  },
];

export const Features = () => (
  <section id="features" className="container py-24 md:py-32">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-primary">Features</p>
      <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
        One app. Everything covered.
      </h2>
    </div>

    <div className="mt-14 grid auto-rows-[200px] gap-5 md:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => (
        <div
          key={f.title}
          className={`group relative overflow-hidden rounded-3xl p-7 ring-1 ring-border/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${
            f.span ?? "bg-gradient-card"
          }`}
        >
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
              f.feature ? "bg-white/20 text-white" : "bg-primary-soft text-primary"
            }`}
          >
            <f.icon className="h-5 w-5" />
          </div>
          <h3 className={`mt-5 font-display font-bold ${f.feature ? "text-2xl text-white" : "text-lg text-foreground"}`}>
            {f.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${f.feature ? "text-white/85 max-w-sm" : "text-muted-foreground"}`}>
            {f.body}
          </p>

          {f.feature && (
            <div className="pointer-events-none absolute -bottom-10 -right-8 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
          )}
        </div>
      ))}
    </div>
  </section>
);
