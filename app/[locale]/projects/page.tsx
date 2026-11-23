import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ProjectsGrid from "@/components/ProjectsGrid";
import { site, t, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return { title: t(site.projectsPage.kicker, (await params).locale as Locale) };
}

export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const p = site.projectsPage;
  return (
    <>
      <PageHero locale={locale} kicker={p.kicker} title={p.title} sub={p.sub} />
      <section className="section">
        <div className="container"><ProjectsGrid locale={locale} /></div>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
