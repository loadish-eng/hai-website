import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Security", href: "#security" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const BRAND_NAME = "H.A.I";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm font-bold tracking-widest text-foreground">
              {BRAND_NAME}
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-4 py-2 text-sm font-mono tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="ml-4 px-5 py-2 bg-primary text-primary-foreground font-mono text-xs font-bold tracking-widest rounded hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              INITIALIZE
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left px-4 py-3 font-mono text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors border-b border-border/50 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="mt-4 w-full py-3 bg-primary text-primary-foreground font-mono text-xs font-bold tracking-widest rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              INITIALIZE DEPLOYMENT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}