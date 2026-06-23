import React from "react";
import { ArrowDown, Shield, Lock, Server } from "lucide-react";

const HERO_CONTENT = {
  topLabel: "SYSTEM STATUS: ACTIVE",
  headlineLeft: "LOCAL INTELLIGENCE.",
  headlineRight: "ABSOLUTE SOVEREIGNTY.",
  description:
    "Deploy AI models on-premise with enterprise-grade hardware that keeps your data, your models, and your competitive advantage entirely within your infrastructure. Zero cloud dependency. Total control.",
  ctaLabel: "INITIALIZE DEPLOYMENT",
  ctaSecondaryLabel: "VIEW HARDWARE",
  stats: [
    { value: "100%", label: "DATA LOCALITY", icon: Shield },
    { value: "0", label: "CLOUD EXPOSURE", icon: Lock },
    { value: "∞", label: "SCALABILITY", icon: Server },
  ],
};

export default function HeroSection({ heroImage }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="AI server hardware with glowing circuit traces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Circuit Trace Decoration */}
      <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-primary/40" />
      <div className="absolute top-0 left-8 w-2 h-2 rounded-full bg-primary/40 mt-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24 pt-32">
        {/* Status Label */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            {HERO_CONTENT.topLabel}
          </span>
        </div>

        {/* Split Headline */}
        <div className="mb-8 lg:mb-12">
          <h1 className="font-heading font-black text-foreground leading-none">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {HERO_CONTENT.headlineLeft}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 text-primary">
              {HERO_CONTENT.headlineRight}
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
          {HERO_CONTENT.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-24">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 bg-primary text-primary-foreground font-mono text-xs font-bold tracking-widest rounded hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            {HERO_CONTENT.ctaLabel}
          </button>
          <button
            onClick={() => scrollTo("#products")}
            className="px-8 py-4 border border-border text-foreground font-mono text-xs font-bold tracking-widest rounded hover:border-primary hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            {HERO_CONTENT.ctaSecondaryLabel}
          </button>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 border-t border-border/50 pt-8">
          {HERO_CONTENT.stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon size={16} className="text-primary" />
              <div>
                <div className="font-mono text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo("#security")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="text-primary/60" />
      </button>
    </section>
  );
}