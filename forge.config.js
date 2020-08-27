const path = require("path");

module.exports = {
  packagerConfig: {
    icon: path.join(__dirname, "assets", "icons", "mac", "icon.icns"),
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "ElectronStarter",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      config: {
        name: "ElectronStarter",
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        name: "ElectronStarter",
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        name: "ElectronStarter",
      },
    },
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/index.html",
              js: "./src/Windows/Splash/index.tsx",
              name: "splash_window",
            },
            {
              html: "./src/index.html",
              js: "./src/Windows/App/index.tsx",
              name: "main_window",
            },
          ],
        },
      },
    ],
  ],
};
