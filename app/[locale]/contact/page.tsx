import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialIcon";
import { site, t, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return { title: t(site.contactPage.kicker, (await params).locale as Locale) };
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const p = site.contactPage;
  const rows = [
    { icon: "call", label: site.contactPage.form.phone, value: site.brand.phone, ltr: true },
    { icon: "mail", label: site.contactPage.form.email, value: site.brand.email, ltr: true },
    { icon: "pin", label: site.ui.contact_info, value: t(site.brand.address, locale), ltr: false },
    { icon: "clock", label: p.hours_title, value: t(p.hours, locale), ltr: false },
  ];
  return (
    <>
      <PageHero locale={locale} kicker={p.kicker} title={p.title} sub={p.sub} />
      <section className="section">
        <div className="container contact">
          <ContactForm locale={locale} />
          <div className="info reveal reveal-d2">
            <div className="info__card">
              {rows.map((r, i) => (
                <div key={i} className="info__row">
                  <span><Icon name={r.icon} /></span>
                  <div><small>{t(r.label, locale)}</small><strong dir={r.ltr ? "ltr" : undefined}>{r.value}</strong></div>
                </div>
              ))}
              <div className="info__social">
                <small>{t(site.ui.follow_us, locale)}</small>
                <SocialLinks locale={locale} variant="dark" />
              </div>
            </div>
            <div className="map">
              <div className="map__pin"><span><Icon name="pin" /></span>{t(p.map, locale)}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
