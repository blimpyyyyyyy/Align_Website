import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Calendar,
  CheckSquare,
  GraduationCap,
  Trophy,
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
  Search,
} from "lucide-react";
import { Logo } from "@/components/CalendarMock";
import { SourceInsights } from "@/components/SourceInsights";

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
  { key: "more", label: "Account", Icon: User },
];

const AppPreview = () => {
  const [activeDay, setActiveDay] = useState("Tuesday");
  const [activeTab, setActiveTab] = useState("calendar");
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [showAdd, setShowAdd] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDay, setNewDay] = useState("Monday");
  const [newTime, setNewTime] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [openPanel, setOpenPanel] = useState<null | "settings" | "profile" | "notifications" | "privacy" | "appearance" | "help">(null);
  const [confirmSignOut, setConfirmSignOut] = useState(false);
  const [filter, setFilter] = useState<"all" | "academics" | "sports" | "events">("all");

  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const [pushNotifs, setPushNotifs] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(false);
  const [smartReminders, setSmartReminders] = useState(true);
  const [aiSensitivity, setAiSensitivity] = useState([70]);
  const [autoSync, setAutoSync] = useState(true);
  const [connectedApps, setConnectedApps] = useState<Record<string, boolean>>({
    Canvas: true,
    RenWeb: true,
    Remind: true,
    Gmail: true,
    "Google Classroom": true,
    "Outlook Calendar": false,
  });
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Biology Test moved to Wed", time: "2m ago", read: false },
    { id: 2, title: "New assignment in AP English", time: "1h ago", read: false },
    { id: 3, title: "Soccer practice canceled", time: "3h ago", read: true },
  ]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const addEvent = () => {
    if (!newTitle.trim() || !newTime.trim()) {
      toast.error("Add a title and time first");
      return;
    }
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
    toast.success("Task added to calendar");
  };

  const removeEvent = (target: Event) => {
    setEvents((prev) => prev.filter((e) => e !== target));
    toast("Event removed");
  };

  const toggleApp = (name: string) => {
    setConnectedApps((prev) => {
      const next = { ...prev, [name]: !prev[name] };
      toast(next[name] ? `Connected ${name}` : `Disconnected ${name}`);
      return next;
    });
  };

  const markAllRead = () => {
    setNotifications((p) => p.map((n) => ({ ...n, read: true })));
    toast.success("All notifications marked as read");
  };

  const handleMoreAction = (label: string) => {
    switch (label) {
      case "Profile": setOpenPanel("profile"); break;
      case "Settings": setOpenPanel("settings"); break;
      case "Notifications": setOpenPanel("notifications"); break;
      case "Privacy": setOpenPanel("privacy"); break;
      case "Appearance": setOpenPanel("appearance"); break;
      case "Help & Support": setOpenPanel("help"); break;
      case "Sign Out": setConfirmSignOut(true); break;
    }
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
        return { title: "Account", sub: "Profile, preferences and support" };
      default:
        return { title: "Your AI Synced Week", sub: "Events, classes, sports & tests pulled from all your apps" };
    }
  };

  const header = renderHeader();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-soft animate-fade-in">
      {/* App top bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/80 backdrop-blur-xl">
        <div className="flex h-16 items-center gap-3 px-4 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-sm font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-x-0.5"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Home</span>
          </Link>
          <div className="hidden md:block h-6 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-display text-xl font-extrabold tracking-tight">Align</span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm focus-within:border-primary transition-colors w-72">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, classes, tasks…"
                className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
              />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all active:scale-95"
                  aria-label="Notifications"
                >
                  <Bell className="h-4 w-4" />
                  {unreadCount > 0 && (
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary ring-2 ring-card" />
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-80 p-0">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <div className="text-sm font-bold">Notifications</div>
                  <button onClick={markAllRead} className="text-[11px] font-semibold text-primary hover:underline">
                    Mark all read
                  </button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((n) => (
                    <button
                      key={n.id}
                      onClick={() =>
                        setNotifications((p) => p.map((x) => (x.id === n.id ? { ...x, read: true } : x)))
                      }
                      className="flex w-full items-start gap-3 border-b border-border px-4 py-3 text-left hover:bg-muted/40 transition-colors"
                    >
                      <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${n.read ? "bg-muted-foreground/30" : "bg-primary"}`} />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-foreground">{n.title}</div>
                        <div className="text-[10px] text-muted-foreground">{n.time}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <button
              onClick={() => setOpenPanel("profile")}
              className="flex items-center gap-2.5 rounded-full p-1 pl-2.5 hover:bg-muted/60 transition-colors"
            >
              <div className="hidden sm:block text-right text-[11px] leading-tight">
                <div className="font-semibold text-foreground">Alex Rivera</div>
                <div className="text-muted-foreground">Lincoln High</div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-xs font-bold text-white">
                AR
              </div>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:flex w-60 shrink-0 flex-col gap-1 border-r border-border bg-card/40 p-4 min-h-[calc(100vh-4rem)] sticky top-16">
          {tabs.map(({ key, label, Icon }) => {
            const active = key === activeTab;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
          <div className="mt-auto rounded-xl border border-border bg-background p-3">
            <div className="flex items-center gap-2 text-xs font-bold text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> AI Sync Active
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground">
              7 sources connected · last synced 2m ago
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 py-6 md:px-8 md:py-8 animate-fade-in">
          {/* Page header */}
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-extrabold leading-tight">{header.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{header.sub}</p>
            </div>
            {(activeTab === "calendar" || activeTab === "tasks") && (
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                AI merged 7 apps automatically
              </div>
            )}
          </div>

          {/* CALENDAR TAB */}
          {activeTab === "calendar" && (
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="flex overflow-x-auto border-b border-border">
                  {days.map((d) => {
                    const active = d === activeDay;
                    return (
                      <button
                        key={d}
                        onClick={() => setActiveDay(d)}
                        className={`relative flex-1 min-w-[110px] whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors ${
                          active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {d}
                        {active && (
                          <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-primary" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="grid gap-3 p-5 md:grid-cols-2 xl:grid-cols-3 min-h-[280px]">
                  {events
                    .filter((e) => e.day === activeDay)
                    .map((e, i) => (
                      <div key={i} className={`rounded-2xl ${e.color} p-4 text-white shadow-soft`}>
                        <div className="text-xs font-semibold opacity-90">{e.time}</div>
                        <div className="text-base font-bold leading-tight">{e.title}</div>
                        <div className={`mt-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold ${e.tagColor}`}>
                          {e.tag}
                        </div>
                      </div>
                    ))}
                  {events.filter((e) => e.day === activeDay).length === 0 && (
                    <div className="md:col-span-2 xl:col-span-3 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
                      Nothing scheduled — enjoy the breather! ✨
                    </div>
                  )}
                </div>
              </div>

              <SourceInsights />
            </div>
          )}

          {/* TASKS TAB */}
          {activeTab === "tasks" && (
            <div className="relative max-w-3xl">
              <button
                onClick={() => setShowAdd(true)}
                className="mb-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01]"
              >
                <Plus className="h-4 w-4" /> Add Task
              </button>

              <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                {days.map((d) => {
                  const dayEvents = events.filter((e) => e.day === d);
                  if (dayEvents.length === 0) return null;
                  return (
                    <div key={d} className="mb-4 last:mb-0">
                      <div className="mb-2 px-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {d}
                      </div>
                      <div className="space-y-1.5">
                        {dayEvents.map((e, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5 hover:border-primary/40 transition-colors"
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
                  className="fixed inset-0 z-40 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4 animate-fade-in"
                  onClick={() => setShowAdd(false)}
                >
                  <div
                    className="w-full max-w-md rounded-2xl bg-card p-6 shadow-dramatic"
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
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {classes.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft hover:border-primary/40 transition-colors"
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
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sports.map((s, i) => (
                <div key={i} className={`rounded-2xl ${s.color} p-5 text-white shadow-soft`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-base font-bold">{s.name}</div>
                      <div className="text-xs opacity-90">{s.role}</div>
                    </div>
                    <Trophy className="h-5 w-5 opacity-80" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[11px]">
                    <span className="rounded-md bg-white/25 px-2 py-0.5 font-semibold">{s.season}</span>
                    <span className="font-semibold opacity-90">{s.next}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MORE / ACCOUNT TAB */}
          {activeTab === "more" && (
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero text-sm font-bold text-white">
                  AR
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Alex Rivera</div>
                  <div className="text-[11px] text-muted-foreground">alex.rivera@lincolnhigh.edu</div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
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
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden sticky bottom-0 z-30 grid grid-cols-5 border-t border-border bg-card/95 backdrop-blur">
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
      </nav>
    </div>
  );
};

export default AppPreview;
