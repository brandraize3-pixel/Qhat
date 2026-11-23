import Link from "next/link";
import Icon from "@/components/Icon";
import Mockup from "@/components/Mockup";
import CtaBand from "@/components/CtaBand";
import ErpShowcase from "@/components/ErpShowcase";
import CountUp from "@/components/CountUp";
import { href, pad, site, t, type Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const h = site.home;
  return (
    <>
      {/* HERO */}
      <section className="hero-dark">
        <div className="hero-dark__grid" aria-hidden="true" />
        <div className="container hero-dark__inner">
          <div>
            <span className="badge reveal"><span className="badge__dot" />{t(h.badge, locale)}</span>
            <h1 className="reveal reveal-d1">
              <span>{t(h.title_a, locale)}</span>
              <span className="grad-text">{t(h.title_b, locale)}</span>
            </h1>
            <p className="hero__subline reveal reveal-d1">{t(h.subline, locale)}</p>
            <p className="hero__sub reveal reveal-d2">{t(h.sub, locale)}</p>
            <div className="hero__ctas reveal reveal-d3">
              <Link href={href(locale, "services")} className="btn btn--primary">{t(site.ui.cta_services, locale)}</Link>
              <Link href={href(locale, "contact")} className="btn btn--outline">{t(site.ui.cta_contact, locale)}</Link>
              <Link href={href(locale, "about")} className="btn btn--soft"><Icon name="book" />{t(site.ui.company_profile, locale)}</Link>
            </div>
            <div className="hero-dark__trust reveal reveal-d3">
              <span>{t(h.trust_label, locale)}</span>
              {h.trust.map((x, i) => <span key={x} style={{ display: "contents" }}>{i ? <i /> : null}<b>{x}</b></span>)}
            </div>
          </div>
          <div className="orbit reveal reveal-d2" aria-hidden="true">
            <div className="orbit__ring" />
            <div className="orbit__ring orbit__ring--2" />
            <div className="orbit__ring orbit__ring--3" />
            <div className="orbit__glow" />
            <div className="orbit__spinner">
              {h.chips.map((c) => <span key={c} className="orbit__chip">{c}</span>)}
              <i className="orbit__dot" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="orbit__mark"><img src="/brand/mark-gradient.png" alt="" /></div>
            <div className="orbit__card orbit__card--a"><span><Icon name="chart" /></span><div>Sales +18.2%<small>Live ERP dashboard</small></div></div>
            <div className="orbit__card orbit__card--b"><span><Icon name="shield" /></span><div>Secure cloud<small>Backups · SLA</small></div></div>
          </div>
        </div>
        <div className="hero-dark__scroll" aria-hidden="true" />
      </section>

      {/* STATS */}
      <section className="stats stats--overlap">
        <div className="container">
          <div className="stats__grid">
            {h.stats.map((s, i) => (
              <div className={`stat tone-${[0, 1, 2, 4][i % 4]} reveal reveal-d${(i % 3) + 1}`} key={i}>
                <span className="stat__icon"><Icon name={s.icon} /></span>
                <div className="stat__body"><CountUp to={s.value} suffix={s.suffix} /><p className="stat__label">{t(s.label, locale)}</p></div>
              </div>
            ))}
          </div>
          <p className="stats__note">{t(site.ui.stats_note, locale)}</p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section" style={{ paddingTop: 60, paddingBottom: 0 }}>
        <div className="container">
          <div className="pillars reveal">
            {h.pillars.map((p, i) => (
              <div key={i} className="pillar"><span><Icon name={p.icon} /></span>{t(p.label, locale)}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">{t(h.services_kicker, locale)}</span>
              <h2 className="h2">{t(h.services_title, locale)}</h2>
            </div>
            <Link href={href(locale, "services")} className="btn btn--outline btn--sm">{t(site.ui.cta_services, locale)}</Link>
          </div>
          <div className="grid grid--3">
            {site.services.map((s, i) => (
              <Link key={s.slug} href={`${href(locale, "services")}#${s.slug}`} className={`card tone-${i % 6} reveal reveal-d${(i % 3) + 1}`}>
                <span className="card__num">{pad(i + 1)}</span>
                <div className="card__icon"><Icon name={s.icon} /></div>
                <h3>{t(s.title, locale)}</h3>
                <p>{t(s.short, locale)}</p>
                <span className="card__link">{t(site.ui.learn_more, locale)} <Icon name="arrow" className="flip" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ODOO ERP */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="kicker">{t(h.erp_kicker, locale)}</span>
            <h2 className="h2">{t(h.erp_title, locale)}</h2>
            <p className="lead">{t(h.erp_sub, locale)}</p>
          </div>
          <ErpShowcase locale={locale} />
        </div>
      </section>

      {/* WHY */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="kicker">{t(h.why_kicker, locale)}</span>
            <h2 className="h2">{t(h.why_title, locale)}</h2>
          </div>
          <div className="grid grid--3">
            {h.why.map((w, i) => (
              <div key={i} className={`card card--dark reveal reveal-d${i + 1}`}>
                <span className="card__num">{pad(i + 1)}</span>
                <div className="card__icon"><Icon name={w.icon} /></div>
                <h3>{t(w.title, locale)}</h3>
                <p>{t(w.text, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARDS */}
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="kicker">{t(h.dash_kicker, locale)}</span>
            <h2 className="h2">{t(h.dash_title, locale)}</h2>
            <p className="lead">{t(h.dash_text, locale)}</p>
            <ul className="checklist">
              {h.dash_points.map((p, i) => <li key={i}><span className="tick"><Icon name="check" /></span>{t(p, locale)}</li>)}
            </ul>
          </div>
          <div className="reveal reveal-d2"><Mockup name="analytics" /></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="kicker">{t(h.process_kicker, locale)}</span>
            <h2 className="h2">{t(h.process_title, locale)}</h2>
          </div>
          <div className="process-line">
            {site.process.map((s, i) => (
              <div key={i} className={`pstep reveal reveal-d${(i % 3) + 1}`}>
                <span className="pstep__n">{pad(i + 1)}</span>
                <div className="pstep__icon"><Icon name={s.icon} /></div>
                <h3>{t(s.title, locale)}</h3>
                <p>{t(s.text, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH + SECTORS */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="kicker">{t(h.tech_kicker, locale)}</span>
            <h2 className="h2">{t(h.tech_title, locale)}</h2>
          </div>
          <div className="tech reveal">{h.tech.map((x) => <span key={x}>{x}</span>)}</div>
          <div className="sectors" style={{ marginTop: 64 }}>
            {site.sectors.map((s, i) => (
              <div key={i} className="sector reveal"><Icon name={s.icon} />{t(s.label, locale)}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section section--soft" style={{ paddingBottom: 90 }}>
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="kicker">{t(h.clients_kicker, locale)}</span>
            <h2 className="h2">{t(h.clients_title, locale)}</h2>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="logo-slot">{locale === "ar" ? "[شعار عميل]" : "[Client logo]"}</div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 100 }} />
      <CtaBand locale={locale} />
    </>
  );
}
