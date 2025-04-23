
const explorerData = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: false,
        },
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Explorer.js",
              isFolder: false,
            },
          ],
        },
      ],
    },

    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

export default explorerData;