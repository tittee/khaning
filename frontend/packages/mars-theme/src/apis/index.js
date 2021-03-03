// export const menuHandler = {
//   // name: "menus",
//   name: "primary_navigation",
//   priority: 10,
//   pattern: "primary_navigation",
//   func: async ({ route, params, state, libraries }) => {
//     const { api } = libraries.source;

//     console.log("Route: " + route);

//     const { slug } = params;
//     console.log("Slug: " + slug);

//     // 1. fetch the data you want from the endpoint page
//     const response = await api.get({
//       // endpoint: "/wp-api-menus/v2/menus/2",
//       endpoint: `/wp-api-menus/v2/menu-locations/primary_navigation`,
//       params: {},
//     });

//     // 2. get an array with each item in json format
//     const items = await response.json();

//     console.log("iiiiiiiii:" + items);

//     // 3. add data to source
//     const currentPageData = state.source.data[route];

//     // Object.assign(currentPageData, {
//     Object.assign(state.source.data["primary_navigation"], {
//       slug,
//       items,
//       isMenu: true,
//     });
//   },
// };

export const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "/menu/:slug",
  // pattern: "/menu/:id",
  func: async ({ link, route, params, state, libraries }) => {
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
