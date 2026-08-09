import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies } from "@/components/site/content";

const title = "Example Automation Scenarios | Northlane AI";
const description = "Demonstration examples showing how AI workflows are applied in healthcare, accounting and real estate operations.";

export const Route = createFileRoute("/case-studies")({
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
      <p className="eyebrow">Examples</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Illustrative automation scenarios.</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">The scenarios below are demonstration examples created to explain our approach. They are not real client results.</p>
      <div className="mt-12 grid gap-5">
        {caseStudies.map((c) => (
          <article key={c.industry} className="glass glass-hover p-7">
            <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-[0.7rem] font-bold uppercase">Example</span>
            <h2 className="mt-4 text-xl">{c.industry}</h2>
            <p className="mt-3 text-sm text-muted-foreground"><span className="text-foreground/90">Problem:</span> {c.problem}</p>
            <p className="mt-2 text-sm text-muted-foreground"><span className="text-foreground/90">Solution:</span> {c.solution}</p>
            <dl className="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-3">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-display text-lg font-semibold text-brand-gradient">{m.value}</dd>
                  <dt className="text-xs text-muted-foreground">{m.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[0.7rem] text-muted-foreground">Illustrative figures for demonstration only.</p>
          </article>
        ))}
      </div>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
