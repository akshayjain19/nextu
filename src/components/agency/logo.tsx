import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function AgencyLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col leading-none text-ink",
        className,
      )}
    >
      <span className="text-lg font-semibold tracking-tight">
        {siteConfig.name}
      </span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors group-hover:text-ink-muted">
        Studio
      </span>
    </Link>
  );
}
