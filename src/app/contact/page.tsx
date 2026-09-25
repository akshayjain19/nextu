import { ContactForm } from "@/components/agency/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${siteConfig.name}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-24">
      <Container className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            Tell us what you&apos;re building.
          </h1>
          <p className="mt-6 text-lg text-ink-muted">
            Share context on your product, team, and timeline. We typically
            respond within a few business days.
          </p>
          <p className="mt-8 text-sm text-ink-soft">
            Email directly:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-ink underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
