import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Terms of Service | Northlane AI";
const description = "The terms that govern use of the Northlane AI website and the framework for automation service engagements.";

export const Route = createFileRoute("/terms")({
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
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Terms</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">These terms govern use of this website. Service engagements are governed by a separate written agreement covering scope, fees, confidentiality and responsibilities.</p>      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Website use</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Content is provided for information only and may change without notice.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">No performance promise</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Illustrative figures on this site are examples, not guaranteed outcomes.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Engagements</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Scope, fees and deliverables are defined in a signed agreement.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Contact</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Questions about these terms can be sent to hello@northlane.ai.</p>
        </li>
      </ul>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
