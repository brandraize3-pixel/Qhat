import Icon from "./Icon";
import Mockup from "./Mockup";
import { site, t, type Locale } from "@/lib/i18n";

export default function ErpShowcase({ locale }: { locale: Locale }) {
  const h = site.home;
  return (
    <>
      <div className="erp">
        <ul className="steps-list reveal">
          {h.erp_steps.map((s, i) => (
            <li key={i} className={`tone-${s.c}`}><span><Icon name={s.icon} /></span>{t(s.label, locale)}</li>
          ))}
        </ul>
        <div className="erp__device reveal reveal-d1" style={{ position: "relative" }}><Mockup name="laptop" /></div>
        <div className="modules reveal reveal-d2">
          <h3>{t(h.modules_title, locale)}</h3>
          <div className="modules__grid">
            {h.modules.map((m, i) => (
              <div key={i} className={`module tone-${m.c}`}><span><Icon name={m.icon} /></span>{t(m.label, locale)}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="erp__banner reveal"><Icon name="rocket" />{t(h.erp_tagline, locale)}</div>
    </>
  );
}
