import { initLayout, siteConfig, escapeHtml, $ } from "../layout.js";

function renderHome() {
  const { home } = siteConfig;

  const eyebrow = $("[data-home-eyebrow]");
  const headline = $("[data-home-headline]");
  const sub = $("[data-home-sub]");
  const cta1 = $("[data-home-cta-primary]");
  const cta2 = $("[data-home-cta-secondary]");
  const feat = $("[data-home-feature]");

  if (eyebrow) eyebrow.textContent = home.eyebrow;
  if (headline) {
    // Make the second line italic-serif for a vibrant accent
    const [first, ...rest] = home.headline.split("\n");
    const second = rest.join(" ").trim();
    if (second) {
      headline.innerHTML = `${escapeHtml(first)}\n<em>${escapeHtml(second)}</em>`;
      headline.style.whiteSpace = "pre-line";
    } else {
      headline.textContent = home.headline;
    }
  }
  if (sub) sub.textContent = home.sub;
  if (cta1) {
    cta1.textContent = home.primaryCta.label;
    cta1.href = home.primaryCta.href;
  }
  if (cta2) {
    cta2.textContent = home.secondaryCta.label;
    cta2.href = home.secondaryCta.href;
  }
  if (feat) feat.textContent = home.featureLine;

  if (home.audience) {
    const aEyebrow = $("[data-home-audience-eyebrow]");
    const aHead = $("[data-home-audience-headline]");
    const aSub = $("[data-home-audience-sub]");
    if (aEyebrow) aEyebrow.textContent = home.audience.eyebrow;
    if (aHead) aHead.textContent = home.audience.headline;
    if (aSub) aSub.textContent = home.audience.sub;
  }
  const vendorsCta = $("[data-home-vendors-cta]");
  if (vendorsCta && home.vendorsCta) {
    const { href, label } = home.vendorsCta;
    vendorsCta.innerHTML = `<a class="btn--link" href="${escapeHtml(
      href
    )}">${escapeHtml(label)}</a>`;
  }

  // Marquee: alternating bold / serif accent
  const marquee = $("[data-marquee]");
  if (marquee) {
    const words = [
      siteConfig.brand,
      siteConfig.tagline || "Professional Photography",
      "School market photos",
      "Family photos",
      "Grade 8 friend groups",
      "Quick photo stop",
      "Shot on EOS R50",
      "Printed on Selphy",
      "You pick, I print",
      "Prints same day",
      "Digital included",
      "Cash or e-Transfer",
    ];
    let html = "";
    for (let i = 0; i < words.length; i++) {
      const w = words[i % words.length];
      const accent = i % 2 === 1 ? "marquee__word--accent" : "";
      html += `<span class="marquee__word ${accent}">${escapeHtml(w)}</span>`;
      html += `<span class="marquee__dot" aria-hidden="true"></span>`;
    }
    marquee.innerHTML = html + html;
  }
}

initLayout();
renderHome();
