import util from 'util';
import path from 'path';
import fs from 'fs';
import { readFile } from 'fs/promises';
import exif from 'exiftool';

const PORTFOLIO_DIR = path.join("src", "assets", "portfolio");
const GALLERY_IMG_PATH = "/gallery/img";
const exiftoolRead = util.promisify(exif.metadata);
const exifCache = /* @__PURE__ */ new Map();
function readExif(absoluteFilePath) {
  let pending = exifCache.get(absoluteFilePath);
  if (!pending) {
    pending = readFile(absoluteFilePath).then(
      (data) => exiftoolRead(data)
    );
    exifCache.set(absoluteFilePath, pending);
  }
  return pending;
}
function stringTag(raw, key) {
  const v = raw[key];
  return v != null ? String(v) : void 0;
}
function parseExifDateTime(value) {
  if (!value) return null;
  const m = value.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
  if (!m) return null;
  const t = (/* @__PURE__ */ new Date(
    `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}`
  )).getTime();
  return Number.isNaN(t) ? null : t;
}
const CAPTURE_DATE_KEYS = [
  "date/timeOriginal",
  "createDate",
  "dateCreated",
  "date/timeCreated"
];
function captureTimestamp(raw) {
  for (const key of CAPTURE_DATE_KEYS) {
    const ts = parseExifDateTime(stringTag(raw, key));
    if (ts != null) return ts;
  }
  return null;
}
function parseExifKeywords(keywords) {
  if (!keywords) return {};
  const result = {};
  for (const keyword of keywords.split(", ")) {
    const parts = keyword.split(":");
    if (parts.length !== 2) {
      console.warn(`skipped invalid keyword "${keyword}"`);
      continue;
    }
    const [key, value] = parts;
    result[key] = value;
  }
  return result;
}
let galleryListPromise = null;
function listGalleryImages() {
  galleryListPromise ??= buildSortedGalleryImages();
  return galleryListPromise;
}
async function buildSortedGalleryImages() {
  const images = fs.readdirSync(PORTFOLIO_DIR, { withFileTypes: true }).filter((file) => !file.isDirectory()).map((file) => {
    const basename = file.name.replace(/\.jpg$/i, "");
    const absoluteFilePath = path.join(file.parentPath, file.name);
    return {
      name: file.name,
      l: `${GALLERY_IMG_PATH}/${basename}.l.jpg`,
      s: `${GALLERY_IMG_PATH}/${basename}.s.jpg`,
      absoluteFilePath
    };
  });
  const withTimestamps = await Promise.all(
    images.map(async (img) => {
      try {
        const raw = await readExif(img.absoluteFilePath);
        const ts = captureTimestamp(raw) ?? fs.statSync(img.absoluteFilePath).mtimeMs;
        return { img, ts };
      } catch {
        return { img, ts: fs.statSync(img.absoluteFilePath).mtimeMs };
      }
    })
  );
  withTimestamps.sort((a, b) => b.ts - a.ts);
  return withTimestamps.map((entry) => entry.img);
}
async function generateImageMetadata(image) {
  const raw = await readExif(image.absoluteFilePath);
  const keywords = parseExifKeywords(stringTag(raw, "keywords"));
  return {
    title: stringTag(raw, "title"),
    copyright: stringTag(raw, "copyright"),
    location: stringTag(raw, "location"),
    city: stringTag(raw, "city"),
    state: stringTag(raw, "state"),
    country: stringTag(raw, "country"),
    camera: keywords.camera,
    film: keywords.film,
    src: image.l
  };
}

export { generateImageMetadata as g, listGalleryImages as l };
