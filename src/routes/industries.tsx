import { createFileRoute, Link } from "@tanstack/react-router";
import { industries } from "@/components/site/content";

const title = "Industries We Serve — AI Automation | Northlane AI";
const description = "AI operations for healthcare, optometry, ophthalmology, dental, legal, accounting, real estate and professional service businesses.";

export const Route = createFileRoute("/industries")({
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
      <p className="eyebrow">Industries</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Built for the way your business works.</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Workflows differ by industry. We design around how your team already operates, the software you already pay for and the rules you already follow.</p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {industries.map((i) => (
          <li key={i.name} className="glass glass-hover p-6">
            <h2 className="text-lg">{i.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
          </li>
        ))}
      </ul>
      <Link to="/healthcare" className="btn-ghost-lux mt-10">Explore Healthcare Automation</Link>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
