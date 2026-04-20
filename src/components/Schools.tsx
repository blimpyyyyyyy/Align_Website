import { Button } from "./ui/button";
import { Building2, Plug, TrendingUp, ArrowRight } from "lucide-react";

const items = [
  { icon: TrendingUp, title: "Better student outcomes", body: "Organized students miss less, complete more, and feel less overwhelmed." },
  { icon: Plug, title: "Plugs into your stack", body: "Works with the platforms your school already uses — no migrations." },
  { icon: Building2, title: "Built for institutions", body: "Admin dashboards, privacy controls, and aggregate insights." },
];

export const Schools = () => (
  <section id="schools" className="container py-24 md:py-32">
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-10 text-primary-foreground shadow-dramatic md:p-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-purple/30 blur-3xl" />

      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/80">For Schools</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Help every student stay on top of school.
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/90">
            Align integrates with your existing systems to reduce missed work and improve student organization — district-wide.
          </p>
          <Button variant="soft" size="lg" className="mt-7 bg-white text-primary hover:bg-white/90">
            Partner with Us <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4">
          {items.map((it) => (
            <div key={it.title} className="flex gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md ring-1 ring-white/15">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold">{it.title}</h3>
                <p className="mt-1 text-sm text-white/85">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
