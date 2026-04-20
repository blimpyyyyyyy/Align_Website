import { Button } from "./ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { CalendarMock } from "./CalendarMock";

export const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
    {/* ambient background */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-green/15 blur-3xl" />
      <div className="absolute left-0 top-60 h-72 w-72 rounded-full bg-purple/15 blur-3xl" />
    </div>

    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Left */}
        <div className="animate-rise text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered student calendar
          </div>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Everything.
            <br />
            <span className="text-gradient">In One Place.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
            Align automatically organizes your entire student life — assignments, practices, rehearsals, and events — into one smart calendar.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button variant="hero" size="xl">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="xl">
              <Play className="h-4 w-4" /> See How It Works
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green" /> Canvas</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Google Classroom</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-purple" /> ReNew</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400" /> + more</span>
          </div>
        </div>

        {/* Right calendar */}
        <div className="animate-fade-up [animation-delay:200ms]">
          <CalendarMock />
        </div>
      </div>
    </div>
  </section>
);
