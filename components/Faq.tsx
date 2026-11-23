"use client";

import { useState } from "react";
import Icon from "./Icon";
import { pad, t, type Locale, type T } from "@/lib/i18n";

export default function Faq({ locale, items }: { locale: Locale; items: { q: T; a: T }[] }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div key={i} className={`faq__item reveal${open === i ? " is-open" : ""}`}>
          <button className="faq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="faq__n">{pad(i + 1)}</span>
            <span>{t(it.q, locale)}</span>
            <span className="faq__plus"><Icon name="plus" /></span>
          </button>
          <div className="faq__a"><div><p>{t(it.a, locale)}</p></div></div>
        </div>
      ))}
    </div>
  );
}
