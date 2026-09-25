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
  imagePosition?: string;
  className?: string;
};

export function FounderPortrait({
  name,
  category,
  initials,
  image,
  imagePosition = "50% 20%",
  className,
}: FounderPortraitProps) {
  const gradient = accentByCategory[category] ?? accentByCategory.Aviation;

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] ring-1 ring-white/20 shadow-lg shadow-navy/20 transition-shadow duration-300 group-hover:shadow-cobalt/15",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={`${name}, NextU founder`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width:768px) 90vw, 30vw"
        />
      ) : (
        <div
          className={cn(
            "flex h-full w-full flex-col items-center justify-end bg-gradient-to-br p-6 pb-10 text-center",
            gradient,
          )}
          aria-hidden
        >
          <span className="font-serif text-[clamp(2.5rem,8vw,4rem)] font-semibold leading-none text-white/25">
            {initials}
          </span>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
            {category}
          </p>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-70"
        aria-hidden
      />
    </div>
  );
}
