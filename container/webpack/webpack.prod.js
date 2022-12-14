const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConf = require('./webpack.common')
const {dependencies} = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN
const prodConfig = {
  mode: "production",
  output:{
    filename:'[name].[contenthash].js',
    publicPath:"/container/latest/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      // filename: "remoteEntry.js",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`
      },
      shared: {
        ...dependencies
      }

    })
  ]
}

module.exports = merge(commonConf, prodConfig)