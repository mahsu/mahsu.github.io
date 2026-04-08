import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, e as renderSlot, f as renderHead, d as addAttribute } from './astro/server--WK4ZdT3.js';
import 'kleur/colors';
import { $ as $$Seo, a as $$Nav } from './seo-BF5srBqd.js';
/* empty css                       */
/* empty css                       */

const $$Astro = createAstro("https://matthewhsu.me");
const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { title, description, footerPullBottom, fullWidth } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-pcwwjrxj> <head><link rel="icon" href="data:,">${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "data-astro-cid-pcwwjrxj": true })}${renderSlot($$result, $$slots["head"])}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-pcwwjrxj> <div class="layout" data-astro-cid-pcwwjrxj> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-pcwwjrxj": true })} <div class="content-wrapper" data-astro-cid-pcwwjrxj> <div${addAttribute(fullWidth ? "content full-width" : "content", "class")} data-astro-cid-pcwwjrxj> ${renderSlot($$result, $$slots["above-title"])} <header data-astro-cid-pcwwjrxj> <h1 class="page-title" data-astro-cid-pcwwjrxj>${title}</h1> </header> <main data-astro-cid-pcwwjrxj> ${renderSlot($$result, $$slots["default"])} </main> <footer${addAttribute(footerPullBottom ? "footer-pull-bottom" : "", "class")} data-astro-cid-pcwwjrxj>
© ${(/* @__PURE__ */ new Date()).getFullYear()} Matthew Hsu
</footer> </div> </div> </div> </body></html>`;
}, "/Users/matthewhsu/co/personal-site/src/layouts/content_layout.astro", void 0);

export { $$ContentLayout as $ };
