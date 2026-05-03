import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";
import ScrollToTopButton from "@/components/website/ScrollToTopButton";
import ScrollProgressBar from "@/components/website/ScrollProgressBar";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.55, ease: "easeOut" },
});

const interests = [
  { id: "medscribe", label: "MedScribeAI for MTSOs", sub: "Automating manual transcription workflows" },
  { id: "pharma", label: "PharmaStockAI for Retail/Distribution", sub: "Predictive inventory management" },
  { id: "partnership", label: "Strategic Partnerships / Fintech", sub: "Exploring future collaborations" },
];

export default function Contact() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO page="contact" />
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Coimbatore-Based · Globally Delivered</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.18)} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-heading max-w-4xl">
            Let's Build the Future of India's{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-primary bg-clip-text text-transparent">Infrastructure.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.26)} className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Whether you are looking to automate your MTSO workflow or optimize your Pharmacy operations, our Coimbatore-based engineering team is ready to help you scale.
          </motion.p>
          <motion.div {...fadeUp(0.34)}>
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-colors"
            >
              Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* HQ + Inquiry */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: HQ Info */}
          <motion.div {...fadeUp()}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Base</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mb-8">Coimbatore HQ</h2>

            <div className="bg-card border border-border rounded-2xl p-7 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-extrabold text-heading mb-1">NuScript Technologies Private Limited</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    657 Tristar Towers, East Wing<br />
                    3rd Floor, Avinashi Road<br />
                    Coimbatore, Tamil Nadu 641037, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Tristar+Towers,+Avinashi+Road,+Coimbatore"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-2 hover:underline"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a href="mailto:hello@nuscript.in" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">hello@nuscript.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a href="tel:+919363724729" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">+91 93637 24729</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a href="https://linkedin.com/company/nuscript-technologies" target="_blank" rel="noreferrer" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    linkedin.com/company/nuscript-technologies
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Inquiry Form */}
          <motion.div {...fadeUp(0.1)} id="inquiry">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Inquiry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mb-8">Choose Your Path</h2>

            {submitted ? (
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-heading mb-2">Inquiry Sent!</h3>
                <p className="text-muted-foreground text-sm">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Interest selector */}
                <div>
                  <p className="text-sm font-bold text-heading mb-3">I am interested in:</p>
                  <div className="space-y-3">
                    {interests.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelected(opt.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                          selected === opt.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        <p className="text-sm font-bold text-heading">{opt.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{opt.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Name & Designation"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                  <input
                    required
                    placeholder="Company Name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Work Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                  <input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help your business scale?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-colors"
                >
                  Send Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Founder's Direct */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="bg-card border border-border rounded-2xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Founder's Direct</span>
            </div>
            <blockquote className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed mb-6 max-w-3xl">
              "We value deep partnerships over vendor contracts."
            </blockquote>
            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              If you are a large-scale distributor or an MTSO processing over <strong className="text-foreground">1 million lines monthly</strong>, reach out directly to discuss enterprise-grade integration and custom workflows.
            </p>
            <a
              href="mailto:arvind.manohar@nuscript.in"
              className="inline-flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors group"
            >
              <div>
                <p className="text-sm font-extrabold text-heading">Founder's Office</p>
                <p className="text-sm text-primary">arvind.manohar@nuscript.in</p>
                <p className="text-xs text-muted-foreground mt-0.5">Enterprise & strategic discussions only</p>
              </div>
              <ArrowRight className="w-4 h-4 text-primary sm:ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-8 text-sm text-muted-foreground">
              Looking for our US Operations? Visit{" "}
              <a href="https://nuscripthealth.com" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">
                NuScript Health
              </a>.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
