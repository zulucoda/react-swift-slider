module.exports = {
  babelrc: false,
  cacheDirectory: true,
  'plugins': [
    ['css-modules-transform', {
        "extractCss": "./dist/stylesheets/combined.css",
       'generateScopedName': '__[hash:base64:5]'
    }]
  ]
};
