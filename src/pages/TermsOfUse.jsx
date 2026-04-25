import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: 'By accessing nuscript.in, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please discontinue use of our services immediately.',
  },
  {
    title: "2. Use of Services",
    items: [
      { label: "NuScriptAI", text: "Users must ensure that all dictations and clinical data uploaded comply with healthcare privacy standards (including HIPAA where applicable)." },
      { label: "PharmaStockAI", text: "Users are responsible for the accuracy of inventory data provided to the platform." },
      { label: "Prohibited Acts", text: "You agree not to reverse-engineer, decompile, or attempt to extract the source code of our AI models." },
    ],
  },
  {
    title: "3. Intellectual Property",
    content: 'All content, trademarks, and AI proprietary logic on this website are the exclusive property of NuScript Technologies Private Limited. Unauthorized use of the "NuScript" brand or "PharmaStockAI" name is strictly prohibited.',
  },
  {
    title: "4. Limitation of Liability",
    content: 'While our AI platforms strive for "Unbeatable Accuracy," our services are provided "as is." NuScript Technologies shall not be liable for any indirect or consequential losses resulting from automated documentation or inventory predictions. Professional human oversight is recommended for final clinical and financial decisions.',
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
    contact: true,
  },
];

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-24 max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-medium tracking-widest uppercase mb-4 text-primary">Legal</p>
        <h1 className="font-heading text-4xl font-bold mb-2">Terms of Use</h1>
        <p className="text-sm text-muted-foreground mb-12">Effective: March 25, 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h2>
              {s.content && <p className="text-sm leading-relaxed text-muted-foreground">{s.content}</p>}
              {s.contact && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For legal inquiries, please reach out to{" "}
                  <a href="mailto:legal@nuscript.in" className="text-primary hover:underline">legal@nuscript.in</a>.
                </p>
              )}
              {s.items && (
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item.label} className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">{item.label}:</span> {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            See also:{" "}
            <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
