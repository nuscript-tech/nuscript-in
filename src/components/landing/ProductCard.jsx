import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40"
    >
      {/* Top color bar */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(90deg, ${product.gradientFrom}, ${product.gradientTo})`
            : "hsl(var(--border))",
        }}
      />

      <div className="p-8 lg:p-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary mb-6">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: product.dotColor }}
          />
          <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
            {product.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-unbounded text-xl lg:text-2xl font-bold text-card-foreground mb-3">
          {product.name}
        </h3>

        {/* Subtitle */}
        <p className="text-sm font-medium text-primary mb-4">{product.tagline}</p>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Market tag */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">
            {product.market}
          </span>
          <motion.div
            animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  if (product.href) {
    return <Link to={product.href}>{card}</Link>;
  }
  return card;
}
