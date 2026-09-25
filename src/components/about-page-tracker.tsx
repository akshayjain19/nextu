"use client";

import { trackEvent } from "@/lib/analytics";
import { useEffect } from "react";

export function AboutPageTracker() {
  useEffect(() => {
    trackEvent("about_page_viewed");
  }, []);
  return null;
}
