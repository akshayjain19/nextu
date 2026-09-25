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
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-6 leading-relaxed text-ink-muted">
          Placeholder policy—publish a full privacy policy before collecting
          personal data at scale.
        </p>
      </Container>
    </main>
  );
}
