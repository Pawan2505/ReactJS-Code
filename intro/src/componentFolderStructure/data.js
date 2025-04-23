const explorerData = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "src",
      isFolder: true,
      items: [
        { name: "App.js", isFolder: false },
        { name: "index.js", isFolder: false },
      ],
    },
    {
      name: "public",
      isFolder: true,
      items: [{ name: "index.html", isFolder: false }],
    },
    { name: "package.json", isFolder: false },
  ],
};

export default explorerData;
