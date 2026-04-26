import { initLayout, siteConfig, escapeHtml, $ } from "../layout.js";

function renderPricing() {
  const { pricing } = siteConfig;

  const eyebrow = $("[data-pricing-eyebrow]");
  const headline = $("[data-pricing-headline]");
  const sub = $("[data-pricing-sub]");
  if (eyebrow) eyebrow.textContent = pricing.eyebrow;
  if (headline) headline.textContent = pricing.headline;
  if (sub) sub.textContent = pricing.sub;

  const tiersMount = $("[data-pricing-tiers]");
  if (tiersMount) {
    tiersMount.innerHTML = pricing.tiers
      .map((tier) => {
        const features = tier.features
          .map((f) => `<li class="tier__feature">${escapeHtml(f)}</li>`)
          .join("");
        const badge = tier.badge
          ? `<span class="tier__badge">${escapeHtml(tier.badge)}</span>`
          : "";
        return `
          <article class="tier ${tier.highlight ? "tier--highlight" : ""}">
            ${badge}
            <h3 class="tier__name">${escapeHtml(tier.name)}</h3>
            <p class="tier__blurb">${escapeHtml(tier.blurb)}</p>
            <div class="tier__price">
              <span class="tier__currency">${escapeHtml(pricing.currency)}</span>
              <span class="tier__amount">${escapeHtml(tier.price)}</span>
            </div>
            <p class="tier__unit">${escapeHtml(tier.unit)}</p>
            <ul class="tier__features" role="list">${features}</ul>
            <a class="btn ${
              tier.highlight ? "btn--primary" : "btn--ghost"
            } tier__cta" href="${escapeHtml(tier.cta.href)}">${escapeHtml(
          tier.cta.label
        )}</a>
          </article>
        `;
      })
      .join("");
  }

  const addonsSection = document.querySelector(".addons");
  const addonsMount = $("[data-pricing-addons]");
  if (addonsMount) {
    const list = pricing.addons ?? [];
    if (list.length === 0) {
      if (addonsSection) addonsSection.hidden = true;
    } else {
      if (addonsSection) addonsSection.hidden = false;
      addonsMount.innerHTML = list
        .map(
          (a) => `
        <li class="addons__row">
          <div>
            <span class="addons__name">${escapeHtml(a.name)}</span>
            <span class="addons__note">${escapeHtml(a.note)}</span>
          </div>
          <span class="addons__price">${escapeHtml(pricing.currency)}${escapeHtml(
            a.price
          )}</span>
        </li>
      `
        )
        .join("");
    }
  }

  const footnote = $("[data-pricing-footnote]");
  if (footnote) footnote.textContent = pricing.footnote;

  const payMount = $("[data-pricing-pay]");
  if (payMount && pricing.payAtStall) {
    const p = pricing.payAtStall;
    payMount.innerHTML = `
      <p class="eyebrow">${escapeHtml(p.eyebrow)}</p>
      <h2 class="headline">${escapeHtml(p.headlineLead)} <em>${escapeHtml(
      p.headlineEm
    )}</em></h2>
      <p class="subtitle">${escapeHtml(p.sub)}</p>
      <div class="cta-row">
        <a class="btn btn--primary" href="/visit.html">Plan your visit</a>
      </div>
    `;
  }
}

initLayout("Pricing");
renderPricing();
