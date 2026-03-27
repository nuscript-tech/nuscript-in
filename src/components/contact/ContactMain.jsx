import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Phone, CheckSquare, Square, Linkedin } from "lucide-react";

const paths = [
  { id: "nuscript", label: "MedScribeAI for MTSOs", sub: "Automating manual transcription workflows" },
  { id: "pharma", label: "PharmaStockAI for Retail/Distribution", sub: "Predictive inventory management" },
  { id: "partner", label: "Strategic Partnerships / Fintech", sub: "Exploring future collaborations" },
];

export default function ContactMain() {
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id) => setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-16 lg:py-24 border-t" style={{ borderColor: "rgba(16,185,129,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT — Address & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#10B981" }}>Our Base</p>
            <h2 className="font-unbounded text-2xl lg:text-3xl font-bold mb-8" style={{ color: "#F1F5F9" }}>
             Coimbatore <span style={{ color: "#00BFFF" }}>HQ</span>
            </h2>

            {/* Dark Map Placeholder */}
            <div
              className="relative rounded-2xl overflow-hidden mb-8"
              style={{ height: 220, background: "#0C1829", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mapgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#10B981" strokeWidth="0.8"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#10B981" strokeWidth="0.4" opacity="0.5" strokeDasharray="6 4" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#10B981" strokeWidth="0.4" opacity="0.5" strokeDasharray="6 4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-4 h-4 rounded-full animate-pulse" style={{ background: "#10B981", boxShadow: "0 0 16px #10B981" }} />
                <span className="text-xs font-medium" style={{ color: "#10B981" }}>Tristar Towers, Avinashi Road</span>
                <a
                  href="https://maps.google.com/?q=Tristar+Towers,+Avinashi+Road,+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: "#94A3B8" }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Address Block */}
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#10B981" }} />
                <div>
                   <p className="text-sm font-semibold mb-1" style={{ color: "#F1F5F9" }}>NuScript Technologies Private Limited</p>
                   <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                     657 Tristar Towers, East Wing<br />
                     3rd Floor, Avinashi Road<br />
                     Coimbatore, Tamil Nadu 641037, India
                   </p>
                 </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#10B981" }} />
                <p className="text-sm" style={{ color: "#94A3B8" }}>Monday – Friday: 9:00 AM – 6:00 PM IST</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#10B981" }} />
                <a href="mailto:hello@nuscript.in" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "#94A3B8" }}>hello@nuscript.in</a>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#10B981" }} />
                <a href="tel:+919363724729" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "#94A3B8" }}>+91 93637 24729</a>
              </div>
              <div className="flex gap-3 pt-1">
                <Linkedin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#10B981" }} />
                <a href="https://linkedin.com/company/nuscript-technologies" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "#94A3B8" }}>
                  linkedin.com/company/nuscript-technologies
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#10B981" }}>Inquiry</p>
            <h2 className="font-unbounded text-2xl lg:text-3xl font-bold mb-8" style={{ color: "#F1F5F9" }}>
             Choose Your <span style={{ color: "#00BFFF" }}>Path</span>
            </h2>

            {submitted ? (
              <div className="rounded-2xl p-10 text-center border" style={{ background: "rgba(16,185,129,0.06)", borderColor: "rgba(16,185,129,0.25)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(16,185,129,0.15)" }}>
                  <CheckSquare className="w-7 h-7" style={{ color: "#10B981" }} />
                </div>
                <h3 className="font-unbounded text-xl font-bold mb-3" style={{ color: "#F1F5F9" }}>Message Received.</h3>
                <p className="text-sm" style={{ color: "#94A3B8" }}>Our team will reach out within 24 hours. You'll hear from us at <strong style={{ color: "#E2E8F0" }}>{form.email}</strong>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Path Selector */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7B8FA0" }}>I am interested in:</p>
                  <div className="space-y-3">
                    {paths.map((p) => {
                      const active = selected.includes(p.id);
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => toggle(p.id)}
                          className="w-full flex items-start gap-3 px-4 py-3.5 rounded-xl border text-left transition-all duration-200"
                          style={{
                            background: active ? "rgba(16,185,129,0.1)" : "rgba(16,185,129,0.03)",
                            borderColor: active ? "rgba(16,185,129,0.5)" : "rgba(16,185,129,0.15)",
                          }}
                        >
                          {active
                             ? <CheckSquare className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                             : <Square className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#94A3B8" }} />
                           }
                          <div>
                            <p className="text-sm font-semibold" style={{ color: active ? "#F1F5F9" : "#94A3B8" }}>{p.label}</p>
                            <p className="text-xs mt-0.5" style={{ color: "#7B8FA0" }}>{p.sub}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormInput label="Name & Designation" name="name" placeholder="e.g. Dr. Ramesh / CEO" value={form.name} onChange={handleChange} required />
                  <FormInput label="Company Name" name="company" placeholder="MTSO / Pharmacy Name" value={form.company} onChange={handleChange} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormInput label="Work Email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                  <FormInput label="Phone Number" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7B8FA0" }}>
                    How can we help your business scale?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your current workflow, team size, and what you're looking to achieve..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none transition-all duration-200 placeholder-[#2A3A4F]"
                    style={{
                       background: "#0C1829",
                       border: "1px solid rgba(16,185,129,0.2)",
                       color: "#E2E8F0",
                     }}
                     onFocus={(e) => e.target.style.borderColor = "#10B981"}
                     onBlur={(e) => e.target.style.borderColor = "rgba(16,185,129,0.2)"}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #10B981, #0EA572)", color: "#0F172A" }}
                >
                  Send Inquiry →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormInput({ label, name, type = "text", placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7B8FA0" }}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder-[#2A3A4F]"
        style={{
           background: "#0C1829",
           border: `1px solid ${focused ? "#10B981" : "rgba(16,185,129,0.2)"}`,
           color: "#E2E8F0",
         }}
      />
    </div>
  );
}