"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionSection } from "@/components/ui/motion-section";
import { faqItems } from "@/data/faq";
import { trackEvent } from "@/lib/analytics";

export function Faq() {
  return (
    <MotionSection id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-2xl border border-border bg-card px-5 sm:px-6"
          onValueChange={(value) => {
            if (value) trackEvent("faq_opened", { faq_id: value });
          }}
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MotionSection>
  );
}
