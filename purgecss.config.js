const Extractor = require('purgecss-custom-extractor');

module.exports = {
  whitelist: ['html', 'body', 'markdown'],
  content: [
    './src/components/**/*.vue',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
  ],
  extractors: [
    {
      extensions: ['vue', 'html'],
      extractor: Extractor.custom(/[a-zA-Z0-9-:\/]+/g),
    },
  ],
};
