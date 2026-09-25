type AnalyticsEvent =
  | "nav_cta_clicked"
  | "hero_primary_cta"
  | "hero_secondary_cta"
  | "project_case_study_clicked"
  | "service_selected"
  | "insight_opened"
  | "contact_form_started"
  | "contact_form_submitted"
  | "about_page_viewed";

type EventProperties = Record<string, string | number | boolean | undefined>;

export function trackEvent(
  event: AnalyticsEvent,
  properties?: EventProperties,
): void {
  if (typeof window === "undefined") return;

  const payload = { event, ...properties, timestamp: new Date().toISOString() };

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", payload);
  }

  void payload;
}
