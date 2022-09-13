const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConf = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const {dependencies} = require('../package.json')

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        './MarketingApp': "./src/bootstrap"
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

module.exports = merge(commonConf, devConfig)