import { Logo } from "./CalendarMock";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "How it works", "Preview", "Pricing"] },
  { title: "Company", links: ["About", "For Schools", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
];

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-display text-xl font-extrabold tracking-tight">Align</span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            One smart calendar for every assignment, practice, and event. Built for students.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-display text-sm font-bold text-foreground">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Align. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Made with care for students everywhere.</p>
      </div>
    </div>
  </footer>
);
