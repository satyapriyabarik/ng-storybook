import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgr()],
      resolve: {
        alias: {
          "@": path.resolve("./src"),
          "next/image": path.resolve("./.storybook/next-image-mock.tsx"),
          "next/link": path.resolve("./.storybook/next-link-mock.tsx"),
        },
      },
      css: {
        modules: {
          localsConvention: "camelCase",
        },
      },
    });
  },
};

export default config;
