/**
 * Auto-discover every image in `src/photos/`.
 *
 * Vite's `import.meta.glob` runs at build time:
 *   - `eager: true`  → returns the actual modules (URL strings) inline
 *   - `query: '?url'` + `import: 'default'` → just the asset URL
 *
 * Each photo gets a derived caption + alt text from its filename, and is
 * sorted alphabetically. Drop new files in `src/photos/` and they show up.
 */
const modules = import.meta.glob(
  "./photos/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,avif,AVIF}",
  { eager: true, query: "?url", import: "default" },
);

function captionFromPath(path) {
  const filename = path.split("/").pop() ?? path;
  const stem = filename.replace(/\.[^.]+$/, "");
  const cleaned = stem.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

export const photos = Object.entries(modules)
  .map(([path, src]) => {
    const caption = captionFromPath(path);
    return {
      src,
      alt: caption,
      caption,
      filename: path.split("/").pop(),
    };
  })
  .sort((a, b) => a.filename.localeCompare(b.filename));

export const hasPhotos = photos.length > 0;
