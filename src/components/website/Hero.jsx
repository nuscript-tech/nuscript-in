import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
});

const WORDS = ["Healthcare.", "Pharmacies.", "Enterprise."];

function TypingWord() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[index];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <>
      {displayed}
      <span className="animate-pulse">|</span>
    </>
  );
}

// Animated neural network canvas
function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const NODE_COUNT = 18;
    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 3 + 2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Signals travelling along edges
    const signals = [];
    const SIGNAL_SPEED = 0.012;

    const getEdges = () => {
      const edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) edges.push([i, j, dist]);
        }
      }
      return edges;
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.04;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      const edges = getEdges();

      // Spawn new signal occasionally
      if (frame % 40 === 0 && edges.length > 0) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        signals.push({ from: e[0], to: e[1], t: 0 });
      }

      // Draw edges
      edges.forEach(([i, j]) => {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = (1 - dist / 160) * 0.18;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `hsla(160, 84%, 39%, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw & advance signals
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.t += SIGNAL_SPEED;
        if (sig.t >= 1) { signals.splice(s, 1); continue; }
        const a = nodes[sig.from], b = nodes[sig.to];
        const x = a.x + (b.x - a.x) * sig.t;
        const y = a.y + (b.y - a.y) * sig.t;
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 7);
        grd.addColorStop(0, "hsla(160,84%,39%,0.9)");
        grd.addColorStop(1, "hsla(160,84%,39%,0)");
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(n.pulse) * 0.5 + 0.5;
        // Glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 4 + pulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160,84%,39%,${0.06 + pulse * 0.06})`;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160,84%,39%,${0.5 + pulse * 0.5})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ opacity: 0.3 }}
    />
  );
}

// Live AI ticker items
const TICKER_ITEMS = [
  "Transcription accuracy: 99.2%",
  "Lines processed today: 1.2M+",
  "Inventory predictions: Live",
  "Latency: <200ms",
  "HIPAA compliance: Active",
  "Models running: 3",
];

function AiTicker() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TICKER_ITEMS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-2"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
      <span className="text-xs font-mono text-primary/80">{TICKER_ITEMS[idx]}</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center pt-16 overflow-hidden relative">
      {/* Subtle radial bg glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">

        {/* Left — copy */}
        <div>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">AI-Native · Built in Coimbatore · Serving India</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.18)} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-heading max-w-4xl">
            Autonomous Intelligence<br />
            for Indian{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-primary bg-clip-text text-transparent"><TypingWord /></span>
          </motion.h1>

          <motion.p {...fadeUp(0.28)} className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            From automating global clinical documentation for MTSOs to powering autonomous inventory for domestic pharmacies — we build the technology that runs the backbone of Indian enterprise.
          </motion.p>

          {/* Live AI status ticker */}
          <motion.div {...fadeUp(0.32)} className="flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-card/70 backdrop-blur-sm mb-8 w-fit">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Live</span>
            <div className="w-px h-4 bg-border" />
            <AiTicker />
          </motion.div>

          <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Explore our Platforms <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-bold text-base hover:bg-muted transition-colors"
            >
              Our Coimbatore Hub
            </Link>
          </motion.div>

          {/* Slim metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.55, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 pt-8 border-t border-border"
          >
            {[
              { value: "99.2%", label: "Transcription accuracy", color: "text-primary" },
              { value: "40%", label: "Stockout reduction", color: "text-primary" },
              { value: "<200ms", label: "Avg. latency", color: "text-primary" },
              { value: "HIPAA", label: "Compliant & aligned", color: "text-primary" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-4">
                {i > 0 && <div className="hidden sm:block w-px h-6 bg-border" />}
                <div>
                  <span className={`text-lg font-extrabold ${s.color}`}>{s.value}</span>
                  <span className="text-sm text-muted-foreground ml-1.5">{s.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>



      </div>
    </section>
  );
}
