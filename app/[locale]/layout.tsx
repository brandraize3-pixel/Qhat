import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WhatsAppFab from "@/components/WhatsAppFab";
import { isLocale, locales, site, t } from "@/lib/i18n";
import "../fonts.css";
import "../globals.css";

// Fallback font while / if Somar Sans files are not present in /public/fonts
const fallback = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fallback",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "ar";
  return {
    title: { default: `${t(site.brand.name, l)} | ${t(site.brand.tagline, l)}`, template: `%s | ${t(site.brand.name, l)}` },
    description: t(site.home.sub, l),
    icons: { icon: "/brand/mark-gradient.png" },
    alternates: { languages: { ar: "/ar", en: "/en" } },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const p = await params;
  const locale = isLocale(p.locale) ? p.locale : "ar";
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={fallback.variable}>
      <body>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <WhatsAppFab locale={locale} />
        <Reveal />
      </body>
    </html>
  );
}
