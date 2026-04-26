import { initLayout, siteConfig, $ } from "../layout.js";

function renderWork() {
  const { work } = siteConfig;
  const eyebrow = $("[data-work-eyebrow]");
  const headline = $("[data-work-headline]");
  const sub = $("[data-work-sub]");
  if (eyebrow) eyebrow.textContent = work.eyebrow;
  if (headline) headline.textContent = work.headline;
  if (sub) sub.textContent = work.sub;
}

initLayout("Work");
renderWork();
