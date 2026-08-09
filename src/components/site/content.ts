export const BRAND = "Northlane AI";
export const TAGLINE = "AI-powered operations for modern businesses.";

export const services = [
  {
    slug: "ai-lead-management",
    title: "AI Lead Management",
    icon: "Target",
    summary:
      "Automatically capture, qualify, score, route and follow up with leads — before a competitor answers.",
    examples: [
      "Lead qualification",
      "Lead scoring",
      "Automated follow-up",
      "CRM updates",
      "Appointment booking",
      "Lead routing",
    ],
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support",
    icon: "MessagesSquare",
    summary:
      "AI systems that handle routine customer interactions while escalating complex issues to humans.",
    examples: [
      "Email support",
      "Website chat",
      "FAQ automation",
      "Ticket classification",
      "Knowledge-base assistants",
      "Human escalation",
    ],
  },
  {
    slug: "ai-receptionist",
    title: "AI Receptionist & Voice Agents",
    icon: "PhoneCall",
    summary:
      "AI-powered phone systems that answer calls and complete routine front-desk tasks reliably.",
    examples: [
      "Answer incoming calls",
      "Book appointments",
      "Reschedule appointments",
      "Capture caller information",
      "Route calls",
      "Send confirmations",
      "Follow up automatically",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Business Workflow Automation",
    icon: "Workflow",
    summary:
      "Connect the tools your company already uses and eliminate repetitive manual processes.",
    examples: [
      "Gmail",
      "Google Workspace",
      "Microsoft 365",
      "CRM",
      "Slack",
      "Calendars",
      "Accounting software",
      "Forms",
      "Spreadsheets",
    ],
  },
  {
    slug: "document-processing",
    title: "AI Document Processing",
    icon: "FileStack",
    summary: "Turn documents and unstructured information into organized business data.",
    examples: [
      "Invoice processing",
      "Form processing",
      "Document classification",
      "Data extraction",
      "Contract information extraction",
      "Report generation",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    icon: "Bot",
    summary:
      "AI agents that perform multi-step business tasks using approved tools and your business rules.",
    examples: [
      "Research agents",
      "Sales agents",
      "Operations agents",
      "Customer-service agents",
      "Internal knowledge agents",
    ],
  },
  {
    slug: "knowledge-assistant",
    title: "Internal AI Knowledge Assistant",
    icon: "Library",
    summary:
      "A secure AI assistant that searches company documents, SOPs, policies and internal knowledge.",
    examples: [
      "Document search",
      "SOP answers",
      "Policy lookup",
      "Onboarding support",
      "Permission-aware access",
      "Source citations",
    ],
  },
  {
    slug: "operations-optimization",
    title: "AI Operations Optimization",
    icon: "LineChart",
    summary: "Analyze existing business processes and identify real opportunities for automation.",
    examples: [
      "Process mapping",
      "Automation opportunities",
      "ROI analysis",
      "Workflow redesign",
      "Implementation roadmap",
    ],
  },
];

export const steps = [
  {
    number: "01",
    title: "Discover",
    body: "We analyze your current workflows and identify repetitive, expensive processes.",
  },
  {
    number: "02",
    title: "Design",
    body: "We design the automation architecture and determine where AI, APIs and traditional automation should be used.",
  },
  {
    number: "03",
    title: "Build",
    body: "We integrate your existing tools and build, test and deploy the system.",
  },
  {
    number: "04",
    title: "Optimize",
    body: "We monitor performance, improve workflows and add new automations as your business grows.",
  },
];

export const industries = [
  { name: "Healthcare", body: "Intake, reminders, referrals and patient follow-up workflows." },
  { name: "Optometry", body: "Exam scheduling, recall campaigns and frame order updates." },
  { name: "Ophthalmology", body: "Referral intake, pre-op coordination and post-op follow-up." },
  { name: "Dental", body: "Recall lists, treatment plan follow-up and no-show recovery." },
  { name: "Legal", body: "Intake qualification, document review prep and matter updates." },
  { name: "Accounting", body: "Client document chasing, invoice processing and month-end reporting." },
  { name: "Real Estate", body: "Instant lead response, showing scheduling and pipeline hygiene." },
  {
    name: "Professional Services",
    body: "Proposal follow-up, onboarding sequences and internal reporting.",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$499",
    cadence: "/month",
    for: "For businesses beginning their automation journey.",
    features: [
      "1 active automation",
      "Basic AI workflow",
      "Email automation",
      "CRM integration",
      "Monthly optimization",
      "Basic support",
    ],
    cta: "Start Free Trial",
    offer: "14-day free trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    cadence: "/month",
    for: "For businesses ready to automate multiple workflows.",
    features: [
      "Up to 5 active automations",
      "AI agents",
      "CRM automation",
      "Lead automation",
      "Email automation",
      "Calendar automation",
      "Monthly strategy session",
      "Priority support",
    ],
    cta: "Start Free Trial",
    offer: "14-day free trial",
    popular: true,
  },
  {
    name: "Operations",
    price: "$3,500+",
    cadence: "/month",
    for: "For businesses that want an AI-powered operations layer.",
    features: [
      "Custom AI agents",
      "Advanced workflow automation",
      "Multiple system integrations",
      "Voice AI",
      "Internal knowledge assistant",
      "Advanced reporting",
      "Dedicated optimization",
      "Priority support",
      "Custom automation roadmap",
    ],
    cta: "Book a Strategy Call",
    offer: "Custom 14-day pilot available",
    popular: false,
  },
];

export const caseStudies = [
  {
    industry: "Healthcare practice",
    problem: "Too much manual appointment follow-up",
    solution: "AI follow-up and scheduling workflow with staff approval on exceptions",
    metrics: [
      { label: "Reminder calls handled automatically", value: "~70%" },
      { label: "Staff hours returned per week", value: "~12" },
      { label: "Average first response time", value: "< 2 min" },
    ],
  },
  {
    industry: "Accounting firm",
    problem: "Manual document and email processing",
    solution: "AI document processing workflow that classifies, extracts and files client records",
    metrics: [
      { label: "Documents auto-classified", value: "~85%" },
      { label: "Manual data entry reduced", value: "~60%" },
      { label: "Month-end prep time", value: "~2 days faster" },
    ],
  },
  {
    industry: "Real estate company",
    problem: "Slow lead response",
    solution: "AI lead qualification and follow-up routed to the right agent instantly",
    metrics: [
      { label: "Leads contacted within 60s", value: "~95%" },
      { label: "Follow-up sequences automated", value: "100%" },
      { label: "Agent admin time saved weekly", value: "~8 hrs" },
    ],
  },
];

export const techStack = [
  { category: "AI", items: ["OpenAI", "Anthropic", "Google Gemini"] },
  { category: "Automation", items: ["n8n", "Make", "Zapier"] },
  { category: "CRM", items: ["HubSpot", "Salesforce", "Pipedrive"] },
  { category: "Communication", items: ["Gmail", "Slack", "Microsoft Teams", "Twilio"] },
  { category: "Scheduling", items: ["Google Calendar", "Calendly"] },
  { category: "Data", items: ["PostgreSQL", "Supabase"] },
];

export const trustPillars = [
  { title: "Human approval", body: "Sensitive actions wait for a person to confirm." },
  { title: "Auditability", body: "Every automated step is logged and reviewable." },
  { title: "Error handling", body: "Failures retry, alert and fall back to a human." },
  { title: "Monitoring", body: "Live dashboards and alerts on workflow health." },
  { title: "Security", body: "Least-privilege credentials and encrypted transport." },
  { title: "Data protection", body: "Clear retention rules and minimal data movement." },
  { title: "Controlled access", body: "Role-based permissions across every integration." },
];

export const faqs = [
  {
    q: "What exactly does an AI automation agency do?",
    a: "We map how work actually moves through your business, then design and build systems that carry out the repetitive parts. That includes AI where judgement or language is involved, and plain integrations where deterministic logic is safer. We own the build, the testing and the ongoing tuning.",
  },
  {
    q: "How much does AI automation cost?",
    a: "Retainers start at $499/month for a single workflow and scale with complexity, integrations and usage. Larger operations layers begin at $3,500/month. Every engagement starts with a free automation audit so the scope and cost are clear before you commit.",
  },
  {
    q: "Do I need to replace my existing software?",
    a: "No. We build around the tools your team already knows. Replacing software is a last resort, not a starting point.",
  },
  {
    q: "Can AI work with my CRM?",
    a: "Yes. We integrate with HubSpot, Salesforce, Pipedrive and most systems that expose an API or webhook. If your CRM is unusual, we assess it during the audit.",
  },
  {
    q: "Can you automate phone calls?",
    a: "Yes. Voice agents can answer calls, book and reschedule appointments, capture caller details, route to staff and send confirmations — with clear disclosure and escalation to a human when needed.",
  },
  {
    q: "Can AI access our internal documents?",
    a: "Only what you approve. Internal knowledge assistants use permission-aware retrieval, so employees see answers drawn from documents they already have rights to, with sources cited.",
  },
  {
    q: "How long does implementation take?",
    a: "A first workflow is typically live in two to four weeks. Multi-system operations layers usually run six to twelve weeks, delivered in stages so value arrives early.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Every plan includes monitoring and optimization. Automation is a system that needs maintenance as your business and tools change.",
  },
  {
    q: "Is my business data secure?",
    a: "We use least-privilege credentials, encrypted transport, scoped integrations and documented retention rules. We limit how much data moves and where it is stored.",
  },
  {
    q: "Can you work with healthcare businesses?",
    a: "Yes, with care. Healthcare workflows are designed around privacy, security, human oversight and the regulatory requirements that apply to your practice. We scope what may be automated and what stays with staff before anything is built.",
  },
];

export const workflowNodes = [
  { label: "Lead", icon: "UserPlus" },
  { label: "AI", icon: "Sparkles" },
  { label: "CRM", icon: "Database" },
  { label: "Email", icon: "Mail" },
  { label: "Calendar", icon: "CalendarCheck" },
  { label: "Team", icon: "Users" },
  { label: "Reporting", icon: "BarChart3" },
];