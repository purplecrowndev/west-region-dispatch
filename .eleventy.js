module.exports = function(eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("css");

  // Custom date filter that uses UTC to avoid timezone shifts
  eleventyConfig.addFilter("formatDate", function(date, format) {    
    // Use UTC methods to avoid timezone conversion
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    if (format === "%B %d, %Y") {
      const month = monthNames[date.getUTCMonth()];
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      return `${month} ${day}, ${year}`;
    }
    
    // Fallback to default formatting
    return date.toLocaleDateString();
  });

  // Configure collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").sort(function(a, b) {
      return b.date - a.date; // Sort by date, newest first
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    templateFormats: ["md", "liquid", "html"],
    pathPrefix: "/west-region-dispatch/"
  };
};
