import { User } from "lucide-react";

/**
 * Placeholder for founder content — replace image, name, credentials, and bio when available.
 */
export function FounderPlaceholder() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-8 sm:p-10">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-8">
        <div
          className="flex size-24 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground"
          aria-hidden
        >
          <User className="size-10 opacity-40" />
        </div>
        <div className="mt-6 sm:mt-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Founder
          </p>
          <h3 className="mt-2 text-xl font-semibold text-muted-foreground">
            Founder name coming soon
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Credentials will be added here.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A short biography will appear in this space once founder information
            is finalized.
          </p>
        </div>
      </div>
    </div>
  );
}
