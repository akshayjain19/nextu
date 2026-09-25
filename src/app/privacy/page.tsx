import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="pt-28 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-6 text-ink-muted">Placeholder — publish full policy before launch.</p>
      </Container>
    </main>
  );
}
