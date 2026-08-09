import { createFileRoute, Link } from "@tanstack/react-router";

const title = "About — Your AI-Powered Operations Team | Northlane AI";
const description = "We are an AI operations and automation agency for small and mid-sized US businesses. We understand business process first, then build the system.";

export const Route = createFileRoute("/about")({
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
      <p className="eyebrow">About</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">We are an operations team that happens to build AI.</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">We design, build and manage AI systems that automate the work your team shouldn\u2019t have to do. Our work starts with your process, not a product demo.</p>      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Business first</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We map how work actually moves before proposing any technology.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Technical depth</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Integrations, agents, APIs, data and monitoring built to production standards.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Human oversight</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Approval steps and audit trails wherever judgement matters.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Ongoing ownership</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We keep systems healthy as your tools and team change.</p>
        </li>
      </ul>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
