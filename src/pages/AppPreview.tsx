import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, CheckSquare, GraduationCap, Trophy, Menu, Sparkles, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/CalendarMock";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

type Event = {
  time: string;
  title: string;
  tag: string;
  color: string; // bg
  tagColor: string; // tag bg/text
};

const schedule: Record<string, Event[]> = {
  Monday: [
    { time: "8:30 AM", title: "Homeroom", tag: "Synced from School LMS", color: "bg-[hsl(220_85%_62%)]", tagColor: "bg-white/25 text-white" },
    { time: "12:30 PM", title: "Debate Club Meeting", tag: "Events App", color: "bg-[hsl(48_95%_60%)]", tagColor: "bg-white/30 text-foreground" },
    { time: "2:00 PM", title: "English Essay Due", tag: "Academics", color: "bg-[hsl(45_95%_72%)]", tagColor: "bg-white/40 text-foreground" },
  ],
  Tuesday: [
    { time: "10:15 AM", title: "Biology Test", tag: "Auto-pulled from Teacher App", color: "bg-[hsl(8_85%_62%)]", tagColor: "bg-white/25 text-white" },
    { time: "3:00 PM", title: "Varsity Soccer Practice", tag: "Athletics Portal", color: "bg-[hsl(150_55%_55%)]", tagColor: "bg-white/25 text-white" },
  ],
  Wednesday: [
    { time: "9:00 AM", title: "Calc Quiz", tag: "Canvas", color: "bg-[hsl(185_72%_50%)]", tagColor: "bg-white/25 text-white" },
    { time: "1:00 PM", title: "Study Group", tag: "Peers", color: "bg-[hsl(265_70%_70%)]", tagColor: "bg-white/25 text-white" },
  ],
  Thursday: [
    { time: "4:00 PM", title: "Band Rehearsal", tag: "Extracurriculars", color: "bg-[hsl(175_60%_55%)]", tagColor: "bg-white/25 text-white" },
  ],
  Friday: [
    { time: "11:00 AM", title: "History Presentation", tag: "Google Classroom", color: "bg-[hsl(8_85%_62%)]", tagColor: "bg-white/25 text-white" },
    { time: "5:30 PM", title: "Soccer Game", tag: "Athletics Portal", color: "bg-[hsl(150_55%_55%)]", tagColor: "bg-white/25 text-white" },
  ],
};

const tabs = [
  { key: "calendar", label: "Calendar", Icon: Calendar },
  { key: "tasks", label: "Tasks", Icon: CheckSquare },
  { key: "academics", label: "Academics", Icon: GraduationCap },
  { key: "sports", label: "Sports", Icon: Trophy },
  { key: "more", label: "More", Icon: Menu },
];

const AppPreview = () => {
  const [activeDay, setActiveDay] = useState("Tuesday");
  const [activeTab, setActiveTab] = useState("calendar");

  return (
    <div className="min-h-screen bg-gradient-soft py-6 md:py-12">
      <div className="container max-w-md">
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to site
        </Link>

        {/* Phone frame */}
        <div className="relative mx-auto overflow-hidden rounded-[2.5rem] bg-card shadow-dramatic ring-1 ring-border">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 pt-6 pb-3">
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-display text-xl font-extrabold tracking-tight">Align</span>
            </div>
            <div className="flex items-center gap-2 text-right">
              <div className="text-[11px] leading-tight text-muted-foreground">
                Welcome, <span className="font-semibold text-foreground">Alex Rivera</span>
                <div>Lincoln High</div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-xs font-bold text-white">
                AR
              </div>
            </div>
          </div>

          {/* AI banner */}
          <div className="mx-5 flex items-center gap-2 rounded-2xl border border-border bg-muted/60 px-3 py-2 text-xs font-medium text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>AI merged 7 apps automatically · No manual entry needed</span>
          </div>

          {/* Header */}
          <div className="px-5 pt-5">
            <h1 className="font-display text-3xl font-extrabold leading-tight">Your AI Synced Week</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Events, classes, sports & tests pulled from all your apps
            </p>
          </div>

          {/* Day tabs */}
          <div className="mt-5 border-y border-border">
            <div className="flex overflow-x-auto px-3">
              {days.map((d) => {
                const active = d === activeDay;
                return (
                  <button
                    key={d}
                    onClick={() => setActiveDay(d)}
                    className={`relative flex-1 whitespace-nowrap px-3 py-3 text-sm font-semibold transition-colors ${
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {d}
                    {active && (
                      <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Events */}
          <div className="space-y-3 px-5 py-5 min-h-[360px]">
            {(schedule[activeDay] ?? []).map((e, i) => (
              <div
                key={i}
                className={`rounded-2xl ${e.color} p-3.5 text-white shadow-soft`}
              >
                <div className="text-xs font-semibold opacity-90">{e.time}</div>
                <div className="text-base font-bold leading-tight">{e.title}</div>
                <div className={`mt-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold ${e.tagColor}`}>
                  {e.tag}
                </div>
              </div>
            ))}
            {(schedule[activeDay] ?? []).length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                Nothing scheduled — enjoy the breather! ✨
              </div>
            )}
          </div>

          {/* Bottom nav */}
          <div className="sticky bottom-0 grid grid-cols-5 border-t border-border bg-card/95 backdrop-blur">
            {tabs.map(({ key, label, Icon }) => {
              const active = key === activeTab;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex flex-col items-center gap-1 py-3 text-[11px] font-semibold transition-colors ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          This is a sample preview of the Align app.
        </p>
      </div>
    </div>
  );
};

export default AppPreview;
