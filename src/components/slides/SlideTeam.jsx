import { motion } from "framer-motion";

const indiaTeam = [
  {
    initials: "AM",
    name: "Arvind Manohar",
    title: "Founder & CEO",
    detail: "25 yr healthcare ops · 8x founder · 4 exits · solo technical builder of all 3 products",
    bg: "bg-primary",
  },
  {
    initials: "C",
    name: "Chitra Manohar",
    title: "Co-Founder & Director",
    detail: "30% co-owner of NuScript Technologies · operations leadership",
    bg: "bg-primary/70",
  },
  {
    initials: "90+",
    name: "India ops + engineering team",
    title: "",
    detail: "Editors, QAs, engineers, and BD across Coimbatore + offshore delivery",
    bg: "bg-brand-cyan",
  },
];

const usTeam = [
  {
    initials: "RP",
    name: "Rochelle P.",
    title: "Co-Founder & President",
    detail: "Former CHIO HP · RCM platform builder (2M payer edits) · ex-VP Cirrus Health · accepted in principle",
    bg: "bg-brand-zera",
  },
  {
    initials: "DW",
    name: "Doug W.",
    title: "CTO-designate",
    detail: "Former CTO CareSpan Health · health IT, EHR/FHIR, FDA-cleared medical AI · joins post-funding",
    bg: "bg-brand-zera/70",
  },
  {
    initials: "+",
    name: "Head of US Sales",
    title: "post-Series A",
    detail: "",
    bg: "bg-muted-foreground/40",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

function PersonCard({ person, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
      className="flex items-start gap-3"
    >
      <div className={`w-10 h-10 rounded-full ${person.bg} flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}>
        {person.initials}
      </div>
      <div>
        <p className="text-base font-bold text-foreground leading-tight">
          {person.name}{person.title && <span className="font-normal text-muted-foreground"> · {person.title}</span>}
        </p>
        {person.detail && <p className="text-sm text-muted-foreground leading-snug mt-0.5">{person.detail}</p>}
      </div>
    </motion.div>
  );
}

export default function SlideTeam() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Team</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Two teams. One holdco.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        NuScript Technologies (India) is the engineering and operations engine. Zera Health Inc. (US) is the wholly-owned commercial vehicle — staffed with US healthcare leadership.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="bg-card border border-primary/30 rounded-xl p-5"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">NuScript Technologies · India</span>
          <p className="text-xs text-muted-foreground  mb-4">Where Sprint2Frontier capital lives</p>
          <div className="space-y-4">
            {indiaTeam.map((p, i) => <PersonCard key={p.name} person={p} delay={0.35 + i * 0.1} />)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.32, duration: 0.5 }}
          className="bg-brand-zera/5 border border-brand-zera/30 rounded-xl p-5"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-zera block mb-1">Zera Health, Inc. · US Subsidiary</span>
          <p className="text-xs text-muted-foreground  mb-4">100% owned · US commercial leadership</p>
          <div className="space-y-4">
            {usTeam.map((p, i) => <PersonCard key={p.name} person={p} delay={0.38 + i * 0.1} />)}
          </div>
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.75)} className="p-4 rounded-xl bg-card border border-border">
        <p className="text-sm text-muted-foreground  text-center">
          Sprint2Frontier funds the India team directly. The US subsidiary's leadership is funded post-flip from the Series A.
        </p>
      </motion.div>
    </div>
  );
}
