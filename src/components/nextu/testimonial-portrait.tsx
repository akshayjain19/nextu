import { cn } from "@/lib/utils";
import Image from "next/image";

type TestimonialPortraitProps = {
  image?: string;
  alt: string;
  variant: "featured" | "supporting";
  className?: string;
};

/** Abstract editorial silhouette when no real image is supplied */
function PlaceholderSilhouette({ variant }: { variant: "featured" | "supporting" }) {
  return (
    <svg
      viewBox="0 0 320 400"
      className="h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="tp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
        <linearGradient id="tp-figure" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0c1a3a" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="320" height="400" fill="url(#tp-bg)" />
      <ellipse cx="160" cy="340" rx="120" ry="28" fill="#2563eb" opacity="0.12" />
      <circle cx="160" cy={variant === "featured" ? 130 : 140} r={variant === "featured" ? 52 : 44} fill="url(#tp-figure)" />
      <path
        d={
          variant === "featured"
            ? "M85 220 Q160 175 235 220 L250 380 L70 380 Z"
            : "M95 230 Q160 195 225 230 L235 380 L85 380 Z"
        }
        fill="url(#tp-figure)"
        opacity="0.92"
      />
    </svg>
  );
}

export function TestimonialPortrait({
  image,
  alt,
  variant,
  className,
}: TestimonialPortraitProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-canvas-sky shadow-lg shadow-navy/10",
        variant === "featured"
          ? "aspect-[4/5] min-h-[280px] rounded-[2rem] sm:min-h-[360px]"
          : "aspect-[3/4] min-h-[200px] rounded-[1.5rem]",
        className,
      )}
    >
      {image ? (
        <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width:768px) 90vw, 40vw" />
      ) : (
        <>
          <PlaceholderSilhouette variant={variant} />
          <span className="absolute bottom-3 left-3 rounded-full bg-surface/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-soft">
            Portrait placeholder
          </span>
        </>
      )}
    </div>
  );
}
