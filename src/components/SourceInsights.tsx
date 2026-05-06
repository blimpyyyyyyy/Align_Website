import { useState } from "react";
import { ChevronDown, Sparkles, BookOpen, Bell, Mail, GraduationCap, Calendar as CalendarIcon, RefreshCw } from "lucide-react";

type Item = { title: string; tag: "High Priority" | "Suggested" | "Informational" };
type Source = {
  name: string;
  Icon: typeof BookOpen;
  color: string;
  added: Item[];
  potential: Item[];
};

const sources: Source[] = [
  {
    name: "Canvas",
    Icon: BookOpen,
    color: "bg-[hsl(8_85%_62%)]",
    added: [
      { title: "Chemistry Test — Friday", tag: "High Priority" },
      { title: "English Essay Due Mon", tag: "High Priority" },
    ],
    potential: [
      { title: "Discussion Post Suggestion", tag: "Suggested" },
      { title: "Optional Lab Review", tag: "Informational" },
    ],
  },
  {
    name: "RenWeb",
    Icon: RefreshCw,
    color: "bg-[hsl(150_55%_55%)]",
    added: [{ title: "Basketball Practice", tag: "High Priority" }],
    potential: [{ title: "Optional Team Film Session", tag: "Suggested" }],
  },
  {
    name: "Remind",
    Icon: Bell,
    color: "bg-[hsl(48_95%_60%)]",
    added: [{ title: "Choir Rehearsal — Thu 4pm", tag: "High Priority" }],
    potential: [
      { title: "Teacher Reminder About Supplies", tag: "Informational" },
      { title: "Spirit Week Announcement", tag: "Informational" },
    ],
  },
  {
    name: "Gmail",
    Icon: Mail,
    color: "bg-[hsl(0_75%_60%)]",
    added: [{ title: "Counselor Meeting — Wed", tag: "High Priority" }],
    potential: [{ title: "Club Newsletter", tag: "Informational" }],
  },
  {
    name: "Google Classroom",
    Icon: GraduationCap,
    color: "bg-[hsl(220_85%_62%)]",
    added: [{ title: "History Presentation — Fri", tag: "High Priority" }],
    potential: [{ title: "Optional Club Meeting", tag: "Suggested" }],
  },
  {
    name: "Outlook Calendar",
    Icon: CalendarIcon,
    color: "bg-[hsl(210_80%_55%)]",
    added: [{ title: "Parent-Teacher Conference", tag: "High Priority" }],
    potential: [{ title: "School Open House (RSVP)", tag: "Suggested" }],
  },
];

const tagStyles: Record<Item["tag"], string> = {
  "High Priority": "bg-primary/10 text-primary border-primary/20",
  Suggested: "bg-purple/10 text-purple border-purple/20",
  Informational: "bg-muted text-muted-foreground border-border",
};

export const SourceInsights = () => {
  const [open, setOpen] = useState(false);
  const [openSource, setOpenSource] = useState<string | null>(null);

  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-muted/40"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-soft text-primary">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">AI Source Review</div>
            <div className="text-[11px] text-muted-foreground">See what Align pulled — and why</div>
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1.5 border-t border-border bg-background/40 p-3">
            {sources.map(({ name, Icon, color, added, potential }) => {
              const isOpen = openSource === name;
              return (
                <div key={name} className="overflow-hidden rounded-xl border border-border bg-card">
                  <button
                    onClick={() => setOpenSource(isOpen ? null : name)}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-left transition-colors hover:bg-muted/40"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-md ${color} text-white`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{name}</span>
                      <span className="text-[10px] font-semibold text-muted-foreground">
                        {added.length + potential.length} items
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-3 border-t border-border px-3 py-3">
                        <Section label="Added to Calendar" items={added} />
                        <Section label="Potentially Relevant" items={potential} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <p className="px-1 pt-1 text-[10px] leading-relaxed text-muted-foreground">
              Align's AI reviews each source and only adds high-confidence items to your calendar. Everything else stays here for transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ label, items }: { label: string; items: Item[] }) => (
  <div>
    <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
    <div className="space-y-1">
      {items.map((it, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-background px-2.5 py-1.5"
        >
          <span className="truncate text-xs font-medium text-foreground">{it.title}</span>
          <span className={`shrink-0 rounded-md border px-1.5 py-0.5 text-[9px] font-bold ${tagStyles[it.tag]}`}>
            {it.tag}
          </span>
        </div>
      ))}
    </div>
  </div>
);
