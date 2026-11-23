"use client";

import { useState } from "react";
import { site, t, type Locale } from "@/lib/i18n";

export default function ProjectsGrid({ locale }: { locale: Locale }) {
  const p = site.projectsPage;
  const [filter, setFilter] = useState("all");
  const items = p.items.filter((it) => filter === "all" || it.cat === filter);
  const filters = [{ key: "all", label: site.ui.all }, ...p.filters];
  return (
    <>
      <div className="filters" role="tablist">
        {filters.map((f) => (
          <button key={f.key} role="tab" aria-selected={filter === f.key} className={`filter${filter === f.key ? " is-active" : ""}`} onClick={() => setFilter(f.key)}>
            {t(f.label, locale)}
          </button>
        ))}
      </div>
      <div className="grid grid--3">
        {items.map((it, i) => (
          <article key={`${filter}-${i}`} className="project">
            <div className={`project__thumb project__thumb--${it.hue}`}>
              <span className="project__label">{t(site.ui.sample, locale)}</span>
              <div className={`project__screen${it.cat === "mobile" ? " project__screen--phone" : ""}`}><i /><i /></div>
            </div>
            <div className="project__body">
              <h3>{t(it.title, locale)}</h3>
              <div className="project__tags">{it.tags.map((g) => <span key={g}>{g}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
