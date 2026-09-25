import { TestimonialAvatarIllustration } from "@/components/nextu/testimonial-avatar-illustrations";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TestimonialPortraitProps = {
  image?: string;
  avatarKey: string;
  alt: string;
  variant: "featured" | "supporting" | "compact";
  className?: string;
};

export function TestimonialPortrait({
  image,
  avatarKey,
  alt,
  variant,
  className,
}: TestimonialPortraitProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-canvas-sky ring-1 ring-navy/5 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-cobalt/15",
        variant === "featured"
          ? "aspect-[4/5] min-h-[260px] rounded-[2rem] shadow-xl shadow-navy/12 sm:min-h-[380px]"
          : variant === "compact"
            ? "aspect-square min-h-[120px] w-[120px] shrink-0 rounded-2xl shadow-md shadow-navy/10"
            : "aspect-[3/4] min-h-[180px] rounded-[1.5rem] shadow-lg shadow-navy/10 sm:min-h-[220px]",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes={
            variant === "featured"
              ? "(max-width:768px) 90vw, 45vw"
              : "(max-width:768px) 40vw, 25vw"
          }
        />
      ) : (
        <TestimonialAvatarIllustration avatarKey={avatarKey} />
      )}
    </div>
  );
}
