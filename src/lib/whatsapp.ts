import { siteConfig } from "@/lib/config";

export type LeadFormPayload = {
  expertType: string;
  requirement: string;
  name?: string;
};

export function formatWhatsAppMessage(data: LeadFormPayload): string {
  const nameLine = data.name?.trim()
    ? `\nMy name is ${data.name.trim()}.\n`
    : "\n";

  return `Hi NextU 👋

I'm looking for a ${data.expertType}.

I need help with:
${data.requirement.trim()}
${nameLine}
I'd like to connect with the right expert.`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppChat(data: LeadFormPayload): void {
  const url = buildWhatsAppUrl(formatWhatsAppMessage(data));
  window.open(url, "_blank", "noopener,noreferrer");
}
