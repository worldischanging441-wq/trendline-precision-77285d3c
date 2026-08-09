import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/components/site/content";

const title = "What We Automate — AI Services | Northlane AI";
const description = "AI lead management, customer support, voice agents, workflow automation, document processing, AI agents, knowledge assistants and operations optimization.";

export const Route = createFileRoute("/services")({
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
      <p className="eyebrow">Services</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">What can we automate?</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Eight service lines that cover the repetitive administrative work inside most professional businesses. Every engagement starts with process understanding, not tooling.</p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.slug} className="glass glass-hover p-6">
            <h2 className="text-lg">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {s.examples.map((e) => (
                <li key={e} className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[0.7rem] text-muted-foreground">{e}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
