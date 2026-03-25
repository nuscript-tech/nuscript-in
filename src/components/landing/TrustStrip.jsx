import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TrustStrip() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(8, 207, 101, 0.08) 0%, rgba(8, 207, 101, 0.04) 100%)",
            borderColor: "rgba(8, 207, 101, 0.3)"
          }}
        >
          {/* Ambient glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-[0.08] blur-3xl" style={{ background: "#059669" }} />
          
          <div className="relative px-8 lg:px-12 py-12 lg:py-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-unbounded text-3xl lg:text-4xl font-bold text-foreground mb-5"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to Automate Your Operations?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground font-jakarta mb-10 text-base lg:text-lg max-w-2xl mx-auto"
              style={{ lineHeight: "1.7" }}
            >
              Join the leaders in the MTSO and Pharma sectors who are moving from manual to autonomous.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                style={{ color: "#FFFFFF" }}
              >
                Contact Our Experts
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}