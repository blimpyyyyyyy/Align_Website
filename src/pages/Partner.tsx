import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/CalendarMock";
import { toast } from "@/hooks/use-toast";

const Partner = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    schoolName: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    studentCount: "",
    interests: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Submission received!",
      description: "Our partnerships team will reach out within 2 business days.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-10 md:py-16">
      <div className="container max-w-2xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to site
        </Link>

        <div className="mb-8 flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <span className="font-display text-2xl font-extrabold tracking-tight">Align</span>
        </div>

        {submitted ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-dramatic">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="font-display text-3xl font-extrabold tracking-tight">Thanks, {form.schoolName}!</h1>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Your partnership request has been received. The Align team will be in touch within 2 business days to discuss next steps.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="hero" size="lg" onClick={() => navigate("/")}>
                Back to home
              </Button>
              <Button variant="outline" size="lg" onClick={() => { setSubmitted(false); setForm({ schoolName: "", state: "", city: "", address: "", zip: "", studentCount: "", interests: "" }); }}>
                Submit another
              </Button>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-card p-8 shadow-dramatic md:p-10">
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-hero text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold tracking-tight">Partner with Align</h1>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Tell us about your school and we'll reach out to discuss how Align can help your students stay organized.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  School Name
                </label>
                <input
                  required
                  value={form.schoolName}
                  onChange={update("schoolName")}
                  placeholder="Lincoln High School"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    State
                  </label>
                  <input
                    required
                    value={form.state}
                    onChange={update("state")}
                    placeholder="California"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    City
                  </label>
                  <input
                    required
                    value={form.city}
                    onChange={update("city")}
                    placeholder="San Francisco"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Street Address
                  </label>
                  <input
                    required
                    value={form.address}
                    onChange={update("address")}
                    placeholder="2162 24th Ave"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    ZIP Code
                  </label>
                  <input
                    required
                    value={form.zip}
                    onChange={update("zip")}
                    placeholder="94116"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Approximate Student Count
                </label>
                <input
                  required
                  type="number"
                  min={1}
                  value={form.studentCount}
                  onChange={update("studentCount")}
                  placeholder="1200"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  What are you most interested in?
                </label>
                <textarea
                  required
                  value={form.interests}
                  onChange={update("interests")}
                  rows={5}
                  placeholder="Tell us about your goals — reducing missed assignments, integrating with Canvas, district-wide rollout, etc."
                  className="w-full resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Submit Partnership Request <Send className="h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We typically respond within 2 business days.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partner;
