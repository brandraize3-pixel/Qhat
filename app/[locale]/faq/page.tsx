import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { href, site, t, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return { title: t(site.faqPage.kicker, (await params).locale as Locale) };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const p = site.faqPage;
  return (
    <>
      <PageHero locale={locale} kicker={p.kicker} title={p.title} />
      <section className="section">
        <div className="container">
          <Faq locale={locale} items={p.items} />
          <div className="section-head--center reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: 70 }}>
            <h2 className="h2" style={{ fontSize: 30 }}>{t(site.ui.more_q, locale)}</h2>
            <p className="lead">{t(site.ui.more_q_sub, locale)}</p>
            <Link href={href(locale, "contact")} className="btn btn--primary" style={{ marginTop: 26 }}>{t(site.ui.cta_contact, locale)}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
