import { Link } from "@tanstack/react-router";
import { Hexagon, Linkedin } from "lucide-react";
import { BRAND, TAGLINE } from "./content";

const columns = [
  {
    heading: "Company",
    links: [
      { to: "/services", label: "Services" },
      { to: "/industries", label: "Industries" },
      { to: "/pricing", label: "Pricing" },
      { to: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { to: "/resources", label: "Resources" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/healthcare", label: "Healthcare" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms" },
      { to: "/security", label: "Security" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/40">
                <Hexagon className="size-4 text-primary" strokeWidth={2.4} />
              </span>
              <span className="font-display text-[0.95rem] font-semibold">{BRAND}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{TAGLINE}</p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="mt-5 inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Linkedin className="size-4" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-foreground/90 uppercase">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline my-10" />
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <p>Serving small and mid-sized businesses across the United States.</p>
        </div>
      </div>
    </footer>
  );
}