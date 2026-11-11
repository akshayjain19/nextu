import { NextUFooter } from "@/components/nextu/footer";
import { NextUNavbar } from "@/components/nextu/navbar";
import { JsonLd } from "@/components/json-ld";
import { Providers } from "@/components/providers";
import { brandAssets } from "@/lib/brand";
import { siteConfig } from "@/lib/config";
import { SITE_URL } from "@/lib/site-url";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const editorial = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const metadataBaseUrl = siteConfig.url?.trim() || SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: `${siteConfig.name} — Life Design & Transformation`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Life Design & Transformation",
    "find the right expert",
    "personal growth experts",
    "career coach",
    "confidence building",
    "communication coach",
    "nutritionist",
    "fitness coach",
    "mental health professional",
    "life clarity",
    "goal mapping",
    "relationship management",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Life Design & Transformation`,
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
    title: `${siteConfig.name} — Life Design & Transformation`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${editorial.variable} h-full antialiased`}>
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
