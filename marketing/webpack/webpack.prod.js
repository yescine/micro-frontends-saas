const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConf = require('./webpack.common')
const { dependencies } = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN
const prodConfig = {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        './MarketingApp': `./src/bootstrap`
      },
      shared: {
        ...dependencies
      }

    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}

module.exports = merge(commonConf, prodConfig)