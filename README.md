# Pro-Foto · Professional Photography

Vibrant, image-first, multi-page site for selling printed photos at the school market. Shot on Canon EOS R50. Printed on Canon Selphy.

## Pages

- **Home**: [`index.html`](index.html)
- **Work**: [`work.html`](work.html) (gallery + lightbox)
- **Pricing**: [`pricing.html`](pricing.html) (tiers + add-ons)
- **Visit**: [`visit.html`](visit.html) (market day details + process)

All pages share the nav, footer, and design system.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build + preview

```bash
npm run build    # outputs ./dist
npm run preview  # serves the production build locally
```

Source repo: [github.com/bytecrafts-ca/pro-foto](https://github.com/bytecrafts-ca/pro-foto). Live: [pro-foto.vercel.app](https://pro-foto.vercel.app).

You can also deploy the contents of `dist/` to any static host.

## Edit content

Everything user-facing lives in [src/site-config.js](src/site-config.js):

- `brand`, `photographer`: name + brand
- `nav`: menu items
- `home`: hero headline, subtitle, CTAs
- `work`: gallery page header copy
- `pricing.tiers`: three tier cards (name, price, unit, features, cta, highlight)
- `pricing.addons`: extra line-items
- `visit.details`: date, time, location, stall hint
- `visit.process`: three-step explainer
- `footer`: two-line footer text

## Add gallery images

**Just drop image files into [src/photos/](src/photos/).** They are auto-discovered at build time. No code changes required.

- Supported: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- Sorted alphabetically by filename (prefix `01-`, `02-`, and so on to control order)
- Captions and alt text are derived from the filename (`golden-hour-portrait.jpg` becomes `Golden hour portrait`)
- The first ~5 photos appear on the **Home** featured strip
- All photos appear in the **Work** masonry gallery
- The hero collage on Home uses the first 4 photos as floating background tiles

See [src/photos/README.md](src/photos/README.md) for naming tips.

## Stack

- [Vite](https://vitejs.dev/) multi-page static build
- Vanilla HTML, CSS, ES modules. No framework, tiny JS.
- System font stack (SF Pro on Apple devices, graceful fallback elsewhere)

## Accessibility + performance

- Skip link, visible focus rings, semantic landmarks, `aria-current` on active nav link.
- `loading="lazy"` on gallery images after the first few.
- Respects `prefers-reduced-motion`.
- Single stylesheet, single script per page.
