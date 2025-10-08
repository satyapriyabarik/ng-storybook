import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-essentials', // includes Docs
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, { plugins: [svgr()] });
  },
};


