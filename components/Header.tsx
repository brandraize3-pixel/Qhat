"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import SocialLinks from "./SocialIcon";
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

  const other: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${other}`);
  const current = pathname.split("/")[2] ?? "";

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}${!scrolled && current === "" ? " header--over" : ""}`}>
        <div className="container header__row">
          <Link href={href(locale)} className="header__logo" aria-label={t(site.brand.name, locale)}>
            <Image src="/brand/logo-navy.png" alt={t(site.brand.name, locale)} width={674} height={382} priority className="logo-dark" style={{ height: 48, width: "auto" }} />
            <Image src="/brand/logo-white.png" alt="" width={785} height={446} priority className="logo-light" style={{ height: 48, width: "auto" }} />
          </Link>
          <nav className="nav" aria-label="Main">
            {site.nav.map((n) => (
              <Link key={n.key} href={href(locale, n.href)} className={current === n.href ? "is-active" : undefined}>
                {t(n.label, locale)}
              </Link>
            ))}
          </nav>
          <div className="header__actions">
            <Link href={switchHref} className="lang-btn" hrefLang={other}>
              <Icon name="globe" />
              <span>{t(site.ui.lang_switch, locale)}</span>
            </Link>
            <span className="header__sep" aria-hidden="true" />
            <Link href={href(locale, "contact")} className="btn btn--primary btn--pill btn--sm">
              <Icon name="call" /> {t(site.ui.call, locale)}
            </Link>
            <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-nav${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button className="menu-btn mobile-nav__close" aria-label="Close" onClick={() => setOpen(false)}>
          <Icon name="x" />
        </button>
        {site.nav.map((n) => (
          <Link key={n.key} href={href(locale, n.href)}>
            {t(n.label, locale)}
          </Link>
        ))}
        <Link href={switchHref} hrefLang={other}>{t(site.ui.lang_switch, locale)}</Link>
        <SocialLinks locale={locale} variant="light" className="mobile-nav__social" />
      </div>
    </>
  );
}
