const Config = require('getconfig');
const makeWebpackConfig = require('hjs-webpack');

module.exports = makeWebpackConfig({
  in: 'src/app.js',
  out: 'public',

  output: {
    publicPath: process.env.NODE_ENV === 'production' ? '/redux-messages/' : '/',
  },

  clearBeforeBuild: true,

  replace: {
    config: Config.clientConfig
  },

  html: function (context) {
    return context.defaultTemplate({
      publicPath: process.env.NODE_ENV === 'production' ? '/redux-messages/' : '/',
    })
  }
});
