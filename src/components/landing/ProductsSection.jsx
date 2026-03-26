import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "nuscript",
    label: "MedScribeAI",
    badge: "Global Pillar · Healthcare",
    tagline: "Documentation at the Speed of Thought.",
    target: "Built exclusively for Indian MTSOs serving the US Healthcare market.",
    description:
      "Complete removal of manual transcription. Our platform transforms dictation into structured clinical reports with unbeatable speed and 99%+ accuracy.",
    cta: "Scale Your MTSO",
    href: "/nuscriptai",
    accentColor: "#0BDA51",
    dotColor: "#0BDA51",
  },
  {
    id: "pharma",
    label: "PharmaStockAI",
    badge: "Domestic Pillar · Pharma",
    tagline: "Precision Inventory. Zero Waste.",
    target: "Built for Indian Pharmacies & Distributors serving the population of India.",
    description:
      "An autonomous inventory engine that ends stockouts and eliminates expiry waste through predictive intelligence.",
    cta: "Optimize Your Pharmacy",
    href: "/pharmastockai",
    accentColor: "#0BDA51",
    dotColor: "#0BDA51",
  },
];

function ProductCard({ product, index }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={product.href}>
        <div
          className="relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer transition-all duration-500 h-full"
          style={{
            boxShadow: hovered
              ? `0 0 40px 0 rgba(37,99,235,0.18), 0 0 0 1px rgba(37,99,235,0.25)`
              : "none",
            borderColor: hovered ? "rgba(37,99,235,0.3)" : undefined,
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-1 w-full transition-all duration-500"
            style={{
              background: hovered
                ? `linear-gradient(90deg, ${product.accentColor}, ${product.accentColor}88)`
                : "hsl(var(--border))",
            }}
          />

          <div className="p-8 lg:p-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary mb-6">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.dotColor }} />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                {product.badge}
              </span>
            </div>

            {/* Label */}
            <h3
              className="font-unbounded text-2xl lg:text-3xl font-bold text-card-foreground mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              {product.label}
            </h3>

            {/* Tagline */}
            <p className="text-base font-semibold mb-2" style={{ color: product.accentColor }}>
              {product.tagline}
            </p>

            {/* Target */}
            <p className="text-xs text-muted-foreground tracking-wide mb-5">
              {product.target}
            </p>

            {/* Description */}
            <p className="text-sm font-jakarta mb-10" style={{ lineHeight: "1.7", color: "#D1D5DB" }}>
              {product.description}
            </p>

            {/* CTA */}
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 group"
              style={{
                background: hovered ? product.accentColor : "transparent",
                color: hovered ? "#0F172A" : product.accentColor,
                border: `1.5px solid ${product.accentColor}`,
              }}
            >
              {product.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#60A5FA" }}
          >
            Dual Engine Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-unbounded text-3xl lg:text-4xl font-bold text-foreground leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Two markets. Two purpose-built{" "}
            <span className="gradient-text">AI platforms.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}