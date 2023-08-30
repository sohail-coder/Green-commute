const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'theme': path.resolve(__dirname, "../src/theme/"),
      'components':path.resolve(__dirname,"../src/components/"),
      'assets':path.resolve(__dirname,"../src/assets/")
    };
    return config;
  },
};
