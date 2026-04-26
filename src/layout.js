import { siteConfig } from "./site-config.js";
import { photos, hasPhotos } from "./photos.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function escapeHtml(str = "") {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function currentPath() {
  const path = window.location.pathname;
  if (path === "/" || path === "") return "/index.html";
  return path.endsWith("/") ? `${path}index.html` : path;
}

function renderNav() {
  const mount = $("[data-nav]");
  if (!mount) return;
  const path = currentPath();
  const links = siteConfig.nav
    .map((item) => {
      const isActive =
        path === item.href ||
        (item.href === "/index.html" && (path === "/" || path === "/index.html"));
      return `<li><a class="nav__link" href="${item.href}" ${
        isActive ? 'aria-current="page"' : ""
      }>${escapeHtml(item.label)}</a></li>`;
    })
    .join("");

  mount.innerHTML = `
    <nav class="nav" aria-label="Primary">
      <div class="nav__inner">
        <a class="nav__brand" href="/index.html" aria-label="${escapeHtml(
          siteConfig.brand
        )} home">${escapeHtml(siteConfig.brand)}</a>
        <ul class="nav__links" role="list">${links}</ul>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const mount = $("[data-footer]");
  if (!mount) return;
  const { line, secondary } = siteConfig.footer;
  mount.innerHTML = `
    <footer class="footer" role="contentinfo">
      <div class="container footer__inner">
        <p>${escapeHtml(line)}</p>
        <p>${escapeHtml(secondary)}</p>
      </div>
    </footer>
  `;
}

function setupReveal() {
  const els = $$("[data-reveal]");
  if (!els.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const vh = window.innerHeight || document.documentElement.clientHeight;
  const deferred = [];
  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      el.classList.add("is-in");
    } else {
      deferred.push(el);
    }
  });
  if (!deferred.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
  );
  deferred.forEach((el) => io.observe(el));
}

function setupLightbox() {
  const root = $("[data-lightbox]");
  const imgEl = $("[data-lightbox-img]");
  const closeBtn = $("[data-lightbox-close]");
  if (!root || !imgEl) return () => {};

  let lastFocus = null;

  function open(src, alt) {
    lastFocus = document.activeElement;
    imgEl.src = src;
    imgEl.alt = alt || "";
    root.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }
  function close() {
    root.hidden = true;
    imgEl.removeAttribute("src");
    imgEl.alt = "";
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  closeBtn?.addEventListener("click", close);
  root.addEventListener("click", (e) => {
    if (e.target === root) close();
  });
  document.addEventListener("keydown", (e) => {
    if (!root.hidden && e.key === "Escape") {
      e.preventDefault();
      close();
    }
  });

  return open;
}

function emptyState(message) {
  return `
    <div class="gallery-empty">
      <p class="gallery-empty__title">No photos yet</p>
      <p class="gallery-empty__body">${message}</p>
    </div>
  `;
}

function renderHeroCollage() {
  const mount = $("[data-hero-collage]");
  if (!mount) return;
  if (!hasPhotos) {
    mount.innerHTML = "";
    return;
  }
  const picks = photos.slice(0, 4);
  mount.innerHTML = picks
    .map(
      (p) => `
      <div class="hero-collage__item" aria-hidden="true">
        <img src="${p.src}" alt="" loading="eager" decoding="async" />
      </div>`
    )
    .join("");
}

function renderStrip(openLightbox) {
  const mount = $("[data-strip]");
  if (!mount) return;
  if (!hasPhotos) {
    mount.outerHTML = emptyState(
      `Drop images into <code>src/photos/</code> and they'll appear here automatically.`
    );
    return;
  }
  const picks = photos.slice(0, 6);
  mount.innerHTML = picks
    .map(
      (p, i) => `
      <li class="strip__item">
        <button type="button" class="strip__btn" data-photo-index="${i}" aria-label="View larger: ${escapeHtml(
        p.alt
      )}">
          <img src="${p.src}" alt="${escapeHtml(p.alt)}" loading="${
        i < 3 ? "eager" : "lazy"
      }" decoding="async" />
        </button>
      </li>`
    )
    .join("");
  $$(".strip__btn", mount).forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.photoIndex);
      const p = picks[i];
      if (p) openLightbox?.(p.src, p.alt);
    });
  });
}

function renderMasonry(openLightbox) {
  const mount = $("[data-masonry]");
  if (!mount) return;
  if (!hasPhotos) {
    mount.outerHTML = emptyState(
      `Drop images into <code>src/photos/</code> and they'll appear here automatically.`
    );
    return;
  }
  mount.innerHTML = photos
    .map(
      (p, i) => `
      <li class="masonry__item">
        <button type="button" class="masonry__button" data-photo-index="${i}" aria-label="View larger: ${escapeHtml(
        p.alt
      )}">
          <img class="masonry__img" src="${p.src}" alt="${escapeHtml(
        p.alt
      )}" loading="${i < 4 ? "eager" : "lazy"}" decoding="async" />
          <span class="masonry__caption">${escapeHtml(p.caption)}</span>
        </button>
      </li>`
    )
    .join("");
  $$(".masonry__button", mount).forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.photoIndex);
      const p = photos[i];
      if (p) openLightbox?.(p.src, p.alt);
    });
  });
}

function renderSplitMedia() {
  $$("[data-split-media]").forEach((el, idx) => {
    if (!hasPhotos) return;
    const offset = Number(el.dataset.splitMedia) || idx;
    const p = photos[offset % photos.length];
    if (!p) return;
    const label = el.dataset.splitLabel
      ? `<span class="split__media-label">${escapeHtml(el.dataset.splitLabel)}</span>`
      : "";
    el.innerHTML = `<img src="${p.src}" alt="${escapeHtml(p.alt)}" loading="lazy" decoding="async" />${label}`;
  });
}

function setBrandTitle(suffix) {
  const { brand, tagline } = siteConfig;
  if (suffix) {
    document.title = `${suffix} · ${brand}`;
  } else if (tagline) {
    document.title = `${brand} · ${tagline}`;
  } else {
    document.title = brand;
  }
}

export function initLayout(pageTitleSuffix) {
  renderNav();
  renderFooter();
  setupReveal();
  const openLightbox = setupLightbox();
  renderHeroCollage();
  renderStrip(openLightbox);
  renderMasonry(openLightbox);
  renderSplitMedia();
  if (pageTitleSuffix !== undefined) setBrandTitle(pageTitleSuffix);
  return { openLightbox };
}

export { siteConfig, photos, hasPhotos, escapeHtml, $, $$ };
