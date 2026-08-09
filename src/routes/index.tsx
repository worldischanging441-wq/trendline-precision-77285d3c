import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { WorkflowVisual } from "@/components/site/WorkflowVisual";
import { RoiCalculator } from "@/components/site/RoiCalculator";
import {
  services,
  steps,
  industries,
  plans,
  caseStudies,
  techStack,
  trustPillars,
  faqs,
} from "@/components/site/content";

const title = "AI Operations & Automation Agency for US Businesses | Northlane AI";
const description =
  "We design, build and manage AI-powered workflows that help businesses save time, respond faster and operate more efficiently. Book a free automation audit.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return <C className={className} />;
}

function SectionHead({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl">{heading}</h2>
      {body && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p>}
    </Reveal>
  );
}

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="grid-faint pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold">
              <Sparkles className="size-3.5 text-primary" />
              Your AI-powered operations team
            </span>
            <h1 className="mt-6 text-4xl leading-[1.06] sm:text-5xl lg:text-[3.4rem]">
              Turn repetitive work into{" "}
              <span className="text-brand-gradient">automated operations.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We design, build and manage AI-powered workflows that help businesses save time,
              respond faster, and operate more efficiently.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-brand">
                Book a Free Automation Audit
                <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="btn-ghost-lux">
                See What We Automate
              </Link>
            </div>
            <p className="mt-8 text-xs tracking-wide text-muted-foreground">
              AI automation • AI agents • Workflow design • Integration • Ongoing optimization
            </p>
          </Reveal>

          <Reveal delay={120}>
            <WorkflowVisual />
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHead
          eyebrow="Services"
          heading="What can we automate?"
          body="We understand the process first, then decide where AI, APIs and traditional automation belong."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50} as="article" className="glass glass-hover p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/12 ring-1 ring-primary/30">
                <Icon name={s.icon} className="size-5 text-primary" />
              </span>
              <h3 className="mt-5 text-lg">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {s.examples.map((e) => (
                  <li
                    key={e}
                    className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[0.7rem] text-muted-foreground"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-ink/70">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHead
            eyebrow="How it works"
            heading="A process built for operations, not experiments."
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.number} delay={i * 70} as="li" className="glass glass-hover p-6">
                <span className="font-display text-4xl font-semibold text-primary/35">
                  {s.number}
                </span>
                <h3 className="mt-3 text-lg">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHead
          eyebrow="Industries"
          heading="Built for the way your business works."
          body="Workflows differ by industry. We design around how your team already operates."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 40} className="glass glass-hover p-5">
              <h3 className="text-base">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="glass mt-8 grid gap-8 border-primary/25 p-7 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Featured</p>
            <h3 className="mt-3 text-2xl sm:text-3xl">AI Operations for Healthcare Practices</h3>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Healthcare automation has to be designed differently. Every workflow we build for a
              practice prioritizes security, patient privacy, appropriate human oversight and the
              regulatory requirements that apply to your organization. We define what may be
              automated and what stays with staff before anything goes live.
            </p>
            <Link to="/healthcare" className="btn-brand mt-7">
              Explore Healthcare Automation
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="grid content-start gap-3">
            {["Privacy-first design", "Human oversight on clinical touchpoints", "Access controls & audit trails", "Documented data handling"].map(
              (item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-teal" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-y border-border bg-ink/70">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHead
            eyebrow="Pricing"
            heading="Simple retainers, scoped to your workflows."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 60}
                className={`glass glass-hover relative flex flex-col p-7 ${
                  p.popular ? "border-primary/45 shadow-[var(--shadow-brand)]" : ""
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[var(--gradient-brand)] px-3 py-1 text-[0.7rem] font-bold text-ink">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.for}</p>
                <p className="mt-6 font-display text-4xl font-semibold">
                  {p.price}
                  <span className="text-base font-normal text-muted-foreground">{p.cadence}</span>
                </p>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Link
                    to="/contact"
                    className={p.popular ? "btn-brand w-full" : "btn-ghost-lux w-full"}
                  >
                    {p.cta}
                  </Link>
                  <p className="mt-3 text-center text-xs text-muted-foreground">{p.offer}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Pricing depends on workflow complexity, integrations and usage.
          </p>
        </div>
      </section>

      {/* ROI */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHead
          eyebrow="ROI"
          heading="Don't buy AI. Buy better operations."
          body="Estimate the operational value sitting inside your repetitive work today."
        />
        <div className="mt-12">
          <RoiCalculator />
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-y border-border bg-ink/70">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHead
            eyebrow="Examples"
            heading="Illustrative automation scenarios."
            body="The scenarios below are demonstration examples, not real client results."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.industry} delay={i * 60} as="article" className="glass glass-hover p-7">
                <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-[0.7rem] font-bold tracking-wide uppercase">
                  Example
                </span>
                <h3 className="mt-4 text-lg">{c.industry}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="text-foreground/90">Problem:</span> {c.problem}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="text-foreground/90">Solution:</span> {c.solution}
                </p>
                <dl className="mt-5 space-y-3 border-t border-border pt-5">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="flex items-baseline justify-between gap-3">
                      <dt className="text-xs text-muted-foreground">{m.label}</dt>
                      <dd className="font-display text-base font-semibold text-brand-gradient">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[0.7rem] text-muted-foreground">
                  Illustrative figures for demonstration only.
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHead
          eyebrow="Technology"
          heading="We choose the stack that fits your business."
          body="We are not a reseller for one platform. Tooling is selected per client, based on your systems, budget and compliance needs."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 50} className="glass glass-hover p-6">
              <p className="eyebrow">{group.category}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary/60 px-2.5 py-1.5 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-ink/70">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHead
            eyebrow="Governance"
            heading="Automation with humans in control."
            body="We don't believe every business decision should be delegated to AI. We design systems with appropriate rules, permissions, monitoring and human approval where necessary."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 40} className="glass glass-hover p-5">
                <ShieldCheck className="size-5 text-teal" />
                <h3 className="mt-4 text-base">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHead eyebrow="FAQ" heading="Questions business owners ask us." />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-border bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Find out what your business could automate.</h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Book a free 30-minute automation audit. We'll identify repetitive workflows, estimate
              the opportunity and recommend where AI can actually create value.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-brand">
                Book My Free Automation Audit
                <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="btn-ghost-lux">
                See Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
