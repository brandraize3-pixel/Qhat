import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Mockup from "@/components/Mockup";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ErpShowcase from "@/components/ErpShowcase";
import { href, pad, site, t, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return { title: t(site.solutionsPage.kicker, (await params).locale as Locale) };
}

export default async function Solutions({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const p = site.solutionsPage;
  return (
    <>
      <PageHero locale={locale} kicker={p.kicker} title={p.title} sub={p.sub} />
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container"><ErpShowcase locale={locale} /></div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="grid grid--3">
            {p.modules.map((m, i) => (
              <div key={i} className={`card tone-${i % 6} reveal reveal-d${(i % 3) + 1}`}>
                <span className="card__num">{pad(i + 1)}</span>
                <div className="card__icon"><Icon name={m.icon} /></div>
                <h3>{t(m.title, locale)}</h3>
                <p>{t(m.text, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="reveal"><Mockup name="analytics" /></div>
          <div className="reveal reveal-d2">
            <span className="kicker">{t(p.kicker, locale)}</span>
            <h2 className="h2">{t(p.features_title, locale)}</h2>
            <ul className="checklist checklist--col">
              {p.features.map((f, i) => <li key={i}><span className="tick"><Icon name="check" /></span>{t(f, locale)}</li>)}
            </ul>
            <div style={{ marginTop: 32 }}>
              <Link href={href(locale, "packages")} className="btn btn--primary">{t(site.nav[5].label, locale)} <Icon name="arrow" className="flip" /></Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
