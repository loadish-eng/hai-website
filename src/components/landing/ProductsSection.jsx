import React, { useState } from "react";
import { Server, Brain, Bot, Plus, Check } from "lucide-react";

const SECTION_CONTENT = {
  label: "HARDWARE LEDGER",
  headline: "Sovereign AI Infrastructure, Deployed",
  description:
    "Three core product tiers — from physical hardware to custom models to autonomous agents — plus revenue streams we enable for partners. Everything runs locally, everything stays yours.",
};

const PRODUCTS = [
  {
    number: "01",
    name: "Secure Onsite Hardware + Models",
    tagline: "Our core product",
    description:
      "We source, configure, and deploy high-performance local AI servers built for your environment. From delivery to production models in days, not months.",
    icon: Server,
    isCore: true,
    features: [
      {
        title: "Unified-Memory Systems",
        detail:
          "Hardware capable of running 70B+ parameter models comfortably, on-premise.",
      },
      {
        title: "Total Data Containment",
        detail: "Data never leaves your network or building.",
      },
      {
        title: "Air-Gapped Options",
        detail: "Available for maximum security and zero external exposure.",
      },
      {
        title: "Rapid Setup",
        detail: "From delivery to production models in days, not months.",
      },
      {
        title: "Scalable Clusters",
        detail: "Expand for higher concurrency or complex workloads.",
      },
    ],
  },
  {
    number: "02",
    name: "Custom AI Models & Fine-Tuning",
    tagline: "Your data, your intelligence",
    description:
      "Train or fine-tune open-weight models on your proprietary datasets so your AI truly knows your business — not a generic version of everyone else's.",
    icon: Brain,
    isCore: true,
    features: [
      {
        title: "Proprietary Fine-Tuning",
        detail:
          "Train on your documents, emails, financials, and internal procedures.",
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        detail: "Ground responses in your actual business knowledge.",
      },
      {
        title: "Tool-Calling Agents",
        detail: "Integrate with internal systems securely and reliably.",
      },
    ],
  },
  {
    number: "03",
    name: "AI Agents & Automation",
    tagline: "Autonomous, on-premise",
    description:
      "Deploy autonomous agents that operate on your local infrastructure — analyzing, monitoring, and orchestrating work without exposing data externally.",
    icon: Bot,
    isCore: true,
    features: [
      {
        title: "Document Analysis",
        detail: "Autonomous analysis and summarization at scale.",
      },
      {
        title: "Compliance & Risk",
        detail: "Automated compliance checking and risk flagging.",
      },
      {
        title: "Financial Modeling",
        detail: "Portfolio monitoring and financial modeling agents.",
      },
      {
        title: "Workflow Orchestration",
        detail: "Internal knowledge assistants and process automation.",
      },
      {
        title: "Custom Agents",
        detail:
          "Tailored to PE diligence, operations, or industry-specific processes.",
      },
    ],
  },
];

const ADDITIONAL_REVENUE = [
  {
    title: "White-Labeled AI Tools",
    description:
      "Enable AI tools for your clients or portfolio companies under your own brand.",
  },
  {
    title: "Usage-Based Billing",
    description:
      "Internal chargebacks and usage-based billing models for cost allocation across teams.",
  },
  {
    title: "Ongoing Optimization",
    description:
      "Continuous model refresh, performance tuning, and infrastructure optimization services.",
  },
];

export default function ProductsSection({ productImages }) {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="products" className="relative py-24 lg:py-32">
      {/* Circuit Trace */}
      <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-primary/20" />

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

        {/* Core Products */}
        <div className="space-y-6">
          {PRODUCTS.map((product, idx) => {
            const isActive = activeProduct === idx;
            return (
              <div
                key={product.number}
                className="group bg-card border border-border rounded overflow-hidden transition-all duration-300"
                onMouseEnter={() => setActiveProduct(idx)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left — Title Block */}
                  <div className="relative p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/50 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <product.icon
                        size={20}
                        className={
                          isActive ? "text-primary" : "text-muted-foreground"
                        }
                      />
                      <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                        {product.number}
                      </span>
                      {product.isCore && (
                        <span className="px-2 py-0.5 border border-primary/30 rounded font-mono text-[9px] tracking-[0.2em] text-primary">
                          CORE
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-black text-xl lg:text-2xl text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="font-mono text-xs tracking-wider text-accent mb-4">
                      {product.tagline.toUpperCase()}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                      {product.description}
                    </p>
                  </div>

                  {/* Right — Features List */}
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                      {product.features.map((feature) => (
                        <div key={feature.title} className="flex items-start gap-3">
                          <div className="mt-0.5 w-4 h-4 flex-shrink-0 flex items-center justify-center border border-primary/40 rounded-sm">
                            <Check size={10} className="text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground mb-1">
                              {feature.title}
                            </div>
                            <div className="text-xs text-muted-foreground leading-relaxed">
                              {feature.detail}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Revenue Streams */}
        <div className="mt-20 lg:mt-28">
          <div className="flex items-center gap-2 mb-4">
            <Plus size={14} className="text-accent" />
            <span className="font-mono text-xs tracking-[0.3em] text-accent">
              ADDITIONAL REVENUE STREAMS
            </span>
          </div>
          <h3 className="font-heading font-black text-2xl lg:text-3xl text-foreground mb-4 max-w-3xl">
            Revenue Streams We Enable for You — or Support as Partners
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-2xl">
            Beyond the core deployment, we help you turn your local AI infrastructure
            into a revenue-generating asset.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30 rounded overflow-hidden">
            {ADDITIONAL_REVENUE.map((item) => (
              <div key={item.title} className="bg-card p-8 lg:p-10 group">
                <div className="mb-6 w-8 h-8 flex items-center justify-center border border-accent/30 rounded">
                  <Plus size={14} className="text-accent" />
                </div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}