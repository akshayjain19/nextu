"use client";

import { AnimatedButton } from "@/components/nextu/animated-button";
import { AnimatedInput, AnimatedTextarea } from "@/components/nextu/animated-field";
import { AnimatedSelect } from "@/components/nextu/animated-select";
import { trackEvent } from "@/lib/analytics";
import { isValidIndianPhone, normalizeIndianPhone } from "@/lib/validation";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

type Errors = Partial<Record<"expertType" | "requirement" | "name" | "phone", string>>;

export function LeadForm() {
  const [expertValue, setExpertValue] = useState("");
  const [expertLabel, setExpertLabel] = useState("");
  const [requirement, setRequirement] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const reduceMotion = useReducedMotion();

  function validate(): Errors {
    const next: Errors = {};
    if (!expertValue) next.expertType = "Please select an expert type";
    if (!requirement.trim() || requirement.trim().length < 10) {
      next.requirement = "Please describe your need (at least 10 characters)";
    }
    if (!name.trim() || name.trim().length < 2) next.name = "Please enter your name";
    if (!isValidIndianPhone(phone)) next.phone = "Enter a valid Indian WhatsApp number (+91)";
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
      name,
      phone: normalizeIndianPhone(phone),
      additionalInfo,
    };
    trackEvent("lead_form_completed");
    trackEvent("whatsapp_cta_clicked");
    openWhatsAppChat(payload);
    toast.success("Your request is ready.", {
      description: "We've opened WhatsApp so you can send it to NextU.",
      duration: 6000,
    });
  }

  return (
    <motion.div
      id="lead-form"
      className="scroll-mt-28 rounded-[1.75rem] border border-white/60 bg-surface/95 p-6 shadow-[var(--shadow-soft)] backdrop-blur-md sm:p-8"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15 }}
    >
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Find the right expert</h2>
      <p className="mt-1 text-sm text-ink-muted">A few details—we&apos;ll continue on WhatsApp.</p>
      <form
        className="mt-6 space-y-5"
        onSubmit={onSubmit}
        noValidate
        onFocus={() => trackEvent("lead_form_started")}
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
          rows={4}
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((err) => ({ ...err, name: undefined }));
            }}
            error={errors.name}
            autoComplete="name"
          />
          <AnimatedInput
            name="phone"
            label="WhatsApp number"
            type="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setErrors((err) => ({ ...err, phone: undefined }));
            }}
            error={errors.phone}
            autoComplete="tel"
          />
        </div>
        <AnimatedTextarea
          name="additionalInfo"
          label="Anything else we should know?"
          optional
          rows={3}
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
        <AnimatedButton type="submit" className="w-full sm:w-auto">
          Find My Expert →
        </AnimatedButton>
      </form>
    </motion.div>
  );
}
