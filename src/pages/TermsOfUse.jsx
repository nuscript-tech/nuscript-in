import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing nuscript.in, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please discontinue use of our services immediately.",
  },
  {
    title: "2. Use of Services",
    items: [
      "MedScribeAI: Users must ensure that all dictations and clinical data uploaded comply with healthcare privacy standards (including HIPAA where applicable).",
      "PharmaStockAI: Users are responsible for the accuracy of inventory data provided to the platform.",
      "Prohibited Acts: You agree not to reverse-engineer, decompile, or attempt to extract the source code of our AI models.",
    ],
  },
  {
    title: "3. Intellectual Property",
    content: `All content, trademarks, and AI proprietary logic on this website are the exclusive property of NuScript Technologies Private Limited. Unauthorized use of the "NuScript" brand or "PharmaStockAI" name is strictly prohibited.`,
  },
  {
    title: "4. Limitation of Liability",
    content: `While our AI platforms strive for "Unbeatable Accuracy," our services are provided "as is." NuScript Technologies shall not be liable for any indirect or consequential losses resulting from automated documentation or inventory predictions. Professional human oversight is recommended for final clinical and financial decisions.`,
  },
  {
    title: "5. Subscription & Payments",
    content: "Access to certain features requires a valid subscription. All fees are non-refundable unless stated otherwise in a specific Service Level Agreement (SLA).",
  },
  {
    title: "6. Termination",
    content: "We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activities.",
  },
  {
    title: "7. Governing Law & Jurisdiction",
    content: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.",
  },
  {
    title: "8. Contact Us",
    content: "For legal inquiries, please reach out to",
    email: "legal@nuscript.in",
  },
];

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp(0.05)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Legal</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-5xl font-extrabold text-heading mb-3">
            Terms of Use
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="text-sm text-muted-foreground mb-12">
            Effective: March 25, 2026
          </motion.p>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(0.1 + i * 0.05)}>
                <h2 className="text-xl font-extrabold text-heading mb-3">{s.title}</h2>
                {s.content && (
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {s.content}
                    {s.email && (
                      <> <a href={`mailto:${s.email}`} className="text-primary font-semibold hover:underline">{s.email}</a>.</>
                    )}
                  </p>
                )}
                {s.items && (
                  <ul className="space-y-2 ml-1">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.6)} className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link to="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy</Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
