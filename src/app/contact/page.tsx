import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          The fastest way to reach us is through the lead form on our homepage—it
          opens WhatsApp with your request pre-filled.
        </p>
        <Link
          href="/#lead-form"
          className="mt-6 inline-block text-primary font-medium hover:underline"
        >
          Find an expert →
        </Link>
      </main>
      <Footer />
    </>
  );
}
