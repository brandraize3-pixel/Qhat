import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { pad, site, t, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return { title: t(site.about.kicker, (await params).locale as Locale) };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const a = site.about;
  return (
    <>
      <PageHero locale={locale} kicker={a.kicker} title={a.title} sub={a.sub} />

      <section className="section">
        <div className="container about-intro">
          <div className="reveal">
            <span className="kicker">{t(a.story_title, locale)}</span>
            <h2 className="h2">{t(site.brand.tagline, locale)}</h2>
            <div className="prose" style={{ marginTop: 22 }}>
              {a.story.map((p, i) => <p key={i}>{t(p, locale)}</p>)}
            </div>
          </div>
          <div className="about-visual reveal reveal-d2" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/mark-white.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="kicker">{t(a.expertise_title, locale)}</span>
            <h2 className="h2">{t(site.home.why_title, locale)}</h2>
          </div>
          <div className="expertise">
            {a.expertise.map((e, i) => (
              <div key={i} className={`exp tone-${i % 6} reveal`}><span><Icon name={e.icon} /></span>{t(e.label, locale)}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container vm">
          <div className="vm__card vm__card--dark reveal">
            <h3><Icon name="eye" />{t(a.vision_title, locale)}</h3>
            <p>{t(a.vision, locale)}</p>
          </div>
          <div className="vm__card vm__card--light reveal reveal-d2">
            <h3><Icon name="target" />{t(a.mission_title, locale)}</h3>
            <p>{t(a.mission, locale)}</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="kicker">{t(a.values_title, locale)}</span>
            <h2 className="h2">{t(a.values_title, locale)}</h2>
          </div>
          <div className="grid grid--3">
            {a.values.map((v, i) => (
              <div key={i} className={`card tone-${i % 6} reveal reveal-d${(i % 3) + 1}`}>
                <span className="card__num">{pad(i + 1)}</span>
                <div className="card__icon"><Icon name={v.icon} /></div>
                <h3>{t(v.title, locale)}</h3>
                <p>{t(v.text, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split">
          <div className="reveal">
            <span className="kicker">{t(a.idea_title, locale)}</span>
            <h2 className="h2"><span dir="ltr">Quick + Quick + Quality = Q³</span></h2>
            <p className="lead">{t(a.idea_text, locale)}</p>
          </div>
          <div className="reveal reveal-d2">
            <span className="kicker">{t(a.v2030_title, locale)}</span>
            <p style={{ fontSize: 21, fontWeight: 500, lineHeight: 1.8, marginTop: 18 }}>{t(a.v2030, locale)}</p>
            <span className="v2030" style={{ marginTop: 24 }}>{t(site.ui.vision_badge, locale)}</span>
          </div>
        </div>
      </section>

      <div style={{ height: 100 }} />
      <CtaBand locale={locale} />
    </>
  );
}
