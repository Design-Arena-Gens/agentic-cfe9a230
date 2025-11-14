export default function Page() {
  return (
    <div className="page">
      <header className="hero">
        <h1>The Million Plan</h1>
        <p className="subtitle">From zero to $1,000,000 in value creation</p>
        <p className="disclaimer">
          This is an educational, execution-focused blueprint. Real-world outcomes vary; there are no guarantees.
          Ethics, legality, and user value come first.
        </p>
      </header>

      <Section title="First Principles">
        <ul>
          <li>Value creation precedes value capture.</li>
          <li>Compounding skills, assets, and distribution drive non-linear outcomes.</li>
          <li>Focus on cash-flow positive micro-wins; reinvest aggressively.</li>
          <li>Leverage software, automation, and distribution platforms.</li>
          <li>Ship weekly; talk to users daily; measure always.</li>
        </ul>
      </Section>

      <Section title="Constraints Assumed">
        <ul>
          <li>No money, no contacts, no assets, no formal skills.</li>
          <li>Internet access via public resources; 60?80 hours/week capacity.</li>
          <li>Full ethical compliance; zero tolerance for fraud or spam.</li>
        </ul>
      </Section>

      <Section title="Phase 0 (Weeks 0?2): Foundations Without Money">
        <ol>
          <li>Pick 1 problem category you can research locally: scheduling, invoicing, inventory, lead-gen, analytics.</li>
          <li>Daily loop: 3 hours problem interviews with small businesses or online communities; document pains + willingness to pay.</li>
          <li>Self-education (free): HTML/CSS/JS basics, a UI library, and how to use no-code/low-code tools.</li>
          <li>Deliver 1 tiny outcome daily: a script, spreadsheet template, or checklist that saves someone time.</li>
        </ol>
      </Section>

      <Section title="Phase 1 (Weeks 2?8): Earn First $1?$1,000">
        <ol>
          <li>Offer outcome-based services: "I will deliver X result in Y days for Z dollars."</li>
          <li>Target micro-niches: Etsy sellers, local clinics, home services, niche SaaS founders.</li>
          <li>Products: lead-scrub scripts, invoice auto-senders, booking page setups, analytics dashboards.</li>
          <li>Pricing: $50?$300 per micro-outcome; guarantee refund if not delivered.</li>
          <li>Close the loop with testimonials and simple case studies to build trust.</li>
        </ol>
      </Section>

      <Section title="Phase 2 (Months 2?6): Productize and Automate to $10k MRR">
        <ol>
          <li>Convert repeat services into a focused productized offering (one pain, one promise).</li>
          <li>Build v1 using the simplest stack that ships fast; automate onboarding and billing.</li>
          <li>Marketing: publish how-to content weekly, share transparent build-in-public metrics, and collect emails.</li>
          <li>Distribution: integrations/marketplaces, partner deals, community affiliates.</li>
          <li>Relentless retention: instrument usage, talk to churned users, fix top 3 reasons weekly.</li>
        </ol>
      </Section>

      <Section title="Phase 3 (Months 6?18): Scale to $1M Run-Rate">
        <ol>
          <li>Double down on one channel that works (SEO, outbound, partnerships, or virality). Ignore the rest.</li>
          <li>Systemize ops: SOPs, checklists, SLAs. Hire contractors only for bottlenecks with clear SOPs.</li>
          <li>Upsell ladder: core product ? pro tier ? done-for-you implementation ? training.</li>
          <li>Expand TAM by cloning the product to the next micro-vertical with 80% overlap.</li>
          <li>Financial discipline: 60% gross margin target, 6 months runway, reinvest in growth.</li>
        </ol>
      </Section>

      <Section title="$1,000,000 Outcome Paths (Illustrative)">
        <ul>
          <li>$83,333 MRR SaaS at 12x ARR multiple ? $12M enterprise value; partial cash-out viable.</li>
          <li>$40k/mo productized service with 50% margin over 24 months ? $480k profit + sell playbook/IP.</li>
          <li>Media + product bundle: 100k subscribers ? $10 ARPU/year ? $1M/year.</li>
        </ul>
      </Section>

      <Section title="Daily Operating System (Non-Negotiables)">
        <ol>
          <li>Talk to 3+ users/day. Update a single backlog. Prioritize by impact ? confidence ? effort.</li>
          <li>Ship weekly. Public changelog. Instrument everything. Review retention every Friday.</li>
          <li>Protect deep work blocks. Automate or delete low-leverage tasks ruthlessly.</li>
        </ol>
      </Section>

      <Section title="Free Learning Path (Weeks 0?6)">
        <ol>
          <li>Weeks 0?2: HTML/CSS/JS, Git/GitHub, basic UI. Build 3 mini-tools solving real pains.</li>
          <li>Weeks 2?4: APIs, auth, database basics. Clone a simple SaaS with payments in sandbox.</li>
          <li>Weeks 4?6: Distribution 101: compelling offers, messaging, landing pages, email capture.</li>
        </ol>
      </Section>

      <Section title="Ethics and Risk Management">
        <ul>
          <li>Never misrepresent results. No gray-hat growth. Respect privacy and consent.</li>
          <li>Validate legally in your jurisdiction before launch. Keep clean accounting.</li>
          <li>Diversify channels to avoid platform risk. Maintain emergency reserves as soon as feasible.</li>
        </ul>
      </Section>

      <Section title="Minimal Tech Stack (Pragmatic)">
        <ul>
          <li>Front-end: Next.js + hosted DB + auth provider.</li>
          <li>Payments: Stripe. Emails: reputable ESP with double opt-in.</li>
          <li>Analytics: privacy-friendly product analytics + event logging.</li>
          <li>Automation: webhooks + simple job queue for reliability.</li>
        </ul>
      </Section>

      <footer className="footer">
        <p>
          This plan is directional and education-only. Execution quality, market timing, and ethics
          determine real outcomes.
        </p>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
