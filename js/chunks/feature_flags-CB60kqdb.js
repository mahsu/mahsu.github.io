const FEATURE_FLAGS = {
  "blog-tagging": { dev: true, prod: false },
  "home-rss-icon": { dev: true, prod: false }
};
function isFeatureEnabled(flag) {
  return FEATURE_FLAGS[flag].prod;
}

export { isFeatureEnabled as i };
