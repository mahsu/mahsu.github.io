import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server--WK4ZdT3.js';
import 'kleur/colors';
import { g as getImage, $ as $$Image } from './_astro_assets-rztsGNfV.js';
/* empty css                                                                     */

const $$Astro = createAstro("https://matthewhsu.me");
const $$StaticGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StaticGallery;
  const { photos, caption, numCols = 2, aspectRatio } = Astro2.props;
  const styleVars = [
    `--num-cols: ${numCols}`,
    aspectRatio ? `--aspect-ratio: ${aspectRatio}` : null
  ].filter(Boolean).join("; ");
  function isPhotoWithCaption(input) {
    return typeof input === "object" && input !== null && "src" in input && "caption" in input;
  }
  function getPhotoSource(input) {
    return isPhotoWithCaption(input) ? input.src : input;
  }
  function getPhotoCaption(input) {
    return isPhotoWithCaption(input) ? input.caption : caption;
  }
  function isImageMetadata(src) {
    return typeof src === "object" && src !== null && "width" in src && "height" in src && "src" in src;
  }
  function isRemoteHttpUrl(src) {
    return src.startsWith("http://") || src.startsWith("https://");
  }
  const fullSrcUrls = await Promise.all(
    photos.map(async (input) => {
      const photo = getPhotoSource(input);
      if (isImageMetadata(photo)) {
        return (await getImage({ src: photo })).src;
      }
      if (isRemoteHttpUrl(photo)) {
        return (await getImage({ src: photo, inferSize: true })).src;
      }
      return photo;
    })
  );
  return renderTemplate`${maybeRenderHead()}<figure class="static-gallery" data-astro-cid-n76q4nch> <div class="static-gallery-grid"${addAttribute(styleVars, "style")} data-astro-cid-n76q4nch> ${photos.map((input, index) => {
    const photo = getPhotoSource(input);
    const photoCaption = getPhotoCaption(input);
    return renderTemplate`<button type="button"${addAttribute([
      "static-gallery-item",
      "static-gallery-trigger",
      { "has-aspect-ratio": !!aspectRatio }
    ], "class:list")}${addAttribute(fullSrcUrls[index], "data-full-src")}${addAttribute(photoCaption || "", "data-alt")}${addAttribute(photoCaption, "data-caption")} aria-label="Open image" data-astro-cid-n76q4nch> ${isImageMetadata(photo) ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": photo, "alt": "", "loading": "lazy", "data-astro-cid-n76q4nch": true })}` : isRemoteHttpUrl(photo) ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": photo, "alt": "", "inferSize": true, "loading": "lazy", "data-astro-cid-n76q4nch": true })}` : renderTemplate`<img${addAttribute(photo, "src")} alt="" loading="lazy" data-astro-cid-n76q4nch>`} </button>`;
  })} </div> ${caption && renderTemplate`<figcaption class="static-gallery-caption" data-astro-cid-n76q4nch>${caption}</figcaption>`} </figure> `;
}, "/Users/matthewhsu/co/personal-site/src/components/blog/static_gallery.astro", void 0);

export { $$StaticGallery as $ };
