"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site, t, type Locale } from "@/lib/i18n";

export default function ContactForm({ locale }: { locale: Locale }) {
  const f = site.contactPage.form;
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  return (
    <form className="form reveal" onSubmit={onSubmit}>
      <div className="field"><label htmlFor="name">{t(f.name, locale)}</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="phone">{t(f.phone, locale)}</label><input id="phone" name="phone" type="tel" dir="ltr" autoComplete="tel" /></div>
      <div className="field field--full"><label htmlFor="email">{t(f.email, locale)}</label><input id="email" name="email" type="email" dir="ltr" required autoComplete="email" /></div>
      <div className="field field--full">
        <label htmlFor="service">{t(f.service, locale)}</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>—</option>
          {site.services.map((s) => <option key={s.slug} value={s.slug}>{t(s.title, locale)}</option>)}
        </select>
      </div>
      <div className="field field--full"><label htmlFor="message">{t(f.message, locale)}</label><textarea id="message" name="message" required /></div>
      {sent ? <div className="form__sent" role="status">{t(f.sent, locale)}</div> : null}
      <div className="field--full"><button type="submit" className="btn btn--primary">{t(f.submit, locale)} <Icon name="arrow" className="flip" /></button></div>
    </form>
  );
}
