import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from './astro/server--WK4ZdT3.js';
import 'kleur/colors';
import 'clsx';
/* empty css                       */

const $$Astro$1 = createAstro("https://matthewhsu.me");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const navItems = [
    {
      name: "About",
      route: "/"
    },
    {
      name: "Blog",
      route: "/blog",
      matchPrefix: true
    },
    {
      name: "Gallery",
      route: "/gallery"
    }
  ];
  const currentPath = Astro2.url.pathname;
  const isActiveRoute = (item) => {
    const route = item.route;
    if (item.matchPrefix) {
      return currentPath.startsWith(route);
    } else {
      return currentPath == route;
    }
  };
  return renderTemplate`${maybeRenderHead()}<nav class="nav"> <ul> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute([
    "nav-item",
    isActiveRoute(item) ? "nav-item-active" : ""
  ].join(" "), "class")}${addAttribute(item.route, "href")}> ${item.name} </a> </li>`)} </ul> </nav>`;
}, "/Users/matthewhsu/co/personal-site/src/components/nav.astro", void 0);

const siteMetadata = {
  title: `Matthew Hsu`,
  author: {
    name: `Matthew Hsu`,
    summary: `Software Engineer @ Samsara.`
  },
  description: `Matthew Hsu`,
  siteUrl: `https://matthewhsu.me`,
  social: {
    twitter: ``,
    github: `mahsu`,
    linkedin: `matthew-hsu-82aa1078`
  },
  contact: {
    email: `hello@matthewhsu.me`
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://matthewhsu.me");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Seo;
  const { title, description } = Astro2.props;
  const metaDescription = description ?? siteMetadata.description;
  const fullTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const canonicalUrl = new URL(
    Astro2.url.pathname,
    siteMetadata.siteUrl
  ).toString();
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.title,
    url: siteMetadata.siteUrl,
    description: siteMetadata.description
  };
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMetadata.author.name,
    url: siteMetadata.siteUrl,
    description: siteMetadata.author.summary,
    sameAs: [
      `https://github.com/${siteMetadata.social.github}`,
      `https://www.linkedin.com/in/${siteMetadata.social.linkedin}`
    ]
  };
  const metaTags = [
    {
      name: "description",
      content: metaDescription
    },
    {
      property: "og:title",
      content: fullTitle
    },
    {
      property: "og:description",
      content: metaDescription
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: canonicalUrl
    },
    {
      name: "twitter:card",
      content: "summary"
    },
    {
      name: "twitter:title",
      content: fullTitle
    },
    {
      name: "twitter:description",
      content: metaDescription
    }
  ];
  return renderTemplate(_b || (_b = __template(["", "<title>", '</title><link rel="canonical"', '><link rel="alternate" type="application/rss+xml" title="Matthew Hsu - Tech and Travel Notes" href="/rss.xml"><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><script type="application/ld+json">', '</script><script type="application/ld+json">', "</script>", ""])), renderTemplate(_a || (_a = __template(['<script defer src="https://cloud.umami.is/script.js" data-website-id="0451f4a8-82de-4af2-b4c6-532e232139b6"></script>']))), fullTitle, addAttribute(canonicalUrl, "href"), addAttribute(Astro2.generator, "content"), unescapeHTML(JSON.stringify(websiteJsonLd)), unescapeHTML(JSON.stringify(personJsonLd)), metaTags.map((m) => renderTemplate`<meta${addAttribute(m.name, "name")}${addAttribute(m.property, "property")}${addAttribute(m.content, "content")}>`));
}, "/Users/matthewhsu/co/personal-site/src/components/seo.astro", void 0);

export { $$Seo as $, $$Nav as a, siteMetadata as s };
