import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          This page is a placeholder. A full privacy policy will be published
          before launch.
        </p>
      </main>
      <Footer />
    </>
  );
}
