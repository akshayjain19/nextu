"use client";

import { AnimatedButton } from "@/components/nextu/animated-button";
import { AnimatedInput, AnimatedTextarea } from "@/components/nextu/animated-field";
import { AnimatedSelect } from "@/components/nextu/animated-select";
import { trackEvent } from "@/lib/analytics";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

type Errors = Partial<Record<"expertType" | "requirement", string>>;

export function LeadForm() {
  const [expertValue, setExpertValue] = useState("");
  const [expertLabel, setExpertLabel] = useState("");
  const [requirement, setRequirement] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const startedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  function markStarted() {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("lead_form_started");
    }
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!expertValue) next.expertType = "Choose an expert type.";
    if (!requirement.trim()) {
      next.requirement = "Tell us what you need help with.";
    }
    return next;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const payload = {
      expertType: expertLabel || expertValue,
      requirement,
      name: name.trim() || undefined,
    };

    trackEvent("lead_form_completed");
    trackEvent("whatsapp_cta_clicked");
    openWhatsAppChat(payload);

    toast.message("WhatsApp opened — send the message to connect with NextU.", {
      duration: 5000,
    });
  }

  return (
    <motion.div
      id="lead-form"
      className="scroll-mt-28 rounded-2xl border border-white/60 bg-surface/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur-md sm:p-5"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15 }}
    >
      <h2 className="text-base font-semibold tracking-tight sm:text-lg">Find the right expert</h2>
      <form
        className="mt-3.5 space-y-[1.125rem]"
        onSubmit={onSubmit}
        noValidate
        onFocus={markStarted}
      >
        <AnimatedSelect
          value={expertValue}
          onChange={(v, l) => {
            setExpertValue(v);
            setExpertLabel(l);
            setErrors((e) => ({ ...e, expertType: undefined }));
          }}
          label="What kind of expert are you looking for?"
          error={errors.expertType}
        />
        <AnimatedTextarea
          name="requirement"
          label="What do you need help with?"
          placeholder="Tell us briefly what you're looking for..."
          rows={3}
          value={requirement}
          onChange={(e) => {
            setRequirement(e.target.value);
            setErrors((err) => ({ ...err, requirement: undefined }));
          }}
          error={errors.requirement}
        />
        <AnimatedInput
          name="name"
          label="Your name"
          optional
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <div className="pt-1.5">
          <AnimatedButton type="submit" size="form" className="w-full sm:w-full">
            Continue on WhatsApp →
          </AnimatedButton>
          <p className="mt-2 text-center text-[11px] text-ink-soft sm:text-left">
            Opens WhatsApp with your request ready to send.
          </p>
        </div>
      </form>
      <p className="mt-4 border-t border-border/60 pt-3 text-center text-xs text-ink-muted sm:text-left">
        No sign-up. No booking. Just tell us what you need.
      </p>
    </motion.div>
  );
}
