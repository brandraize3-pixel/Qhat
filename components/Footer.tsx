import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { href, site, t, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Image src="/brand/logo-white.png" alt={t(site.brand.name, locale)} width={785} height={446} className="footer__logo" style={{ height: 64, width: "auto" }} />
            <p className="footer__about">{t(site.ui.footer_about, locale)}</p>
            <div className="footer__social" aria-label="Social">
              {["X", "in", "IG", "TT"].map((s) => (
                <a key={s} href="#" aria-label={s}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4>{t(site.ui.quick_links, locale)}</h4>
            <ul>
              {site.nav.map((n) => (
                <li key={n.key}><Link href={href(locale, n.href)}>{t(n.label, locale)}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t(site.ui.our_services, locale)}</h4>
            <ul>
              {site.services.map((s) => (
                <li key={s.slug}><Link href={`${href(locale, "services")}#${s.slug}`}>{t(s.title, locale)}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t(site.ui.contact_info, locale)}</h4>
            <ul className="footer__contact">
              <li><Icon name="globe" /><span dir="ltr">{site.brand.website}</span></li>
              <li><Icon name="mail" /><span dir="ltr">{site.brand.email}</span></li>
              <li><Icon name="call" /><span dir="ltr">{site.brand.phone}</span></li>
              <li><Icon name="pin" /><span>{t(site.brand.address, locale)}</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} {t(site.brand.name, locale)} — {t(site.ui.rights, locale)}</span>
          <div className="footer__legal">
            <span>{t(site.ui.cr, locale)}: <span dir="ltr">{site.brand.cr}</span></span>
            <span>{t(site.ui.vat, locale)}: <span dir="ltr">{site.brand.vat}</span></span>
            <span className="v2030">{t(site.ui.vision_badge, locale)}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
