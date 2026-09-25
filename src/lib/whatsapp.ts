import { siteConfig } from "@/lib/config";

export type LeadFormPayload = {
  expertType: string;
  requirement: string;
  name: string;
  phone: string;
  additionalInfo?: string;
};

export function formatWhatsAppMessage(data: LeadFormPayload): string {
  const additional = data.additionalInfo?.trim()
    ? data.additionalInfo.trim()
    : "—";

  return `Hi NextU!

I'm looking for a ${data.expertType}.

I need help with:
${data.requirement.trim()}

Name:
${data.name.trim()}

WhatsApp:
${data.phone.trim()}

Additional information:
${additional}`;
}

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function openWhatsAppChat(data: LeadFormPayload): void {
  const message = formatWhatsAppMessage(data);
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
