import { Capabilities } from "@/components/agency/capabilities";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: `Product, web, mobile, AI, and consulting services from ${siteConfig.name}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <div className="pt-28 pb-8">
        <Container>
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight">
              End-to-end product capability.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Engage across the stack—or plug us in where you need depth.
            </p>
          </Reveal>
        </Container>
      </div>
      <Capabilities />
    </main>
  );
}
