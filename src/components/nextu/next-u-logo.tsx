import { brandAssets } from "@/lib/brand";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type NextULogoProps = {
  /** Full horizontal logo or U-mark crop from the same official asset */
  variant?: "full" | "mark";
  className?: string;
  /** Omit or null for non-link display */
  href?: string | null;
  priority?: boolean;
  /** Navbar / compact contexts */
  context?: "default" | "nav";
};

const MARK_WIDTH = 863;
const MARK_HEIGHT = 597;

export function NextULogo({
  variant = "full",
  className,
  href = "/",
  priority = false,
  context = "default",
}: NextULogoProps) {
  const isMark = variant === "mark";
  const src = isMark ? brandAssets.mark : brandAssets.logo;

  const image = (
    <Image
      src={src}
      alt="NextU"
      width={isMark ? MARK_WIDTH : brandAssets.logoWidth}
      height={isMark ? MARK_HEIGHT : brandAssets.logoHeight}
      className={cn(
        "block h-auto w-auto max-w-none object-contain object-left",
        isMark
          ? "max-h-9 max-w-9 sm:max-h-10 sm:max-w-10"
          : context === "nav"
            ? "h-9 w-auto sm:h-10 lg:h-11"
            : "h-10 w-auto sm:h-11",
        className,
      )}
      priority={priority}
      sizes={
        isMark
          ? "40px"
          : context === "nav"
            ? "(max-width: 640px) 160px, 200px"
            : "(max-width: 640px) 180px, 220px"
      }
    />
  );

  if (href === undefined || href === null) {
    return <span className="inline-flex shrink-0 items-center overflow-visible">{image}</span>;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center overflow-visible rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt/40"
      aria-label="NextU home"
    >
      {image}
    </Link>
  );
}
