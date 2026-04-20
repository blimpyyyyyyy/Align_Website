import { CalendarMock } from "./CalendarMock";
import { Check } from "lucide-react";

const points = [
  "Color-coded by class and activity",
  "Daily, weekly, and monthly views",
  "Drag, drop, and reschedule instantly",
  "Sync across phone, tablet, and laptop",
];

export const Preview = () => (
  <section id="preview" className="relative overflow-hidden bg-gradient-soft py-24 md:py-32">
    <div className="container">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Product preview</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            A calendar that finally <span className="text-gradient">gets you.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Clean. Intuitive. Built for the chaos of student life — and designed to make it feel calm.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-green text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-base font-medium text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:scale-105">
          <CalendarMock />
        </div>
      </div>
    </div>
  </section>
);
