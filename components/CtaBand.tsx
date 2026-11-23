import Link from "next/link";
import Icon from "./Icon";
import { href, site, t, type Locale } from "@/lib/i18n";

export default function CtaBand({ locale }: { locale: Locale }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mark-white.png" alt="" className="cta__mark" aria-hidden="true" />
          <div>
            <h2>{t(site.home.cta_title, locale)}</h2>
            <p>{t(site.home.cta_sub, locale)}</p>
          </div>
          <div className="cta__btns">
            <Link href={href(locale, "contact")} className="btn btn--light">{t(site.ui.cta_consult, locale)} <Icon name="arrow" className="flip" /></Link>
            <Link href={href(locale, "services")} className="btn btn--ghost">{t(site.ui.cta_services, locale)}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
