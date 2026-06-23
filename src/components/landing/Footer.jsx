import React from "react";

const FOOTER_CONTENT = {
  brand: "H.A.I",
  tagline:
    "Local intelligence infrastructure for enterprises that refuse to compromise on data sovereignty.",
  columns: [
    {
      title: "OFFERINGS",
      links: [
        { label: "Secure Onsite Hardware", href: "#products" },
        { label: "Custom Models & Fine-Tuning", href: "#products" },
        { label: "AI Agents & Automation", href: "#products" },
        { label: "Revenue Streams", href: "#products" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "#about" },
        { label: "Security", href: "#security" },
        { label: "Contact", href: "#contact" },
        { label: "Careers", href: "#contact" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Documentation", href: "#contact" },
        { label: "Compliance", href: "#security" },
        { label: "Case Studies", href: "#about" },
        { label: "API Reference", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#contact" },
    { label: "Terms of Service", href: "#contact" },
    { label: "Security Policy", href: "#security" },
  ],
  copyright: "© 2025 Sovereign AI. All rights reserved.",
};

export default function Footer() {
  const handleClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-sm font-bold tracking-widest text-foreground">
                {FOOTER_CONTENT.brand}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>

          {/* Link Columns */}
          {FOOTER_CONTENT.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
            {FOOTER_CONTENT.copyright}
          </p>
          <div className="flex gap-6">
            {FOOTER_CONTENT.legalLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="font-mono text-[10px] tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}