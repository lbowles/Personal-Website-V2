import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = join(ROOT, "out");
const PDF_DIR = join(ROOT, "out-pdf");
const PDF_PATH = join(PDF_DIR, "Luke-Bowles.pdf");
const PROD_BASE = "https://luko.co.za";
const PORT = 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
};

async function tryRead(path) {
  try {
    return await readFile(path);
  } catch {
    return null;
  }
}

function startServer() {
  return new Promise((res) => {
    const server = createServer(async (req, resp) => {
      const [rawPath, rawQuery = ""] = req.url.split("?");
      let urlPath = decodeURIComponent(rawPath);

      // Next.js exports <img> tags pointing at /_next/image?url=<path>&w=&q=
      // when output:"export" without images.unoptimized:true. There is no
      // optimizer in the static bundle, so rewrite these to the source file.
      if (urlPath === "/_next/image") {
        const params = new URLSearchParams(rawQuery);
        const src = params.get("url");
        if (src) urlPath = decodeURIComponent(src);
      }

      const candidates = [
        join(OUT_DIR, urlPath),
        join(OUT_DIR, urlPath, "index.html"),
        join(OUT_DIR, urlPath + ".html"),
      ];
      let data = null;
      let served = "";
      for (const c of candidates) {
        const d = await tryRead(c);
        if (d) {
          data = d;
          served = c;
          break;
        }
      }
      if (!data) {
        resp.writeHead(404).end("Not found");
        return;
      }
      const type =
        MIME[extname(served).toLowerCase()] || "application/octet-stream";
      resp.writeHead(200, { "Content-Type": type });
      resp.end(data);
    });
    server.listen(PORT, "127.0.0.1", () => res(server));
  });
}

async function main() {
  if (!existsSync(OUT_DIR)) {
    throw new Error(
      `Static export missing at ${OUT_DIR} — run \`next build\` first.`,
    );
  }
  await mkdir(PDF_DIR, { recursive: true });

  const server = await startServer();
  console.log(`Serving ${OUT_DIR} on http://127.0.0.1:${PORT}`);

  const browser = await puppeteer.launch({ headless: "new" });
  try {
    const page = await browser.newPage();

    // A4 at 96dpi = 794 × 1123 px. Render at the natural A4 print width.
    const A4_WIDTH_PX = 794;
    const A4_HEIGHT_PX = 1123;
    await page.setViewport({
      width: A4_WIDTH_PX,
      height: A4_HEIGHT_PX,
      deviceScaleFactor: 2,
    });
    await page.emulateMediaType("screen");

    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: "networkidle0" });

    // Apply the print stylesheet FIRST so subsequent measurements reflect
    // the final laid-out positions (overlay anchor rects must match where
    // the visible icons end up on the page).
    await page.addStyleTag({
      content: `
        html, body { background: #ffffff !important; margin: 0 !important; padding: 0 !important; }
        *, *::before, *::after { transition: none !important; animation: none !important; }
        /* min-h-screen + justify-between pins the footer to viewport bottom;
           for PDF we want natural flow. */
        main { min-height: 0 !important; margin-bottom: 0 !important; padding-top: 0px !important; }
      `,
    });

    await page.evaluate((base) => {
      document.querySelectorAll('a[href^="/"]').forEach((a) => {
        const href = a.getAttribute("href");
        if (!href || href.startsWith("//")) return;
        a.setAttribute("href", base + href);
      });
      document
        .querySelectorAll("a[target]")
        .forEach((a) => a.removeAttribute("target"));
      document.querySelectorAll("img").forEach((img) => {
        img.removeAttribute("loading");
        img.setAttribute("decoding", "sync");
      });
    }, PROD_BASE);

    // Wait for every image to finish loading so layout doesn't shift after
    // we capture overlay rects.
    await page.evaluate(async () => {
      const imgs = Array.from(document.images);
      await Promise.all(
        imgs.map((img) =>
          img.complete && img.naturalWidth > 0
            ? Promise.resolve()
            : new Promise((res) => {
                img.addEventListener("load", res, { once: true });
                img.addEventListener("error", res, { once: true });
              }),
        ),
      );
    });
    await page.evaluateHandle("document.fonts.ready");
    await new Promise((r) => setTimeout(r, 300));

    // Compute the scale factor needed to fit content on one A4 page, then
    // apply it as a CSS `zoom` on <main>. CSS zoom shrinks the layout (unlike
    // `transform: scale()` which only repaints), so getBoundingClientRect on
    // descendants — and thus our overlay anchors — reports the visible,
    // post-zoom coordinates. With no scale option on page.pdf(), the link
    // rectangles emitted by Chromium align exactly with the visible content.
    // Bottom margin is 0 so the terminal's drop-shadow has room to render at
    // the page edge instead of being clipped; matching the top to keep the
    // vertical whitespace balanced.
    const TOP_MM = 0;
    const BOTTOM_MM = 2;
    const SIDE_MM = 4;
    const printableHeightPx = A4_HEIGHT_PX - ((TOP_MM + BOTTOM_MM) * 96) / 25.4;

    const naturalHeight = await page.evaluate(() => {
      const main = document.querySelector("main");
      return main
        ? main.getBoundingClientRect().bottom + window.scrollY
        : document.body.scrollHeight;
    });
    const zoom = Math.min(
      1.07,
      (printableHeightPx / naturalHeight) * 0.97 * 1.07,
    );
    console.log(
      `Natural content ${naturalHeight.toFixed(0)}px → zoom ${zoom.toFixed(3)}`,
    );

    await page.evaluate((z) => {
      const main = document.querySelector("main");
      if (main) main.style.zoom = z;
    }, zoom);
    // Wait a frame for zoom to apply before we capture overlay rects.
    await page.evaluate(
      () =>
        new Promise((res) =>
          requestAnimationFrame(() => requestAnimationFrame(res)),
        ),
    );

    // Build the body-level link overlay AFTER the final zoom is applied so
    // the captured rects match the printed positions.
    await page.evaluate(() => {
      document.querySelectorAll(".pdf-link-overlay").forEach((n) => n.remove());
      document.querySelectorAll("a.absolute").forEach((origAnchor) => {
        const row = origAnchor.parentElement;
        if (!row) return;
        const href = origAnchor.getAttribute("href");
        const rect = row.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;
        const overlay = document.createElement("a");
        overlay.setAttribute("href", href);
        overlay.textContent = " ";
        overlay.className = "pdf-link-overlay";
        overlay.style.cssText = `position:absolute; top:${top}px; left:${left}px; width:${rect.width}px; height:${rect.height}px; color:transparent; text-decoration:none; display:block; z-index:9999;`;
        document.body.appendChild(overlay);
      });
    });

    await page.pdf({
      path: PDF_PATH,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: false,
      margin: {
        top: `${TOP_MM}mm`,
        right: `${SIDE_MM}mm`,
        bottom: `${BOTTOM_MM}mm`,
        left: `${SIDE_MM}mm`,
      },
    });
    console.log(`PDF written: ${PDF_PATH}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
