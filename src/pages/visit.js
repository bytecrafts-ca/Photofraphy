import { initLayout, siteConfig, escapeHtml, $ } from "../layout.js";

function renderVisit() {
  const { visit } = siteConfig;

  const eyebrow = $("[data-visit-eyebrow]");
  const headline = $("[data-visit-headline]");
  const sub = $("[data-visit-sub]");
  if (eyebrow) eyebrow.textContent = visit.eyebrow;
  if (headline) headline.textContent = visit.headline;
  if (sub) sub.textContent = visit.sub;

  const vend = $("[data-visit-vendors]");
  if (vend && visit.vendors) {
    const v = visit.vendors;
    vend.innerHTML = `
        <p class="eyebrow">${escapeHtml(v.eyebrow)}</p>
        <h2 class="headline" id="vendors-heading">${escapeHtml(v.headline)}</h2>
        <p class="subtitle">${escapeHtml(v.sub)}</p>
      `;
  }

  const proc = $("[data-visit-process]");
  if (proc) {
    proc.innerHTML = visit.process
      .map(
        (p) => `
        <article class="process__item">
          <span class="process__step">${escapeHtml(p.step)}</span>
          <h3 class="process__title">${escapeHtml(p.title)}</h3>
          <p class="process__body">${escapeHtml(p.body)}</p>
        </article>`
      )
      .join("");
  }
}

initLayout("Visit");
renderVisit();
