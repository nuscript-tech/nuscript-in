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
    title: "1. Introduction",
    content: `NuScript Technologies Private Limited ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website nuscript.in and use our platforms, including MedScribeAI and PharmaStockAI.`,
  },
  {
    title: "2. Information We Collect",
    items: [
      "Personal Data: Name, email address, phone number, and professional designation provided during account registration or inquiries.",
      "Business Data: Pharmacy inventory data, transcription workflows, and clinical documentation processing details.",
      "Usage Data: IP addresses, browser types, and interaction logs collected automatically via cookies to improve platform performance.",
    ],
  },
  {
    title: "3. Purpose of Collection",
    intro: "We process your data to:",
    items: [
      "Provide and maintain our autonomous AI services.",
      "Automate clinical documentation and pharmacy inventory workflows.",
      "Communicate updates, security alerts, and support responses.",
      "Comply with legal obligations under Indian law.",
    ],
  },
  {
    title: "4. Data Protection & Security",
    content: `In accordance with the Digital Personal Data Protection Act, 2023, we implement robust technical and organizational measures, including AES-256 encryption and secure access controls, to protect your data from unauthorized access or breaches.`,
  },
  {
    title: "5. Data Sharing & Third Parties",
    content: `We do not sell your personal data. Data may be shared with trusted service providers (e.g., cloud hosting) solely to facilitate our services, or with legal authorities if required by law.`,
  },
  {
    title: "6. Your Rights (Data Principal Rights)",
    intro: "Under Indian law, you have the right to:",
    items: [
      "Request access to or a summary of your personal data.",
      "Correct or update inaccurate information.",
      "Request erasure of data that is no longer necessary for the specified purpose.",
      "Withdraw consent at any time.",
    ],
  },
  {
    title: "7. Grievances",
    content: `If you have questions or grievances regarding your data, please contact us at legal@nuscript.in.`,
    email: "legal@nuscript.in",
  },
];

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                    {s.email
                      ? s.content.replace(s.email, "").trim().replace(/at$/, "at ")
                      : s.content}
                    {s.email && (
                      <> <a href={`mailto:${s.email}`} className="text-primary font-semibold hover:underline">{s.email}</a>.</>
                    )}
                  </p>
                )}
                {s.intro && <p className="text-base text-muted-foreground mb-3">{s.intro}</p>}
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

          <motion.div {...fadeUp(0.5)} className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link to="/terms" className="text-primary font-semibold hover:underline">Terms of Use</Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
