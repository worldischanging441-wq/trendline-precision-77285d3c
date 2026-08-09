import { createFileRoute, Link } from "@tanstack/react-router";

const title = "AI Operations for Healthcare Practices | Northlane AI";
const description = "Healthcare automation designed around security, patient privacy, human oversight and regulatory requirements for practices across the US.";

export const Route = createFileRoute("/healthcare")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
      <p className="eyebrow">Healthcare</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">AI Operations for Healthcare Practices</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Healthcare automation must prioritize security, privacy, appropriate human oversight and regulatory requirements. We scope what may be automated and what stays with staff before anything is built.</p>      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Patient communication</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Reminders, recalls, confirmations and no-show recovery with staff-approved messaging.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Front-desk relief</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Voice agents answer, book and reschedule while routing anything clinical to your team.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Intake & documents</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Forms and referrals classified, extracted and filed into your practice systems.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Oversight by design</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Access controls, audit trails, monitoring and documented data handling on every workflow.</p>
        </li>
      </ul>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
