import { NextUFooter } from "@/components/nextu/footer";
import { NextUNavbar } from "@/components/nextu/navbar";
import { JsonLd } from "@/components/json-ld";
import { Providers } from "@/components/providers";
import { brandAssets } from "@/lib/brand";
import { siteConfig } from "@/lib/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Find the Right Expert`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "find an expert",
    "find the right expert",
    "connect with experts",
    "expert network",
    "find professionals online",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Find the Right Expert`,
    description: siteConfig.description,
    images: [
      {
        url: brandAssets.logo,
        width: brandAssets.logoWidth,
        height: brandAssets.logoHeight,
        alt: "NextU",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Find the Right Expert`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>
          <NextUNavbar />
          <div className="flex-1">{children}</div>
          <NextUFooter />
        </Providers>
      </body>
    </html>
  );
}
