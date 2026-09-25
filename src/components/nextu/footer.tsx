import { NextULogo } from "@/components/nextu/next-u-logo";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function NextUFooter() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 sm:flex-row sm:justify-between sm:px-8 lg:px-10">
        <div>
          <NextULogo variant="full" className="max-h-11" />
          <p className="mt-3 max-w-sm text-sm text-ink-muted">{siteConfig.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-muted">
          <Link href="/#lead-form" className="hover:text-cobalt">Find an Expert</Link>
          <Link href="/about" className="hover:text-cobalt">About Us</Link>
          <Link href="/privacy" className="hover:text-cobalt">Privacy</Link>
          <Link href="/terms" className="hover:text-cobalt">Terms</Link>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-[1280px] px-5 text-xs text-ink-soft sm:px-8 lg:px-10">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}
