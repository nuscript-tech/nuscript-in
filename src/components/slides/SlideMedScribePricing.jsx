import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    size: "5–20 employees",
    price: "₹25,000",
    perLine: "₹0.70 / line",
    runRate: "~₹3.75L / mo · at 500K lines",
    popular: false,
    border: "border-border",
    bar: "bg-primary/40",
    priceColor: "text-primary",
  },
  {
    name: "Professional",
    size: "20–100 employees",
    price: "₹50,000",
    perLine: "₹0.60 / line",
    runRate: "~₹3.50L / mo · at 500K lines",
    popular: true,
    border: "border-primary/40",
    bar: "bg-primary",
    priceColor: "text-primary",
  },
  {
    name: "Enterprise",
    size: "100+ employees",
    price: "₹1,00,000",
    perLine: "₹0.50 / line",
    runRate: "~₹3.50L / mo · at 500K lines",
    popular: false,
    border: "border-brand-cyan/30",
    bar: "bg-brand-cyan",
    priceColor: "text-brand-cyan",
  },
];

const footnotes = [
  { label: "Currency", value: "INR · zero FX" },
  { label: "GST", value: "18% on invoices" },
  { label: "Pilot", value: "10 days free" },
  { label: "Billing", value: "Monthly · Net 15" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideMedScribePricing() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">MedScribeAI · Pricing</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Transparent pricing. Real revenue per tenant.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        Three-tier subscription with a low base fee plus per-line variable revenue — pricing scales with the customer's own volume.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.12, duration: 0.5 }}
            className={`rounded-xl border p-5 relative overflow-hidden bg-card ${t.border}`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${t.bar}`} />
            {t.popular && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-extrabold text-foreground mb-1 mt-1">{t.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.size}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Base Fee / Mo</p>
            <p className={`text-4xl font-extrabold mb-1 ${t.priceColor}`}>{t.price}</p>
            <p className="text-base text-muted-foreground mb-4">{t.perLine}</p>
            <div className="bg-muted/60 rounded-lg p-3">
              <p className="text-sm text-muted-foreground mb-0.5">Est. monthly run-rate</p>
              <p className="text-base font-bold text-foreground">{t.runRate}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...fadeUp(0.7)}
        className="flex flex-wrap gap-x-8 gap-y-2 px-5 py-3 rounded-xl bg-card border border-border"
      >
        {footnotes.map((f) => (
          <span key={f.label} className="text-sm">
            <span className="font-bold text-primary">{f.label}</span>
            <span className="text-muted-foreground"> · {f.value}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
