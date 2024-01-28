import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[name]__[local]__[hash:base64:5]",
                  },
                },
              },
              {
                loader: "sass-loader",
                options: { implementation: require.resolve("sass") },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
