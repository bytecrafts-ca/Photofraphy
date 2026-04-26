# Drop your photos here

Any image file inside this folder is **automatically** picked up by the site at build time. No code changes required.

## Supported extensions

`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`

## Naming = Caption + Alt text

The filename is converted into a clean, human-readable caption and screen-reader alt text. Use **kebab-case** or **snake_case** for nice results:

| Filename                          | Caption / alt              |
| --------------------------------- | -------------------------- |
| `golden-hour-portrait.jpg`        | Golden hour portrait       |
| `courtyard_evening_01.webp`       | Courtyard evening 01       |
| `marketstall.jpg`                 | Marketstall                |

## Order

Photos are sorted alphabetically by filename. Prefix with numbers (`01-`, `02-`, and so on) to control the order in the gallery.

## Tips for best results on the site

- **Aspect ratio**: Mix portraits and landscapes. The masonry layout looks great with variety.
- **Size**: Export at ~2000px on the long edge, JPEG quality ~80 to 85, or WebP. Vite hashes and serves the file as-is.
- **Featured shots**: The first ~6 photos appear on the **Home** page strip. Pick your strongest work first.
