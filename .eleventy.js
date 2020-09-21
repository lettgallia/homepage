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
    "otf"
  ]);
  eleventyConfig.addPassthroughCopy("site/scripts");
};
