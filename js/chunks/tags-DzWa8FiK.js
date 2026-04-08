import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, F as Fragment } from './astro/server--WK4ZdT3.js';
import 'kleur/colors';
import { f as formatBlogDate } from './_astro_content-DYHY9pD0.js';
/* empty css                       */
import 'clsx';

const $$Astro$1 = createAstro("https://matthewhsu.me");
const $$Meta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Meta;
  const {
    date,
    minutesRead,
    variant = "list",
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["blogMeta", `blogMeta--${variant}`, className], "class:list")} data-astro-cid-purouhbn> <span class="blogMetaDate" data-astro-cid-purouhbn>${formatBlogDate(date)}</span> ${minutesRead && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-purouhbn": true }, { "default": ($$result2) => renderTemplate` <span class="metaSeparator" aria-hidden="true" data-astro-cid-purouhbn></span> <span class="blogMetaReadTime" data-astro-cid-purouhbn>${minutesRead}</span> ` })}`} </div> `;
}, "/Users/matthewhsu/co/personal-site/src/components/blog/meta.astro", void 0);

const $$Astro = createAstro("https://matthewhsu.me");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, class: className = "" } = Astro2.props;
  return renderTemplate`${tags.length > 0 && renderTemplate`${maybeRenderHead()}<div${addAttribute(["blogTags", className], "class:list")} data-astro-cid-bagu6kxw>${tags.map((tag) => renderTemplate`<span class="blogTag" data-astro-cid-bagu6kxw>${tag}</span>`)}</div>`}`;
}, "/Users/matthewhsu/co/personal-site/src/components/blog/tags.astro", void 0);

export { $$Meta as $, $$Tags as a };
