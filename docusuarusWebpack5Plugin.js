const webpack = require('webpack');
module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack(config) {
      return {
        plugins: [
          new webpack.DefinePlugin({
            'process.env.DEPLOY_PLATFORM': JSON.stringify(process.env.DEPLOY_PLATFORM),
          }),
        ]
      }
      return config
    },
  };
};