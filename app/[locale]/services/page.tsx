import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { pad, site, t, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return { title: t(site.servicesPage.kicker, (await params).locale as Locale) };
}

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const p = site.servicesPage;
  return (
    <>
      <PageHero locale={locale} kicker={p.kicker} title={p.title} sub={p.sub} />
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          {site.services.map((s, i) => (
            <div key={s.slug} id={s.slug} className="svc-block" style={{ scrollMarginTop: 110 }}>
              <div className="reveal">
                <span className="svc-block__num">{pad(i + 1)} / {pad(site.services.length)}</span>
                <h2>{t(s.title, locale)}</h2>
                <p>{t(s.text, locale)}</p>
                <h3 style={{ fontSize: 15, color: "var(--blue)", marginTop: 26, fontWeight: 500 }}>{t(site.ui.deliverables, locale)}</h3>
                <div className="tags">
                  {s.items.map((it, j) => <span key={j} className="tag"><Icon name="check" />{t(it, locale)}</span>)}
                </div>
              </div>
              <div className="svc-block__visual reveal reveal-d2" aria-hidden="true">
                <div className="svc-block__icon"><Icon name={s.icon} /></div>
                <span className="svc-block__big">{pad(i + 1)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
