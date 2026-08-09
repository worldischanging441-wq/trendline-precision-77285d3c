import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Book a Free Automation Audit | Northlane AI";
const description = "Book a free 30-minute automation audit. We identify repetitive workflows, estimate the opportunity and recommend where AI can create value.";

export const Route = createFileRoute("/contact")({
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
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Book your free automation audit.</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">A focused 30-minute call. We\u2019ll identify repetitive workflows, estimate the opportunity and recommend where AI can actually create value.</p>
      <div className="glass mt-12 p-7 sm:p-9">
        <h2 className="text-xl">What to expect</h2>
        <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
          <li>1. A walkthrough of your current workflows and bottlenecks.</li>
          <li>2. An honest view of what should and should not be automated.</li>
          <li>3. A recommended first workflow, with scope and pricing.</li>
        </ul>
        <div className="hairline my-8" />
        <p className="text-sm text-muted-foreground">Prefer email? Reach us at</p>
        <a href="mailto:hello@northlane.ai" className="font-display text-lg font-semibold text-brand-gradient">hello@northlane.ai</a>
      </div>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
