import site from "@/content/site.json";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
/** A bilingual string: [arabic, english] */
export type T = string[];

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

export function t(x: T | string, l: Locale): string {
  return typeof x === "string" ? x : x[l === "ar" ? 0 : 1];
}

export function href(l: Locale, slug = ""): string {
  return `/${l}${slug ? `/${slug}` : ""}`;
}

export function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export { site };
