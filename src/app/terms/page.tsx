import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="pt-28 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-navy">Terms of Service</h1>
        <p className="mt-6 text-ink-muted">Placeholder — publish counsel-reviewed terms before launch.</p>
      </Container>
    </main>
  );
}
