import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Security Practices | Northlane AI";
const description = "How we approach access control, monitoring, data protection and human oversight when building AI automation systems.";

export const Route = createFileRoute("/security")({
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
      <p className="eyebrow">Security</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Security practices</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Automation touches core business systems, so access and oversight are designed before delivery. Details for your engagement are documented during design.</p>      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Least-privilege access</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Integrations are scoped to the minimum permissions required.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Monitoring & alerting</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Workflow health is monitored, with failures alerting a human.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Auditability</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Automated steps are logged so actions can be reviewed.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Data protection</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Encrypted transport, limited data movement and documented retention.</p>
        </li>
      </ul>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
