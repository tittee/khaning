import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import {
  menuHandler,
  acfThemeOption,
  acfPageID,
  PostTypeOrganic,
  PostTypPost,
  PostOnHomepage,
  PageById,
  RelatedOrganic,
} from "./apis";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      primaryUrl: "nav-menus",
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      templates: [
        "2", //HOMEPAGE or FRONTPAGE
        "6", //ABOUTUS
        "8", //CONTACTUS
      ],
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        await Promise.all([
          actions.source.fetch("/menu/primary-menu/"),
          actions.source.fetch("/acf/options"),
          actions.source.fetch("/organic"), //HOMEPAGE or FRONTPAGE
          actions.source.fetch("/posts"), //HOMEPAGE or FRONTPAGE

          state.theme.templates.map((id) =>
            actions.source.fetch(`/pages/${id}`)
          ),
        ]);
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
    source: {
      handlers: [
        menuHandler,
        acfThemeOption,
        acfPageID,
        PostTypeOrganic,
        PostTypPost,
        PostOnHomepage,
        PageById,
        RelatedOrganic,
      ],
    },
  },
};

export default marsTheme;
