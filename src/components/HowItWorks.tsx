import { Link2, Download, CalendarDays, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect your school apps",
    body: "Connect Canvas, Google Classroom, RenWeb, or any system your school uses.",
  },
  {
    icon: Download,
    title: "Align pulls all your data",
    body: "Assignments, tests, sports, clubs, and rehearsals — all imported automatically.",
  },
  {
    icon: CalendarDays,
    title: "Everything appears in one calendar",
    body: "A clean, color-coded view of your entire week. No more tab-hopping.",
  },
  {
    icon: Sparkles,
    title: "AI prioritizes your day",
    body: "Align suggests what to focus on so you stay ahead — without the overwhelm.",
  },
];

export const HowItWorks = () => (
  <section id="how" className="relative bg-gradient-soft py-24 md:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">How it works</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Four steps to a calmer week.
        </h2>
      </div>

      <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* connecting line on lg */}
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

        {steps.map((s, i) => (
          <div key={s.title} className="relative">
            <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-hero text-white shadow-elevated">
              <s.icon className="h-7 w-7" />
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-card text-xs font-extrabold text-primary shadow-soft ring-1 ring-primary/15">
                {i + 1}
              </span>
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
