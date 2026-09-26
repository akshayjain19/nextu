import { Container } from "@/components/ui/container";
import type { ReactNode } from "react";

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalDocument({ title, lastUpdated, children }: LegalDocumentProps) {
  return (
    <main className="pt-28 pb-24">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-cobalt-deep">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-ink-muted">Last updated: {lastUpdated}</p>
        <div className="prose-legal mt-10 space-y-10 text-ink-muted">{children}</div>
      </Container>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-navy">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed">{children}</div>
    </section>
  );
}
