export const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "/menu/:slug",
  // pattern: "/menu/:id",
  func: async ({ link, params, state, libraries }) => {
    // const { api } = libraries.source;
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/menus/v1/menus/${slug}`,
    });

    // Parse the JSON to get the object
    const menuData = await response.json();
    // Add the menu items to source.data
    const menu = state.source.data[link];
    // console.log(items.items);

    Object.assign(menu, {
      slug,
      items: menuData.items, // @ni.bonev figured this one out because the "items" property contains an array of items
      isMenu: true,
    });
  },
};


export const acfPageID = {
  pattern: "/acf/pages/:id",
  func: async ({ route, state, libraries, params }) => {
    // 1. Get ACF option page from REST API.
    const { id } = params;

    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/pages/${id}`,
    });
    const fields = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, {
      acf: fields.acf,
      isPage: true,
    });
  },
};