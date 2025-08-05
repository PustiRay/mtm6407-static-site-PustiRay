module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",        // Your source files
      includes: "_includes", // Your includes inside /src
      layouts: "_includes",  // Layouts also inside /src/_includes
      output: "_site"       // Default output folder
    }
  };
};
