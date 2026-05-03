import { motion } from "framer-motion";
import { Mic, FileText, DollarSign, Zap, ArrowRight, Brain, Activity } from "lucide-react";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

function FlowNode({ icon: Icon, label, sublabel, delay, green, large }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      className="flex flex-col items-center text-center gap-2.5"
    >
      <div
        className={`rounded-2xl flex items-center justify-center border ${
          large ? "w-20 h-20" : "w-14 h-14"
        } ${
          green
            ? "bg-primary/15 border-primary/40 shadow-[0_0_20px_rgba(52,211,153,0.15)]"
            : "bg-muted border-border"
        }`}
      >
        <Icon
          className={`${large ? "w-8 h-8" : "w-6 h-6"} ${
            green ? "text-primary" : "text-muted-foreground"
          }`}
        />
      </div>
      <div>
        <p
          className={`text-xs font-bold leading-tight ${
            green ? "text-primary" : "text-foreground"
          }`}
        >
          {label}
        </p>
        {sublabel && (
          <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{sublabel}</p>
        )}
      </div>
    </motion.div>
  );
}

function FlowArrow({ delay, vertical }) {
  if (vertical) {
    return (
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay, duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <div className="w-px h-5 bg-primary/40" />
        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/60" />
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-center flex-shrink-0"
    >
      <div className="w-8 sm:w-12 h-px bg-primary/40" />
      <ArrowRight className="w-4 h-4 text-primary/60 -ml-1" />
    </motion.div>
  );
}

const outputCards = [
  {
    icon: FileText,
    title: "Chart-Ready Notes",
    sub: "Structured clinical documentation auto-generated from the ambient encounter",
    tag: "Clinical Output",
    delay: 0.95,
  },
  {
    icon: DollarSign,
    title: "ICD-10 / CPT Codes",
    sub: "Automatic medical billing codes — bridging documentation directly to Revenue Cycle",
    tag: "RCM Output",
    delay: 1.02,
  },
];

export default function Slide3bPipeline() {
  return (
    <div className="font-jakarta">
      {/* Eyebrow */}
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          The ZERA Leap — Part II
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1 {...fadeUp(0.12)} className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] mb-2 max-w-4xl text-heading">
        The <span className="text-brand-cyan">ZERA Pipeline</span>: One Encounter,{" "}
        <span className="text-primary">Autonomous Output</span>
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-base mb-9 max-w-2xl leading-relaxed">
        A single clinical encounter simultaneously produces structured notes and billing codes — with zero manual dictation.
      </motion.p>

      {/* Flowchart diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.5 }}
        className="bg-card border border-border rounded-2xl p-8 mb-6"
      >
        <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-8 text-center">
          Real-Time Autonomous Clinical Pipeline
        </p>

        {/* Main flow row */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8">
          <FlowNode
            icon={Mic}
            label="Clinical Encounter"
            sublabel="Live patient visit"
            delay={0.4}
          />
          <FlowArrow delay={0.52} />
          <FlowNode
            icon={Brain}
            label="ZERA Ambient AI"
            sublabel="Real-time NLP processing"
            delay={0.58}
            green
            large
          />
          <FlowArrow delay={0.72} />
          {/* Output fork */}
          <div className="flex flex-col items-center gap-2">
            <FlowNode
              icon={FileText}
              label="Chart-Ready Notes"
              sublabel="Auto-generated"
              delay={0.78}
              green
            />
            <div className="w-px h-3 bg-primary/30" />
            <FlowNode
              icon={DollarSign}
              label="ICD-10 / CPT"
              sublabel="Automatic billing"
              delay={0.85}
              green
            />
          </div>
        </div>

        {/* Output detail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {outputCards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.4 }}
              className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <card.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base font-bold text-foreground">{card.title}</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                    {card.tag}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fellowship unlock banner */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.45 }}
        className="flex items-start gap-4 p-5 rounded-xl bg-primary/10 border border-primary/25"
      >
        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
            The Fellowship Unlock
          </span>
          <p className="text-base font-medium text-foreground/85 leading-snug">
            Transforming ZERA from a Production-Ready Demo into the{" "}
            <span className="text-primary font-bold">
              Global Infrastructure Standard for Autonomous Healthcare Finance
            </span>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
