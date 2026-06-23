import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// ⚙️ CUSTOMIZE: Change this to the email address where you want to receive submissions
const NOTIFICATION_EMAIL = "lifeofloadish@gmail.com";

// ⚙️ CUSTOMIZE: Point this at whatever form backend you want to use.
// Set VITE_CONTACT_FORM_ENDPOINT in your .env file (see .env.example) to any
// endpoint that accepts a JSON POST body, e.g.:
//   - A Netlify Function / AWS Lambda / Cloudflare Worker you write yourself
//   - A form-as-a-service provider (Formspree, Getform, Web3Forms, etc.)
// If no endpoint is configured, the form falls back to opening the visitor's
// email client with a pre-filled message via a mailto: link, so it still
// works out of the box with zero backend required.
const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "";

const SECTION_CONTENT = {
  label: "SECURE UPLINK",
  headline: "Initialize Your Deployment",
  description:
    "Start the conversation about bringing AI infrastructure in-house. Our engineering team will assess your requirements and architect a deployment plan tailored to your security and performance needs.",
  formFields: [
    { name: "name", label: "FULL NAME", type: "text", placeholder: "Enter your name" },
    { name: "email", label: "EMAIL", type: "email", placeholder: "you@company.com" },
    { name: "company", label: "ORGANIZATION", type: "text", placeholder: "Your company name" },
    {
      name: "useCase",
      label: "USE CASE",
      type: "select",
      options: [
        "Select deployment type",
        "LLM Inference Infrastructure",
        "Training LLM Models",
        "Secure Data Pipeline",
        "Full-Stack AI Platform",
        "Other",
      ],
    },
    {
      name: "message",
      label: "PROJECT BRIEF",
      type: "textarea",
      placeholder: "Describe your AI infrastructure requirements, current stack, and security constraints...",
    },
  ],
  submitLabel: "INITIALIZE DEPLOYMENT",
  successMessage: "Uplink established. Our engineering team will respond within 24 hours.",
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildMessageBody = () =>
    [
      "New project inquiry received via the H.A.I contact form.",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Organization: ${formData.company}`,
      `Use Case: ${formData.useCase}`,
      "",
      "Project Brief:",
      formData.message || "(no message provided)",
    ].join("\n");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitError("");

    try {
      if (CONTACT_FORM_ENDPOINT) {
        // Send to whatever backend the site owner has configured.
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: NOTIFICATION_EMAIL,
            subject: `[H.A.I] New Deployment Inquiry — ${formData.company || formData.name}`,
            ...formData,
          }),
        });

        if (!response.ok) {
          throw new Error(`Form endpoint responded with status ${response.status}`);
        }
      } else {
        // No backend configured — fall back to opening the user's email client.
        const subject = encodeURIComponent(
          `[H.A.I] New Deployment Inquiry — ${formData.company || formData.name}`
        );
        const body = encodeURIComponent(buildMessageBody());
        window.location.href = `mailto:${NOTIFICATION_EMAIL}?subject=${subject}&body=${body}`;
      }

      setSending(false);
      setSubmitted(true);
    } catch (err) {
      setSending(false);
      setSubmitError("Something went wrong sending your message. Please try again or email us directly.");
      console.error("Contact form submission failed:", err);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Circuit Trace */}
      <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-primary/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary">
                {SECTION_CONTENT.label}
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {SECTION_CONTENT.headline}
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-12">
              {SECTION_CONTENT.description}
            </p>

            {/* Terminal Decoration */}
            <div className="bg-card border border-border rounded p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="text-muted-foreground space-y-1">
                <p>
                  <span className="text-primary">$</span> sovereign-ai --init
                  deployment
                </p>
                <p>
                  <span className="text-muted-foreground/60">
                    → Scanning infrastructure requirements...
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground/60">
                    → Security protocols: ACTIVE
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground/60">
                    → Data locality: VERIFIED
                  </span>
                </p>
                <p>
                  <span className="text-primary">
                    → Ready for project initialization_
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle size={48} className="text-primary mb-6" />
                <p className="font-mono text-sm text-primary tracking-wider mb-2">
                  UPLINK ESTABLISHED
                </p>
                <p className="text-muted-foreground text-sm max-w-sm">
                  {SECTION_CONTENT.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="flex items-start gap-2 p-3 rounded bg-destructive/10 text-destructive text-sm">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}
                {SECTION_CONTENT.formFields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block font-mono text-[10px] tracking-[0.2em] text-muted-foreground mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full bg-transparent border-0 border-b border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 transition-colors duration-300 resize-none pb-2 focus:outline-none"
                      />
                    ) : field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-border text-foreground text-sm focus:border-primary focus:ring-0 transition-colors duration-300 pb-2 focus:outline-none"
                      >
                        {field.options.map((opt, i) => (
                          <option
                            key={opt}
                            value={i === 0 ? "" : opt}
                            disabled={i === 0}
                            className="bg-card text-foreground"
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent border-0 border-b border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 transition-colors duration-300 pb-2 focus:outline-none"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full mt-8 py-4 bg-primary text-primary-foreground font-mono text-xs font-bold tracking-[0.3em] rounded hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      {SECTION_CONTENT.submitLabel}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}