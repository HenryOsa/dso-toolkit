module.exports = {
  staticDirs: [
    "../../packages/dso-toolkit/storybook-assets",
    { from: "../../packages/dso-toolkit", to: "/dso-toolkit" },
    { from: "../../packages/core/dist", to: "/core" },
    { from: "../../node_modules/iframe-resizer/js", to: "iframe-resizer" },
  ],
  features: {
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-implicit-postcss-loader
    postcss: false,
  },
  stories: ["../components/*/*.stories.ts"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="dso-toolkit/dist/dso.css">
    <script type="module" src="./core/dso-toolkit/dso-toolkit.esm.js"></script>
    <script src="iframe-resizer/iframeResizer.contentWindow.min.js"></script>
  `,
  previewBody: (body) =>
    !process.env.CI
      ? `
        ${body}
        <iframe title="Stencil Dev Server Connector ⚡" src="/~dev-server" style="display:block;width:0;height:0;border:0;visibility:hidden" aria-hidden="true"></iframe>
      `
      : body,
  webpackFinal: async (config, { configType }) => {
    // Remove annoying webpack build progress spamming the console. This only goes for build progress: everything else is still logged
    config.plugins = config.plugins.filter(({ constructor }) => constructor.name !== "ProgressPlugin");

    return config;
  },
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
};
