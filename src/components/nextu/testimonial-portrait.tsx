import { cn } from "@/lib/utils";
import Image from "next/image";

type TestimonialPortraitProps = {
  image: string;
  imagePosition?: string;
  alt: string;
  variant: "featured" | "supporting" | "compact";
  crop?: "default" | "organic";
  className?: string;
};

export function TestimonialPortrait({
  image,
  imagePosition = "50% 20%",
  alt,
  variant,
  crop = "default",
  className,
}: TestimonialPortraitProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-canvas-sky ring-1 ring-navy/5 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-cobalt/15",
        variant === "featured"
          ? "aspect-[4/5] min-h-[300px] rounded-[2rem] shadow-xl shadow-navy/12 sm:min-h-[420px] lg:min-h-[480px]"
          : variant === "compact"
            ? "aspect-[3/4] min-h-[140px] w-[112px] shrink-0 rounded-2xl shadow-md shadow-navy/10 sm:w-[128px]"
            : "aspect-[3/4] min-h-[200px] rounded-[1.5rem] shadow-lg shadow-navy/10 sm:min-h-[240px]",
        crop === "organic" && variant === "supporting" && "rounded-[2rem_2rem_3rem_1.25rem]",
        className,
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        style={{ objectPosition: imagePosition }}
        sizes={
          variant === "featured"
            ? "(max-width:768px) 92vw, 42vw"
            : variant === "compact"
              ? "128px"
              : "(max-width:768px) 45vw, 22vw"
        }
        priority={variant === "featured"}
      />
    </div>
  );
}
