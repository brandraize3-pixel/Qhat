"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import SocialLinks, { SocialGlyph } from "./SocialIcon";
import { href, site, t, type Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open]);

  const other: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${other}`);
  const current = pathname.split("/")[2] ?? "";
  const wa = site.brand.social.find((s) => s.key === "whatsapp");

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}${!scrolled && current === "" ? " header--over" : ""}`}>
        <div className="container header__row">
          <Link href={href(locale)} className="header__logo" aria-label={t(site.brand.name, locale)}>
            <Image src="/brand/logo-navy.png" alt={t(site.brand.name, locale)} width={674} height={382} priority className="logo-dark" />
            <Image src="/brand/logo-white.png" alt="" width={785} height={446} priority className="logo-light" />
          </Link>
          <nav className="nav" aria-label="Main">
            {site.nav.map((n) => (
              <Link key={n.key} href={href(locale, n.href)} className={current === n.href ? "is-active" : undefined} aria-current={current === n.href ? "page" : undefined}>
                {t(n.label, locale)}
              </Link>
            ))}
          </nav>
          <div className="header__actions">
            <Link href={switchHref} className="lang-btn" hrefLang={other} aria-label={t(site.ui.lang_switch, locale)}>
              <Icon name="globe" />
              <span>{t(site.ui.lang_switch, locale)}</span>
            </Link>
            <span className="header__sep" aria-hidden="true" />
            <Link href={href(locale, "contact")} className="btn btn--primary btn--pill btn--sm">
              <Icon name="call" /> {t(site.ui.call, locale)}
            </Link>
            <button className="menu-btn" aria-label="Menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(true)}>
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav__backdrop${open ? " is-open" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" inert={!open}>
        <div className="mobile-nav__top">
          <Image src="/brand/logo-navy.png" alt="" width={674} height={382} className="mobile-nav__logo" />
          <button className="menu-btn" aria-label="Close" onClick={() => setOpen(false)}>
            <Icon name="x" />
          </button>
        </div>
        <nav className="mobile-nav__links" aria-label="Mobile">
          {site.nav.map((n, i) => (
            <Link key={n.key} href={href(locale, n.href)} className={current === n.href ? "is-active" : undefined} aria-current={current === n.href ? "page" : undefined} style={{ transitionDelay: open ? `${80 + i * 35}ms` : "0ms" }}>
              <span>{t(n.label, locale)}</span>
              <Icon name="arrow" className="flip" />
            </Link>
          ))}
        </nav>
        <div className="mobile-nav__foot">
          <div className="mobile-nav__ctas">
            <Link href={href(locale, "contact")} className="btn btn--primary"><Icon name="call" />{t(site.ui.call, locale)}</Link>
            {wa && (
              <a href={wa.url} className="btn btn--wa" target="_blank" rel="noopener noreferrer"><SocialGlyph name="whatsapp" />WhatsApp</a>
            )}
          </div>
          <div className="mobile-nav__meta">
            <Link href={switchHref} hrefLang={other} className="lang-btn"><Icon name="globe" />{t(site.ui.lang_switch, locale)}</Link>
            <SocialLinks locale={locale} variant="light" />
          </div>
        </div>
      </div>
    </>
  );
}
