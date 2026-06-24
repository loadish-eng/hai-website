import React from "react";
import { ShieldCheck, HardDrive, Cpu, Lock, Wifi, Eye } from "lucide-react";

const SECTION_CONTENT = {
  label: "SECURITY PROTOCOL",
  headline: "Your Data Never Leaves Your Building",
  description:
    "Every byte of your proprietary data, every model weight, every inference result — physically contained within hardware you own and control. No cloud providers. No third-party access. No exposure surface.",
  pillars: [
    {
      icon: ShieldCheck,
      title: "Physical Isolation",
      description:
        "Air-gapped deployment options with zero external network dependencies. Your AI operates in a sealed environment.",
      metric: "ZERO ATTACK SURFACE",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description:
        "Hardware-level AES-256 encryption across all storage and compute channels. Keys never leave your enclave.",
      metric: "AES-256 HARDWARE",
    },
    {
      icon: Cpu,
      title: "Local Inference",
      description:
        "Run models at full capacity without sending a single token to external servers. Complete computational sovereignty.",
      metric: "100% ON-PREMISE",
    },
    {
      icon: HardDrive,
      title: "Data Residency",
      description:
        "Meet any compliance requirement with data that is physically present in your jurisdiction.",
      metric: "FULL COMPLIANCE, FULL CONTROL",
    },
    {
      icon: Wifi,
      title: "Network Independence",
      description:
        "Operate AI workloads during outages or bandwidth constraints. Your intelligence is always online and free to use.",
      metric: "ZERO DOWNTIME, ZERO TOKEN COST",
    },
    {
      icon: Eye,
      title: "Data Monitor",
      description:
        "Full hardware and software audit trails. Know exactly what processes access your data, when, and why.",
      metric: "COMPLETE VISIBILITY",
    },
  ],
};

export default function SecuritySection() {
  return (
    <section id="security" className="relative py-24 lg:py-32">
      {/* Circuit Trace */}
      <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
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

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {SECTION_CONTENT.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-background p-8 lg:p-10 hover:bg-card transition-colors duration-300"
            >
              {/* Icon */}
              <div className="mb-6 w-10 h-10 flex items-center justify-center border border-border rounded group-hover:border-primary/50 transition-colors duration-300">
                <pillar.icon
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Metric */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary font-medium">
                  {pillar.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}