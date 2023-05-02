const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

const execa = require("execa");
const findBrowser = () => {
  // the path is hard-coded for simplicity
  const browserPath =
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

  return execa(browserPath, ["--version"]).then((result) => {
    // STDOUT will be like "Brave Browser 77.0.69.135"
    const [, version] = /Brave Browser (\d+\.\d+\.\d+\.\d+)/.exec(
      result.stdout
    );
    const majorVersion = parseInt(version.split(".")[0]);

    return {
      name: "Brave",
      channel: "stable",
      family: "chromium",
      displayName: "Brave",
      version,
      path: browserPath,
      majorVersion,
    };
  });
};

module.exports = defineConfig({
  e2e: {
    projectId: "yvsawm",
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
      return findBrowser().then((browser) => {
        return {
          browsers: config.browsers.concat(browser),
        };
      });
      // implement node event listeners here
    },
  },
});
