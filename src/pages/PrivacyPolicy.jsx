import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    title: "1. Introduction",
    content: 'NuScript Technologies Private Limited ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website nuscript.in and use our platforms, including NuScriptAI and PharmaStockAI.',
  },
  {
    title: "2. Information We Collect",
    items: [
      { label: "Personal Data", text: "Name, email address, phone number, and professional designation provided during account registration or inquiries." },
      { label: "Business Data", text: "Pharmacy inventory data, transcription workflows, and clinical documentation processing details." },
      { label: "Usage Data", text: "IP addresses, browser types, and interaction logs collected automatically via cookies to improve platform performance." },
    ],
  },
  {
    title: "3. Purpose of Collection",
    intro: "We process your data to:",
    bullets: [
      "Provide and maintain our autonomous AI services.",
      "Automate clinical documentation and pharmacy inventory workflows.",
      "Communicate updates, security alerts, and support responses.",
      "Comply with legal obligations under Indian law.",
    ],
  },
  {
    title: "4. Data Protection & Security",
    content: "In accordance with the Digital Personal Data Protection Act, 2023, we implement robust technical and organizational measures, including AES-256 encryption and secure access controls, to protect your data from unauthorized access or breaches.",
  },
  {
    title: "5. Data Sharing & Third Parties",
    content: "We do not sell your personal data. Data may be shared with trusted service providers (e.g., cloud hosting) solely to facilitate our services, or with legal authorities if required by law.",
  },
  {
    title: "6. Your Rights (Data Principal Rights)",
    intro: "Under Indian law, you have the right to:",
    bullets: [
      "Request access to or a summary of your personal data.",
      "Correct or update inaccurate information.",
      "Request erasure of data that is no longer necessary for the specified purpose.",
      "Withdraw consent at any time.",
    ],
  },
  {
    title: "7. Grievances",
    content: null,
    grievance: true,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-24 max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-medium tracking-widest uppercase mb-4 text-primary">Legal</p>
        <h1 className="font-heading text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Effective: March 25, 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h2>
              {s.content && <p className="text-sm leading-relaxed text-muted-foreground">{s.content}</p>}
              {s.grievance && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  If you have questions or grievances regarding your data, please contact us at{" "}
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
              {s.intro && <p className="text-sm text-muted-foreground mb-2">{s.intro}</p>}
              {s.bullets && (
                <ul className="list-disc list-inside space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm leading-relaxed text-muted-foreground">{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            See also:{" "}
            <Link to="/terms" className="text-primary hover:underline">Terms of Use</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
