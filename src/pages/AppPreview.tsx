import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  CheckSquare,
  GraduationCap,
  Trophy,
  Menu,
  Sparkles,
  ArrowLeft,
  Plus,
  User,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  Shield,
  Moon,
  ChevronRight,
  X,
} from "lucide-react";
import { Logo } from "@/components/CalendarMock";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

type Event = {
  day: string;
  time: string;
  title: string;
  tag: string;
  color: string;
  tagColor: string;
};

const initialEvents: Event[] = [
  { day: "Monday", time: "8:30 AM", title: "Homeroom", tag: "Synced from School LMS", color: "bg-[hsl(220_85%_62%)]", tagColor: "bg-white/25 text-white" },
  { day: "Monday", time: "12:30 PM", title: "Debate Club Meeting", tag: "Events App", color: "bg-[hsl(48_95%_60%)]", tagColor: "bg-white/30 text-foreground" },
  { day: "Monday", time: "2:00 PM", title: "English Essay Due", tag: "Academics", color: "bg-[hsl(45_95%_72%)]", tagColor: "bg-white/40 text-foreground" },
  { day: "Tuesday", time: "10:15 AM", title: "Biology Test", tag: "Auto-pulled from Teacher App", color: "bg-[hsl(8_85%_62%)]", tagColor: "bg-white/25 text-white" },
  { day: "Tuesday", time: "3:00 PM", title: "Varsity Soccer Practice", tag: "Athletics Portal", color: "bg-[hsl(150_55%_55%)]", tagColor: "bg-white/25 text-white" },
  { day: "Wednesday", time: "9:00 AM", title: "Calc Quiz", tag: "Canvas", color: "bg-[hsl(185_72%_50%)]", tagColor: "bg-white/25 text-white" },
  { day: "Wednesday", time: "1:00 PM", title: "Study Group", tag: "Peers", color: "bg-[hsl(265_70%_70%)]", tagColor: "bg-white/25 text-white" },
  { day: "Thursday", time: "4:00 PM", title: "Band Rehearsal", tag: "Extracurriculars", color: "bg-[hsl(175_60%_55%)]", tagColor: "bg-white/25 text-white" },
  { day: "Friday", time: "11:00 AM", title: "History Presentation", tag: "Google Classroom", color: "bg-[hsl(8_85%_62%)]", tagColor: "bg-white/25 text-white" },
  { day: "Friday", time: "5:30 PM", title: "Soccer Game", tag: "Athletics Portal", color: "bg-[hsl(150_55%_55%)]", tagColor: "bg-white/25 text-white" },
];

const classes = [
  { name: "AP English Literature", teacher: "Ms. Carter", room: "Rm 204", color: "bg-[hsl(45_95%_72%)]" },
  { name: "AP Biology", teacher: "Dr. Nguyen", room: "Rm 118", color: "bg-[hsl(8_85%_62%)]" },
  { name: "AP Calculus BC", teacher: "Mr. Patel", room: "Rm 312", color: "bg-[hsl(185_72%_50%)]" },
  { name: "US History", teacher: "Mrs. Johnson", room: "Rm 207", color: "bg-[hsl(265_70%_70%)]" },
  { name: "Spanish III", teacher: "Sra. Lopez", room: "Rm 110", color: "bg-[hsl(220_85%_62%)]" },
  { name: "Concert Band", teacher: "Mr. Davis", room: "Music Hall", color: "bg-[hsl(175_60%_55%)]" },
  { name: "Computer Science", teacher: "Ms. Kim", room: "Lab B", color: "bg-[hsl(150_55%_55%)]" },
];

const sports = [
  { name: "Varsity Soccer", role: "Midfielder · #11", season: "Fall Season", next: "Practice Tue 3:00 PM", color: "bg-[hsl(150_55%_55%)]" },
  { name: "Track & Field", role: "Sprinter — 200m", season: "Spring Season", next: "Tryouts Mar 12", color: "bg-[hsl(8_85%_62%)]" },
  { name: "Intramural Basketball", role: "Forward", season: "Winter Season", next: "Pickup Fri 6:00 PM", color: "bg-[hsl(48_95%_60%)]" },
];

const moreOptions = [
  { label: "Profile", Icon: User },
  { label: "Settings", Icon: Settings },
  { label: "Notifications", Icon: Bell },
  { label: "Privacy", Icon: Shield },
  { label: "Appearance", Icon: Moon },
  { label: "Help & Support", Icon: HelpCircle },
  { label: "Sign Out", Icon: LogOut },
];

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
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [showAdd, setShowAdd] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDay, setNewDay] = useState("Monday");
  const [newTime, setNewTime] = useState("");

  const addEvent = () => {
    if (!newTitle.trim() || !newTime.trim()) return;
    setEvents((prev) => [
      ...prev,
      {
        day: newDay,
        time: newTime,
        title: newTitle,
        tag: "Added by you",
        color: "bg-[hsl(265_70%_70%)]",
        tagColor: "bg-white/25 text-white",
      },
    ]);
    setNewTitle("");
    setNewTime("");
    setShowAdd(false);
  };

  const renderHeader = () => {
    switch (activeTab) {
      case "tasks":
        return { title: "Your Tasks", sub: "All your synced events in one running list" };
      case "academics":
        return { title: "Academics", sub: "Your enrolled classes this semester" };
      case "sports":
        return { title: "Sports", sub: "Teams and activities you're part of" };
      case "more":
        return { title: "More", sub: "Account, preferences and support" };
      default:
        return { title: "Your AI Synced Week", sub: "Events, classes, sports & tests pulled from all your apps" };
    }
  };

  const header = renderHeader();

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

          {/* AI banner (only on calendar/tasks) */}
          {(activeTab === "calendar" || activeTab === "tasks") && (
            <div className="mx-5 flex items-center gap-2 rounded-2xl border border-border bg-muted/60 px-3 py-2 text-xs font-medium text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>AI merged 7 apps automatically · No manual entry needed</span>
            </div>
          )}

          {/* Header */}
          <div className="px-5 pt-5">
            <h1 className="font-display text-3xl font-extrabold leading-tight">{header.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{header.sub}</p>
          </div>

          {/* CALENDAR TAB */}
          {activeTab === "calendar" && (
            <>
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

              <div className="space-y-3 px-5 py-5 min-h-[360px]">
                {events
                  .filter((e) => e.day === activeDay)
                  .map((e, i) => (
                    <div key={i} className={`rounded-2xl ${e.color} p-3.5 text-white shadow-soft`}>
                      <div className="text-xs font-semibold opacity-90">{e.time}</div>
                      <div className="text-base font-bold leading-tight">{e.title}</div>
                      <div className={`mt-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold ${e.tagColor}`}>
                        {e.tag}
                      </div>
                    </div>
                  ))}
                {events.filter((e) => e.day === activeDay).length === 0 && (
                  <div className="rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                    Nothing scheduled — enjoy the breather! ✨
                  </div>
                )}
              </div>
            </>
          )}

          {/* TASKS TAB */}
          {activeTab === "tasks" && (
            <div className="px-5 py-5 min-h-[360px]">
              <button
                onClick={() => setShowAdd(true)}
                className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-3 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01]"
              >
                <Plus className="h-4 w-4" /> Add Task
              </button>

              <div className="space-y-2">
                {days.map((d) => {
                  const dayEvents = events.filter((e) => e.day === d);
                  if (dayEvents.length === 0) return null;
                  return (
                    <div key={d}>
                      <div className="mb-1.5 mt-3 px-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {d}
                      </div>
                      <div className="space-y-1.5">
                        {dayEvents.map((e, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5"
                          >
                            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${e.color}`} />
                            <div className="min-w-0 flex-1">
                              <div className="truncate text-sm font-semibold text-foreground">{e.title}</div>
                              <div className="text-[11px] text-muted-foreground">{e.tag}</div>
                            </div>
                            <div className="text-xs font-semibold text-muted-foreground">{e.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {showAdd && (
                <div
                  className="absolute inset-0 z-10 flex items-end justify-center bg-foreground/40 backdrop-blur-sm"
                  onClick={() => setShowAdd(false)}
                >
                  <div
                    className="w-full rounded-t-3xl bg-card p-5 shadow-dramatic"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-display text-lg font-extrabold">New Task</h3>
                      <button onClick={() => setShowAdd(false)} className="text-muted-foreground hover:text-foreground">
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <input
                        autoFocus
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Task title (e.g. Math Homework)"
                        className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <select
                          value={newDay}
                          onChange={(e) => setNewDay(e.target.value)}
                          className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                        >
                          {days.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                        <input
                          value={newTime}
                          onChange={(e) => setNewTime(e.target.value)}
                          placeholder="Time (e.g. 3:00 PM)"
                          className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                        />
                      </div>
                      <button
                        onClick={addEvent}
                        className="w-full rounded-xl bg-primary px-3 py-2.5 text-sm font-bold text-primary-foreground"
                      >
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ACADEMICS TAB */}
          {activeTab === "academics" && (
            <div className="px-5 py-5 min-h-[360px] space-y-2">
              {classes.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.color} text-white`}>
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-bold text-foreground">{c.name}</div>
                    <div className="text-[11px] text-muted-foreground">{c.teacher} · {c.room}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          )}

          {/* SPORTS TAB */}
          {activeTab === "sports" && (
            <div className="px-5 py-5 min-h-[360px] space-y-3">
              {sports.map((s, i) => (
                <div key={i} className={`rounded-2xl ${s.color} p-4 text-white shadow-soft`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-base font-bold">{s.name}</div>
                      <div className="text-xs opacity-90">{s.role}</div>
                    </div>
                    <Trophy className="h-5 w-5 opacity-80" />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px]">
                    <span className="rounded-md bg-white/25 px-2 py-0.5 font-semibold">{s.season}</span>
                    <span className="font-semibold opacity-90">{s.next}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MORE TAB */}
          {activeTab === "more" && (
            <div className="px-5 py-5 min-h-[360px]">
              <div className="mb-4 flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero text-sm font-bold text-white">
                  AR
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Alex Rivera</div>
                  <div className="text-[11px] text-muted-foreground">alex.rivera@lincolnhigh.edu</div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                {moreOptions.map(({ label, Icon }, i) => (
                  <button
                    key={label}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted/60 ${
                      i !== moreOptions.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="flex-1">{label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bottom nav */}
          <div className="grid grid-cols-5 border-t border-border bg-card/95 backdrop-blur">
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
