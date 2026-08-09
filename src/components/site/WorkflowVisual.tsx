import {
  UserPlus,
  Sparkles,
  Database,
  Mail,
  CalendarCheck,
  Users,
  BarChart3,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const nodes: { label: string; Icon: LucideIcon; note: string }[] = [
  { label: "Lead", Icon: UserPlus, note: "Form, call or inbox" },
  { label: "AI", Icon: Sparkles, note: "Qualify & summarize" },
  { label: "CRM", Icon: Database, note: "Record created" },
  { label: "Email", Icon: Mail, note: "Instant follow-up" },
  { label: "Calendar", Icon: CalendarCheck, note: "Appointment booked" },
  { label: "Team", Icon: Users, note: "Human review" },
  { label: "Reporting", Icon: BarChart3, note: "Daily visibility" },
];

export function WorkflowVisual() {
  return (
    <div className="glass grid-faint relative overflow-hidden p-5 sm:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="relative flex items-center justify-between gap-3">
        <p className="eyebrow">Automated workflow</p>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold text-foreground/90">
          <span className="size-1.5 animate-pulse rounded-full bg-teal" />
          Live · monitored
        </span>
      </div>

      <ol className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map(({ label, Icon, note }, i) => (
          <li
            key={label}
            className="glass glass-hover flex items-center gap-3 rounded-xl p-3.5"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
              <Icon className="size-4 text-primary" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold">{label}</span>
              <span className="block truncate text-xs text-muted-foreground">{note}</span>
            </span>
            {i < nodes.length - 1 && (
              <ArrowRight
                aria-hidden
                className="ml-auto size-4 shrink-0 text-muted-foreground/50"
              />
            )}
          </li>
        ))}
      </ol>

      <div className="hairline mt-6" />
      <p className="relative mt-4 text-xs text-muted-foreground">
        Lead → AI → CRM → Email → Calendar → Team → Reporting
      </p>
    </div>
  );
}