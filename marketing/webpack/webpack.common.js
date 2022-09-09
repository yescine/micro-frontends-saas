module.exports = {
  module: {
    rules: [
      {
        test: "/\.m?js$/",
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/react-env", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          }
        }
      }
    ]
  }
}