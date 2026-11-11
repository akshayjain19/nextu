import { cn } from "@/lib/utils";
import Image from "next/image";

type TestimonialPortraitProps = {
  image: string;
  imagePosition?: string;
  alt: string;
  variant: "featured" | "supporting";
  className?: string;
};

export function TestimonialPortrait({
  image,
  imagePosition = "50% 20%",
  alt,
  variant,
  className,
}: TestimonialPortraitProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden bg-elevated ring-1 ring-border transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/30",
        variant === "featured"
          ? "aspect-[4/5] w-full max-w-[280px] rounded-[2rem] shadow-xl shadow-black/25 sm:max-w-[320px] lg:max-w-none"
          : "aspect-[3/4] w-full max-w-[200px] rounded-[1.5rem] shadow-lg shadow-black/20 md:w-[180px] md:max-w-[180px]",
        className,
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{ objectPosition: imagePosition }}
        sizes={
          variant === "featured"
            ? "(max-width:768px) 280px, 360px"
            : "(max-width:768px) 200px, 180px"
        }
        priority={variant === "featured"}
      />
    </div>
  );
}
