import Link from "next/link";
import { href, site, t, type Locale, type T } from "@/lib/i18n";

export default function PageHero({ locale, kicker, title, sub }: { locale: Locale; kicker: T; title: T; sub?: T }) {
  return (
    <section className="page-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/mark-gradient.png" alt="" className="page-hero__mark" aria-hidden="true" />
      <div className="container">
        <div className="crumbs">
          <Link href={href(locale)}>{t(site.nav[0].label, locale)}</Link>
          <span aria-hidden="true">/</span>
          <span>{t(kicker, locale)}</span>
        </div>
        <span className="kicker">{t(kicker, locale)}</span>
        <h1>{t(title, locale)}</h1>
        {sub ? <p>{t(sub, locale)}</p> : null}
      </div>
    </section>
  );
}
