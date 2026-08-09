import { createFileRoute, Link } from "@tanstack/react-router";
import { plans } from "@/components/site/content";

const title = "Pricing — AI Automation Retainers | Northlane AI";
const description = "Starter at $499/month, Growth at $1,499/month and Operations from $3,500/month. Pricing depends on workflow complexity, integrations and usage.";

export const Route = createFileRoute("/pricing")({
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
      <p className="eyebrow">Pricing</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Simple retainers, scoped to your workflows.</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Every plan includes monitoring and ongoing optimization. Pricing depends on workflow complexity, integrations and usage.</p>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`glass glass-hover relative flex flex-col p-7 ${p.popular ? "border-primary/45" : ""}`}>
            {p.popular && (
              <span className="absolute -top-3 left-7 rounded-full bg-[var(--gradient-brand)] px-3 py-1 text-[0.7rem] font-bold text-ink">Most Popular</span>
            )}
            <h2 className="text-xl">{p.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.for}</p>
            <p className="mt-6 font-display text-4xl font-semibold">
              {p.price}<span className="text-base font-normal text-muted-foreground">{p.cadence}</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">{p.offer}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-muted-foreground">Pricing depends on workflow complexity, integrations and usage.</p>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
