import { Calendar, Sparkles } from "lucide-react";
import logo from "@/assets/align-logo.png";

export const Logo = ({ className = "h-9 w-9" }: { className?: string }) => (
  <img src={logo} alt="Align logo" width={64} height={64} className={className} />
);

export const CalendarMock = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const events = [
    { day: 0, top: "10%", h: "16%", label: "AP Bio Quiz", color: "bg-primary text-primary-foreground" },
    { day: 0, top: "55%", h: "12%", label: "Soccer", color: "bg-green/90 text-white" },
    { day: 1, top: "20%", h: "22%", label: "Essay Draft", color: "bg-purple/90 text-white" },
    { day: 1, top: "70%", h: "10%", label: "Band", color: "bg-amber-400/90 text-white" },
    { day: 2, top: "8%", h: "14%", label: "Calc HW", color: "bg-primary text-primary-foreground" },
    { day: 2, top: "40%", h: "18%", label: "Study Group", color: "bg-secondary text-secondary-foreground" },
    { day: 3, top: "25%", h: "20%", label: "History Test", color: "bg-rose-400/90 text-white" },
    { day: 3, top: "65%", h: "14%", label: "Rehearsal", color: "bg-purple/90 text-white" },
    { day: 4, top: "12%", h: "12%", label: "Lit Reading", color: "bg-secondary text-secondary-foreground" },
    { day: 4, top: "50%", h: "20%", label: "Soccer Game", color: "bg-green/90 text-white" },
  ];

  return (
    <div className="relative">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute right-10 top-0 h-48 w-48 rounded-full bg-purple/25 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      <div className="rounded-3xl bg-gradient-card p-3 shadow-dramatic ring-1 ring-border/60 backdrop-blur">
        <div className="rounded-2xl bg-card p-5">
          {/* header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">This Week</p>
                <p className="text-xs text-muted-foreground">Oct 14 — Oct 18</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3" /> AI organized
            </div>
          </div>

          {/* grid */}
          <div className="grid grid-cols-5 gap-2">
            {days.map((d, i) => (
              <div key={d} className="space-y-1.5">
                <p className="text-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{d}</p>
                <div className="relative h-72 rounded-xl bg-muted/60 p-1">
                  {events
                    .filter((e) => e.day === i)
                    .map((e, idx) => (
                      <div
                        key={idx}
                        className={`absolute left-1 right-1 rounded-lg px-1.5 py-1 text-[10px] font-semibold leading-tight shadow-soft ${e.color}`}
                        style={{ top: e.top, height: e.h }}
                      >
                        {e.label}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* footer suggestion */}
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-primary/15 bg-primary-soft/60 p-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-hero text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <p className="text-xs font-medium text-foreground">
              <span className="font-bold text-primary">Focus today:</span> AP Bio Quiz prep — 45 min suggested before practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
