import { motion } from "framer-motion";

const tiers = [
  {
    name: "Pro",
    sub: "For pharmacies that want AI-driven inventory and margin control.",
    price: "₹499",
    period: "/ month per pharmacy",
    popular: false,
    bullets: [
      "Batch-level inventory tracking",
      "Automated expiry alerts (expiry agent)",
      "Low-stock detection + smart To-Order list (sourcing agent)",
      "WhatsApp distributor order messages",
      "'Today's 3 Actions' dashboard intelligence",
    ],
    border: "border-border",
    bar: "bg-brand-cyan/40",
    priceColor: "text-brand-cyan",
  },
  {
    name: "Business",
    sub: "For pharmacies building a chronic-care subscription business.",
    price: "₹1,499",
    period: "/ month per pharmacy",
    popular: true,
    bullets: [
      "Everything in Pro",
      "PharmaPack patient & subscription module",
      "Monthly Refills queue + pack/dispatch workflow",
      "WhatsApp refill reminders to patients",
      "Subscription analytics (refills/mo, active patients)",
    ],
    border: "border-brand-cyan/40",
    bar: "bg-brand-cyan",
    priceColor: "text-brand-cyan",
  },
  {
    name: "For 2+ pharmacies",
    sub: "Control Tower · Chains",
    price: "₹1,999",
    period: "/ mo per chain + ₹599 (Pro) / ₹1,699 (Business) per pharmacy",
    popular: false,
    bullets: [
      "Chain-wide dashboard + KPIs",
      "Multi-store 'Today's Actions'",
      "Replenishment Centre + SKU distribution insights",
      "Custom pricing for 30+ pharmacies",
    ],
    border: "border-primary/30",
    bar: "bg-primary",
    priceColor: "text-primary",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlidePharmaPricing() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">PharmaStockAI · Pricing & Status</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Priced for every Indian pharmacy.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        Per-pharmacy SaaS for single-store independents and a Control Tower add-on for chains. Priced low enough to scale across 1M+ Indian pharmacies.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.12, duration: 0.5 }}
            className={`rounded-xl border p-5 bg-card relative overflow-hidden ${t.border}`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${t.bar}`} />
            {t.popular && (
              <div className="absolute top-4 right-4 bg-brand-cyan text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-extrabold text-foreground mb-1 mt-1">{t.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{t.sub}</p>
            <p className={`text-4xl font-extrabold ${t.priceColor} mb-0.5`}>{t.price}</p>
            <p className="text-sm text-muted-foreground mb-4">{t.period}</p>
            <ul className="space-y-1.5">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${t.bar}`} />
                  <span className="text-sm text-foreground/80 leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.72)} className="p-4 rounded-xl bg-card border border-border">
        <p className="text-sm text-foreground">
          <span className="font-bold text-brand-cyan">Current status</span>{" "}· Live at pharmastock.co.in. Invite-only Free tier in pilot. Targeting first 100 paying pharmacies in 6 months and 1,000+ within 18 months.
        </p>
      </motion.div>
    </div>
  );
}
