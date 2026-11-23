# Qhat Technology — Website (Next.js, Arabic + English)

A bilingual demo website for **كيوهات للتكنولوجيا / Qhat Technology**, with 8 pages in each language:

| Route | Page |
|---|---|
| `/ar` · `/en` | Home |
| `/ar/about` | About us |
| `/ar/services` | Services |
| `/ar/solutions` | Business solutions (ERP / CRM) |
| `/ar/projects` | Work / portfolio |
| `/ar/packages` | Packages / pricing |
| `/ar/faq` | FAQ |
| `/ar/contact` | Contact |

Arabic is the default (`/` → `/ar`) and uses right-to-left layout. English is at `/en/...`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

You need Node.js 18.18 or newer. You can deploy to Vercel as is.

## Somar Sans font

The site uses **Somar Sans** (Baianat Type Design), **normal width**.

Copy these files into `public/fonts/` (`.woff2`, `.otf` or `.ttf` all work):

```
SomarSans-Light      SomarSans-Regular    SomarSans-Medium
SomarSans-SemiBold   SomarSans-Bold       SomarSans-ExtraBold
```

⚠️ Do **not** use files with **Condensed**, **SemiCondensed** or **Extended** in the name. Those files make the letters narrow and tall.
The font is registered under a private name (`"Qhat Somar"`, in `app/fonts.css`), so a Somar version installed on your computer cannot override it.
If the files are missing, the site uses IBM Plex Sans Arabic instead.

## Editing content

All text, in both languages, is in **`content/site.json`**. Each text is a pair: `["Arabic", "English"]`.
Change a line there and both language versions update.

Placeholders to replace with real company data:
- `brand.email`, `brand.phone`, `brand.address`, `brand.cr`, `brand.vat`
- `home.stats` (`value` number + `suffix`, currently demo figures)
- `brand.social` (profile URLs — currently `#`; the WhatsApp one also drives the floating button, e.g. `https://wa.me/9665XXXXXXXX`)
- `packagesPage.plans[].price`
- `projectsPage.items` (these are sample projects; replace them with real work and images)
- Client logos (the `[Client logo]` slots on the home page)

## Structure

```
app/[locale]/layout.tsx     html lang/dir, header, footer
app/[locale]/*/page.tsx     the 8 pages
app/globals.css             design system (brand colours, components, animations)
app/fonts.css               Somar Sans @font-face
components/                 Header, Footer, PageHero, CtaBand, Faq, ProjectsGrid, ContactForm, Icon, Reveal
content/site.json           all bilingual content
content/icons.json          inline SVG icon set
lib/i18n.ts                 locale helpers
middleware.ts               redirects / to /ar
public/brand/               logos from the visual identity
```

The contact form is a front-end demo. Connect it to an email service or API route before going live.
