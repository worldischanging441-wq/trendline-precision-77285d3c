import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  LineChart,
  NotebookPen,
  ShieldCheck,
  Star,
  Target,
} from "lucide-react";

import heroBooks from "@/assets/hero-books.png";
import insideSpread from "@/assets/inside-spread.jpg";
import toolkit from "@/assets/toolkit.png";
import bookFloat from "@/assets/book-float.png";
import { ChartBackdrop } from "@/components/site/Chart";
import { chapters, faqs, testimonials } from "@/components/site/data";
import shot1 from "@/assets/reader-01-before.jpg";
reader-01-after.jpg
import shot3 from "@/assets/student-6032595525506371666.jpg.asset.json";
import shot4 from "@/assets/student-6032595525506371665.jpg.asset.json";
import shot5 from "@/assets/student-6032595525506371663.jpg.asset.json";
import shot6 from "@/assets/student-6032595525506371662.jpg.asset.json";

type Shot = { label?: string; src: string; alt: string };

const readerCases: { title: string; note: string; shots: Shot[] }[] = [
  {
    title: "Reader 01",
    note: "Journal calendar before and after applying the process",
    shots: [
      { label: "Before", src: shot1.url, alt: "Reader trading journal calendar before applying the system" },
      { label: "After", src: shot2.url, alt: "Reader trading journal calendar after applying the system" },
    ],
  },
  {
    title: "Reader 02",
    note: "Daily P&L calendar shared after study",
    shots: [{ src: shot3.url, alt: "Reader daily profit and loss calendar" }],
  },
  {
    title: "Reader 03",
    note: "Trade history reviewed with the checklist",
    shots: [{ src: shot4.url, alt: "Reader trade history positions list" }],
  },
  {
    title: "Reader 04",
    note: "Trade history before and after structured entries",
    shots: [
      { label: "Before", src: shot5.url, alt: "Reader trade history before applying the system" },
      { label: "After", src: shot6.url, alt: "Reader trade history after applying the system" },
    ],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trendline Precision — Professional Price Action Trading Book" },
      {
        name: "description",
        content:
          "Master price action, trendlines, market structure and disciplined execution with one complete professional trading system. 18 chapters, $55.",
      },
      { property: "og:title", content: "Trendline Precision — Read The Market, Don't Guess It" },
      {
        property: "og:description",
        content:
          "A premium 18-chapter trading education book on trendlines, market structure, risk and process. $55.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({
  eyebrow,
  title,
  lead,
  center = true,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {lead ? <p className="mt-5 text-base text-muted-foreground">{lead}</p> : null}
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <LineChart className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="truncate font-display text-lg tracking-wide">
              Trendline <span className="text-gold-gradient">Precision</span>
            </span>
          </div>
          <a href="https://buy.stripe.com/eVq6oA2hHfvH8Yjeo1cZa01" className="btn-gold !px-5 !py-3">
            Buy — $55
          </a>
        </div>
      </header>

      {/* SECTION 1 — HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 grid-chart opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full text-gold opacity-25">
          <ChartBackdrop className="h-full w-full" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="relative">
            <div className="absolute inset-6 -z-10 rounded-full bg-gold/10 blur-3xl" />
            <img
              src={heroBooks}
              alt="Trendline Precision hardcover and paperback books with tablet and phone editions"
              width={1408}
              height={1104}
              className="w-full drop-shadow-2xl"
            />
          </div>

          <div>
            <p className="eyebrow">Premium Trading Education · 2026 EDITION</p>
            <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Stop guessing the market.
              <br />
              <span className="text-gold-gradient">Start reading it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Master price action, trendlines, market structure, and disciplined trading through one
              complete professional trading system.
            </p>

            <div className="panel-gold mt-9 p-6 sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl">The Trendline Precision Challenge</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Study the complete system for 30 days. Complete the exercises, apply the
                    framework to your chart analysis. If you don't feel more structured and confident
                    in reading price action, request a <strong className="text-gold">full refund</strong>. No questions asked.
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-gold/50 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                  30 Days
                </span>
              </div>

              <div className="hairline my-6" />

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-xl leading-none">🛡️</span>
                <div className="min-w-0">
                  <p className="text-sm font-bold tracking-[0.16em] text-gold uppercase">
                    30-Day Satisfaction Guarantee
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Built for serious learners. Educational content, not trading performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a href="https://buy.stripe.com/eVq6oA2hHfvH8Yjeo1cZa01" className="btn-gold w-full">
                Buy the book
              </a>
              <a href="#stories" className="btn-outline-lux w-full">
                See student results
              </a>
              <a href="#learn" className="btn-outline-lux w-full">
                See what you'll learn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST BAR */}
      <section className="border-y border-border bg-ink/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 text-center sm:px-8">
          <span className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" strokeWidth={0} />
            ))}
          </span>
          {[
            "Premium Trading Education",
            "Thousands of Chart Examples",
            "Structured Learning",
            "Built for Serious Traders",
          ].map((t) => (
            <span
              key={t}
              className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 3 — WHY */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="The Real Problem"
          title="Why Most Traders Never Become Consistent"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Confusion",
              body: "Overcomplicated strategies. Indicators layered on indicators until the chart says nothing at all.",
            },
            {
              icon: ShieldCheck,
              title: "Poor Risk Management",
              body: "Large unnecessary losses. No defined invalidation, no position sizing rule, no ceiling on damage.",
            },
            {
              icon: Target,
              title: "No Process",
              body: "Random entries and exits. Every decision made from scratch, so nothing can ever be reviewed or improved.",
            },
          ].map((c) => (
            <article key={c.title} className="panel p-8">
              <c.icon className="size-7 text-gold" strokeWidth={1.4} />
              <h3 className="mt-6 text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-2xl leading-snug sm:text-3xl">
          Trendline Precision teaches{" "}
          <span className="text-gold-gradient">one structured process</span> from analysis to
          execution.
        </p>
      </section>

      {/* SECTION 4 — INSIDE THE BOOK */}
      <section className="border-y border-border bg-ink/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <SectionHeading
            eyebrow="Page Previews"
            title="Inside The Book"
            lead="Professional TradingView-style charts, annotated trendlines, support and resistance, exercises, reader challenges and professional tips — typeset like a textbook, not a slide deck."
          />
          <div className="mt-14 panel overflow-hidden p-3">
            <img
              src={insideSpread}
              alt="Open book spread showing annotated trendline, support and resistance chart examples"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-md"
            />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "Chapter 05",
                t: "Drawing Trendlines With Precision",
                b: "Anchor points, slope validation and the difference between a line that holds and a line you forced.",
              },
              {
                n: "Chapter 07",
                t: "Support & Resistance Zones",
                b: "Zones over lines, reaction quality, and how to grade a level before price arrives.",
              },
              {
                n: "Chapter 13",
                t: "Position Sizing & Risk",
                b: "Fixed fractional sizing, invalidation-first stops, and worked examples with exercises.",
              },
            ].map((c) => (
              <article key={c.n} className="panel p-7">
                <p className="eyebrow">{c.n}</p>
                <h3 className="mt-3 text-xl">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT YOU'LL LEARN */}
      <section id="learn" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="18 Chapters"
          title="What You'll Learn"
          lead="A linear curriculum. Each chapter builds on the last, ending with the complete execution process."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c, i) => (
            <article
              key={c}
              className="panel flex items-center gap-4 p-5 transition-colors hover:border-gold/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-md border border-gold/35 font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="min-w-0 text-sm">{c}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 6 — STUDENT STORIES */}
      <section id="stories" className="border-y border-border bg-ink/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <SectionHeading
            eyebrow="Reader Feedback"
            title="Student Stories"
            lead="Genuine reader feedback on chart analysis and learning experience."
          />

          <div className="mt-14">
            <p className="eyebrow text-center">Shared With Permission</p>
            <h3 className="mt-3 text-center text-2xl sm:text-3xl">
              Reader charts &amp; study progress
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {readerCases.map((c) => (
                <figure key={c.title} className="panel p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="eyebrow">{c.title}</p>
                    {c.shots.length > 1 ? (
                      <span className="shrink-0 rounded-full border border-gold/40 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                        Before / After
                      </span>
                    ) : null}
                  </div>
                  <div
                    className={`mt-4 grid gap-3 ${c.shots.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                  >
                    {c.shots.map((s) => (
                      <div key={s.src} className="min-w-0">
                        {s.label ? (
                          <p className="mb-2 text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                            {s.label}
                          </p>
                        ) : null}
                        <div className="overflow-hidden rounded-md border border-border bg-secondary/40">
                          <img
                            src={s.src}
                            alt={s.alt}
                            loading="lazy"
                            className="h-64 w-full object-cover object-top sm:h-72"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <figcaption className="mt-4 text-xs text-muted-foreground">{c.note}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
              Individual trading outcomes vary. Testimonials and submitted charts reflect personal
              experiences and are not a promise of future results.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.name} className="panel p-7">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 bg-secondary font-display text-lg text-gold">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{t.name}</p>
                    <p className="truncate text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {t.country}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
                <div className="hairline my-5" />
                <p className="flex items-start gap-2 text-xs text-gold">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                  {t.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — TOOLKIT */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="Everything Included"
          title="The Complete Trader's Toolkit"
          lead="Six pieces of material designed as one system — presented as a boxed premium set."
        />
        <div className="mt-12">
          <img
            src={toolkit}
            alt="Boxed set of the book, pattern handbook, trading journal, practice plan, checklist and mistakes guide"
            width={1408}
            height={912}
            loading="lazy"
            className="mx-auto w-full max-w-4xl"
          />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: BookOpen, t: "The Book", b: "18 chapters, fully annotated chart examples." },
            { icon: LineChart, t: "The Pattern Handbook", b: "Reference sheets for structure and patterns." },
            { icon: NotebookPen, t: "Trading Journal", b: "Templates for logging and reviewing decisions." },
            { icon: Target, t: "Practice Plan", b: "A weekly drill schedule for chart study." },
            { icon: ClipboardCheck, t: "Checklist", b: "Pre-trade criteria you confirm before acting." },
            { icon: ShieldCheck, t: "Common Mistakes Guide", b: "The errors that quietly undo good analysis." },
          ].map((c) => (
            <article key={c.t} className="panel flex items-start gap-4 p-6">
              <c.icon className="mt-1 size-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div className="min-w-0">
                <h3 className="text-lg">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.b}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 8 — WHO IT'S FOR */}
      <section className="border-y border-border bg-ink/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <SectionHeading eyebrow="Right Fit" title="Who This Book Is For" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Beginner",
                b: "You want a serious foundation instead of scattered videos, and you'd rather learn the market properly the first time.",
              },
              {
                t: "Intermediate",
                b: "You understand the concepts but your execution is inconsistent. You need one process and a review loop.",
              },
              {
                t: "Self-Taught Trader",
                b: "You've built knowledge in fragments. This organises it into a single structured system end to end.",
              },
            ].map((c, i) => (
              <article key={c.t} className="panel p-8">
                <p className="eyebrow">0{i + 1}</p>
                <h3 className="mt-4 text-2xl">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="Questions" title="Frequently Asked" />
        <div className="mt-12 divide-y divide-border panel px-2">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="min-w-0 font-display text-lg">{f.q}</span>
                <span className="shrink-0 text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section id="buy" className="relative isolate overflow-hidden border-t border-border bg-ink">
        <div className="absolute inset-0 -z-10 grid-chart opacity-50" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 text-gold opacity-20">
          <ChartBackdrop className="h-full w-full" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="relative">
            <div className="absolute inset-8 -z-10 rounded-full bg-gold/15 blur-3xl" />
            <img
              src={bookFloat}
              alt="Trendline Precision hardcover edition"
              width={912}
              height={1104}
              loading="lazy"
              className="mx-auto w-64 drop-shadow-2xl lg:w-full lg:max-w-sm"
            />
          </div>
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
              The market will always offer another opportunity.
            </h2>
            <p className="mt-5 font-display text-2xl text-gold-gradient sm:text-3xl">
              Will you be ready for it?
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Complete digital edition · 18 chapters · Toolkit included ·{" "}
              <span className="text-foreground">$55 one-time</span>
            </p>
            <a href="https://buy.stripe.com/eVq6oA2hHfvH8Yjeo1cZa01" className="btn-gold mt-8 w-full sm:w-auto">
              Get Trendline Precision
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <LineChart className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="font-display text-base tracking-wide">Trendline Precision</span>
              </div>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground">
                Trendline Precision publishes educational material on technical analysis and trading
                process. Nothing on this page is financial advice, and no trading result is promised
                or implied. Trading involves risk of loss.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              <a href="#learn" className="hover:text-gold">
                Curriculum
              </a>
              <a href="#stories" className="hover:text-gold">
                Stories
              </a>
              <a href="https://buy.stripe.com/eVq6oA2hHfvH8Yjeo1cZa01" className="hover:text-gold">
                Buy
              </a>
            </nav>
          </div>
          <div className="hairline my-8" />
          <p className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} Trendline Precision
          </p>
        </div>
      </footer>
    </main>
  );
}
