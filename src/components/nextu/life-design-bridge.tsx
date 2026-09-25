import { lifeDesignIntro } from "@/data/interventions";
import { Reveal } from "@/components/ui/reveal";

export function LifeDesignBridge() {
  const Icon = lifeDesignIntro.icon;
  return (
    <section className="border-y border-border/60 bg-surface py-14 sm:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:gap-10 sm:px-8 lg:px-10">
        <Reveal className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-canvas-sky text-cobalt-deep">
          <Icon className="size-7" aria-hidden />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cobalt-deep">
            {lifeDesignIntro.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {lifeDesignIntro.title}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">{lifeDesignIntro.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
