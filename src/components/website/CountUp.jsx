import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Parses a value like "25+", "99.2%", "4", "CBE" — animates numeric part
function parseValue(val) {
  const match = val.match(/^([\d.]+)(.*)$/);
  if (!match) return { numeric: null, suffix: val };
  return { numeric: parseFloat(match[1]), suffix: match[2] };
}

export default function CountUp({ value, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");
  const { numeric, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView || numeric === null) {
      setDisplayed(value);
      return;
    }
    const duration = 1600;
    const start = Date.now();
    const isFloat = suffix.includes(".");

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      const formatted = numeric % 1 !== 0 ? current.toFixed(1) : Math.floor(current).toString();
      setDisplayed(formatted + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView]);

  return <span ref={ref} className={className}>{displayed}</span>;
}
