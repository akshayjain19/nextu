type AnalyticsEvent =
  | "hero_cta_clicked"
  | "lead_form_started"
  | "expert_category_selected"
  | "lead_form_completed"
  | "whatsapp_cta_clicked"
  | "faq_opened"
  | "about_page_viewed";

export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean | undefined>,
): void {
  if (typeof window === "undefined") return;
  const payload = { event, ...properties, timestamp: new Date().toISOString() };
  if (process.env.NODE_ENV === "development") console.debug("[analytics]", payload);
}
