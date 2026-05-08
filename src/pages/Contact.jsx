import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Mail, Phone, Linkedin, Loader2, ExternalLink, Check } from 'lucide-react';

import SEO from '@/components/SEO';
import Navbar from '@/components/website/Navbar';
import Footer from '@/components/website/Footer';
import ScrollToTopButton from '@/components/website/ScrollToTopButton';
import ScrollProgressBar from '@/components/website/ScrollProgressBar';

import SectionHead from '@/components/website/_primitives/SectionHead';
import Eyebrow from '@/components/website/_primitives/Eyebrow';
import FormField from '@/components/website/_primitives/FormField';

/*
 * Contact page — rebuild on the Sprint2Frontier design system.
 *
 * Three sections: header, inquiry (HQ info + form), enterprise/founder-direct.
 * No dark hero on internal pages — the navbar stays opaque from page load.
 *
 * The form pre-selects an interest based on the `?product=` query param,
 * which matches the route format used by the home page CTAs:
 *   /contact?product=medscribeai     → MTSO interest pre-selected
 *   /contact?product=pharmastockai   → Pharmacy interest pre-selected
 *   /contact                          → no pre-selection
 *
 * Submission goes to the existing Formspree endpoint preserved from the
 * previous Contact build. On success, the form is replaced with a success
 * card. On error, the field-level error region surfaces a fallback email.
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzlzbvq';

const INTERESTS = [
  {
    id:    'medscribeai',
    label: 'MedScribeAI for MTSOs',
    sub:   'Automating manual transcription workflows',
    accent:'emerald',
  },
  {
    id:    'pharmastockai',
    label: 'PharmaStockAI for Pharmacies & Distributors',
    sub:   'Predictive inventory and expiry intelligence',
    accent:'cyan',
  },
  {
    id:    'partnership',
    label: 'Strategic Partnerships',
    sub:   'Channels, integrations, or strategic conversations',
    accent:'slate',
  },
];

const HQ = {
  legalName: 'NuScript Technologies Private Limited',
  addressLines: [
    '657 Tristar Towers, East Wing',
    '3rd Floor, Avinashi Road',
    'Coimbatore, Tamil Nadu 641037, India',
  ],
  mapsHref: 'https://maps.google.com/?q=Tristar+Towers,+Avinashi+Road,+Coimbatore',
  hours:    'Monday – Friday · 9:00 AM – 6:00 PM IST',
  email:    'hello@nuscript.in',
  phone:    '+91 93637 24729',
  phoneHref:'tel:+919363724729',
  linkedinHandle: 'linkedin.com/company/nuscript-technologies',
  linkedinHref:   'https://linkedin.com/company/nuscript-technologies',
};

const FOUNDER = {
  quote: 'We value deep partnerships over vendor contracts.',
  body:
    'If you are a large-scale distributor, MTSO processing over a million lines monthly, or an enterprise prospect with a custom integration in mind, reach out to me directly.',
  email: 'arvind.manohar@nuscript.in',
  emailHref: 'mailto:arvind.manohar@nuscript.in',
  role:  "Founder's Office · Enterprise & strategic discussions",
  usReference: {
    label: 'Looking for our US operations?',
    name:  'NuScript Health',
    href:  'https://nuscripthealth.com',
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  const { search } = useLocation();
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Read `?product=` on mount (and when the query string changes) and
  // pre-select the matching interest. Unknown values get ignored silently
  // rather than blowing up the UI — the user can still pick manually.
  useEffect(() => {
    const params = new URLSearchParams(search);
    const product = params.get('product');
    if (product && INTERESTS.find((i) => i.id === product)) {
      setSelected(product);
    }
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const interest = INTERESTS.find((i) => i.id === selected);
      const interestLabel = interest?.label ?? 'Not specified';

      const payload = {
        name:    form.name,
        company: form.company,
        email:   form.email,
        phone:   form.phone,
        message: form.message,
        interest: interestLabel,
        _subject: `New inquiry from ${form.name || 'website'} — ${interestLabel}`,
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'Submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      setError(`Something went wrong sending your inquiry. Please email ${HQ.email} directly and we'll respond within one business day.`);
    } finally {
      setSubmitting(false);
    }
  };

  const setField = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <SEO page="contact" />
      <ScrollProgressBar />
      <Navbar />

      <main>
        {/* ─── Header section ────────────────────────────────────────── */}
        <section className="relative bg-paper pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionHead
              eyebrow="GET IN TOUCH"
              eyebrowColor="cyan"
              headline="Talk to us about MedScribeAI, PharmaStockAI, or partnerships."
              lede="One-business-day response. Coimbatore-based engineering team. Whether you operate an MTSO serving US healthcare, run a pharmacy chain, or are exploring a strategic conversation — we're listening."
            />
          </div>
        </section>

        {/* ─── Inquiry section: HQ info + form ──────────────────────── */}
        <section id="inquiry" className="relative bg-paper-2 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-10">

              {/* Left column — HQ info card (5/12 on desktop) */}
              <motion.aside {...fadeUp(0)} className="lg:col-span-5">
                <HqCard />
              </motion.aside>

              {/* Right column — inquiry form (7/12 on desktop) */}
              <motion.div {...fadeUp(0.08)} className="lg:col-span-7">
                {submitted ? (
                  <SuccessCard />
                ) : (
                  <FormCard
                    selected={selected}
                    setSelected={setSelected}
                    form={form}
                    setField={setField}
                    submitting={submitting}
                    error={error}
                    onSubmit={handleSubmit}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Founder's Direct ─────────────────────────────────────── */}
        <section className="relative bg-paper py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <FounderDirectCard />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

/* ─── HQ info card ────────────────────────────────────────────────────────
 * Left column of the inquiry section. Rendered as a TopAccentCard-style
 * surface with a slate top edge (operator restraint — not cyan / emerald
 * because this card isn't selling either product, it's anchoring the
 * physical context). Five info rows: legal entity, hours, email, phone,
 * LinkedIn. Each row is icon + content, consistent with deck pattern. */
function HqCard() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-rule bg-paper-2 p-7 sm:p-8">
      <div aria-hidden="true" className="absolute left-0 top-0 h-[3px] w-full bg-slate" />

      <Eyebrow color="muted" className="mb-3 block">COIMBATORE HQ</Eyebrow>
      <h3 className="font-sora text-[22px] font-bold leading-[1.20] tracking-[-0.022em] text-slate sm:text-[24px]">
        {HQ.legalName}
      </h3>

      <ul className="mt-6 space-y-5">
        <InfoRow icon={MapPin}>
          <div className="space-y-1">
            {HQ.addressLines.map((line) => (
              <p key={line} className="text-[14px] leading-[1.55] text-ink-2">{line}</p>
            ))}
            <a
              href={HQ.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.06em] text-cyan transition-opacity hover:opacity-80"
            >
              Open in Google Maps
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </InfoRow>

        <InfoRow icon={Clock}>
          <p className="text-[14px] leading-[1.55] text-ink-2">{HQ.hours}</p>
        </InfoRow>

        <InfoRow icon={Mail}>
          <a
            href={`mailto:${HQ.email}`}
            className="text-[14px] font-semibold text-ink transition-colors hover:text-cyan"
          >
            {HQ.email}
          </a>
        </InfoRow>

        <InfoRow icon={Phone}>
          <a
            href={HQ.phoneHref}
            className="text-[14px] font-semibold text-ink transition-colors hover:text-cyan"
          >
            {HQ.phone}
          </a>
        </InfoRow>

        <InfoRow icon={Linkedin}>
          <a
            href={HQ.linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink transition-colors hover:text-cyan"
          >
            View on LinkedIn
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </InfoRow>
      </ul>
    </div>
  );
}

function InfoRow({ icon: Icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-rule bg-paper"
      >
        <Icon className="h-4 w-4 text-cyan" />
      </span>
      <div className="flex-1 pt-1">{children}</div>
    </li>
  );
}

/* ─── Form card ──────────────────────────────────────────────────────────
 * Right column. Audience selector at top (three radio-style buttons,
 * pre-selected via ?product= query param), then a two-column field grid
 * (name + company, email + phone), then a full-width message textarea,
 * then submit. Error region only renders when there's an error. */
function FormCard({ selected, setSelected, form, setField, submitting, error, onSubmit }) {
  return (
    <div className="rounded-lg border border-rule bg-paper-2 p-7 sm:p-9">
      <Eyebrow color="cyan" className="mb-3 block">INQUIRY</Eyebrow>
      <h3 className="font-sora text-[24px] font-bold leading-[1.20] tracking-[-0.022em] text-slate sm:text-[26px]">
        Tell us what you're working on.
      </h3>
      <p className="mt-2 text-[14px] leading-[1.55] text-ink-2 sm:text-[15px]">
        We respond within one business day. All fields except phone are required.
      </p>

      <form onSubmit={onSubmit} className="mt-7 space-y-5">
        {/* Audience selector */}
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-3">
            I am interested in
          </p>
          <div className="space-y-2.5">
            {INTERESTS.map((opt) => {
              const isActive = selected === opt.id;
              const ringColor =
                opt.accent === 'emerald' ? 'border-emerald bg-emerald/[0.04]'
                : opt.accent === 'cyan'  ? 'border-cyan bg-cyan/[0.04]'
                : 'border-slate bg-slate/[0.04]';
              const dot =
                opt.accent === 'emerald' ? 'bg-emerald'
                : opt.accent === 'cyan'  ? 'bg-cyan'
                : 'bg-slate';
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelected(opt.id)}
                  className={`
                    group relative w-full rounded-md border px-4 py-3 text-left transition-colors duration-150
                    ${isActive
                      ? ringColor
                      : 'border-rule bg-paper-2 hover:border-rule-2'}
                  `}
                  aria-pressed={isActive}
                >
                  <span className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={`
                        mt-1 inline-flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full border
                        ${isActive ? `${dot} border-transparent` : 'border-rule-2 bg-paper-2'}
                      `}
                    >
                      {isActive && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} aria-hidden="true" />}
                    </span>
                    <span className="flex-1">
                      <p className="text-[14px] font-bold text-slate">{opt.label}</p>
                      <p className="mt-0.5 text-[12px] text-ink-3">{opt.sub}</p>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Field grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            id="name"
            label="Name & Designation"
            required
            value={form.name}
            onChange={setField('name')}
            placeholder="e.g. Priya R., COO"
            autoComplete="name"
          />
          <FormField
            id="company"
            label="Company"
            required
            value={form.company}
            onChange={setField('company')}
            placeholder="Your company name"
            autoComplete="organization"
          />
          <FormField
            id="email"
            label="Work Email"
            type="email"
            required
            value={form.email}
            onChange={setField('email')}
            placeholder="you@company.com"
            autoComplete="email"
          />
          <FormField
            id="phone"
            label="Phone"
            type="tel"
            value={form.phone}
            onChange={setField('phone')}
            placeholder="+91 …  (optional)"
            autoComplete="tel"
          />
        </div>

        <FormField
          id="message"
          label="What you're trying to accomplish"
          required
          value={form.message}
          onChange={setField('message')}
          placeholder="A few sentences about your operation, your scale, and what success looks like."
          rows={5}
        />

        {error && (
          <div
            role="alert"
            className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-[13px] leading-[1.55] text-destructive"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="
            inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3
            text-[14px] font-bold text-white tracking-[-0.005em]
            transition-colors duration-150
            hover:bg-cyan/90
            disabled:cursor-not-allowed disabled:opacity-60
          "
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send inquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

/* ─── Success card ───────────────────────────────────────────────────────
 * Replaces the form on successful submission. Maintains the same card
 * footprint so the layout doesn't reflow. */
function SuccessCard() {
  return (
    <div className="rounded-lg border border-emerald/30 bg-emerald/[0.04] p-9 sm:p-12">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/15">
        <Check className="h-6 w-6 text-emerald" strokeWidth={2.5} aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-sora text-[26px] font-bold leading-[1.20] tracking-[-0.022em] text-slate sm:text-[28px]">
        Inquiry received.
      </h3>
      <p className="mt-3 max-w-md text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
        We'll respond within one business day. If you don't see a reply in your inbox by then, check spam or write to {HQ.email} directly.
      </p>
    </div>
  );
}

/* ─── Founder's Direct card ───────────────────────────────────────────────
 * Full-width quieter card. Quote, body, then a two-line email block with
 * arrow-suffixed link styling. Bottom rule + reference to the US ops site.
 * Uses cyan top-accent — this is a "tier 2" path, not the primary form,
 * so visual weight is dialed down accordingly. */
function FounderDirectCard() {
  return (
    <motion.div
      {...fadeUp()}
      className="relative overflow-hidden rounded-lg border border-rule bg-paper-2 p-8 sm:p-12"
    >
      <div aria-hidden="true" className="absolute left-0 top-0 h-[3px] w-full bg-cyan" />

      <Eyebrow color="cyan">FOUNDER'S DIRECT</Eyebrow>

      <blockquote className="mt-4 max-w-3xl font-sora text-[22px] font-semibold leading-[1.30] tracking-[-0.018em] text-slate sm:text-[26px]">
        “{FOUNDER.quote}”
      </blockquote>

      <p className="mt-5 max-w-2xl text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
        {FOUNDER.body}
      </p>

      <a
        href={FOUNDER.emailHref}
        className="
          group mt-7 inline-flex items-center gap-4 rounded-md
          border border-cyan/25 bg-cyan/5 px-5 py-4
          transition-colors duration-150 hover:border-cyan/45 hover:bg-cyan/10
        "
      >
        <Mail className="h-5 w-5 flex-shrink-0 text-cyan" aria-hidden="true" />
        <span>
          <span className="block font-sora text-[15px] font-bold text-slate">
            {FOUNDER.email}
          </span>
          <span className="mt-0.5 block text-[12px] text-ink-3">
            {FOUNDER.role}
          </span>
        </span>
        <ArrowRight
          className="ml-auto h-4 w-4 text-cyan transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>

      <div className="mt-8 border-t border-rule pt-6">
        <p className="text-[13px] text-ink-3 sm:text-[14px]">
          {FOUNDER.usReference.label}{' '}
          <a
            href={FOUNDER.usReference.href}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-cyan transition-opacity hover:opacity-80"
          >
            {FOUNDER.usReference.name}
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
}
