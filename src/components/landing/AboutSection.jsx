import React from "react";
import { Users, Award, Wrench, Clock } from "lucide-react";

const SECTION_CONTENT = {
  label: "THE MANIFEST",
  headline: "Engineering Partners, Not Consultants",
  description:
    "We don't advise from the sidelines. We design, build, deploy, and maintain the physical AI infrastructure that keeps your intelligence proprietary and your operations sovereign.",
  pullQuote: {
    text: "Your models are your moat. We make that moat",
    highlight: "UNHACKABLE",
    suffix: ".",
  },
  values: [
    {
      title: "Hardware-First Philosophy",
      description:
        "Every recommendation starts with the silicon. We architect from the chip up, ensuring maximum performance per watt and per dollar for your specific workloads.",
    },
    {
      title: "Zero-Trust Architecture",
      description:
        "Our deployments assume breach. Every component is isolated, encrypted, and auditable. We build infrastructure that is secure by design, not by hope.",
    },
    {
      title: "Full-Stack Ownership",
      description:
        "From procurement to rack installation to model optimization to ongoing maintenance — we own the entire lifecycle so you can focus on building intelligence.",
    },
    {
      title: "Open Standards",
      description:
        "No vendor lock-in. No proprietary black boxes. We build on open hardware specifications and open-source software stacks that you can audit, modify, and own.",
    },
  ],
  stats: [
    { value: "200+", label: "DEPLOYMENTS", icon: Wrench },
    { value: "99.97%", label: "UPTIME SLA", icon: Clock },
    { value: "50+", label: "ENGINEERS", icon: Users },
    { value: "0", label: "DATA BREACHES", icon: Award },
  ],
};

export default function AboutSection({ aboutImage }) {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Circuit Trace */}
      <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              {SECTION_CONTENT.label}
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 max-w-3xl">
            {SECTION_CONTENT.headline}
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl">
            {SECTION_CONTENT.description}
          </p>
        </div>

        {/* Pull Quote */}
        <div className="mb-16 lg:mb-24 border-l-2 border-primary/30 pl-8 lg:pl-12">
          <blockquote className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight">
            {SECTION_CONTENT.pullQuote.text}{" "}
            <span className="text-primary">
              {SECTION_CONTENT.pullQuote.highlight}
            </span>
            {SECTION_CONTENT.pullQuote.suffix}
          </blockquote>
        </div>

        {/* Image + Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          {/* Image */}
          <div className="relative rounded overflow-hidden h-64 lg:h-auto lg:min-h-[400px]">
            <img
              src={aboutImage}
              alt="Data center control room with server racks"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Values */}
          <div className="space-y-8">
            {SECTION_CONTENT.values.map((value, idx) => (
              <div key={value.title} className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
                {idx < SECTION_CONTENT.values.length - 1 && (
                  <div className="mt-8 h-px bg-border/30 ml-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded overflow-hidden">
          {SECTION_CONTENT.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card p-8 lg:p-10 text-center"
            >
              <stat.icon
                size={18}
                className="text-primary mx-auto mb-4"
              />
              <div className="font-mono text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}