"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 bg-canvas-sky/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">FAQ</h2>
        </Reveal>
        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-[1.75rem] border border-border bg-surface px-6"
          onValueChange={(v) => v && trackEvent("faq_opened", { faq_id: v })}
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
