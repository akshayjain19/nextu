import type { NextConfig } from "next";

function buildPublicSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    try {
      return new URL(
        explicit.includes("://") ? explicit : `https://${explicit}`,
      ).origin;
    } catch {
      /* fall through */
    }
  }
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "https://nextu-nu.vercel.app";
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: buildPublicSiteUrl(),
  },
};

export default nextConfig;
