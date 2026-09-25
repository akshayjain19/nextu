const INDIAN_MOBILE_REGEX = /^(\+91[\s-]?)?[6-9]\d{9}$/;

export function normalizeIndianPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (digits.length === 10) return `+91 ${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2)}`;
  }
  return input.trim();
}

export function isValidIndianPhone(input: string): boolean {
  const trimmed = input.trim().replace(/\s/g, "");
  return INDIAN_MOBILE_REGEX.test(trimmed);
}
