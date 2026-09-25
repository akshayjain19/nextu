"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";
import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [started, setStarted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || message.trim().length < 20) {
      toast.error("Please complete all fields (message at least 20 characters).");
      return;
    }
    trackEvent("contact_form_submitted");
    const subject = encodeURIComponent(`Project inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client", {
      description: "Send the message to reach our team.",
    });
  }

  return (
    <form
      className="mt-10 space-y-6"
      onSubmit={handleSubmit}
      onFocus={() => {
        if (!started) {
          setStarted(true);
          trackEvent("contact_form_started");
        }
      }}
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          id="name"
          className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Project details</label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="What are you building? Timeline, team, constraints..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit">Send inquiry</Button>
    </form>
  );
}
