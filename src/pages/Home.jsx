import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SecuritySection from "@/components/landing/SecuritySection";
import ProductsSection from "@/components/landing/ProductsSection";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

import heroImage from "@/assets/images/hero-infrastructure.svg";
import serverImage from "@/assets/images/product-server.svg";
import gpuImage from "@/assets/images/product-gpu.svg";
import edgeImage from "@/assets/images/product-edge.svg";
import storageImage from "@/assets/images/product-storage.svg";
import aboutImage from "@/assets/images/about-facility.svg";

// ⚙️ CUSTOMIZE: Swap these for your own product/marketing photography.
// They live in src/assets/images and are bundled at build time, so there
// are no external image dependencies to worry about when self-hosting.
const IMAGES = {
  hero: heroImage,
  server: serverImage,
  gpu: gpuImage,
  edge: edgeImage,
  storage: storageImage,
  about: aboutImage,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <SecuritySection />
      <ProductsSection
        productImages={{
          server: IMAGES.server,
          gpu: IMAGES.gpu,
          edge: IMAGES.edge,
          storage: IMAGES.storage,
        }}
      />
      <AboutSection aboutImage={IMAGES.about} />
      <ContactSection />
      <Footer />
    </div>
  );
}