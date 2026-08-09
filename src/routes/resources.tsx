import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Resources — Automation Guides & Checklists | Northlane AI";
const description = "Practical guides on automation readiness, workflow mapping, AI governance and choosing between AI and traditional automation.";

export const Route = createFileRoute("/resources")({
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
      <p className="eyebrow">Resources</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Guides for operations leaders.</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Short, practical material we use with clients during discovery and design.</p>      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Automation readiness checklist</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Twelve questions that reveal whether a workflow is ready to automate.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Workflow mapping template</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Document a process end to end before choosing any tool.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">AI vs. traditional automation</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">When language models help, and when deterministic logic is safer.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Governance starter pack</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Approval gates, logging and monitoring expectations for AI workflows.</p>
        </li>
      </ul>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
