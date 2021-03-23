const settings = {
  name: "khaning",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Blog for Frontity WordPress",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://khaning.test/",
          postTypes: [
            {
              type: "organic",
              endpoint: "organic",
              archive: "/organic_category",
              params: {
                per_page: 6,
              },
            },
            {
              type: "wp_template_part",
              endpoint: "template-parts",
            },
          ],
          taxonomies: [
            {
              taxonomy: "opdrachtgever",
              endpoint: "opdrachtgever",
              postTypeEndpoint: "portfolio",
              params: {
                per_page: 20,
                _embed: true,
              },
            },
          ],
        },
      },
    },
    {
      name: "@frontity/tiny-router",
      state: {
        router: {
          autoFetch: true,
        },
      },
    },
    "@frontity/html2react",
    "frontity-contact-form-7",
  ],
};

export default settings;
