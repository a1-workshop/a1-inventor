const path = require("path");

const root = path.join(__dirname, "..");

function courseRel(inputPath) {
  return path.relative(root, path.resolve(inputPath)).replace(/\\/g, "/");
}

function permalinkFor(rel) {
  if (rel === "course/index.md") return "/";
  if (rel === "course/start-here.md") return "/start-here/";
  if (rel === "course/overview.md") return "/overview/";
  if (rel === "course/track-a/overview.md") return "/track-a/overview/";
  if (rel.startsWith("course/track-a/exercises/")) {
    return `/track-a/exercises/${path.basename(rel, ".md")}/`;
  }
  if (rel.startsWith("course/docs/")) {
    return `/docs/${path.basename(rel, ".md")}/`;
  }
  if (rel.startsWith("course/track-")) {
    return `/${rel.slice("course/".length).replace(/\.md$/, "")}/`;
  }
  if (rel.startsWith("course/")) {
    return `/${rel.slice("course/".length).replace(/\.md$/, "")}/`;
  }
  return;
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("site/**");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("CONTRIBUTING.md");
  eleventyConfig.ignores.add("LICENSE");
  eleventyConfig.ignores.add(".github/**");
  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.ignores.add("workflow/**");
  eleventyConfig.ignores.add("tmp/**");
  eleventyConfig.ignores.add("package.json");
  eleventyConfig.ignores.add("package-lock.json");
  eleventyConfig.ignores.add("course/**/templates/**");
  eleventyConfig.ignores.add("course/**/agents/**");
  eleventyConfig.ignores.add("course/README.md");
  eleventyConfig.ignores.add("course/track-b/**");
  eleventyConfig.ignores.add("course/track-c/**");

  eleventyConfig.addPassthroughCopy({
    "site/assets": "assets",
    "site/lab": "lab",
  });

  eleventyConfig.addCollection("course", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("./course/**/*.md")
      .sort((a, b) => a.inputPath.localeCompare(b.inputPath))
  );

  eleventyConfig.addGlobalData("eleventyComputed", {
    layout: (data) => data.layout || (data.page?.inputPath?.endsWith("course/index.md") ? "home.njk" : "page.njk"),
    permalink: (data) => {
      if (data.permalink) return data.permalink;
      const input = data.page?.inputPath;
      if (!input) return;
      return permalinkFor(courseRel(input));
    },
  });

  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")({
      html: true,
      linkify: true,
      typographer: true,
    })
  );

  const pathPrefix = "/a1-inventor/";

  eleventyConfig.addTransform("md-links", function (content) {
    if (!this.page?.outputPath?.endsWith(".html")) return content;
    const urlFilter = eleventyConfig.getFilter("url");
    return content.replace(
      /href="((?:\.\.\/)+|[.\/]*)([^"#]+)\.md(#[^"]*)?"/g,
      (match, prefix, target, hash) => {
        const fromDir = path.dirname(this.page.inputPath);
        const abs = path.resolve(fromDir, prefix + target + ".md");
        const rel = courseRel(abs);
        const permalink = permalinkFor(rel);
        if (!permalink) return match;
        return `href="${urlFilter(permalink)}${hash || ""}"`;
      }
    );
  });

  return {
    pathPrefix,
    dir: {
      input: ".",
      includes: "site/src/_includes",
      layouts: "site/src/_layouts",
      output: "site/_site",
      data: "site/src/_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
