import { motion } from "framer-motion";

const markets = [
  {
    tag: "TAM · Global",
    value: "$58–90B",
    title: "Global medical transcription",
    detail: "Global market in 2025, growing to $106–157B by 2030–2035. Outsourcing accounts for ~69% of spend; India is a top-2 offshore hub.",
    color: "text-primary",
    border: "border-primary/30",
    bar: "bg-primary",
  },
  {
    tag: "SAM · India-Delivered",
    value: "₹4,000–6,000 Cr",
    title: "India MTSO + corporate hospital documentation",
    detail: "Annual revenue captured by Indian MTSOs servicing US/UK/AU clients, plus rapidly digitizing Indian corporate hospitals (Apollo, Fortis, Max, Manipal, Narayana).",
    color: "text-primary",
    border: "border-primary/30",
    bar: "bg-primary",
  },
  {
    tag: "SOM · 5-Year",
    value: "₹150–250 Cr",
    title: "MedScribeAI platform revenue",
    detail: "200+ large MTSOs (200–500 employees each), several hundred small/mid MTSOs, and 50+ corporate hospital chains digitizing documentation. Capturing 10–15% of this is our 5-year SOM.",
    color: "text-brand-cyan",
    border: "border-brand-cyan/30",
    bar: "bg-brand-cyan",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideMedScribeMarket() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">MedScribeAI · Market</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        India is the world's largest documentation back-office.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        We're not selling into a nascent market. We're modernizing one we already operate inside.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        {markets.map((m, i) => (
          <motion.div
            key={m.tag}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.12, duration: 0.5 }}
            className={`bg-card border rounded-xl p-5 relative overflow-hidden ${m.border}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl ${m.bar}`} />
            <div className="pl-3">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">{m.tag}</span>
              <div className={`text-3xl sm:text-4xl font-extrabold mb-2 ${m.color}`}>{m.value}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{m.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{m.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...fadeUp(0.72)}
        className="p-4 rounded-xl bg-card border border-border"
      >
        <p className="text-base text-muted-foreground">
          <span className="font-bold text-foreground">Buyer mix</span>{" "}· 200+ large Indian MTSOs (200–500 staff) · several hundred small/mid MTSOs (50–100 staff) · Indian corporate hospitals digitizing clinical documentation post-ABDM.
        </p>
        <p className="text-sm text-muted-foreground/60  mt-1">Sources: IMARC, Mordor Intelligence, MarketResearch Future, internal estimates from 25-year MTSO operating experience.</p>
      </motion.div>
    </div>
  );
}
