import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/CalendarMock";

const ProfessionalsComingSoon = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-purple/15 blur-3xl" />
      <div className="absolute left-0 top-60 h-72 w-72 rounded-full bg-green/15 blur-3xl" />
    </div>

    <header className="container flex h-16 items-center justify-between md:h-20">
      <Link to="/" className="flex items-center gap-2.5">
        <Logo className="h-9 w-9" />
        <span className="font-display text-xl font-extrabold tracking-tight">Align</span>
      </Link>
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4" /> Home</Link>
      </Button>
    </header>

    <main className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-16 text-center">
      <div className="animate-rise">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          Coming Soon
        </div>
        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Align for <span className="text-gradient">Professionals</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Our professional ecosystem is currently in development. We're building a workspace that brings the same calm clarity to your workday.
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground/80">
          A unified AI workspace for schedules, meetings, communication, and productivity.
        </p>
        <div className="mt-10">
          <Button variant="hero" size="xl" asChild>
            <Link to="/"><ArrowLeft className="h-4 w-4" /> Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  </div>
);

export default ProfessionalsComingSoon;
