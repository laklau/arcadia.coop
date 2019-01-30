// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const postcss_import = require('postcss-import');
const postcss_purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        // options.plugins.push(tailwindcss('./tailwind.js'));
        options.plugins.unshift(postcss_import, tailwindcss('./tailwind.js'));

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(postcss_purgecss);
        }

        return options;
      });
  },
};
