import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Privacy Policy | Northlane AI";
const description = "How Northlane AI handles client and website data, including collection, use, retention and contact details for privacy requests.";

export const Route = createFileRoute("/privacy")({
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
      <h1 className="mt-3 text-4xl sm:text-5xl">Privacy Policy</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">This page describes how we handle information collected through this website and during client engagements. Contact us to request a copy tailored to your engagement.</p>      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Information we collect</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Contact details you submit and standard website analytics.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">How we use it</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">To respond to enquiries, deliver services and improve the site.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Retention</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We keep enquiry data only as long as needed for the relationship.</p>
        </li>
        <li className="glass glass-hover p-6">
          <h2 className="text-lg">Your requests</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Email us to access, correct or delete information we hold about you.</p>
        </li>
      </ul>
      <Link to="/contact" className="btn-brand mt-12">Book a Free Automation Audit</Link>
    </div>
  );
}
