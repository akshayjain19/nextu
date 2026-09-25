"use client";

import { AnimatedButton } from "@/components/animated-button";
import { AnimatedInput, AnimatedTextarea } from "@/components/animated-field";
import { AnimatedSelect } from "@/components/animated-select";
import { trackEvent } from "@/lib/analytics";
import { isValidIndianPhone, normalizeIndianPhone } from "@/lib/validation";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

type FormErrors = Partial<
  Record<"expertType" | "requirement" | "name" | "phone", string>
>;

export function LeadForm() {
  const [expertValue, setExpertValue] = useState("");
  const [expertLabel, setExpertLabel] = useState("");
  const [requirement, setRequirement] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [started, setStarted] = useState(false);
  const reduceMotion = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);

  function handleStart() {
    if (!started) {
      setStarted(true);
      trackEvent("lead_form_started");
    }
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!expertValue) next.expertType = "Please select an expert type";
    if (!requirement.trim() || requirement.trim().length < 10) {
      next.requirement = "Please describe your need (at least 10 characters)";
    }
    if (!name.trim() || name.trim().length < 2) {
      next.name = "Please enter your name";
    }
    if (!isValidIndianPhone(phone)) {
      next.phone = "Enter a valid Indian WhatsApp number (+91)";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload = {
      expertType: expertLabel || expertValue,
      requirement,
      name,
      phone: normalizeIndianPhone(phone),
      additionalInfo,
    };

    trackEvent("lead_form_completed");
    trackEvent("whatsapp_cta_clicked");
    openWhatsAppChat(payload);

    toast.success("Your request is ready.", {
      description:
        "We've opened WhatsApp so you can send it to NextU.",
      duration: 6000,
    });
  }

  return (
    <motion.div
      id="lead-form"
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-sm shadow-navy/5 sm:p-8"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Find the right expert
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Share a few details—we&apos;ll take it from there on WhatsApp.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
        onFocus={handleStart}
      >
        <AnimatedSelect
          value={expertValue}
          onChange={(val, label) => {
            setExpertValue(val);
            setExpertLabel(label);
            setErrors((e) => ({ ...e, expertType: undefined }));
          }}
          label="What kind of expert are you looking for?"
          error={errors.expertType}
        />

        <AnimatedTextarea
          name="requirement"
          label="What do you need help with?"
          placeholder="Tell us briefly what you're looking for..."
          value={requirement}
          onChange={(e) => {
            setRequirement(e.target.value);
            setErrors((err) => ({ ...err, requirement: undefined }));
          }}
          error={errors.requirement}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <AnimatedInput
            name="name"
            label="Your name"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((err) => ({ ...err, name: undefined }));
            }}
            error={errors.name}
          />
          <AnimatedInput
            name="phone"
            label="WhatsApp number"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setErrors((err) => ({ ...err, phone: undefined }));
            }}
            error={errors.phone}
          />
        </div>

        <AnimatedTextarea
          name="additionalInfo"
          label="Anything else we should know?"
          optional
          rows={3}
          placeholder="Timeline, budget, location preference, etc."
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />

        <AnimatedButton
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
        >
          Find My Expert →
        </AnimatedButton>
      </form>
    </motion.div>
  );
}
