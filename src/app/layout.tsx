import { AgencyFooter } from "@/components/agency/footer";
import { AgencyNavbar } from "@/components/agency/navbar";
import { JsonLd } from "@/components/json-ld";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Product & Technology Studio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "product development studio",
    "technology agency",
    "web development",
    "mobile app development",
    "AI software",
    "UI UX design",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Product & Technology Studio`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Product & Technology Studio`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>
          <AgencyNavbar />
          <div className="flex-1">{children}</div>
          <AgencyFooter />
        </Providers>
      </body>
    </html>
  );
}
