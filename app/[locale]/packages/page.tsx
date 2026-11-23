import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { href, site, t, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return { title: t(site.packagesPage.kicker, (await params).locale as Locale) };
}

export default async function Packages({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const p = site.packagesPage;
  return (
    <>
      <PageHero locale={locale} kicker={p.kicker} title={p.title} sub={p.sub} />
      <section className="section" style={{ paddingTop: 130 }}>
        <div className="container pricing">
          {p.plans.map((pl, i) => (
            <div key={i} className={`plan reveal reveal-d${i + 1}${pl.popular ? " plan--popular" : ""}`}>
              {pl.popular ? <span className="plan__badge">{t(site.ui.popular, locale)}</span> : null}
              <h3>{t(pl.name, locale)}</h3>
              <p className="plan__for">{t(pl.for, locale)}</p>
              <div className="plan__price">
                {pl.price ? (
                  <><small>{t(site.ui.per_project, locale)}</small><strong dir="ltr">{pl.price}</strong><span>{t(site.ui.sar, locale)}</span></>
                ) : (
                  <><small>&nbsp;</small><strong>{t(p.custom, locale)}</strong></>
                )}
              </div>
              <ul>{pl.features.map((f, j) => <li key={j}><Icon name="check" />{t(f, locale)}</li>)}</ul>
              <Link href={href(locale, "contact")} className={`btn ${pl.popular ? "btn--light" : "btn--outline"}`}>{t(site.ui.choose, locale)}</Link>
            </div>
          ))}
        </div>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
