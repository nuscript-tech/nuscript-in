import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Parses a value like "99%+", "10x", "5–8%", "100%", "24/7" into numeric + suffix
function parseValue(value) {
  // Special cases: non-numeric like "24/7", "10x"
  if (value === "24/7") return { type: "static", display: value };
  if (value.endsWith("x")) return { type: "count", from: 0, to: parseInt(value), suffix: "x" };
  if (value.includes("–")) {
    // Range like "5–8%"
    const [a, b] = value.replace("%", "").split("–").map(Number);
    return { type: "range", from: a, to: b, suffix: "%" };
  }
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  return { type: "count", from: 0, to: numeric, suffix };
}

export default function AnimatedStat({ value, label, labelStyle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!isInView || parsed.type === "static") return;

    const duration = 1800;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      if (parsed.type === "range") {
        const currentA = (parsed.from + (parsed.from * eased)).toFixed(0);
        const currentB = (parsed.from + (parsed.to - parsed.from) * eased).toFixed(0);
        // Actually animate just the end value
        const valA = Math.round(parsed.from + (0) * eased); // keep start fixed
        const valB = Math.round(parsed.from + (parsed.to - parsed.from) * eased);
        setDisplay(`${parsed.from}–${valB}${parsed.suffix}`);
      } else {
        const current = parsed.from + (parsed.to - parsed.from) * eased;
        const formatted = Number.isInteger(parsed.to)
          ? Math.round(current).toString()
          : current.toFixed(1);
        setDisplay(`${formatted}${parsed.suffix}`);
      }

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <div ref={ref}>
      <p className="font-unbounded text-2xl font-bold" style={{ color: "#059669" }}>
        {display}
      </p>
      <p className="text-xs mt-1 max-w-[120px] leading-snug" style={labelStyle || { color: "#94A3B8" }}>
        {label}
      </p>
    </div>
  );
}