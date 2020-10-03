module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "map",
    "png",
    "svg",
    "jpg",
    "gif",
    "ico",
    "otf",
    "html"
  ]);
  eleventyConfig.addPassthroughCopy("site/scripts");

  return {
    dir: {
      includes: "_includes",
      input: "site",
      output: "docs"
    }
  };
};
