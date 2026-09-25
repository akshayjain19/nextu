import { cn } from "@/lib/utils";
import Image from "next/image";

const accentByCategory: Record<string, string> = {
  Aviation: "from-sky-200/80 via-cobalt/30 to-navy/90",
  Medicine: "from-teal-100/90 via-cobalt/25 to-navy/85",
  Psychology: "from-indigo-100/80 via-sky-200/40 to-navy/88",
};

type FounderPortraitProps = {
  name: string;
  category: string;
  initials: string;
  image?: string;
  variant: "hero" | "secondary";
  className?: string;
};

export function FounderPortrait({
  name,
  category,
  initials,
  image,
  variant,
  className,
}: FounderPortraitProps) {
  const gradient = accentByCategory[category] ?? accentByCategory.Aviation;

  return (
    <div
      className={cn(
        "relative overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-navy/25 transition-shadow duration-300 group-hover:shadow-cobalt/20",
        variant === "hero"
          ? "aspect-[4/5] min-h-[320px] rounded-[2rem] sm:min-h-[420px] lg:min-h-[480px]"
          : "aspect-[3/4] min-h-[240px] rounded-[1.75rem] sm:min-h-[280px]",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={`${name}, NextU founder`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={variant === "hero" ? "(max-width:768px) 92vw, 40vw" : "(max-width:768px) 45vw, 22vw"}
        />
      ) : (
        <div
          className={cn(
            "flex h-full w-full flex-col items-center justify-end bg-gradient-to-br p-8 pb-12 text-center",
            gradient,
          )}
          aria-hidden
        >
          <span className="font-serif text-[clamp(3rem,12vw,5.5rem)] font-semibold leading-none text-white/25">
            {initials}
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            {category}
          </p>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-60"
        aria-hidden
      />
    </div>
  );
}
