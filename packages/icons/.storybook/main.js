const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  core: {
    builder: 'webpack5',
  },
  previewHead: (head) => `
  ${head}
    <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'>
    <style>
      html, body {
        font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
      }
    </style>
  `,
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));

    // add scss support
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // options: {
          //   additionalData: `
          //     @import './style';
          //   `,
          //   sassOptions: {
          //     includePaths: [path.join(__dirname, '../src/scss')],
          //   },
          // },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
