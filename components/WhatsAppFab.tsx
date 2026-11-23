import { site, t, type Locale } from "@/lib/i18n";
import { SocialGlyph } from "./SocialIcon";

/** Floating WhatsApp button shown on every page. */
export default function WhatsAppFab({ locale }: { locale: Locale }) {
  const wa = site.brand.social.find((s) => s.key === "whatsapp");
  if (!wa) return null;
  const label = t(site.ui.chat_whatsapp, locale);
  return (
    <a href={wa.url} className="wa-fab" aria-label={label} target="_blank" rel="noopener noreferrer">
      <span className="wa-fab__icon"><SocialGlyph name="whatsapp" /></span>
      <span className="wa-fab__label">{label}</span>
    </a>
  );
}
