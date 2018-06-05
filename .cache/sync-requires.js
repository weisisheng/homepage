// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/viktor/Work/homepage/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/viktor/Work/homepage/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/about.js")),
  "component---src-pages-careers-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/careers.js")),
  "component---src-pages-enhancv-button-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/enhancv-button.js")),
  "component---src-pages-index-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/index.js")),
  "component---src-pages-pricing-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/pricing.js")),
  "component---src-pages-pricingb-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/pricingb.js")),
  "component---src-pages-privacy-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/privacy.js")),
  "component---src-pages-successful-resumes-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/successful-resumes.js")),
  "component---src-pages-terms-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/terms.js"))
}

exports.json = {
  "layout-index.json": require("/home/viktor/Work/homepage/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/viktor/Work/homepage/.cache/json/dev-404-page.json"),
  "404.json": require("/home/viktor/Work/homepage/.cache/json/404.json"),
  "about.json": require("/home/viktor/Work/homepage/.cache/json/about.json"),
  "careers.json": require("/home/viktor/Work/homepage/.cache/json/careers.json"),
  "enhancv-button.json": require("/home/viktor/Work/homepage/.cache/json/enhancv-button.json"),
  "index.json": require("/home/viktor/Work/homepage/.cache/json/index.json"),
  "pricing.json": require("/home/viktor/Work/homepage/.cache/json/pricing.json"),
  "pricingb.json": require("/home/viktor/Work/homepage/.cache/json/pricingb.json"),
  "privacy.json": require("/home/viktor/Work/homepage/.cache/json/privacy.json"),
  "successful-resumes.json": require("/home/viktor/Work/homepage/.cache/json/successful-resumes.json"),
  "terms.json": require("/home/viktor/Work/homepage/.cache/json/terms.json"),
  "404-html.json": require("/home/viktor/Work/homepage/.cache/json/404-html.json")
}